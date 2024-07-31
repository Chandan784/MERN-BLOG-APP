// models/otp.js
const mongoose = require("mongoose");

const otpSchema = new mongoose.Schema({
  email: { type: String, required: true },
  otp: { type: String, required: true },
  time: { type: Date, default: Date.now, expires: 30 },
});

module.exports = mongoose.model("Otp", otpSchema);
