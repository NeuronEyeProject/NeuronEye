const router = require('express').Router();
const URLList = require("../models/urlSchema");
const request = require('request');
const chalk = require('chalk');
const url = require('url');


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