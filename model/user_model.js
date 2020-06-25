const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const user = new Schema({
    username: String,
    email: String,
    password: String,

})

const users = mongoose.model('users', user);
module.exports = users;