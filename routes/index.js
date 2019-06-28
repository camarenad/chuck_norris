var express = require('express');
var router = express.Router();
var jokeCtrl = require('../controllers/joke')

/* GET home page. */


router.get('/',jokeCtrl.renderPage)
router.post('/', jokeCtrl.getJoke)


module.exports = router;
