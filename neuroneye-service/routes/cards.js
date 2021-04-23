var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  
    let cardRes = {
      "handsetCards": [
         { imageName: 'About this Project', title: '1cooll webapp', cols: 2, rows: 1 },
         { imageName: 'Website', title: 'nice web', cols: 2, rows: 1 },
         { imageName: 'URL Scanner', title: 'wow scanner', cols: 2, rows: 1 },
       ],
       "webCards": [
        { imageName: 'About this Project', title: '1cooll webapp', cols: 2, rows: 1 },
        { imageName: 'Website', title: 'nice web', cols: 2, rows: 1 },
        { imageName: 'URL Scanner', title: 'wow scanner', cols: 2, rows: 1 },
      ]
    };
  
     res.json(cardRes);

});

module.exports = router;
