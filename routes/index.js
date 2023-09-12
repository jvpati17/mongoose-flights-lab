var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Home' });
});

/*router.get('/flights', function(req, res, next) {
  res.render('flights', { title: 'All Flights' });
})*/

module.exports = router;
