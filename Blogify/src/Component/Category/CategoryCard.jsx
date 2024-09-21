import React, { useState } from "react";
import { getAllBlogs } from "../../Redux/api/blog";
import { useDispatch, useSelector } from "react-redux";
import { categoryBlog } from "../../Redux/api/blog";
import PrimaryButton from "../Common/PrimaryButton";

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
    <PrimaryButton className={`${categoryData == activeData.active
      ? `!bg-blue-900 !text-white`
      : "bg-white  text-black"
      } inline-block flex-shrink-0`} onClick={handelOnclick} >{categoryData}</PrimaryButton>
  );
}

export default CategoryCard;
