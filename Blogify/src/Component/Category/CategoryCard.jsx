import React, { useState } from "react";

import BlogContext from "../Store/blogStore";

import { useContext } from "react";
import { useDispatch } from "react-redux";
import { categoryBlog } from "../../Redux/api/blog";

function CategoryCard({ categoryData, activeData }) {
  let blogData = useContext(BlogContext);
  let dispatch = useDispatch()
  console.log(blogData);

  // if (categoryData == "All") {
  //   setIsActive(true);
  // } else {
  //   setIsActive(false);
  // }

  function handelOnclick() {
    activeData.setActive(categoryData);
    if (categoryData == "All") {
      blogData.getBlogs();
     
      return;
    } else {
      getBlogs();
    }
  }
  async function getBlogs() {
   let actionResult = await  dispatch(categoryBlog())
    let newBlogs = actionResult.payload.blogs.filter((e) => {
      return e.category == categoryData;
    });

    blogData.setBlogs(newBlogs);
  }
  return (
    <div
      onClick={handelOnclick}
      className={` inline-block  flex-shrink-0  p-2 lg:p-4 text-sm lg:text-xl  font-medium  lg:font-semibold rounded shadow-md  ${
        categoryData == activeData.active
          ? ` bg-slate-800 text-white`
          : "bg-white  text-black"
      }`}
    >
      {categoryData}
    </div>
  );
}

export default CategoryCard;
