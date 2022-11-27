var express = require('express')
var router = express.Router()
var indexController = require('../controllers/index')

/* GET home page test.  */
router.get('/', function (req, res, next) {
    res.render('home', { title: 'Express' })
})


/* GET home page. */

// router.get('/', indexController.home)

// router.get('/headshots', indexController.headshots)

// /* resume view */
// router.get('/myResume', indexController.myResume)

// /*resume download */
// router.get('/resumeDownload', indexController.myResumeDownload)

// router.get('/myStory', indexController.myStory)

// router.get('/film&Tv', indexController.myWorks)

// router.get('/contact', indexController.contact)



module.exports = router
