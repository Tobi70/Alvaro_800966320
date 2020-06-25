var express = require('express');
var router = express.Router();
const Blogs = require("../model/blog_model");
var bodyParser = require('body-parser');

var fs = require('fs');


var urlencodedParser = bodyParser.urlencoded({ extended: false });

/* GET home page. */
router.all('/', urlencodedParser, function(req, res, next) {

    let newPost = new Blogs({title: req.body.title, content: req.body.content});

    newPost.save();

    res.render('addPost', { title: 'Express' });
});

module.exports = router;
