import { createAsyncThunk } from "@reduxjs/toolkit";
import { comment } from "../Slice/commentSlice";

export const getAllComments = createAsyncThunk(
  "blog/getAllCommnets",
  async (id) => {
    let responsecom = await fetch(`/api/v1/comments/get-blog-comments/${id}`);
    let commentData = await responsecom.json();
    console.log(commentData, "commentdata");
    return commentData.comment;
  }
);
export const addCommentById = createAsyncThunk(
  "comment/addCommentById",
  async (blog, user, text) => {
    let response = await fetch("/api/v1/comments/add-comment", {
      method: "post",
      headers: {
        accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ blog, user, text }),
    });
    let data = await response.json();
    console.log(data, "new comment");
    return data;
  }
);
