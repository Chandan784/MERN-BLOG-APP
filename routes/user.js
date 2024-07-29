const express = require("express");
const { model } = require("mongoose");

const { restrictToLoginUserOnly } = require("../middlewares/auth");
const {
  getAllUsers,
  registerUser,
  loginUser,
  singleUser,
} = require("../controllers/user");
const userRouter = express.Router();

userRouter.get("/", getAllUsers);
userRouter.get("/:id", singleUser);

userRouter.post("/register", registerUser);
userRouter.post("/login", loginUser);

module.exports = userRouter;
