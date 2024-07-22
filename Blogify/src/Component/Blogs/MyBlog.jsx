import { json } from 'express'
import React, { useEffect } from 'react'

function MyBlog() {
  let userid =localStorage.getItem("userId")
  // userid=JSON.parse(userid)
  console.log(userid)
 useEffect(()=>{
  fetch(`/api/v1/blogs/get-blog/${userid}`).then((data)=>{
console.log(data,"my blogdata")
  })
 },[])


 

  return (
    <div>MyBlog</div>

  )
}

export default MyBlog