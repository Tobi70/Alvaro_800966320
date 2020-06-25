var express = require('express');
var router = express.Router();
const Blogs = require("../model/blog_model");
var ObjectId = require('mongodb').ObjectId;


router.get('/:id',function (req,res,next) {


    Blogs.find({"_id" : ObjectId(req.params.id)}, function (err,doc){

        res.render('post', {blog: doc[0]});
    });





})


module.exports = router;
