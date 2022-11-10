const mongoose = require("mongoose");

const LoanSchema = mongoose.Schema({
  id: Number,
  unique_id: String,
  pool_id: String,
  borrower_id: String,
  principal: Number,
  status: CharacterData,
  created_at: Date,
  updated_at: Date,
});


module.exports = mongoose.model("loan", LoanSchema);