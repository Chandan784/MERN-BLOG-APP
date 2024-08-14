import { createAsyncThunk } from "@reduxjs/toolkit";
import { comment } from "../Slice/commentSlice";


export const getallcomments = createAsyncThunk(
    "blog/getallcommnets",
    async (id) => {
      let responsecom = await fetch(`/api/v1/comments/get-blog-comments/${id}`);
      let commentData = await responsecom.json();
      console.log(commentData, "commentdata");
      return commentData.comment;
    }
  );