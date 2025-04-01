const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    username: String,
    name: String,
    email: String,
    password: String,
})

mongoose.model('user', userSchema)

module.exports = mongoose.model('user')
