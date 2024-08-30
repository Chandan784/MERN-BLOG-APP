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
    console.log(data, "data to fetch");
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
  console.log(id, "get blog id");
  let responseup = await fetch(`/api/v1/blogs/get-blog/${id}`);
  let updateBlogData = await responseup.json();
  console.log(updateBlogData, "updatedata");
  return updateBlogData;
});

export const editBlog = createAsyncThunk(
  "blog/editBlog",
  async (updateBlogData) => {
    try {
      let respone = await fetch(
        `/api/v1/blogs/update-blog/${updateBlogData._id}`,
        {
          method: "PATCH",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify(updateBlogData),
        }
      );
      let data = await respone.json();
      console.log(data, "editdata");
      return data;
      // if (data.sucess) {
      //   window.alert("Blog Updated Sucessfully");
      // } else {
      //   window.alert("Something went wrong");
      // }
    } catch (error) {
      console.log(error);
      window.alert(error);
    }
  }
);

export const deleteBlogById = createAsyncThunk(
  "blog/deleteBlogById",
  async function deleteBlogById(id) {
    let respone = await fetch(`/api/v1/blogs/delete-blog/${JSON.parse(id)}`, {
      method: "DELETE",
    });
    console.log(respone, "delete post response");

    let deleteData = await respone.json();
    console.log(deleteData, "delete data response");
    return deleteData;
  }
);

export const myBlogData = createAsyncThunk("blog/myBlogData", async (id) => {
  let respone = await fetch(`/api/v1/blogs/user-blog/${id}`);
  let data = await respone.json();
  console.log(data);
  return data.userBlogs.blog;
});

export const getallcomments = createAsyncThunk(
  "blog/getallcommnets",
  async (id) => {
    let responsecom = await fetch(`/api/v1/comments/get-blog-comments/${id}`);
    let commentData = await responsecom.json();
    console.log(commentData, "commentdata");
    return commentData.blog.comments;
  }
);
export const categoryBlog = createAsyncThunk(
  "blog/categoryblog",
  async() =>{
    let response = await fetch("/api/v1/blogs/all-blog");

    let data = await response.json();

    console.log(data , "category json data");
    return data;

  }
  
)

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
