const mongoose = require("mongoose");
const Blog = require("../models/blog");
const User = require("../models/user");
const Comment = require("../models/comment");

const addComment = async (req, res) => {
  const { blog, user, text } = req.body;

  console.log(`Received blogId: ${blog}, userId: ${user}`); // Debugging

  // blogId = mongoose.Types.ObjectId(blogId);
  // userId = mongoose.Types.ObjectId(userId);

  const comment = new Comment({ blog, user, text });
  await comment.save();

  await Blog.findByIdAndUpdate(blog, { $push: { comments: comment._id } });
  await User.findByIdAndUpdate(user, { $push: { comments: comment._id } });

  return res.status(201).send({
    sucess: true,
    message: "comment added",
    comment,
  });
};

// Arrow function to add a reply to a comment
const addReply = async (req, res) => {
  const { commentId, user, text } = req.body;
  const reply = new Comment({ user, text });
  await reply.save();

  await Comment.findByIdAndUpdate(commentId, { $push: { replies: reply._id } });
  await User.findByIdAndUpdate(user, { $push: { comments: reply._id } });

  return res.status(201).send({
    sucess: true,
    message: "reply added",
    reply,
  });
};

const getCommentsForBlog = async (req, res) => {
  if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
    throw new Error("Invalid ObjectId for blog");
  }

  const blog = await Blog.findById(req.params.id)
    .populate({
      path: "comments",
      populate: {
        path: "replies",
        model: "Comment",
        populate: {
          path: "user",
          select: "username",
        },
      },
      populate: {
        path: "user",
        select: "username",
      },
    })
    .exec();

  if (!blog) {
    throw new Error("Blog not found");
  }

  return res.status(201).send({
    sucess: true,
    message: "reply added",
    blog,
  });
};

module.exports = {
  addComment,
  addReply,
  getCommentsForBlog,
};
