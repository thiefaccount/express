const mongoose = require('mongoose');
const { Schema } = mongoose;

const StudentpaymentSchema = new Schema({
    student_name:{
        type:String,
        required:true
    },
    year:{
        type: String,
        required: true
    },
    grade:{
        type:String,
        required: true
    },
    Phone:{
        type: String,
        required: true
    },
    Total_payment_done:{
        type: Number,
        required:true
    },
    date:{
        type: Date,
        default: Date.now
    }
});
module.exports = mongoose.model('Studentpayment',StudentpaymentSchema);