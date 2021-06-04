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




 /*  <-- Search Domain -->   */
 router.get('/:domain', async (req, res, next) => {

  const reqDomain = req.params.domain

  console.log(reqDomain)

    domains.find({ domain: reqDomain })
    .exec()
    .then(doc => {
      if (doc) {
        res.status(200).json({ message: "domain found", status: true, HTTP_CODE: 200, domain: reqDomain});
      } else {
          res.status(404).json({ message: "domain not in database", status: false, HTTP_CODE: 404, domain: reqDomain });
      }
    })

});



/*
router.get('/:domain', (request, response) => {
  const domainName = String(request.params.domain);
  const getDomain = domains.find((domain) => domain.name === domainName);

  if (!getDomain) {
    response.status(404).send({ message: "domain not found" });
  } else {
    response.status(200).send({ message: "domain found" });
  }
});
*/







module.exports = router;