const mongoose = require("mongoose");

const userschema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: [true, "username is required"],
    },
    email: {
      type: String,
      required: [true, "email namer is required"],
    },
    password: {
      type: String,
      required: [true, "password namer is required"],
    },
    blog: [
      {
        type: mongoose.Types.ObjectId,
        ref: "Blog",
      },
    ],
    comments: [
      {
        type: mongoose.Types.ObjectId,
        ref: "Comment",
      },
    ],
  },
  { timestamps: true }
);

const userModel = mongoose.model("User", userschema);

module.exports = userModel;
