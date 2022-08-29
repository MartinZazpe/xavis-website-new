
fs = require('fs')

module.exports = {


    home: (req, res) => {

        res.render('home')


    },

    headshots: (req, res) => {

        res.render('headshots')
    },


    myResume: (req, res) => {
        res.sendfile('./public/images/resume/XaviResume.pdf')
        // res.render('resume')
    },

    myStory: (req, res) => {
        res.render('my-story')
    },


    myWorks: (req, res) => {
        res.render('film&Tv')
    },

    contact: (req, res) => {
        res.render('contact')
    }







}