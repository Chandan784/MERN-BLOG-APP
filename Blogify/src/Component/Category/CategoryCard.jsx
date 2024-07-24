import React, { useState } from "react";

import BlogContext from "../Store/blogStore";

import { useContext } from "react";

function CategoryCard({categoryData,activeData}) {
  let blogData = useContext(BlogContext);
  console.log(blogData);
  // console.log(Props,"Propdata")
  
  
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
    let response = await fetch("/api/v1/blogs/all-blog");

    let data = await response.json();

    console.log(data);

    let newBlogs = data.blogs.filter((e) => {
      return e.category == categoryData;
    });

    blogData.setBlogs(newBlogs);
  }
  
  return (
    
    <div
      onClick={handelOnclick}
      className={` inline-block  flex-shrink-0  p-2 lg:p-4 text-sm lg:text-xl  font-medium  lg:font-semibold rounded shadow-md    ${
        categoryData == activeData.active
          ? ` bg-blue-700 text-white`
          : "bg-white  text-black"
      }`}
    >
      {categoryData}
    </div>
  );
}

export default CategoryCard;
