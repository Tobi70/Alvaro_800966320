var express = require('express');
var router = express.Router();
const Users = require("../model/user_model");
var bodyParser = require('body-parser');
var fs = require('fs');


var urlencodedParser = bodyParser.urlencoded({ extended: false });

/* GET home page. */
router.get('/', function(req, res, next) {

    Users.find(function (err,doc){

        res.render('listUser', {user: doc});
    });


});



/*
router.post('/', urlencodedParser, function (req,res,next) {


});*/



/*
router.update('/', function(req, res, next){

});

*/


module.exports = router;