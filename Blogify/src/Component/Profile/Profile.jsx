import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { IoIosCreate } from "react-icons/io";
import MyBlog from "../Blogs/MyBlog";
import { useNavigate } from "react-router-dom";
import AuthContext from "../Store/AuthStore";
import { useContext } from "react";

function Profile() {
  let [userData, setUserData] = useState({});
  let [postLength, setPostLength] = useState(0);
  let user = JSON.parse(localStorage.getItem("userId"));
  useEffect(() => {
    async function getUserData() {
      let response = await fetch(`/api/v1/users/${user}`);
      let data = await response.json();
      console.log(data, "user json data");
      setUserData(data.user);
      setPostLength(data.user.blog.length);

    }
    getUserData();

  }, [postLength]);
  console.log(userData,"user data");
  
  let navigate = useNavigate();
  


  let authData = useContext(AuthContext)
  function handelLogoutBtn() {
    navigate("/login");
    authData.setIsLogin(false);
    localStorage.removeItem("userId");
  }
  // function handelProfile(){

  // }

  return (
    <>
      <div className=" w-full  h-auto flex justify-center my-10 gap-60 mt-24  ">
        <div className="  flex flex-col items-center text-center ">
          <div className=" size-40 ">
            <img
              className=" flex rounded-full"
              src="https://th.bing.com/th?id=OIP.Gfp0lwE6h7139625a-r3aAHaHa&w=250&h=250&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2"
              alt="User Img"
            />
          </div>
          <div className=" py-3">
            <h1 className=" text-xl font-bold my-2">{userData.username}</h1>
            <h3>{userData.email}</h3>
          </div>
          <div className=" follow flex gap-4 my-2">
            <div className=" flex flex-col justify-center items-center font-bold">
              <p className=" text-2xl">{postLength}</p>
              <h1>Posts</h1>
            </div>
            <div className=" flex flex-col justify-center items-center font-bold">
              <p className=" text-2xl">{userData.followerCount}</p>
              <h1>Followers</h1>
            </div>
            <div className=" flex flex-col justify-center items-center font-bold">
              <p className=" text-2xl">{userData.followingCount}</p>
              <h1>Following</h1>
            </div>
          </div>
          <Link to="/edit-profile">
            <button className=" w-52 items-center justify-center bg-slate-900 hover:bg-slate-500 hover:text-black rounded-2xl py-2 px-4 my-4 text-white font-semibold  ">
              Edit Profile
            </button>
          </Link>
          <Link to="/create-blog">
            <button className=" flex gap-4 w-52 items-center justify-center bg-slate-900 hover:bg-slate-500 hover:text-black rounded-2xl py-2 px-4 text-white font-semibold  ">
              <IoIosCreate className="text-2xl" /> Create Post
            </button>
          </Link>
          <Link onClick={handelLogoutBtn} className="flex gap-4 w-52 items-center justify-center bg-slate-900 hover:bg-slate-500 hover:text-black rounded-2xl py-2 px-4 my-4 text-white font-semibold">
            Logout
          </Link>
          <div className="">
            <h1 className=" text-xl font-bold my-3 border-4 border-l-0 border-r-0 border-t-0 border-b-slate-800">
              My Blogs
            </h1>
            <MyBlog  />
          </div>
        
        </div>
        {/* <div className=' flex size-96 mx-10'>
                <img src="https://avatars.githubusercontent.com/u/129975307?v=4" alt="User Img" />
            </div> */}
      </div>
    </>
  );
}

export default Profile;
