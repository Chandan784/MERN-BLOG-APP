import { createSlice } from "@reduxjs/toolkit";
import { act } from "react";
import { getAllComments } from "../api/comment";
import { addCommentById } from "../api/comment";


export const comment = createSlice({
  name: "comment",
  initialState: {
    loading: false,
    data: [],
    error: "",
    oneElementData: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      // Comment Data
      .addCase(getAllComments.pending, (state) => {
        state.loading = true;
      })
      .addCase(getAllComments.fulfilled, (state, action) => {
        state.loading = false;
        state.error = "";
        console.log(action.payload, " comment data ");
        state.data = action.payload;
      })
      .addCase(getAllComments.rejected, (state) => {
        state.loading = false;
        state.data = null;
        state.error = "something went wrong";
      })
      .addCase(addCommentById.pending,(state)=>{
        state.loading = true;
      })
      .addCase(addCommentById.fulfilled,(state, action)=>{
        state.loading = false;
        state.error="";
        state.data= action.payload;

      })
      .addCase(addCommentById.rejected,(state)=>{
        state.loading=false;
        state.data=null;
        state.error="something went wrong";
      })
  },
});

export const {
  /* Custom Reducers */
} = comment.actions;
export default comment.reducer;

