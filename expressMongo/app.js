const express = require('express');
const app = express();

const bodyParser =  require('body-parser');
const multer =  require('multer');

const path = require('path');
const fs = require('fs');

// jwt
const expressJwt = require("express-jwt");
const jwt = require("jsonwebtoken");

const router = require('./routes/router');
const upload = require('./www/upload');
//用户模块
const users  =require('./routes/users');
const Users = require('./modules/users'); // 导入模型数据模块

// 连接数据库
const mongoose = require('mongoose');
// 连接fandepeng 数据库
mongoose.connect('mongodb://localhost/fandepeng',{ useNewUrlParser: true,useCreateIndex: true});
/*db.on('error', console.error.bind(console, 'mongodb fandepeng connection error:'));
db.once('open', function() {
    console.log('mongodb fandepeng connected!');
});*/

// jwt中间件
app.use(expressJwt({
    secret: "secret"//加密密钥，可换
}).unless({
    path: ["/login", "/video/video.mp4", "/signup", "/www/","/www/file_upload","/images/bg.png"]//添加不需要token的接口
}));
// 未携带token请求接口会出错，触发这个
app.use(function(err, req, res, next) {
    if (err.name === "UnauthorizedError") {
        res.status(401).send(err);
    }
});

app.use(express.static('public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(multer({ dest: '/tmp/'}).array('image'));

app.get('/', (req, res) => res.send('Hello World!'));

//登录

app.use('/routes',router);
//上传
app.use('/www',upload);
//用户模块
app.use('/users',users);

app.get('/video/:name', function (req, res, next) {
    let options = {
        root: __dirname + '/public/',
        dotfiles: 'deny',
        headers: {
            'x-timestamp': Date.now(),
            'x-sent': true
        }
    };

    let fileName = req.params.name;
    res.sendFile(fileName, options, function (err) {
        if (err) {
            next(err);
        } else {
            console.log('Send:', fileName);
        }
    });
    /*console.log(path.resolve('/public/video','video.mp4'));
    res.sendFile(path.resolve('/public/video','video.mp4'))*/
});

//登录
app.post('/login', function (req, res, next) {
    let username = req.body.user.username;
    let password = req.body.user.password;
    if (!username||!password) {
        return res.status(400).send("输入username及password");
    }
    Users.findOne({name: username}, function (err, user) {
        if(err){
            res.send(err)
        }
        if(!user) {
            res.send('用户名和账号不存在')
        }
        user.comparePassword(password, function (err, isMatch) {
            if (err){
                res.send(err)
            }
            if (isMatch) {
                // 加密，获取token
                let authToken = jwt.sign({
                    username: username,
                    password: password
                }, "secret",{
                    expiresIn : 60*60*24// 授权时效24小时
                });
                // 发送给前端，存在浏览器里
                res.status(200).json({
                    token: authToken,
                    success: true,
                    message: 'success',
                });
            } else {
                // return res.redirect('/lgoin');
                res.send('登录失败')
            }
        });
    });
});
//注册
app.post('/signup', function (req, res, next) {
    let _user = req.body.user;
    let username = _user.username;
    let password = _user.password;


    if (!username||!password) {
        return res.status(400).send("输入username及password");
    }

    Users.findOne({name: username}, function (err, user) {
        if(err){
            res.send(err)
        }
        if(user) {
            res.send('用户名存在')
        }
        if(!user) {
            // res.send('用户名和账号不存在');
            let user = new Users({name:username, password:password});
            user.save(function (err, user) {
                if(err){
                  res.send(err);
                }
                res.status(200).json({
                    success: true,
                    message: '注册账号成功',
                });
            });
        }
    });
});

// 退出
app.post('/logout', function (req, res, next) {
    // req.cookies = null;
    res.clearCookie('auth._token.local');
    res.status(200).json({status: true})

});

app.listen(5199, () => console.log('Example app listening on port 5199!'));
