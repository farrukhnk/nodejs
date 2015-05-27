var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/', function(req, res) {
  res.send(req.body.name)
});
router.get('/hello', function(req, res) {
  res.send("Hello World")
});
router.post('/hello', function(req, res) {
  res.json(req.body);
});
module.exports = router;
