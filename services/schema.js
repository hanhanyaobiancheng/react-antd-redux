var mongoose = require('mongoose');
var UserSchema = new mongoose.Schema({ //定义数据模型
    name: String,
    age: Number,
    sex: String
});
mongoose.model('User', UserSchema);//将该Schema发布为Model
