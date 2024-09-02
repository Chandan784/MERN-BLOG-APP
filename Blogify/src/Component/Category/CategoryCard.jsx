import React, { useState } from "react";
import { getAllBlogs } from "../../Redux/api/blog";
import { useDispatch , useSelector } from "react-redux";
import { categoryBlog } from "../../Redux/api/blog";

function CategoryCard({ categoryData, activeData }) {
  let dispatch = useDispatch();

  function handelOnclick() {
    activeData.setActive(categoryData);
    if (categoryData == "All") {
      dispatch(getAllBlogs())
      return;
    } else {
      getBlogs();
    }
  }
  async function getBlogs() {
    let actionResult = await dispatch(categoryBlog(categoryData));
    console.log(actionResult, "result category data");

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
