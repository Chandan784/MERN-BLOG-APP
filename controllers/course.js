const mongoose = require("mongoose");
const courseModel = require("../models/course");
const userModel = require("../models/user");
console.log(courseModel);
exports.getAllCourse = async (req, res) => {
  try {
    const blogs = await courseModel.find({});
    if (!blogs) {
      return res.status(500).send({
        sucess: false,
        message: "no blog found",
      });
    }

    return res.status(200).send({
      sucess: true,
      blogCount: blogs.length,
      message: "all blogs list",
      blogs,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).send({
      sucess: false,
      message: "error while getting blog",
      error,
    });
  }
};
