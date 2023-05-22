const mongoose = require('mongoose');
const { Schema } = mongoose;

const SignupSchema = new Schema({
    Admin_name:{
        type:String,
        required:true
    },
    Admin_post:{
        type: String,
        required: true
    },
    Phone:{
        type: String,
        required: true
    },
    Password:{
        type:String,
        required:true
    },
    date:{
        type: Date,
        default: Date.now
    }
});
module.exports = mongoose.model('Signup',SignupSchema);