const express = require('express');
// const mongoose = require('mongoose'); //导入mongoose模块

const Users = require('../modules/users'); // 导入模型数据模块
const jwt = require("jsonwebtoken");

const router = express.Router();

router.get('/',(req,res,next)=>{
    res.send('respond with a resource')
});
// 查询某用户信息
router.get('/user',(req,res,next)=>{

    //用 加密密钥 解密，获得信息，包括生成及失效日期（如果设置了失效时间）
    jwt.verify(req.header('Authorization').split(' ')[1], "secret", function(err, decoded) {
        if (err) {
            res.status(200).json(err)
        } else {
            res.status(200).json({user:decoded.username});
        }
    });
    /*let decoded = jwt.decode(req.header('Authorization').split(' ')[1], 'secret');
    res.status(200).json({user:decoded.username});*/
});

//查询所有用户数据
router.get('/users',(req,res,next)=>{
    let token = req.body.token;


    Users.fetch((err,users)=>{
        if(err){
            console.log(err)
        }else {
            console.log(users);
            // res.render('users',{title:'用户列表',users:users})  // 这里也可以json的格式直接返回数据res.json({data: users});
            res.json({data: users});
        }
    })
});
module.exports = router;
