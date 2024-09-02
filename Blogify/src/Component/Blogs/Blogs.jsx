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
      <div className="grid sm:grid-cols-2 custom-md:grid-cols-3 xl:grid-cols-4 w-full gap-6 bg-slate-800 px-4 md:px-6 py-8 md:py-10">
        {data.map((data) => {
          return <BlogCard data={data} pagename={"Home"} />;
        })}
      </div>
    </>
  );
}

export default Blogs;
