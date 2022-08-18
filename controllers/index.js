
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
    },

    myStory: (req, res) => {
        res.render('my-story')
    }







}