const express = require("express");

const {
  addComment,
  addReply,
  getCommentsForBlog,
} = require("../controllers/comment");
const commentRoute = express.Router();

const { restrictToLoginUserOnly } = require("../middlewares/auth");
commentRoute.get("/get-blog-comments/:id", getCommentsForBlog);
commentRoute.post("/add-comment", addComment);
commentRoute.post("/add-reply", addReply);

module.exports = commentRoute;
