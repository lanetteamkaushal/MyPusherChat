var express = require('express');
// var Pusher = require('pusher');
var path = require('path');
var favicon = require('static-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var routes = require('./routes/index');
var users = require('./routes/users');

// var pusher = new Pusher({
//   appId: '218860',
//   key: '48de0cfc2a99f7af4e12',
//   secret: 'c44f6285a0885c0d8c4b',
//   encrypted: true
// });

// pusher.trigger('test_channel', 'my_event', {
//   "message": "hello world"
// });

var app = express();
var router = express.Router();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(favicon());
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', routes);
app.use('/users', users);

// catch 404 and forwarding to error handler
app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

/// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
    app.use(function(err, req, res, next) {
        res.status(err.status || 500);
        res.render('error', {
            message: err.message,
            error: err
        });
    });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
        message: err.message,
        error: {}
    });
});

// router.post('/messages', function(req, res){
//   var message = req.body;
//   pusher.trigger('messages', 'new_message', message);
//   res.json({success: 200});
// });

app.listen(8000);
module.exports = app;
