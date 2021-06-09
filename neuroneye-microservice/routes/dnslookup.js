const request = require('request');
const chalk = require('chalk');
const url = require('url');
const dns = require('dns')

var express = require('express');
var router = express.Router();

//http://localhost:3000/api/v1/domain/dns/lookup?domain=<domain>

////////////////////////////
//                        //
//       dns lookup       //
//                        //
////////////////////////////


router.get('/dns/lookup', (req, res, next) => {

  const reqDomain = req.query.domain
  
  function getdnsLookup() {
  
   if (!reqDomain) {
      res.status(400).json({ error: "No query params found" });
      return;
    }
    if(reqDomain) {
        dns.lookup(reqDomain, (err, address, family) => {

            res.status(200).json({ address: address, family: family });
          });
    }
  }
  
  try {
    getdnsLookup()
  } catch(err) {
   res.status(500).json({ error: err.message });
  }
  
  });

  module.exports = router; 