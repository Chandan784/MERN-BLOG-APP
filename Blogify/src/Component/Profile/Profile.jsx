import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { IoIosCreate } from "react-icons/io";
import MyBlog from "../Blogs/MyBlog";
import { useNavigate } from "react-router-dom";
import AuthContext from "../Store/AuthStore";
import { useContext } from "react";
import { useDispatch } from "react-redux";
import { getUserById } from "../../Redux/api/profile";
import LinkButton from "../common/LinkButton";
import PrimaryButton from "../common/PrimaryButton";
// import { bgprofile } from "../../assets/images/profile-bg.webp";

function Profile() {
  let [userData, setUserData] = useState({});
  let [postLength, setPostLength] = useState(0);
  let id = JSON.parse(localStorage.getItem("userId"));
  let dispatch = useDispatch();
  useEffect(() => {
    async function getUserData() {
      let actionResult = await dispatch(getUserById(id))

      setUserData(actionResult.payload.user);
      setPostLength(actionResult.payload.user.blog.length);
    }

    getUserData();
  }, [postLength]);
  console.log(userData, "user data");

  let navigate = useNavigate();

  let authData = useContext(AuthContext);
  function handelLogoutBtn() {
    navigate("/login");
    authData.setIsLogin(false);
    localStorage.removeItem("userId");
  }
  // function handelProfile(){

  // }

  return (
    <>

      <div className="w-full relative z-10">
        <div className="h-[200px] sm:h-[240px] md:h-[280px] lg:h-[320px] max-w-[1920px] w-full object-cover">
          <img src="https://i.imghippo.com/files/12e0F1725357929.webp" className="w-full max-w-[1920px] h-full object-cover" alt="image" />
        </div>
        <div className="mx-auto relative w-full max-w-[500px] md:max-w-[800px] xl:max-w-[900px]">
          <div className="flex flex-col md:flex-row pt-12 md:pt-16 lg:pt-20 pb-20 sm:pb-24 md:pb-28 lg:pb-32 px-4">
            <div className="w-full md:w-7/12 md:pe-3">
              <div className="size-32 md:size-36 lg:size-40 absolute -top-20 left-1/2 -translate-x-1/2 md:left-4 md:translate-x-0">
                <img
                  className="border-4 border-white rounded-full"
                  src="https://i.imghippo.com/files/hsQ8q1725361317.webp"
                  alt="User Img"
                />
              </div>
              <p className="text-lg text-center md:text-left md:text-xl font-bold pt-4">{userData.username}</p>
              <p className="text-lg text-center md:text-left md:text-xl font-bold pt-2">{userData.email}</p>
              <div className="flex gap-2 justify-between md:gap-3 mt-4">
                <div className="flex max-w-[150px] w-full flex-col justify-center items-center px-4 py-6 md:px-5 rounded-md bg-blue-600/40 shadow-sm">
                  <h3 className="text-2xl font-bold">{postLength}</h3>
                  <p className="text-sm md:text-base">Posts</p>
                </div>
                <div className=" flex max-w-[150px] w-full flex-col justify-center items-center px-4 py-6 md:px-5 rounded-md bg-blue-600/40 shadow-sm">
                  <h3 className="text-2xl font-bold">{userData.followerCount}</h3>
                  <p className="text-sm md:text-base">Followers</p>
                </div>
                <div className=" flex max-w-[150px] w-full flex-col justify-center items-center px-4 py-6 md:px-5 rounded-md bg-blue-600/40 shadow-sm">
                  <h3 className="text-2xl font-bold">{userData.followingCount}</h3>
                  <p className="text-sm md:text-base">Following</p>
                </div>
              </div>
            </div>
            <div className="w-full flex flex-col gap-4 md:w-5/12 md:ps-3 justify-end pt-4 md:pt-0">
              <LinkButton pathName="/edit-profile" className={"!text-white !bg-slate-900"} >Edit Profile</LinkButton>
              <LinkButton pathName="/create-blog" className={"!text-white !bg-slate-900 flex justify-center"} ><IoIosCreate className="text-2xl" /> Create Post</LinkButton>
              <PrimaryButton onClick={handelLogoutBtn} className={"!text-white !bg-slate-900 "} >Logout</PrimaryButton>

              {/* <Link to="/create-blog">
                <button className=" flex gap-4 w-52 items-center justify-center bg-slate-900 hover:bg-slate-500 hover:text-black rounded-2xl py-2 px-4 text-white font-semibold  ">
                  <IoIosCreate className="text-2xl" /> Create Post
                </button>
              </Link> */}
              {/* <Link
                onClick={handelLogoutBtn}
                className="flex gap-4 w-52 items-center justify-center bg-slate-900 hover:bg-slate-500 hover:text-black rounded-2xl py-2 px-4 my-4 text-white font-semibold"
              >
                Logout
              </Link> */}
            </div>
          </div>
        </div>
        {/* <div className="size-40">
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
          <Link
            onClick={handelLogoutBtn}
            className="flex gap-4 w-52 items-center justify-center bg-slate-900 hover:bg-slate-500 hover:text-black rounded-2xl py-2 px-4 my-4 text-white font-semibold"
          >
            Logout
          </Link> */}
        <div className="bg-slate-50">
          <h1 className="text-center text-2xl md:text-3xl lg:text-4xl font-bold py-6 border-t border-b-slate-800/70">
            My Blogs
          </h1>
          <MyBlog />
        </div>

        {/* <div className=' flex size-96 mx-10'>
                <img src="https://avatars.githubusercontent.com/u/129975307?v=4" alt="User Img" />
            </div> */}
      </div>
    </>
  );
}

export default Profile;
