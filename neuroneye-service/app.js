var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var dotenv = require('dotenv');
var mongoose = require("mongoose");

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var searchRoute = require('./routes/search');
var expanderRoute = require('./routes/expander');
var cardsRoute = require('./routes/cards');

var app = express();

// env
dotenv.config();
const PORT = process.env.PORT
const DB = process.env.DB_CONNECT

/*
// DB Connect
mongoose.connect(DB,
  { useNewUrlParser: true, useUnifiedTopology: true},
() => console.log('Connected to DB!'),
);
*/

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/api/', indexRouter);
app.use('/api/users', usersRouter);
app.use('/api/v1/url', searchRoute);
app.use('/api/v1/url', expanderRoute);
app.use('/api/web/cards', cardsRoute);

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
