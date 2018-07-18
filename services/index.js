var mongoose = require('mongoose');
require('./connect.js');
require('./schema.js');
var User = mongoose.model('User');  //User为model name
mongoose.Promise = global.Promise;  //为了避免警告的出现，因为mongoose的默认promise已经弃用了

var user = new User({
    name: 'douqing',
    age:18,
    sex:'女'
});

user.save(function (err) {
    console.log('save status:', err ? 'failed' : 'success');
});
