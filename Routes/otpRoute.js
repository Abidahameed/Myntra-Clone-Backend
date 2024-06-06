const express = require("express");
const router = express.Router();
const otpCntrlr= {sendOtp} = require("../Controllers/otpController");

router.post("/send-otp" , otpCntrlr.sendOtp);

module.exports = router;
