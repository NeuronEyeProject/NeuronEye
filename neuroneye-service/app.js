const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const dotenv = require('dotenv');
const mongoose = require("mongoose");
const rateLimit = require("express-rate-limit");

const indexRouter = require('./routes/index');
const searchRoute = require('./routes/search');
const expanderRoute = require('./routes/expander');

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

// rate limit
const rLimit = rateLimit({ // 1s = 2req
  windowMs: 1000,
  max: 2 
});

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(rLimit);

app.use('/api/', indexRouter);
app.use('/api/v1/url', searchRoute);
app.use('/api/v1/url', expanderRoute);

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
