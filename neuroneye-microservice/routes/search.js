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

  const reqDomain = String(req.params.domain)

  console.log(reqDomain)

    domains.find({ domain: reqDomain })
    .exec()
    .then(doc => {
      console.log(doc)
      if (doc) {
        res.status(200).json({ message: "domain found", status: true, HTTP_CODE: 200, domain: reqDomain, date: date_ob} );
      } else {
          res.status(404).json({ message: "domain not in database", status: false, HTTP_CODE: 404, domain: reqDomain, date: date_ob});
      }
    }).catch(err => {
      res.status(500).json({ error: err });
});

});


/* Add Domain 
router.post("/add", (req, res, next) => {
  const domainq = new domains({
    _id: new mongoose.Types.ObjectId(),
    domain: req.body.domain,
  });
  domainq
    .save()
    .then(result => {
      console.log(result);
      res.status(201).json({
        message: "Handling POST requests to /products",
        createdProduct: result
      });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({
        error: err
      });
    });
});
*/

module.exports = router;