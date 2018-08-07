var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* POST*/
router.post('/test', function(req, res, next) {
  // res.render('index', { title: 'Express' });
  res.status(200).send({message: 'connecting S3 CORS enabled'});
});

module.exports = router;
