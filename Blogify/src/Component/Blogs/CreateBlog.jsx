import React, { useEffect } from "react";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { createBlog } from "../../Redux/api/blog";
import PrimaryButton from "../common/PrimaryButton";

function CreateBlog() {
  let titleRef = useRef();
  let descriptionRef = useRef();
  let imageRef = useRef();
  let categoryRef = useRef();
  let navigate = useNavigate();

  let dispatch = useDispatch();

  async function handelCreateBlog() {
    let title = titleRef.current.value;
    let description = descriptionRef.current.value;
    let image = imageRef.current.value;
    let category = categoryRef.current.value;

    let user = localStorage.getItem("userId");
    user = JSON.parse(user);
    let obj = { title, description, image, category, user };
    console.log(obj);

    let resultAction = await dispatch(createBlog(obj));
    console.log(resultAction, "object value");
    if (createBlog.fulfilled.match(resultAction)) {
      navigate("/profile");
    } else {
      console.error("Action failed", resultAction.error);
    }
  }

  return (
    <div className="bg-slate-100 py-24 md:py-28 lg:py-32 xl:py-36">
      <div className="max-w-[600px] mx-auto px-4 flex flex-col">
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-8 text-center text-blue-600">
          Create your Blog
        </h1>

        <label htmlFor="title" className="text-lg md:text-xl font-bold">
          Blog title
        </label>

        <input
          type="text"
          id="title"
          placeholder="Enter blog title"
          ref={titleRef}
          className=" w-full bg-slate-300  rounded-lg py-2 px-4 my-2  outline-slate-500"
        />

        <label htmlFor="imageLink" className="text-lg md:text-xl font-bold mt-2.5">
          Blog image link
        </label>

        <input
          type="text"
          id="imageLink"
          ref={imageRef}
          placeholder="Enter image link"
          className="  w-full bg-slate-300  rounded-lg py-2 px-4 my-2  outline-slate-500"
        />

        <label htmlFor="description" className="text-lg md:text-xl font-bold mt-2.5">
          Blog Description
        </label>

        <textarea
          type="text"
          id="description"
          ref={descriptionRef}
          placeholder="Enter blog description"
          className="w-full bg-slate-300 resize-none h-20 rounded-lg no-scrollbar py-2 px-4 my-2  outline-slate-500"
        />


        <label htmlFor="category" className="text-lg md:text-xl font-bold mt-2.5">
          Blog Category
        </label>

        <select
          name="category"
          id="category"
          ref={categoryRef}
          className="w-full bg-slate-300  rounded-lg py-2 px-4 my-2  outline-slate-700"
        >
          <option value="">Chhose a category</option>
          <option value="Education">Education</option>
          <option value="Coding">Coding</option>
          <option value="Health">Health</option>
          <option value="Technology">Technology</option>
          <option value="Business">Business</option>
        </select>

        <PrimaryButton onClick={handelCreateBlog} className={"bg-slate-600"}> Create Blog</PrimaryButton>
        {/* <button
          
          className=" w-full bg-slate-700   rounded-2xl py-3 px-4 my-4  text-white font-semibold mt-12  "
        >
          Create Blog
        </button> */}
      </div>
    </div>
  );
}

export default CreateBlog;
