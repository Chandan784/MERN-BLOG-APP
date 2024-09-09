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
import { Link } from "react-router-dom";
import { deleteBlogById } from "../../Redux/api/blog";
import { useDispatch } from "react-redux";
import { CiMenuKebab } from "react-icons/ci";

function BlogCard({ data, pagename }) {
  let dispatch = useDispatch();
  let navigate = useNavigate();
  let authData = useContext(AuthContext);
  let user = JSON.parse(localStorage.getItem("userId"));
  let blogId = JSON.stringify(data._id);
  console.log(data, "blogdata");
  console.log(blogId, "blog id");
  function handelEditBtn(event) {
    event.stopPropagation();
    navigate(`/update-blog/${JSON.parse(blogId)}`);
  }

  async function handelDeletBtn(e) {
    e.stopPropagation();
    let text = "Are you sure to delete the blog";
    if (confirm(text) == true) {
      text = "You pressed OK!";
      let actionResult = await dispatch(deleteBlogById(blogId));
      navigate("/profile");
      window.location.reload();
    } else {
      text = "You canceled!";
    }
  }
  function handelBlogCard() {
    navigate(`/blog-details/${JSON.parse(blogId)}`);
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });

  }
  let userid;
  if (pagename == "Home") {
    userid = data.user._id;
  } else {
    userid = data.user;
  }

  console.log(authData, "authdata");

  const isTitleClamped = data.title.length > 1;

  const [open, setOpen] = useState(false);

  return (
    <div

      className="w-full flex flex-col bg-white group rounded-lg relative shadow-lg shadow-black/60 hover:shadow-black/100 hover:shadow-xl duration-300"
    >
      <p className="font-medium text-sm md:text-base absolute z-40 px-3 py-0.5 rounded-md top-3 end-3 bg-black/90 text-white flex gap-1.5 group-hover:bg-blue-600 items-center"> <span className="p-0.5 h-0.5 w-0.5 bg-white rounded-full"></span> {data.category}</p>
      <div className="overflow-hidden h-48 md:h-[216px] rounded-t-lg lg:h-56">
        <img className="w-full h-48 md:h-[216px] lg:h-56 object-cover group-hover:scale-110 duration-300 rounded-t-lg" src={data.image} alt="blog-data-img" />
      </div>
      <div className="flex flex-col p-4 w-full">
        <h3 className='text-lg md:text-xl lg:text-[21px] font-bold w-full h-14'>
          {data.title.length > 22 ? `${data.title.substring(0, 30)}...` : `${data.title}...`}{" "}
          <span onClick={handelBlogCard} className='text-nowrap text-lg md:text-xl cursor-pointer relative before:w-full before:h-[2px] before:bg-blue-600 before:start-0 before:bottom-0 before:absolute hover:before:bg-red-600 before:duration-300 hover:before:w-0 text-blue-600 hover:text-red-600 duration-300'
          >
            Read More</span></h3>
        <div className="relative flex justify-between">
          <div className="flex items-center justify-start w-full gap-4 pt-4">
            <img className="h-8 w-8 border-[0.5px] border-black group-hover:border-blue-600 duration-300 rounded-full" src={author} alt="author-img" />
            <div>
              <p className=" text-sm font-medium">{data.user.username}</p>
              <p className="text-sm"> {data.createdAt}</p>
            </div>
          </div>

          <div className="flex items-end">
            {user == userid ? (
              <div className="relative">
                <div onClick={() => setOpen(!open)} className="cursor-pointer flex flex-col gap-1 px-0.5">
                  <span className="h-1 w-1 rounded-full bg-red-600 p-[2px]"></span>
                  <span className="h-1 w-1 rounded-full bg-red-600 p-[2px]"></span>
                  <span className="h-1 w-1 rounded-full bg-red-600 p-[2px]"></span>
                </div>
                {open ? (
                  <div className={`bg-black bg-opacity-90 py-2.5 px-3 absolute end-4 bottom-0 duration-300 rounded-md ${open ? "max-h-[100px]" : "max-h-0"}`}>
                    <div onClick={handelEditBtn} className="px-2 rounded-md items-center duration-300 hover:bg-white group/del flex gap-2 py-2 cursor-pointer">
                      <FaEdit className="text-blue-600 w-5" />
                      <p className="text-base font-medium text-white duration-300 group-hover/del:text-blue-600">Edit</p>
                    </div>
                    <div onClick={handelDeletBtn} className="px-2 rounded-md items-center duration-300 hover:bg-white group/item flex gap-2 py-2 cursor-pointer">
                      <MdDelete className="text-red-700 w-6 h-5 -ms-1" />
                      <p className="text-base font-medium text-white duration-300 group-hover/item:text-red-600 -ms-1.5">Delete</p>
                    </div>
                  </div>
                ) : ""}
              </div>
            ) : null}
          </div>
        </div>
        {/* <div className=" absolute right-0 top-64 text-2xl right-4 lg: top-80 lg:flex gap-4 ">
        <FiShare2 className=" mb-2" />
        <FcLike />
      </div> */}

      </div>
    </div>
  );
}

export default BlogCard;
