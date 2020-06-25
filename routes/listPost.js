var express = require('express');
var router = express.Router();
const Blogs = require("../model/blog_model");
var ObjectId = require('mongodb').ObjectId;

router.get('/',function (req,res,next) {

    Blogs.find(function (err,doc){

        res.render('listPost', {blog: doc});
    });
})

module.exports = router;