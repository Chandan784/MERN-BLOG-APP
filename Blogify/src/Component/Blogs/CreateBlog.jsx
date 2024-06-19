import React from "react";
import { useRef } from "react";
function CreateBlog() {
  let titleRef = useRef();
  let descriptionRef = useRef();
  let imageRef = useRef();
  let categoryRef = useRef();

  function handelCreateBlog() {
    let title = titleRef.current.value;
    let description = descriptionRef.current.value;
    let image = imageRef.current.value;
    let category = categoryRef.current.value;

    let obj = { title, description, image, category };
    console.log(obj);

    sendData(obj);
  }

  async function sendData(obj) {
    let respone = fetch("/api/v1/blogs/create-blog", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(obj),
    });

    let data = respone.json();
    console.log(data);
  }
  return (
    <div className=" lg:px-96">
      <div className="left w-full lg:w-full lg:h-screen bg-white flex flex-col justify-center items-center px-8 py-4 lg:px-40">
        <h1 className=" text-black text-2xl font-bold my-8">
          Create your Blog
        </h1>

        <label htmlFor="" className=" text-left w-full">
          Blog title
        </label>

        <input
          type="text"
          id=" "
          placeholder="Enter blog title"
          ref={titleRef}
          className=" w-full bg-slate-300  rounded-lg py-2 px-4 my-2  outline-red-500"
        />

        <label htmlFor="" className=" w-full text-left">
          Blog Description
        </label>

        <input
          type="text"
          id=" "
          ref={descriptionRef}
          placeholder="Enter blog description"
          className="  w-full bg-slate-300  rounded-lg py-2 px-4 my-2  outline-red-500"
        />

        <label htmlFor="" className=" w-full text-left">
          Blog image link
        </label>

        <input
          type="text"
          id=" "
          ref={imageRef}
          placeholder="Enter image link"
          className="  w-full bg-slate-300  rounded-lg py-2 px-4 my-2  outline-red-500"
        />

        <label htmlFor="" className=" w-full text-left">
          Blog Category
        </label>

        <select
          name=""
          id=""
          ref={categoryRef}
          className="  w-full bg-slate-300  rounded-lg py-2 px-4 my-2  outline-red-500"
        >
          <option value="">Chhose a category</option>
          <option value="education">Education</option>
          <option value="coding">Coding</option>
          <option value="health">Health</option>
          <option value="technology">Technology</option>
          <option value="business">Business</option>
        </select>

        <button
          onClick={handelCreateBlog}
          className=" w-full bg-red-700   rounded-2xl py-3 px-4 my-4  text-white font-semibold mt-12  "
        >
          Create Blog
        </button>
      </div>
    </div>
  );
}

export default CreateBlog;
