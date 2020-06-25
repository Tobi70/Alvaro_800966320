var express = require('express');
var router = express.Router();
var jsdom = require('jsdom');
$ = require('jquery')(new jsdom.JSDOM().window);

const Blogs = require("../model/blog_model");
let counter = 0;
let slideshow;


/* GET home page. */
router.get('/', function(req, res, next) {

    Blogs.find({}, function (err, blogs) {

        res.render('index', { blogs: blogs });
        });

});


/*router.use(function playshow(req,res,next) {

    Blogs.find({}, function (err, blogs) {

        let currentBlog = blogs[counter];
        if(counter > blogs.length) counter = 0;

        slideshow = setInterval(function (){
            $("#title").text(currentBlog.title);
            $("#size").text(currentBlog.content);
            counter++;

    },5000);


    });

},function stop(req,res,next){
    clearInterval(slideshow);

});*/



module.exports = router;
