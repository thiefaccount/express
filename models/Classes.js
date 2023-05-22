const mongoose = require('mongoose');
const { Schema } = mongoose;

const ClassstudentSchema = new Schema({
    student_name: {
        type: String,
        required: true
    },
    Address: {
        type: String,
        required: true
    },
    grade: {
        type: Number,
        required: true
    },
    Phone: {
        type: String,
        required: true
    },
    Total_payment: {
        type: Number,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    }
}, {
    collection: 'classes',
    // timestamps: true,
    // versionKey: false
});
ClassstudentSchema.index({ student_name: 1, Phone: 1 }, { unique: true });

module.exports = mongoose.model('Classes', ClassstudentSchema);