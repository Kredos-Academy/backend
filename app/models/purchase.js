const mongoose = require("mongoose");

const PurchaseSchema = mongoose.Schema({
  id: Number,
  unique_id: String,
  sc_purchase_id: {
    type: String,
    required: true,
    unique: true,
  },
  buyer_id: String,
  escrow_address: String,
  token_address: String,
  token_id: String,
  down_payment: String,
  principal: String,
  apr: Number,
  duration: Number,
  down_payment_percentage: Number,
  status: CharacterData,
  created_at: Date,
  updated_at: Date,
});

module.exports = mongoose.model("purchase", PurchaseSchema);
