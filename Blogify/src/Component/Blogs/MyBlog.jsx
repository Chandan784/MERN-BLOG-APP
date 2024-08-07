import React, { useEffect, useState } from "react";
import BlogCard from "./BlogCard";
// import { FaEdit } from "react-icons/fa";
// import { MdDelete } from "react-icons/md";
// import { Link, useNavigate } from "react-router-dom";
function MyBlog() {
  let userid = JSON.parse(localStorage.getItem("userId"));
  let [myblog, setMyBlog] = useState([]);
  // let myblog=[]

  console.log(userid);
  useEffect(() => {
    fetch(`http://localhost:8080/api/v1/blogs/user-blog/${userid}`)
      .then((response) => {
        console.log(response, "my blogdata");
        return response.json();
      })
      .then((data) => {
        console.log(data, "data");

        console.log(data.userBlogs.blog);
        setMyBlog(data.userBlogs.blog);
      });
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
