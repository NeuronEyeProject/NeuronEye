const URLList = require("../models/urlSchema");
const request = require('request');
const chalk = require('chalk');
const url = require('url');

var express = require('express');
var router = express.Router();

//http://localhost:3000/api/v1/url/expander?url=<url>

////////////////////////////
//                        //
//     URL EXPAND         //
//                        //
////////////////////////////

/* <-- Url Expander --> */
router.get('/expander', (req, res, next) => {

    const reqUrl = req.query.url
  
  function expander() {
  
    if(reqUrl) {
    
      request(
        { uri: reqUrl, followRedirect: false, },
        function(error, resUrl) {
          if (error) {
            res.status(500).json({ error: error });
          }
          res.status(200).json({ url: resUrl.headers.location || uri});
        }
      )
    
    } else if (!reqUrl) {
      res.status(400).json({ error: "No query params found" });
    }
  
  }
  
  try {
   expander()
  } catch(errore) {
  
  }
  
  });

  module.exports = router;