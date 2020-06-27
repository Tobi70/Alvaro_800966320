var express = require('express');
var router = express.Router();
const Users = require("../model/user_model");
var ObjectId = require('mongodb').ObjectId;
var bodyParser = require('body-parser');

var urlencodedParser = bodyParser.urlencoded({ extended: false });

router.get('/:id',function (req,res,next) {

    Users.find({"_id" : ObjectId(req.params.id)}, function (err,doc){

        res.render('updateUser', {user: doc[0]});
    });
});

router.post('/:id',  urlencodedParser, function (req,res,next){
    console.log("in post");
    Users.findByIdAndUpdate({_id: req.params.id}, {username: req.body.uname, password: req.body.password})
        .then(result => {
        res.redirect('/listUser');

    })
        .catch(err => {
            console.log(err);
        });
});

module.exports = router;