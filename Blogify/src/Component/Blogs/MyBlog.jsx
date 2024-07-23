import React, { useEffect } from "react";

function MyBlog() {
  let userid = JSON.parse(localStorage.getItem("userId"));

  console.log(userid);
  useEffect(() => {
    fetch(`/api/v1/blogs/user-blog/${userid}`)
      .then((response) => {
        console.log(response, "my blogdata");
        return response.json();
      })
      .then((data) => {
        console.log(data, "data");

        console.log(data.userBlogs.blog);
      });
  }, []);

  return <div>MyBlog</div>;
}

export default MyBlog;
