import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import CommentCard from "../Comment/CommentCard";
import { IoMdSend } from "react-icons/io";

function BlogDetails() {
  let [comment, setComment] = useState("");
  let [comments, setComments] = useState([]);
  let data = useLocation();
  console.log(data, "blogdata");

  useEffect(() => {
    async function getBlogComments() {
      let responsecom = await fetch(
        `/api/v1/comments/get-blog-comments/${data.state._id}`
      );
      let commentData = await responsecom.json();
      console.log(commentData, "commentdata");
      setComments(commentData.blog.comments);
    }

    getBlogComments();
  }, [comments]);

  let user = JSON.parse(localStorage.getItem("userId"));

  function handelSendBtn() {
    addComment(data.state._id, user, comment);
  }
  async function addComment(blog, user, text) {
    let response = await fetch("/api/v1/comments/add-comment", {
      method: "post",
      headers: {
        accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ blog, user, text }),
    });
    let data = await response.json();
    console.log(data);
    if (data.success) {
      alert(data.message);
    } else {
      alert(data.message);
    }
  }

  if (data == null) {
    console.log("data is null");
  }
  console.log(data);

  return (
    <div className=" h-fit w-full text-left flex flex-col px-8 lg:px-72 py-10 ">
      --
      <img className=" h-[250px] lg:h-[400px]" src={data.state.image} alt="" />
      <h1 className=" text-3xl my-8 font-bold">{data.state.title}</h1>
      <p className=" text-xl my-8 font-semibold">{data.state.description}</p>
      <div className=" w-full lg:w-3/4  ">
      {/* comment */}
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
      {comments.map((e) => {
        return <CommentCard data={e} />;
      })}
    </div>
  );
}

export default BlogDetails;
