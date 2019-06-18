const express = require('express');
const path = require('path');
const fs =require('fs');
const upload = express.Router();
upload.use((req, res, next) => {
    console.log('upload');
    next()
});
upload.get('/', (req, res) => {
    // res.send('hello,world');
    // res.sendFile()
    console.log(path.resolve('/www',__dirname,'index.html'));
    res.sendFile(path.resolve('/www',__dirname,'index.html'))
});
upload.post('/file_upload', (req, res) => {
    console.log(req.files[0]);
    const  des_file = path.resolve('/www/',__dirname,'image/'  + req.files[0].originalname);
    console.log(des_file);
    fs.readFile(req.files[0].path, (err, data) => {
        fs.writeFile(des_file, data, (err) => {
            if(err){
                console.log(err)
            }else {
                 response = {
                    message:"文件上传成功！",
                    filename:req.files[0].originalname
                };
            }
            console.log(response);
            res.send(JSON.stringify(response));
        })
    })
});

module.exports = upload;
