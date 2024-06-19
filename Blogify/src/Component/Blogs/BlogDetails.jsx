import React from "react";
import { useLocation } from "react-router-dom";

function BlogDetails() {
  let data = useLocation();

  if (data == null) {
    console.log("data is null");
  }
  console.log(data);
  return (
    <div className=" h-fit w-full text-center flex flex-col px-8 lg:px-36 py-10 ">
      <img
        className=" h-[250px] lg:h-[500px]"
        src={data.state.blogs.image}
        alt=""
      />
      <h1 className=" text-3xl my-8 font-bold">{data.state.blogs.title}</h1>
      <p className=" text-xl my-8 font-semibold">
        {data.state.blogs.description}
      </p>
    </div>
  );
}

export default BlogDetails;
