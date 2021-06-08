/*

const domains = require("../model/domainSchema");
const request = require('request');
const chalk = require('chalk');
const url = require('url');
const fetch = require("node-fetch");
const mongoose = require("mongoose")


var express = require('express');
var router = express.Router();



////////////////////////////
//                        //
//     URL Check          //
//                        //
////////////////////////////



router.get('/search/:domain', async  (req, res, next) => {

  const input = String(req.params.domain);

  domains.find({ domain: `${input}`})
    .exec()
    .then(ifFound => {
      if (ifFound) {
        res.status(200).json({ message: "domain found", status: true, HTTP_CODE: 200, domain: reqDomain});
      } else {
          res.status(404).json({ message: "domain not in database", status: false, HTTP_CODE: 404, domain: reqDomain });
      }
    })
});















module.exports = router;

*/