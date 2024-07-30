import React, { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import CommentCard from "../Comment/CommentCard";
import { IoMdSend } from "react-icons/io";

function BlogDetails() {
  let [comment, setComment] = useState("");
  let [comments, setComments] = useState([]);
  let [blogData, setBlogData] = useState({})
  let {id}=useParams()
  useEffect(() => {
    async function getBlogDatabyId(){
      let blogresponse = await fetch(`http://localhost:8080/api/v1/blogs/get-blog/${id}`)
      let singleBlogData = await blogresponse.json()
      console.log(singleBlogData, 'single blog data')
      setBlogData(singleBlogData.blog)
    }

    async function getBlogComments() {
      let responsecom = await fetch(
        `http://localhost:8080/api/v1/comments/get-blog-comments/${id}`
      );
      let commentData = await responsecom.json();
      console.log(commentData, "commentdata");
      setComments(commentData.blog.comments);
    }
    getBlogDatabyId()
    getBlogComments();
  }, []);

  let user = JSON.parse(localStorage.getItem("userId"));

  function handelSendBtn() {
    addComment(id, user, comment);
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

  return (
  
    <h1>hello</h1>
  );
}

export default BlogDetails;
