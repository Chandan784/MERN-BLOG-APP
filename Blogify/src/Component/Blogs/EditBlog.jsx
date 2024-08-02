import React, { useEffect, useState } from "react";
import { useRef } from "react";
import { useParams } from "react-router-dom";

function EditBlog() {
  let titleRef = useRef();
  let descriptionRef = useRef();
  let imageRef = useRef();
  let categoryRef = useRef();

  let { id } = useParams();
  console.log(id, "userid");
  let [updateData, setUpdateData] = useState({});

  useEffect(() => {
    async function getBlogData() {
      let responseup = await fetch(
        `http://localhost:8080/api/v1/blogs/get-blog/${id}`
      );
      let updateBlogData = await responseup.json();
      console.log(updateBlogData, "updatedata");
      
      setUpdateData(updateBlogData.blog)
      
    }
   getBlogData()

  },[]);
  function handelUpdateBlog(){
    
  }

  
  

  return (
    <div className=" lg:px-96">
      <div className="left w-full lg:w-full lg:h-screen bg-white flex flex-col justify-center items-center px-8 py-4 lg:px-40">
        <h1 className=" text-black text-2xl font-bold my-8">Edit Your Blog</h1>
        <form action="">
          <label htmlFor="" className=" text-left w-full">
            Blog title
          </label>

          <input 
          onChange={(e)=>{
            setUpdateData({title: e.target.value})
          }}
            type="text"
            id=" "
            placeholder="Enter blog title"
            ref={titleRef}
            value={updateData.title}
            className=" w-full bg-slate-300  rounded-lg py-2 px-4 my-2  outline-slate-500"
          />

          <label htmlFor="" className=" w-full text-left">
            Blog Description
          </label>

          <input
          onChange={(e)=>{
            setUpdateData({title: e.target.value})
          }}
            type="text"
            id=" "
            ref={descriptionRef}
            value={updateData.description}
            placeholder="Enter blog description"
            className="  w-full bg-slate-300  rounded-lg py-2 px-4 my-2  outline-slate-500"
          />

          <label htmlFor="" className=" w-full text-left">
            Blog image link
          </label>

          <input
          onChange={(e)=>{
            setUpdateData({title: e.target.value})
          }}
            type="text"
            id=" "
            ref={imageRef}
            value={updateData.image}
            placeholder="Enter image link"
            className="  w-full bg-slate-300  rounded-lg py-2 px-4 my-2  outline-slate-500"
          />

          <label htmlFor="" className=" w-full text-left">
            Blog Category
          </label>

          <select
          onChange={(e)=>{
            setUpdateData({title: e.target.value})
          }}
            name=""
            id=""
            ref={categoryRef}
            value={updateData.category}
            className="  w-full bg-slate-300  rounded-lg py-2 px-4 my-2  outline-slate-700"
          >
            <option value="">Choose a category</option>
            <option value="Education">Education</option>
            <option value="Coding">Coding</option>
            <option value="Health">Health</option>
            <option value="Technology">Technology</option>
            <option value="Business">Business</option>
          </select>
          <div className=" flex  justify-center">
            <button
              onClick={handelUpdateBlog}
              className=" w-48  bg-slate-700   rounded-2xl py-3 px-4 my-4  text-white font-semibold mt-12  "
            >
              Update
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default EditBlog;
