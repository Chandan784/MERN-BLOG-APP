import React, { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import CommentCard from "../Comment/CommentCard";
import { IoMdSend } from "react-icons/io";
import { getAllBlogs } from "../../Redux/api/blog";
import { useDispatch, useSelector } from "react-redux";
import { addCommentById, getAllComments } from "../../Redux/api/comment";

function BlogDetails() {
  let [comment, setComment] = useState("");
  // let [comments, setComments] = useState([]);
  let [blogData, setBlogData] = useState({});
  let { id } = useParams();
  let dispatch = useDispatch();
  useEffect(() => {
    async function getBlogDatabyId() {
      let blogresponse = await fetch(`/api/v1/blogs/get-blog/${id}`);
      let singleBlogData = await blogresponse.json();
      console.log(singleBlogData, "single blog data");
      setBlogData(singleBlogData.blog);
    }

    async function getBlogComments() {
      dispatch(getAllComments(id));
      // setComments(commentData.blog.comments);
    }
    getBlogDatabyId();
    getBlogComments();
  }, [dispatch, id]);

  let user = JSON.parse(localStorage.getItem("userId"));

  function handelSendBtn() {
    // addComment(id, user, comment);
    const blogId = id; // This is likely the blog's ObjectId
    const userId = user; // This should be the user's ObjectId
    const text = comment;

    dispatch(
      addCommentById({
        blog: blogId,
        user: userId,
        text,
      })
    );
  }
  // async function addComment() {
  //   let actionResult = await dispatch(addCommentById());
  //   console.log(actionResult, "action result");

  //   // const {data , loading} =useSelector((state)=> state.comment)
  //   // if (addCommentById.fulfilled.match(actionResult)) {
  //   //   alert(actionResult.message);
  //   // } else {
  //   //   alert(actionResult.message);
  //   // }
  // }
  const { data, loading } = useSelector((state) => state.comment);

  let reverseData = [...data].reverse();
  console.log(data, "comment store data");

  return (
    <div className=" h-fit w-full text-left flex flex-col mt-16 lg:mt-20 px-8 lg:px-72 py-10 ">
      <div className=" flex items-center justify-start w-full gap-4 pl-4 pb-4 ">
        <img
          className="h-10 rounded-full "
          src="https://th.bing.com/th/id/OIP.f3TNr7NBbIf89gXmb0wS_QAAAA?w=214&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7"
          alt=""
        />
        <div>
          <h1 className=" font-medium">khirod567</h1>
          <p> {blogData.createdAt}</p>
        </div>
      </div>
      <h1 className=" text-3xl my-2 font-semibold ">{blogData.title}</h1>
      <img className=" h-[250px] lg:h-[500px]" src={blogData.image} alt="" />

      <p className=" text-xl my-8 font-normal">{blogData.description}</p>
      <div className=" w-full lg:w-3/4  ">
        <div
          className=" flex gap-4 items-center h-fit relative bg-white w-full shadow-lg border-t-2 border-slate-400 border-solid
      shadow-slate-400 rounded-sm p-4 "
        >
          <img
            src="https://th.bing.com/th/id/OIP.f3TNr7NBbIf89gXmb0wS_QAAAA?w=214&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7"
            alt=""
            className=" h-10 rounded-full flex   "
          />
          <textarea
            onChange={(e) => {
              setComment(e.target.value);
            }}
            type="text"
            placeholder="Enter your comment "
            className=" w-full h-fit  overflow-hidden py-2 border-2 border-slate-800 rounded-lg border-none outline-none break-words"
          />

          <IoMdSend className=" text-4xl  " onClick={handelSendBtn} />
        </div>
      </div>
      {reverseData.map((e) => {
        return <CommentCard data={e} />;
      })}
    </div>
  );
}

export default BlogDetails;
