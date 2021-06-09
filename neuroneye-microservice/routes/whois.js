const request = require('request');
const chalk = require('chalk');
const url = require('url');
const dns = require('dns')

var express = require('express');
var router = express.Router();

//http://localhost:3000/api/v1/domain/domaininfo/whois?domain=<domain>

////////////////////////////
//                        //
//     domain whois       //
//                        //
////////////////////////////


router.get('/domaininfo/whois', (req, res, next) => {

  const reqDomain = req.query.domain
  
  function getWhois() {
  
   if (!reqDomain) {
      res.status(400).json({ error: "No query params found" });
   
      
    } else if (reqDomain) {
        
        dns.resolveAny(reqDomain, (err, ret) => {
            res.status(200).json(ret);
        })

    }
  }
  
  try {
    getWhois()
  } catch(err) {
   res.status(500).json({ error: err.message });
  }
  
  });

  module.exports = router; 