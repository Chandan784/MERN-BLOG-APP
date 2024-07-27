import React from "react";
import { useLocation } from "react-router-dom";
import CommentCard from "../Comment/CommentCard";
import { IoMdSend } from "react-icons/io";

function BlogDetails() {
  let data = useLocation();

  if (data == null) {
    console.log("data is null");
  }
  console.log(data);
  return (
    <div className=" h-fit w-full text-left flex flex-col px-8 lg:px-72 py-10 ">
      <img className=" h-[250px] lg:h-[400px]" src={data.state.image} alt="" />
      <h1 className=" text-3xl my-8 font-bold">{data.state.title}</h1>
      <p className=" text-xl my-8 font-semibold">{data.state.description}</p>
      <div className=" w-3/4  ">
        <div className=" flex gap-4 items-center h-fit relative bg-white w-full shadow-lg border-t-2 border-slate-400 border-solid shadow-slate-400 rounded-sm p-4 ">
          <img
            src="https://th.bing.com/th/id/OIP.f3TNr7NBbIf89gXmb0wS_QAAAA?w=214&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7"
            alt=""
            className=" h-10 rounded-full flex   "
          />
          <textarea
            type="text"
            placeholder="Enter your comment "
            className=" w-full h-fit  overflow-hidden py-2 border-2 border-slate-800 rounded-lg border-none outline-none break-words"
          />
      
           <IoMdSend className=" text-4xl  " />

          
          
        </div>
       
      </div>

      <CommentCard className=" " />
    </div>
  );
}

export default BlogDetails;
