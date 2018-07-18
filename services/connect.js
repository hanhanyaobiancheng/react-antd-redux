var mongoose = require("mongoose");   //需要提前使用npm安装mongodb

var url = "mongodb://192.168.99.101:32773";   //mongo是我的数据库
var db = mongoose.connect(url);                     //连接数据库

mongoose.connection.on("error", function (error) {
    console.log("数据库连接失败：" + error);
});
mongoose.connection.on("open", function () {
    console.log("数据库连接成功321");
});
