var express = require('express');
var router = express.Router();
const flightsCtrl = require('../controllers/flights');
/* GET users listing. */

/*router.get('/new', function (req, res, next){
  res.send('oh hey');
}) */ 
router.get('/new', flightsCtrl.new);
router.get('/', flightsCtrl.index);
router.post('/', flightsCtrl.create);
router.get('/:id', flightsCtrl.show);




module.exports = router;
