import React, { useContext } from "react";
import BlogCard from "./BlogCard";
import { useEffect, useState } from "react";
import BlogContext from "../Store/blogStore";

function Blogs() {
  let blogData = useContext(BlogContext);

  return (
    <>
      {/* <h1
        className=" w-full text-center text-blue-500 font-bold text-normal lg:text-2xl 
        border-2 border-black py-4 px-12 hover:text-blue-800"
      >
        {" "}
        Explore Blogs
      </h1> */}
      <div className=" h-fit grid lg:grid-cols-4  w-full gap-6   bg-slate-800  p-4 lg:p-8">
        {blogData.blogs.map((data) => {
          return <BlogCard data={data} pagename={"Home"} />;
        })}
      </div>
    </>
  );
}

export default Blogs;
