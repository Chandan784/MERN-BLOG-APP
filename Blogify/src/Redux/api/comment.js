import { createAsyncThunk } from "@reduxjs/toolkit";

export const getAllComments = createAsyncThunk(
  "comment/getAllCommnets",
  async (id) => {
    let responsecom = await fetch(`/api/v1/comments/get-blog-comments/${id}`);
    let commentData = await responsecom.json();
    console.log(commentData, "commentdata");
    return commentData.blog.comments;
  }
);
export const addCommentById = createAsyncThunk(
  "comment/addCommentById",
  async ({ blog, user, text }) => {
    let response = await fetch("/api/v1/comments/add-comment", {
      method: "POST",
      headers: {
        accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ blog, user, text }),
    });
    let data = await response.json();
    console.log(data, "new comment");
    return data.comment;
  }
);
