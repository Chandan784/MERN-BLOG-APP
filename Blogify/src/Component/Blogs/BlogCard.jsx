import React from "react";
import author from "../../assets/react.svg";
import { FiShare2 } from "react-icons/fi";
import { FcLike } from "react-icons/fc";
import { useNavigate } from "react-router-dom";
function BlogCard({ data }) {
  let navigate = useNavigate();

  function handelBlogCard() {
    navigate("/blog-details", { state: data });
  }
  return (
    <div
      onClick={handelBlogCard}
      className=" w-full flex flex-col justify-center items-center bg-white  rounded-medium relative shadow-lg shadow-black "
    >
      <img className=" w-full  h-52  rounded-medium" src={data.image} alt="" />
      <p className=" font-medium py-4"> {data.category}</p>
      <h1 className=" text-2xl font-bold text-left w-full my-4 pl-4 pr-20">
        {data.title}
      </h1>
      {/* <p className=" font-normal w-full pr-10 pl-4 pb-4 ">
        {data.blogDescription}
      </p> */}
      <div className=" flex items-center justify-start w-full gap-4 pl-4 pb-4">
        <img className="h-10 rounded-full " src={author} alt="" />
        <div>
          <h1 className=" font-medium">{data.user.username}</h1>
          <p> {data.createdAt}</p>
        </div>
      </div>
      <div className=" absolute right-0 top-64 text-2xl right-4 lg: top-80 lg:flex gap-4 ">
        <FiShare2 className=" mb-2" />
        <FcLike />
      </div>
    </div>
  );
}

export default BlogCard;
