var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Express' });
});

router.get('/ueditor', function(req, res) {
  res.render('ueditor', { title: 'Express' });
});

module.exports = router;
