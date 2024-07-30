const userModel = require("../models/user");
const { getUser, setUser } = require("../services/auth");

const bcrypt = require("bcrypt");
console.log(userModel);
exports.getAllUsers = async (req, res) => {
  try {
    const users = await userModel.find({}).populate("blog");

    return res.status(200).send({
      userCount: users.length,
      message: "all user data",
      sucess: true,
      users,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).send({
      message: "Error in get all user",
      sucess: false,
      error,
    });
  }
};

exports.singleUser = async (req, res) => {
  let id = req.params.id;

  let user = await userModel.findOne({ _id: id });
  if (!user) {
    res.json({
      sucess: false,
      message: "user not found",
    });
  }

  res.json({
    sucess: true,
    message: "user data",
    user: user,
  });
};

exports.registerUser = async (req, res) => {
  try {
    const { username, email, password, blog } = req.body;
    if (!username || !email || !password) {
      return res.status(500).send({
        message: "please fill all field",
        sucess: false,
      });
    }

    const exisitingUser = await userModel.findOne({ email });
    if (exisitingUser) {
      return res.status(401).send({
        message: "user already exists",
        sucess: false,
      });
    }

    let hashPassword = await bcrypt.hash(password, 10);

    const user = new userModel({
      username,
      email,
      password: hashPassword,
      blog,
    });
    await user.save();

    return res.status(201).send({
      sucess: true,
      message: "new user created",
      user,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).send({
      message: "Error in Register Callback",
      sucess: false,
      error,
    });
  }
};

exports.loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(401).send({
        message: "please fill all field",
        sucess: false,
        error,
      });
    }

    const user = await userModel.findOne({ email });
    if (!user) {
      return res.status(200).send({
        message: "email is not registered",
        sucess: false,
      });
    }

    const isMatch = await bcrypt.compare(password, user.password);

    if (isMatch) {
      const token = setUser(user);
      console.log(token);
      res.cookie("uid", token);

      return res.status(200).send({
        sucess: true,
        message: "Login sucessfully",
        user,
      });
    } else {
      return res.status(401).send({
        sucess: false,
        message: "invalid username or password",
      });
    }
  } catch (error) {
    console.log(error);
    return res.status(500).send({
      message: "Error in Register Callback",
      sucess: false,
      error,
    });
  }
};
