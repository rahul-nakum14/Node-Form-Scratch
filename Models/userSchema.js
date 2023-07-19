const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    name:{
        type:String,
        required: true
    },
    email:{
        type:String,
        required: true,
        unique:true
    },
    password:{
        type:String,
        required: true,
        min: 8
    },
    confirmpassword:{
        type:String,
        required: true,
        min: 8
    }
})

module.exports = mongoose.model('UserModel',userSchema);