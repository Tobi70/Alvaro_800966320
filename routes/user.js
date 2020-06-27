var express = require('express');
var router = express.Router();
const Users = require("../model/user_model");
var ObjectId = require('mongodb').ObjectId;


router.get('/:id',function (req,res,next) {


    Users.find({"_id" : ObjectId(req.params.id)}, function (err,doc){

        res.render('user', {user: doc[0]});
    });




})

router.delete('/:id', function (req, res, next) {

    const id = req.params.id;


    Users.findByIdAndDelete(id)
        .then(result => {
            res.json({ redirect: '/listUser'});
        })
        .catch(err => {
            console.log(err);
        })


});



module.exports = router;
