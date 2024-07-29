import React, { useContext } from "react";
import BlogCard from "./BlogCard";
import { useEffect, useState } from "react";
import BlogContext from "../Store/blogStore";

function Blogs() {
  let blogData = useContext(BlogContext);

  // let blogs = [
  //   {
  //     category: "Software Development",
  //     blogImg:
  //       "https://d1csarkz8obe9u.cloudfront.net/posterpreviews/free-youtube-thumbnail-maker-online-design-template-b0d0e1050e510fc2784b90d522d5bbe5_screen.jpg?ts=1662402001",
  //     blogTitle: "  How to learn React and css in 2024 ?",
  //     blogDescription:
  //       "Keep in mind that becoming a skilled developer is not a race. This is just the path I personally would choose to learn React from front to back as quickly and efficiently as This guide assumes that you have about 3-4 hours of undistracted time a day to dedicate to learning and practicing React. Feel free to adjust this guide to your particular circumstances and goals",
  //     authorName: "Chandan Samantaray",
  //     authorLogo: "",
  //     time: "22-4-2024",
  //   },

  //   {
  //     category: "Software Development",
  //     blogImg:
  //       "https://th.bing.com/th?id=OIP.GX28q9DvAj2FP01dN8EhGwHaCu&w=349&h=128&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2",
  //     blogTitle: "How to learn Javascript in 2024",
  //     blogDescription:
  //       "Keep in mind that becoming a skilled developer is not a race. This is just the path I personally would choose to learn React from front to back as quickly and efficiently as This guide assumes that you have about 3-4 hours of undistracted time a day to dedicate to learning and practicing React. Feel free to adjust this guide to your particular circumstances and goals",
  //     authorName: "Biswaranjan Sahoo",
  //     authorLogo: "",
  //     time: "22-4-2024",
  //   },

  //   {
  //     category: "Software Development",
  //     blogImg:
  //       "https://d1csarkz8obe9u.cloudfront.net/posterpreviews/free-youtube-thumbnail-maker-online-design-template-b0d0e1050e510fc2784b90d522d5bbe5_screen.jpg?ts=1662402001",
  //     blogTitle: "  How to learn React and css in 2024 ?",
  //     blogDescription:
  //       "Keep in mind that becoming a skilled developer is not a race. This is just the path I personally would choose to learn React from front to back as quickly and efficiently as This guide assumes that you have about 3-4 hours of undistracted time a day to dedicate to learning and practicing React. Feel free to adjust this guide to your particular circumstances and goals",
  //     authorName: "Chandan Samantaray",
  //     authorLogo: "",
  //     time: "22-4-2024",
  //   },

  //   {
  //     category: "Software Development",
  //     blogImg:
  //       "https://d1csarkz8obe9u.cloudfront.net/posterpreviews/free-youtube-thumbnail-maker-online-design-template-b0d0e1050e510fc2784b90d522d5bbe5_screen.jpg?ts=1662402001",
  //     blogTitle: "  How to learn React and css in 2024 ?",
  //     blogDescription:
  //       "Keep in mind that becoming a skilled developer is not a race. This is just the path I personally would choose to learn React from front to back as quickly and efficiently as This guide assumes that you have about 3-4 hours of undistracted time a day to dedicate to learning and practicing React. Feel free to adjust this guide to your particular circumstances and goals",
  //     authorName: "Chandan Samantaray",
  //     authorLogo: "",
  //     time: "22-4-2024",
  //   },
  // ];

  return (
    <>
      
        <h1 className=" w-full text-center text-blue-500 font-bold text-normal lg:text-2xl 
         border-2 border-black py-4 px-12 hover:text-blue-800">
          {" "}
          Explore Blogs
        </h1>
        <div className=" h-fit grid lg:grid-cols-4  w-full gap-6   bg-blue-600  p-4 lg:p-8">
          {blogData.blogs.map((data) => {
            return <BlogCard data={data} pagename={"Home"} />;
          })}
        </div>
      
    </>
  );
}

export default Blogs;
