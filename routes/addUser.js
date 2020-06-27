var express = require('express');
var router = express.Router();
const Users = require("../model/user_model");
var bodyParser = require('body-parser');
var fs = require('fs');


var urlencodedParser = bodyParser.urlencoded({ extended: false });

/* GET home page. */
router.get('/', function(req, res, next) {



    res.render('add_user');
});

router.post('/', urlencodedParser, function (req,res,next) {

    let newUser = new Users({username: req.body.uname, password: req.body.password});


    newUser.save();
    res.render('add_user');

});



module.exports = router;