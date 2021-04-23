const URLList = require("../models/urlSchema");
const request = require('request');
const chalk = require('chalk');
const url = require('url');

var express = require('express');
var router = express.Router();


////////////////////////////
//                        //
//     URL Check DB       //
//                        //
////////////////////////////

/* <-- URL by domain --> */
router.get('/scan', (req, res, next) => {

  const reqUrl = req.query.url

  let urlObject = reqUrl.parse(address, true);

  const domainObject = urlObject.hostname

    URLList.find({ domain: `${domainObject}`})
      .exec()
      .then(ifFoundID => {
        if (ifFoundID) {
          res.status(200).json(ifFoundID, { found: true } );
        } else {
            res.status(404).json({ message: "No Link found from the provided Domain", found: false });
        }
      })
      .catch(err => {
        res.status(500).json({ error: err });
  });
});



module.exports = router;