import React from 'react'
import { useRef } from 'react'

function EditBlog() {
  let titleRef = useRef();
  let descriptionRef = useRef();
  let imageRef = useRef();
  let categoryRef = useRef();


   function handelUpdateBlog(){
      let title = titleRef.current.value;
   }

    
  return (  
  <div className=" lg:px-96">
    <div className="left w-full lg:w-full lg:h-screen bg-white flex flex-col justify-center items-center px-8 py-4 lg:px-40">
      <h1 className=" text-black text-2xl font-bold my-8">
        Edit Your Blog
      </h1>
    <form action="">
      <label htmlFor="" className=" text-left w-full">
        Blog title
      </label>

      <input
        type="text"
        id=" "
        placeholder="Enter blog title"
        ref={titleRef}
        className=" w-full bg-slate-300  rounded-lg py-2 px-4 my-2  outline-slate-500"
      />

      <label htmlFor="" className=" w-full text-left">
        Blog Description
      </label>

      <input
        type="text"
        id=" "
        ref={descriptionRef}
        placeholder="Enter blog description"
        className="  w-full bg-slate-300  rounded-lg py-2 px-4 my-2  outline-slate-500"
      />

      <label htmlFor="" className=" w-full text-left">
        Blog image link
      </label>

      <input
        type="text"
        id=" "
        ref={imageRef}
        placeholder="Enter image link"
        className="  w-full bg-slate-300  rounded-lg py-2 px-4 my-2  outline-slate-500"
      />

      <label htmlFor="" className=" w-full text-left">
        Blog Category
      </label>

      <select
        name=""
        id=""
        ref={categoryRef}
        className="  w-full bg-slate-300  rounded-lg py-2 px-4 my-2  outline-slate-700"
      >
        <option value="">Chhose a category</option>
        <option value="Education">Education</option>
        <option value="Coding">Coding</option>
        <option value="Health">Health</option>
        <option value="Technology">Technology</option>
        <option value="Business">Business</option>
      </select>
      <div className=' flex  justify-center'>
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

export default EditBlog