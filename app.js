var createError = require('http-errors');

var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var port = (process.env.PORT || 6002);

//var indexRouter = require('./routes/index');
//var usersRouter = require('./routes/users');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

//app.use('/', indexRouter);
// initial get function
app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/index.html'))
});
//app.use('/users', usersRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
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

module.exports = app;

//start server on the specified port
app.listen(port, '0.0.0.0', function() {
    //print message
    console.log("server starting on port", port)
});

/*
ibmcloud api https://api.ng.bluemix.net
ibmcloud login
ibmcloud target -r "eu-gb" -o 12AngelS010@mysandstorm.org -s dev
ibmcloud app push UnoCardGame
 */