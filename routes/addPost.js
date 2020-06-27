var express = require('express');
var router = express.Router();
const Blogs = require("../model/blog_model");
var bodyParser = require('body-parser');
const fileUpload = require('express-fileupload');


var fs = require('fs');


var urlencodedParser = bodyParser.urlencoded({ extended: false });

/* GET home page. */
router.get('/', function(req, res, next) {



    res.render('addPost');
});

router.post('/', urlencodedParser, function (req,res,next) {

    let newPost = new Blogs({title: req.body.title, content: req.body.content});

  /*  let blogfile = req.files.foo;

    console.log(blogfile.data);
*/
    newPost.save();

    res.render('addPost');


});



module.exports = router;
