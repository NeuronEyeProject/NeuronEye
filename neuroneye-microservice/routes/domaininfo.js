const request = require('request');
const chalk = require('chalk');
const url = require('url');

var express = require('express');
var router = express.Router();

//http://localhost:3000/api/v1/domain/domaininfo/search?domain=<domain>

////////////////////////////
//                        //
//     domain whois       //
//                        //
////////////////////////////

/* <-- Url Expander --> */
router.get('/domaininfo/search', (req, res, next) => {

    const reqDomain = req.query.domain
  
  function getdomainInfo() {
  
   if (!reqDomain) {
      res.status(400).json({ error: "No query params found" });
      return
    }
    if(reqDomain) {
        
    }
  

  }
  
  try {
    getdomainInfo()
  } catch(errore) {
  
  }
  
  });

  module.exports = router; 