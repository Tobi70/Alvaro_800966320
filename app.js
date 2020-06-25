var express = require('express');
var bodyParser = require('body-parser');
var indexRouter = require('./routes/index');
var addPostRouter= require('./routes/addPost');
var updatePostRouter = require('./routes/updatePost')
var listPostRouter = require('./routes/listPost')
const mongoose = require('mongoose');

const postRouter = require('./routes/post')

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
app.use( '/js',express.static('js'));
app.use('/img', express.static('img'));
app.use('/addPost', addPostRouter);
app.use('/post', postRouter);
app.use('/updatePost', updatePostRouter);
app.use('/listPost', listPostRouter);

app.set('view engine', 'ejs');


app.listen(8080);