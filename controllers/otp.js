const nodemailer = require("nodemailer");

const crypto = require("crypto");
const Otp = require("../models/otp");

exports.sendOtp = async (req, res) => {
  const { email } = req.body;

  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false, // Use `true` for port 465, `false` for all other ports
    auth: {
      user: "chandansamantaray784@gmail.com",
      pass: "mzbhetappllqfzio",
    },
  });

  const otp = await crypto.randomInt(100000, 999999).toString();
  try {
    const otpEntry = new Otp({ email, otp });
    await otpEntry.save();
  } catch (err) {
    console.log(err);
  }

  const info = await transporter.sendMail({
    from: "chandansamantaray784@gmail.com", // sender address
    to: email, // list of receivers
    subject: "Blogify User authentication with OTP ", // Subject line
    text: `your otp is ${otp} valid for 30s`, // plain text body
    html: `your otp is ${otp} valid for 30s`, // html body
  });

  console.log("Message sent: %s", info.messageId);

  res.json({
    message: info.messageId,
  });
};

exports.verifyOtp = async (req, res) => {
  const { email, otp } = req.body;
  const otpEntry = await Otp.findOne({ email, otp });

  if (!otpEntry) {
    return res.status(400).json({
      sucess: false,
      message: "Invalid OTP or OTP expired",
      otpEntry,
    });
  }

  const now = new Date();
  const otpCreatedAt = otpEntry.time;
  const timeDiff = (now - otpCreatedAt) / 1000; // time difference in seconds

  if (timeDiff > 30) {
    return res.status(400).json({
      sucess: false,
      message: "OTP has expired",
    });
  }

  return res.status(200).json({
    sucess: true,
    message: "OTP verified sucessfully",
  });
};
