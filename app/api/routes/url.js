const router = require('express').Router();
const links = require("../models/urlSchema");
const request = require('request');
const chalk = require('chalk');



////////////////////////////
//                        //
//     URL Check DB       //
//                        //
////////////////////////////

/* <-- Links by domain --> */
router.get('/domain/:domain', checkAuth,  (req, res, next) => {
    const name = String(req.params.domain);
    links.find({ domain: `${name}`})
      .exec()
      .then(ifFoundID => {
        if (ifFoundID) {
          res.status(200).json(ifFoundID);
        } else {
            res.status(404).json({ message: "No Link found from the provided Domain" });
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
router.get('/expander', checkAuth,  (req, res, next) => {

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