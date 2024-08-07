const mongoose = require('mongoose')
const userSchemas = new mongoose.Schema({
    name:String,
    email:String,
    age:Number,
    address:String,
    password:String
})

const User=mongoose.model('users',userSchemas);

module.exports = User;