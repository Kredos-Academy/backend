const mongoose = require("mongoose");

const LoanRepaymentSchema = mongoose.Schema({
  id: {
    type: Number,
    unique: true,
  },
  unique_id: {
    type: String,
    unique: true,
  },
  loan_unique_id: {
    type: String,
    required: true,
  },
  sc_loan_repayment_id: {
    type: String,
    required: true,
  },
  sc_purchase_id: {
    type: String,
    required: true,
  },
  sc_loan_id: {
    type: String,
    required: true,
  },
  amount: {
    type: Number,
    required: true,
  },
  created_at: {
    type: Date,
    required: true,
  },
  updated_at: {
    type: Date,
    required: true,
  },
});

module.exports = mongoose.model("loanRepayment", LoanRepaymentSchema);
