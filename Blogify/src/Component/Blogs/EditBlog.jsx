import React, { useEffect, useState } from "react";
import { useRef } from "react";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { getBlogById , editBlog} from "../../Redux/api/blog";
function EditBlog() {
  let titleRef = useRef();
  let descriptionRef = useRef();
  let imageRef = useRef();
  let categoryRef = useRef();
  let dispatch = useDispatch();
  let { id } = useParams();
  console.log(id, "userid");
  let [updateData, setUpdateData] = useState({});
  console.log(updateData, "edit");

  useEffect(() => {
    const fetchBlogData = async () => {
      try {
        let actionResult = await dispatch(getBlogById(id));
        if (getBlogById.fulfilled.match(actionResult)) {
          setUpdateData(actionResult.payload.blog);
        } else {
          console.error("Action failed", actionResult.error);
        }
      } catch (error) {
        console.error("Error fetching blog data", error);
      }
    };

    fetchBlogData();
  }, [dispatch, id]);

  function handelUpdateBlog(e) {
    e.preventDefault();
    console.log(updateData._id, "blogid");

    // sendData(updateData);
    // console.log(sendData, "update");
   
    };
    
    // const { status, error } = useSelector((state) => state.blog);

    const handleUpdateBlog = (updateBlogData) => {
      dispatch(sendData(updateBlogData));
  }

  // async function sendData(updateBlogData) {
  //   console.log(updateBlogData, "blogdata");
  //   try {
  //     let respone = await fetch(
  //       `/api/v1/blogs/update-blog/${id}`,
  //       {
  //         method: "PATCH",
  //         headers: {
  //           Accept: "application/json",
  //           "Content-Type": "application/json",
  //         },
  //         body: JSON.stringify(updateBlogData),
  //       }
  //     );

  //     let data = await respone.json();
  //     console.log(data, "editdata");

  //     if (data.sucess) {
  //       window.alert("Blog Updated Sucessfully");
  //       getBlogById();
  //     } else {
  //       window.alert("Something went wrong");
  //     }
  //   } catch (error) {
  //     console.log(error);
  //     window.alert(error);
  //   }
  // }
  return (
    <div className=" lg:px-96">
      <div className="left w-full lg:w-full lg:h-screen bg-white flex flex-col justify-center items-center px-8 py-4 lg:px-40">
        <h1 className=" text-black text-2xl font-bold my-8">Edit Your Blog</h1>
        <form action="">
          <label htmlFor="" className=" text-left w-full">
            Blog title
          </label>

          <input
            onChange={(e) => {
              setUpdateData({ title: e.target.value });
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
            onChange={(e) => {
              setUpdateData({ description: e.target.value });
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
            onChange={(e) => {
              setUpdateData({ image: e.target.value });
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
            onChange={(e) => {
              setUpdateData({ category: e.target.value });
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
