const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  paid:{
    type: String,
    default: false,
    required: true
  }
}, { timestamps: {} });

module.exports = mongoose.model('student', studentSchema);
