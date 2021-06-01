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
//     URL Check DB       //
//                        //
////////////////////////////



 /*  <-- Search Domain -->   */
router.get('/:domain', async (req, res, next) => {

  let date_ob = new Date();

  const reqDomain = req.params.domain

  console.log(reqDomain)

    domains.findOne({ domain: reqDomain })
    .exec()
    .then(doc => {
      if (doc) {
        res.status(200).json({ message: "domain found", status: true, HTTP_CODE: 200, domain: reqDomain, date: date_ob} );
      } else {
          res.status(404).json({ message: "domain not in database", status: false, HTTP_CODE: 404, domain: reqDomain, date: date_ob});
      }
    }).catch(err => {
      res.status(500).json({ error: err });
});

});



module.exports = router;