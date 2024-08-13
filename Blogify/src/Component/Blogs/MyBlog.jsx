import React, { useEffect, useState } from "react";
import BlogCard from "./BlogCard";
import { useDispatch } from "react-redux";
import { myBlogData } from "../../Redux/api/blog";
// import { FaEdit } from "react-icons/fa";
// import { MdDelete } from "react-icons/md";
// import { Link, useNavigate } from "react-router-dom";
function MyBlog() {
  let userid = JSON.parse(localStorage.getItem("userId"));
  let [myblog, setMyBlog] = useState([]);
  // let myblog=[]
  let dispatch = useDispatch()

  console.log(userid);
  useEffect(() => {
   dispatch(myBlogData())

  }, []);

  return (
    <>
      {myblog.length == 0 ? (
        <h1>You have not created any Post yet.</h1>
      ) : (
        <div className=" h-fit grid lg:grid-cols-4  w-full gap-6  bg-slate-50  p-4 lg:p-8">
          {myblog.map((data) => {
            return <BlogCard data={data} pagename={"MyBlog"} />;
          })}
        </div>
      )}
    </>
  );
}
export default MyBlog;
