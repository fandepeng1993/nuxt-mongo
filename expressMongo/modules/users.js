const mongoose = require('mongoose');
const UsersSchema = require('../schemas/users'); //拿到导出的数据集模块
const Users = mongoose.model('user',UsersSchema,'user'); //编译生成Movie模型

module.exports = Users;
