import { createSlice } from "@reduxjs/toolkit";
import { act } from "react";
import { getallcomments } from "../api/blog";

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
      .addCase(getallcomments.pending, (state) => {
        state.loading = true;
      })
      .addCase(getallcomments.fulfilled, (state, action) => {
        state.loading = false;
        state.error = "";
        console.log(action.payload, " comment data ");
        state.data = action.payload;
      })
      .addCase(getallcomments.rejected, (state) => {
        state.loading = false;
        state.data = null;
        state.error = "something went wrong";
      });
  },
});

export const {
  /* Custom Reducers */
} = comment.actions;
export default comment.reducer;
