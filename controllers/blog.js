const mongoose = require("mongoose");
const blogModel = require("../models/blog");
const userModel = require("../models/user");

exports.getAllBlog = async (req, res) => {
  try {
    const blogs = await blogModel.find({}).populate("user");
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

exports.createBlog = async (req, res) => {
  try {
    const { title, description, image, category, user } = req.body;
    console.log(user);

    if (!title || !description || !image || !category || !user) {
      return res.status(400).send({
        sucess: false,

        message: "please provide all fields",
      });
    }
    console.log(user);
    const existingUser = await userModel.findById(user);
    console.log(existingUser);
    if (!existingUser) {
      return res.status(404).send({
        sucess: false,
        message: "unable to find user",
      });
    }

    const newBlog = new blogModel({
      title,
      description,
      image,
      category,
      user,
    });
    const session = await mongoose.startSession();
    session.startTransaction();
    await newBlog.save({ session });
    existingUser.blog.push(newBlog);
    await existingUser.save({ session });
    await session.commitTransaction();
    await newBlog.save();
    return res.status(201).send({
      sucess: true,
      message: "blog created",
      newBlog,
    });
  } catch (error) {
    return res.status(500).send({
      sucess: false,
      message: "error while creating blog",
      error,
    });
  }
};

exports.updateBlog = async (req, res) => {
  try {
    const id = req.params.id;
    console.log(id);
    console.log(req.body);
    const blog = await blogModel.findByIdAndUpdate(id, req.body, { new: true });

    return res.status(200).send({
      sucess: true,
      message: "blog updated",
      blog,
    });
  } catch (error) {
    return res.status(400).send({
      sucess: false,
      message: "error while updating blog",
      error,
    });
  }
};

exports.deleteBlog = async (req, res) => {
  try {
    console.log(req.params.id);
    const blog = await blogModel.findByIdAndDelete(req.params.id);

    return res.status(200).send({
      sucess: true,
      message: "blog deleted ",
      blog,
    });
  } catch (error) {
    return res.status(400).send({
      sucess: false,
      message: "error while deleting  blog",
      error,
    });
  }
};

exports.getBlogById = async (req, res) => {
  try {
    const blog = await blogModel.findById(req.params.id).populate("user");
    if (!blog) {
      return res.status(404).send({
        sucess: false,
        message: "blog not found with this id",
      });
    }
    return res.status(200).send({
      sucess: true,
      message: "fetch single blog",
      blog,
    });
  } catch (error) {
    return res.status(400).send({
      sucess: false,
      message: "error while getting single blog",
      error,
    });
  }
};

exports.getUserBlogs = async (req, res) => {
  const id = req.params.id;
  console.log(id);
  try {
    const userBlogs = await userModel.findById(id).populate("blog");
    if (!userBlogs) {
      return res.status(200).send({
        sucess: false,
        message: "no blog found with this id",
      });
    }

    return res.status(200).send({
      sucess: true,
      blogCount: userBlogs.length,
      message: "user blogs list",
      userBlogs,
      id,
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
