const express = require("express");
const { model } = require("mongoose");

const { restrictToLoginUserOnly } = require("../middlewares/auth");
const { getAllUsers, registerUser, loginUser } = require("../controllers/user");
const userRouter = express.Router();

userRouter.get("/all-users", getAllUsers);

userRouter.post("/register", registerUser);
userRouter.post("/login", loginUser);

module.exports = userRouter;
