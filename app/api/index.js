/* <-- Modules --> */
const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const chalk = require('chalk');
const cors = require("cors");
const morgan = require('morgan');
const fs = require('fs');

/* <-- App --> */
const app = express();

/* <-- env settings --> */
dotenv.config();

const PORT = process.env.PORT
const DB = process.env.DB_CONNECT
const localhost = process.env.localhost
const origin = process.env.origin

/* <-- config settings --> */
import { corsOpt } from './config/config'
import { morganOpt } from './config/config'


/* <-- DB Connection --> */
mongoose.connect(DB,
   { useNewUrlParser: true, useUnifiedTopology: true},
() => console.log('Connected to DB!'),
);

/* <-- Import Routes --> */
const searchRoute = require('./routes/search');
const expanderRoute = require('./routes/expander')

/* <-- Middleware --> */
app.use(express.json()).then(chalk.blue(console.log('JSON Active')));
app.use(cors(corsOpt)).then(chalk.blue(console.log('CORS Option Active')));
app.use(morgan(morganOpt.setting, () => console.log('Morgan Active')));

/* <-- Routes --> */
app.use('/api/v1/url', searchRoute);
app.use('/api/v1/url', expanderRoute);

/* <-- Err Routes Handler --> */
app.get('*', (req, res) => {
  res.status(404).send({
    status: 404,
    error: "Route Not Found"
    })
});


/* <-- Server Start --> */
app.listen(PORT, () => console.log(`Server is runnning on PORT = ${PORT}.`));

