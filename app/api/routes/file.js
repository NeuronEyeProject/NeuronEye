const router = require('express').Router();
const files = require("../models/fileSchema");
const request = require('request');
const chalk = require('chalk');
const signatures = require('../data/signatures.json');
const brain = require('brain.js');

////////////////////////////
//                        //
//          ML            //
//                        //
////////////////////////////

// Not Working!

router.get('/scan', (req, res, next) => {

   
      files.find({ md5: `${fileObject}`})
        .exec()
        .then(ifFoundID => {
          if (ifFoundID) {
            res.status(200).json(ifFoundID);
          } else {
              res.status(404).json({ message: "No data found from the provided FILE" });
          }
        })
        .catch(err => {
          res.status(500).json({ error: err });
    });
   
  });
  

