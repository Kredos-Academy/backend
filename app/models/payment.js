const mongoose = require('mongoose');

const paymentSchema = new mongoose.Schema({
  student: { type: mongoose.Schema.Types.ObjectId, ref: 'Student', required: true },
  amount: { type: Number, required: true },
  transactionId: { type: String, required: true },
  createdAt: { type: Date, default: Date.now }
});


module.exports = mongoose.model('Payment', paymentSchema);
