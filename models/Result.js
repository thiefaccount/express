const mongoose = require('mongoose');
const { Schema } = mongoose;


// Define the main schema for the result
const ResultSchema = new Schema({
  student_name: {
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
  quarter: {
    type: Number,
    required: true
  },
  year: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  },
  subject1: {
    name: String,
    marks: Number
  },
  subject2: {
    name: String,
    marks: Number
  },
  subject3: {
    name: String,
    marks: Number
  },
  subject4: {
    name: String,
    marks: Number
  },
  subject5: {
    name: String,
    marks: Number
  }
}, {
  collection: 'Result',
});
ResultSchema.index({ student_name: 1, Phone: 1, quarter: 1 }, { unique: true });

module.exports = mongoose.model('Result', ResultSchema);