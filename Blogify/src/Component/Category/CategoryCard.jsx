import React from "react";

import BlogContext from "../Store/blogStore";

import { useContext } from "react";
function CategoryCard({ categoryData }) {
  let blogData = useContext(BlogContext);
  console.log(blogData);
  function handelOnclick() {
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
      className="  flex-shrink-0 bg-white p-2 lg:p-4 text-sm lg:text-xl  font-medium  lg:font-semibold rounded shadow-md  "
    >
      {categoryData}
    </div>
  );
}

export default CategoryCard;
