const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const SALT_WORK_FSCTOR = 10; // 计算强度,越大破解越困难

//申明一个mongoons对象
const UsersSchema = new mongoose.Schema({
    name: {
        unique: true,
        type: String
    },
    password: String,
    meta: {
        createAt: {
            type: Date,
            default: Date.now()
        },
        updateAt: {
            type: Date,
            default: Date.now()
        }
    }
}, {collection: 'user'});

//每次存入数据时都进行判断,时间更新操作
UsersSchema.pre('save', function(next){
    let user = this;
    if (this.isNew) {
        this.meta.createAt = this.meta.updatedAt = Date.now();
    } else {
        this.meta.updatedAt = Date.now();
    }
    //密码 加盐
    bcrypt.genSalt(SALT_WORK_FSCTOR, function (err, salt) {
        if (err) {
            return next(err);
        }
        bcrypt.hash(user.password, salt, function (err, hash) {
            if (err) {
                return next(err);
            }
            user.password = hash;
            next();
        });
    });
});

//查询的静态方法
UsersSchema.statics = {
    fetch(cb) { //查询所有数据
        return this
            .find({})
            .sort('meta.updateAt') //排序
            .exec(cb) //回调
    },
    findById(id, cb) {
        return this
            .findOne({_id: id})
            .exec(cb)
    },
    findByName(name, cb) {
        return this.findByName({name: name}).exec(cb)
    }
};
UsersSchema.methods = {
    comparePassword: function (_password, cb) {
        bcrypt.compare(_password, this.password, function (err, isMatch) {
            if (err) {
                cb(err);
            }
            cb(null, isMatch);
        })
    }
};
//暴露出去的方法
module.exports = UsersSchema;
