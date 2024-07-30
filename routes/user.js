const express = require("express");

const { restrictToLoginUserOnly } = require("../middlewares/auth");
const {
  getAllUsers,
  registerUser,
  loginUser,
  singleUser,
  addFollower,
  removeFollower,
} = require("../controllers/user");
const userRouter = express.Router();
userRouter.get("/", getAllUsers);
userRouter.get("/:id", singleUser);
userRouter.post("/add-follower", addFollower);
userRouter.post("/remove-follower", removeFollower);
userRouter.post("/register", registerUser);
userRouter.post("/login", loginUser);

module.exports = userRouter;
