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
const whoisRoute = require('./routes/whois');
const dnsLookupRoute = require('./routes/dnslookup');



// EXPRESS APP
const app = express();



// RATE LIMIT | 1s = 15req
const rLimit = rateLimit({ 
  windowMs: 1000,
  max: 15 
});


// CORS OPTIONS
app.use(function (req, res, next) {

  var allowedDomains = ['https://neuroneye.net/expander','https://neuroneye.net/domaintools', 'https://neuroneye.net/' ];
  var origin = req.headers.origin;
  if(allowedDomains.indexOf(origin) > -1){
    res.setHeader('Access-Control-Allow-Origin', origin);
  }

  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type, Accept');
  res.setHeader('Access-Control-Allow-Credentials', true);

  next();
})

// MIDDLEWARES
app.use(logger('dev'));
app.use(express.json());
app.use(rLimit);

// SECURITY MIDDLEWARES
app.use(helmet());


// ROUTES
app.use('/api/', indexRouter);
app.use('/api/v1/domain/', expanderRoute);
app.use('/api/v1/domain/', whoisRoute);
app.use('/api/v1/domain/', dnsLookupRoute);



app.listen(3000, () => {
  console.log(chalk.blue(`Express Server | Active on * http://localhost:3000 *`))
})
