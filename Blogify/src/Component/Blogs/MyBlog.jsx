import React, { useEffect, useState } from "react";
import BlogCard from "./BlogCard";
import { useDispatch } from "react-redux";
import { myBlogData } from "../../Redux/api/blog";
import { useSelector } from "react-redux";
// import { FaEdit } from "react-icons/fa";
// import { MdDelete } from "react-icons/md";
function MyBlog() {
  let id = JSON.parse(localStorage.getItem("userId"));
  console.log(id);
  let dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(myBlogData(id));
  }, []);
  const { data, loading } = useSelector((state) => state.blog);

  return (
    <>
      {data.length == 0 ? (
        <h1>You have not created any Post yet.</h1>
      ) : (
        <div className=" h-fit grid lg:grid-cols-4  w-full gap-6  bg-slate-50  p-4 lg:p-8">
          {data.map((data) => {
            return <BlogCard data={data} pagename={"MyBlog"} />;
          })}
        </div>
      )}
    </>
  );
}
export default MyBlog;
