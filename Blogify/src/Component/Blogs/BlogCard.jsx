import React from "react";
import author from "../../assets/react.svg";
import { FiShare2 } from "react-icons/fi";
import { FcLike } from "react-icons/fc";
import { useNavigate } from "react-router-dom";
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { useState } from "react";
import AuthContext from "../Store/AuthStore";
import { useContext } from "react";

function BlogCard({ data, pagename }) {
  let navigate = useNavigate();
  let authData = useContext(AuthContext);
  let user = JSON.parse(localStorage.getItem("userId"));
  let blogId = JSON.stringify(data._id)
  console.log(data, 'blogdata')
  console.log(blogId,'blog id')
  function handelEditBtn(event) {
    event.stopPropagation();
    navigate("/update-blog");
  }
    //  delete blog api calling

   async function deleteBlogById(id){
     let respone =await fetch(`http://localhost:8080/api/v1/blogs/delete-blog/${JSON.parse(id)}`, {
        method:"DELETE"
      } )
      console.log(respone,"delete post response");
      
      let deleteData =await respone.json()
      console.log(deleteData ,"delete data response");

      

      

    }

  function handelDeletBtn(e) {
    e.stopPropagation()
    let text = "Are you sure to delete the blog";
    if (confirm(text) == true) {
      text = "You pressed OK!";
      deleteBlogById(blogId)
      navigate("/profile")
      window.location.reload()
      
    } else {
      text = "You canceled!";
    }
  }
  function handelBlogCard() {
    navigate(`/blog-details/${JSON.parse(blogId)}`);
  }
  let userid;
  if (pagename == "Home") {
    userid = data.user._id;
  } else {
    userid = data.user;
  }

  console.log(authData, "authdata");
  return (
    <div
      onClick={handelBlogCard}
      className=" w-full flex flex-col justify-center items-center bg-white  rounded-lg relative shadow-lg shadow-black "
    >
      <img className=" w-full  h-48  rounded-t-lg" src={data.image} alt="" />
      <p className=" font-medium"> {data.category}</p>
      <h1 className=" text-l font-bold text-left w-full my-4 pl-4 pr-20">
        {data.title}
      </h1>
      {/* <p className=" font-normal w-full pr-10 pl-4 pb-4 ">
        {data.blogDescription}
      </p> */}
      <div className=" flex items-center justify-start w-full gap-4 pl-4 pb-4">
        <img className="h-8 rounded-full " src={author} alt="" />
        <div>
          <h1 className=" text-sm font-medium">{data.user.username}</h1>
          <p className=" text-sm"> {data.createdAt}</p>
        </div>
      </div>
      {/* <div className=" absolute right-0 top-64 text-2xl right-4 lg: top-80 lg:flex gap-4 ">
        <FiShare2 className=" mb-2" />
        <FcLike />
      </div> */}
      <div className=" absolute right-0 top-64 text-3xl right-4 lg: top-80 lg:flex gap-4 ">
        {user == userid ? (
          <div>
            <FaEdit className=" text-blue-600" onClick={handelEditBtn}></FaEdit>
            <MdDelete className=" text-red-700 " onClick={handelDeletBtn} />
          </div>
        ) : null}
      </div>
    </div>
  );
}

export default BlogCard;
