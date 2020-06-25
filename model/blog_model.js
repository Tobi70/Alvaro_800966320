const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const blogs = new Schema({
    title: String,
    content: String,

})

const Blogs = mongoose.model('blogs', blogs);
module.exports = Blogs;