import { createAsyncThunk } from "@reduxjs/toolkit";
// import axios from 'axios';
// import { GET_ALL_COURSE_INFO, CREATE_COURSE_INFO, GET_COURSE_BY_ID, PATCH_COURSE_INFO_BY_ID, DELETE_COURSE_INFO_BY_ID } from "../../features/CourseDescription/courseDescriptionEndpoints";

// const BASE_URL = import.meta.env.VITE_BASE_URL;

export const getAllBlogs = createAsyncThunk("blog/getAllBlogs", async () => {
  let response = await fetch("/api/v1/blogs/all-blog");
  let data = await response.json();
  console.log(data);
  return data.blogs;
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
