import { createSlice } from "@reduxjs/toolkit";
// import {
//   getAllCourseInfo,
//   createCourse,
//   getCourseById,
//   patchCourseById,
//   deleteCourseById,
// } from "../../api/courseInfo/courseInfo";
import { getAllBlogs } from "../api/blog";

export const blog = createSlice({
  name: "blog",
  initialState: {
    loading: false,
    data: [],
    error: "",
    oneElementData: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      // GET ALL COURSE INFO
      .addCase(getAllBlogs.pending, (state) => {
        state.loading = true;
      })
      .addCase(getAllBlogs.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
        state.error = "";
      })
      .addCase(getAllBlogs.rejected, (state) => {
        state.loading = false;
        state.data = null;
        state.error =
          "Something went wrong"; /* You can put error message from backend as well*/
      });

    //   // POST COURSE INFO
    //   .addCase(createCourse.pending, (state) => {
    //     state.loading = true;
    //   })
    //   .addCase(createCourse.fulfilled, (state, action) => {
    //     state.loading = false;
    //     state.error = "";
    //     console.log("Fullfilled", action.payload);
    //     state.data.push(action.payload);
    //   })
    //   .addCase(createCourse.rejected, (state) => {
    //     state.loading = false;
    //     state.error = "Something went wrong";
    //   })

    //   //UPDATE COURSE INFO BY ID
    //   .addCase(getCourseById.pending, (state) => {
    //     state.loading = true;
    //   })
    //   .addCase(getCourseById.fulfilled, (state, action) => {
    //     state.loading = false;
    //     state.error = "";
    //     console.log("Fullfilled", action.payload);
    //     state.oneElementData = action.payload.users;
    //   })
    //   .addCase(getCourseById.rejected, (state) => {
    //     state.loading = false;
    //     state.error = "Something went wrong";
    //   })

    //   //PATCH COURSE BY ID
    //   .addCase(patchCourseById.pending, (state) => {
    //     state.loading = true;
    //   })
    //   .addCase(patchCourseById.fulfilled, (state, action) => {
    //     state.loading = false;
    //     state.error = "";
    //     console.log("Fullfilled", action.payload);
    //     state.data.push(action.payload);
    //   })
    //   .addCase(patchCourseById.rejected, (state) => {
    //     state.loading = false;
    //     state.error = "Something went wrong";
    //   })

    //   //DELETE COURSE BY ID
    //   .addCase(deleteCourseById.pending, (state) => {
    //     state.loading = true;
    //   })
    //   .addCase(deleteCourseById.fulfilled, (state, action) => {
    //     state.loading = false;
    //     state.error = "";
    //     console.log("Fullfilled", action.payload);
    //     state.data.push(action.payload);
    //   })
    //   .addCase(deleteCourseById.rejected, (state) => {
    //     state.loading = false;
    //     state.error = "Something went wrong";
    //   });
  },
});

export const {
  /* Custom Reducers */
} = blog.actions;
export default blog.reducer;
