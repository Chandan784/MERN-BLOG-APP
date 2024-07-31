const express = require("express");

const { sendOtp, verifyOtp } = require("../controllers/otp");

const otpRouter = express.Router();

otpRouter.post("/", sendOtp);
otpRouter.post("/verify-otp", verifyOtp);

module.exports = otpRouter;
