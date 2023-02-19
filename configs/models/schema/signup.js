const mongoose = require('mongoose')

const signUpSchema = mongoose.Schema({
    username: String,
    email: String,
    password: String,
    confirm_password: String,
    phone_no: Number,
    authority: String,
    token: String
})

const SignUpModel = mongoose.model('user', signUpSchema)

module.exports = SignUpModel