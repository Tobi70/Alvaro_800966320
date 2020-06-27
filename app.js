var express = require('express');
var bodyParser = require('body-parser');
var indexRouter = require('./routes/index');
var addPostRouter= require('./routes/addPost');
var updatePostRouter = require('./routes/updatePost');
var listPostRouter = require('./routes/listPost');
var addUserRouter = require('./routes/addUser');
const postRouter = require('./routes/post');
const listUserRouter = require('./routes/listUser');
const viewUserRouter = require('./routes/user');
const updateUserRouter = require('./routes/updateUser');
const mongoose = require('mongoose');



var jsonParser = bodyParser.json();
var urlencodedParser = bodyParser.urlencoded({ extended: false });

mongoose.connect('mongodb+srv://aalanis:tazmania12!@cluster0-j3zbr.mongodb.net/network_apps?retryWrites=true&w=majority',
    {useNewUrlParser: true,
        useUnifiedTopology: true
    });

mongoose.connection.on('connected', () =>{
    console.log('MongoDB is connected');
});




var app = express();

app.use('/', indexRouter);
app.use('/css', express.static('css'));
app.use('/listUser/css', express.static('css'));
app.use('/listUser/js', express.static('js'));
app.use('/listUser/img', express.static('img'));
app.use('/listUser/user/css', express.static('css'));
app.use('/listUser/user/js', express.static('js'));
app.use('/listUser/user/img', express.static('img'));
app.use('/listPost/css', express.static('css'));
app.use('/listUPost/js', express.static('js'));
app.use('/listPost/img', express.static('img'));
app.use('/listPost/post/css', express.static('css'));
app.use('/listPost/post/js', express.static('js'));
app.use('/listPost/post/img', express.static('img'));

app.use( '/js',express.static('js'));
app.use('/img', express.static('img'));
app.use('/addPost', addPostRouter);
app.use('/listPost/post', postRouter);
app.use('/listPost/post/updatePost', updatePostRouter);
app.use('/listPost', listPostRouter);
app.use('/add_user', addUserRouter);
app.use('/listUser', listUserRouter);
app.use('/listUser/user', viewUserRouter);
app.use('/listUser/user/updateUser', updateUserRouter);





app.set('view engine', 'ejs');




app.listen(8080);