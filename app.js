var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var bodyParser = require('body-parser');

var index = require('./services/routes/index');
var users = require('./services/routes/users');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, '/client/static/views'));
app.set('view engine', 'ejs');
app.engine('html' , ejs.renderFile);

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use('/',express.static(path.join(__dirname, '/src')));
// app.use('/fe',express.static(path.join(__dirname, '/client/static/fe')));
// app.use('/be',express.static(path.join(__dirname, '/client/static/be')));
// app.use(require('express-formidable')({
//   uploadDir: path.join(__dirname,'/client/static/be/img'), //上传目录
//   keepExtensions: true// 保留后缀
// }))

// app.get('/',function(req,res){
//     res.render('index.html');
// });
app.use('/user',users);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// error handler
app.use(function(err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.render('error');

});

//启动服务器
var server = app.listen(3000, function(){
    var host = server.address().address;
    var port = server.address().port;
    console.log('Listening at http://%s:%s', host, port);
});

module.exports = app;
