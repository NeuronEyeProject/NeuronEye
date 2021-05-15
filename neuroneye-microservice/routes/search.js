const URLList = require("../model/urlSchema");
const request = require('request');
const chalk = require('chalk');
const url = require('url');
const fetch = require("node-fetch");

var express = require('express');
var router = express.Router();

let foundshort = false
let shortprov = ["bit.ly", "goo.gl", "tinyurl.com", "ow.ly", "is.gd", "buff.ly", "bit.do", "auf.ly", "mcaf.ee", "su.pr", "bl.ink", "tiny.one", "moourl.comm"];


////////////////////////////
//                        //
//     URL Check DB       //
//                        //
////////////////////////////

/* <--  domain --> */
router.get('/search/:domain', async (req, res, next) => {

  const reqDomain = req.params.domain

  console.log(reqDomain)

    URLList.find({ domain: `${reqDomain}`})
    .exec()
    .then(ifFound => {
      if (ifFound) {
        res.status(200).json(ifFound, { found: true } );
      } else {
          res.status(404).json({ message: "No Link found from the provided Domain", found: false });
      }
    })
    .catch(err => {
      res.status(500).json({ error: err });
      console.log(chalk.red(err))
});

});



module.exports = router;