var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Sincronizar la hora del frontend con servidor NTP' });
});

module.exports = router;
