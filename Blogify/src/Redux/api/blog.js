import { createAsyncThunk } from "@reduxjs/toolkit";
import { useNavigate } from "react-router-dom";
import { blog } from "../Slice/blogSlice";
// import axios from 'axios';
// import { GET_ALL_COURSE_INFO, CREATE_COURSE_INFO, GET_COURSE_BY_ID, PATCH_COURSE_INFO_BY_ID, DELETE_COURSE_INFO_BY_ID } from "../../features/CourseDescription/courseDescriptionEndpoints";

// const BASE_URL = import.meta.env.VITE_BASE_URL;

export const getAllBlogs = createAsyncThunk("blog/getAllBlogs", async () => {
  let response = await fetch("/api/v1/blogs/all-blog");
  let data = await response.json();
  console.log(data);
  return data.blogs;
});

export const createBlog = createAsyncThunk("blog/createBlog", async (obj) => {
  try {
    let respone = await fetch("/api/v1/blogs/create-blog", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(obj),
    });

    let data = await respone.json();
    console.log(data);
    // if (data.sucess) {
    //   window.alert("Blog Created Sucessfully");
    // } else {
    //   window.alert("Something went wrong");
    // }
    return data;
  } catch (error) {
    console.log(error);
  }
});

export const getBlogById = createAsyncThunk("blog/getBlogById", async (id) => {
  let responseup = await fetch(`/api/v1/blogs/get-blog/${id}`);
  let updateBlogData = await responseup.json();
  console.log(updateBlogData, "updatedata");
  return updateBlogData;
});

export const editBlog = createAsyncThunk("blog/editBlog", async (updateBlogData) => {
  let respone = await fetch(`/api/v1/blogs/update-blog/${updateBlogData.id}`, {
    method: "PATCH",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(updateBlogData),
  });
  let data = await respone.json();
  console.log(data, "editdata");

  if (data.sucess) {
    window.alert("Blog Updated Sucessfully");
    getBlogById();
  } else {
    window.alert("Something went wrong");
  }
});
// export const createCourse = createAsyncThunk(
//   "courseInfo/createCourse",
//   async (courseInfo) => {
//     const response = await axios.post(
//       `${BASE_URL}${CREATE_COURSE_INFO}`,
//       courseInfo
//     );
//     return response.data;
//   }
// );

// export const getCourseById = createAsyncThunk(
//   "courseInfo/getCourseById",
//   async () => {
//     const response = await axios.get(`${BASE_URL}${GET_COURSE_BY_ID}`);
//     return response.data;
//   }
// );

// export const patchCourseById = createAsyncThunk(
//   "courseInfo/patchCourseById",
//   async (courseInfoID) => {
//     const response = await axios.patch(
//       `${BASE_URL}${PATCH_COURSE_INFO_BY_ID}${courseInfoID}`
//     );
//     return response.data;
//   }
// );

// export const deleteCourseById = createAsyncThunk(
//   "courseInfo/deleteCourseById",
//   async (courseInfoID) => {
//     const response = await axios.delete(
//       `${BASE_URL}${DELETE_COURSE_INFO_BY_ID}${courseInfoID}`
//     );
//     return response.data;
//   }
// );
