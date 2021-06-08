// MODULES
const helmet = require('helmet');
const express = require('express');
const logger = require('morgan');
const mongoose = require("mongoose");
const rateLimit = require("express-rate-limit");
const cors = require('cors');
const chalk = require('chalk');


// ROUTES
const indexRouter = require('./routes/index');
const expanderRoute = require('./routes/expander');

// EXPRESS APP
const app = express();



// RATE LIMIT | 1s = 15req
const rLimit = rateLimit({ 
  windowMs: 1000,
  max: 10 
});


// CORS OPTIONS
var corsOptions = {
  origin: 'http://localhost:4200',
  methods: ['GET'],
  allowedHeaders: ['Origin','X-Requested-With','contentType','Content-Type','Accept','Authorization'],
  credentials: true,
  optionsSuccessStatus: 200
}

// MIDDLEWARES
app.use(logger('dev'));
app.use(express.json());
app.use(rLimit);

// SECURITY MIDDLEWARES
app.use(helmet());
app.use(cors(corsOptions));

// ROUTES
app.use('/api/', indexRouter);
app.use('/api/v1/domain/', expanderRoute);


app.listen(3000, () => {
  console.log(chalk.blue(`Express Server | Active on * http://localhost:3000 *`))
})
