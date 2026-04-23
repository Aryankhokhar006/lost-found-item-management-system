const mongoose = require("mongoose");

const itemSchema = new mongoose.Schema({
  userId: String,
  itemName: String,
  description: String,
  type: String,
  location: String,
  date: String,
  contactInfo: String
});

module.exports = mongoose.model("Item", itemSchema);