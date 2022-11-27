
fs = require('fs')

module.exports = {


    home: (req, res) => {

        res.render('home')

    },

    headshots: (req, res) => {

        res.render('headshots')
    },


    myResume: (req, res) => {
        res.render('resume')
    },

    myResumeDownload: (req, res) => {
        file = 'public/images/resume/XAVIER-RH-RESUME.pdf'
        res.download(file)
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