const URLList = require("../models/urlSchema");
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

/* <-- URL by domain --> */
router.get('/scan', async (req, res, next) => {

  const reqUrl = req.query.url

  async function databaseSearch () {

    for (var i in shortprov){
      if (reqUrl.toLowerCase().includes(shortprov[i].toLowerCase())) foundshort = true;
  }
  if(foundshort = true){ 
    const api_url = `http://localhost:3000/api/v1/url/expander?url=${reqUrl}`
    const fetch_res = await fetch(api_url)
    const json_res = await fetch_res.json()

    let endsDomain = json_res.domain /// end data
    let endURL = json_res.url /// end data
   
  }

  const domainObject = endsDomain

  URLList.find({ domain: `${domainObject}`})
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
  });
  }

  databaseSearch()




});



module.exports = router;