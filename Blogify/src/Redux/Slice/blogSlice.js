import { createSlice } from "@reduxjs/toolkit";
// import {
//   getAllCourseInfo,
//   createCourse,
//   getCourseById,
//   patchCourseById,
//   deleteCourseById,
// } from "../../api/courseInfo/courseInfo";
import { getAllBlogs, createBlog, getBlogById, editBlog } from "../api/blog";
import { useNavigate } from "react-router-dom";
import { act } from "react";

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

      // GET ALL BLOG INFO
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
      })

      // CREATING BLOG
      .addCase(createBlog.pending, (state) => {
        state.loading = true;
      })
      .addCase(createBlog.fulfilled, (state, action) => {
        state.loading = false;
        state.error = "";
        console.log(action.payload, "fulfill blog data");
        state.data.push(action.payload.newBlog);

        // state.data= action.payload;
      })
      .addCase(createBlog.rejected, (state) => {
        state.loading = false;
        state.data = null;
        state.error =
          "Something went wrong"; /* You can put error message from backend as well*/
      })

      //GETTING BLOGDATA BY ID
      .addCase(getBlogById.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(getBlogById.fulfilled, (state, action) => {
        state.loading = false;
        state.error = "";
        console.log(action.payload, "single blog data response");
        // state.data = action.payload.blog
      })
      .addCase(getBlogById.rejected, (state) => {
        state.loading = false;
        state.data = null;
        state.error = "Somthing went wrong";
      })
      //update blog
      .addCase(editBlog.pending, (state) => {
        state.loading = true;
      })
      .addCase(editBlog.fulfilled, (state, action) => {
        state.loading = false;
        state.error = "";
        console.log(action.payload,"edit blog data");

      })
      .addCase(editBlog.rejected, (state) => {
        state.loading = false;
        state.data = null;
        state.error = "something went wrong";
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
