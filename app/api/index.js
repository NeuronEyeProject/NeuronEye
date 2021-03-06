const express = require('express');
const app = express();
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const chalk = require('chalk');


/* <-- env settings --> */
dotenv.config();

const PORT = process.env.PORT
const DB = process.env.DB_CONNECT

/* <-- DB Connection --> */
mongoose.connect(DB,
   { useNewUrlParser: true, useUnifiedTopology: true},
() => console.log('Connected to DB!'),
);
  


/* <-- Import Routes --> */
const urlRoute = require('./routes/url');
const fileRoute = require('./routes/file');


/* <-- Middleware --> */
app.use(express.json());

/* <-- Routes Middleware --> */
app.use('/api/v1/url', urlRoute);
app.use('/api/v1/file', fileRoute);

/* <-- Err Routes Handler --> */
app.get('*', (req, res) => {
  res.status(404).send({
    status: 404,
    error: "Route Not Found"
    })
});


/* <-- Server Start --> */
app.listen(PORT, () => console.log(`Server is runnning on PORT = ${PORT}.`))