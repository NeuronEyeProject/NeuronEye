// MODULES
const helmet = require('helmet');
const express = require('express');
const logger = require('morgan');
const dotenv = require('dotenv');
const mongoose = require("mongoose");
const rateLimit = require("express-rate-limit");
const cors = require('cors');

// ROUTES
const indexRouter = require('./routes/index');
const searchRoute = require('./routes/search');
const expanderRoute = require('./routes/expander');

// EXPRESS APP
const app = express();

// ENV
dotenv.config();
const PORT = process.env.PORT
const DB = process.env.DB_CONNECT


// DATABASE CONNECTION
mongoose.connect(DB,
  { useNewUrlParser: true, useUnifiedTopology: true},
() => console.log('Connected to Database!'),
);


// RATE LIMIT | 1s = 2req
const rLimit = rateLimit({ 
  windowMs: 1000,
  max: 2 
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
app.use(cors(corsOptions));
app.use(logger('dev'));
app.use(express.json());
app.use(rLimit);

// SECURITY MIDDLEWARES
app.use(helmet());
app.disable('x-powered-by');

// ROUTES
app.use('/api/', indexRouter);
app.use('/api/v1/url', searchRoute);
app.use('/api/v1/url', expanderRoute);


app.listen(PORT, () => {
  console.log(chalk.blue(`Express Server | Active on * http://localhost:${port} *`))
})
