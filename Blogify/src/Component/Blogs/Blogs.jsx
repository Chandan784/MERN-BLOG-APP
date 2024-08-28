import React from "react";
import BlogCard from "./BlogCard";
import { useEffect, useState } from "react";
import { getAllBlogs } from "../../Redux/api/blog";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

function Blogs() {
  let dispatch = useDispatch();
  const { data, loading } = useSelector((state) => state.blog);
  console.log("blogs data", data);

  useEffect(() => {
    dispatch(getAllBlogs());
  }, []);

  return (
    <>
      <div className=" h-fit grid lg:grid-cols-4  w-full gap-6   bg-slate-800  p-4 lg:p-8">
        {data.map((data) => {
          return <BlogCard data={data} pagename={"Home"} />;
        })}
      </div>
    </>
  );
}

export default Blogs;
