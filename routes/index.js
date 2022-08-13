var express = require('express')
var router = express.Router()
var indexController = require('../controllers/index.js')

/* GET home page. */

router.get('/', indexController.home)

router.get('/headshots', indexController.headshots)





module.exports = router
