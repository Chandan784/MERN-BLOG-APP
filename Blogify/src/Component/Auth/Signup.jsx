import React, { useContext } from "react";

import { Link, useLocation, useNavigate } from "react-router-dom";
import { useRef } from "react";
import AuthContext from "../Store/AuthStore";
import { useDispatch } from "react-redux";
import { signup } from "../../Redux/api/auth";

function Signup() {
  let authData = useContext(AuthContext);
  let email = "";
  let navigate = useNavigate();
  let { state } = useLocation();
  let dispatch = useDispatch();
  if (state == null) {
    navigate("/email-verify");
  } else {
    email = state.email;
  }
  let userNameRef = useRef();
  let passwordRef = useRef();

  async function handelSignupBtn(e) {
    e.preventDefault();
    let username = userNameRef.current.value;

    let password = passwordRef.current.value;

    let obj = { username,email, password };

    let actionResult = await dispatch(signup(obj));
    console.log (actionResult, 'dispatch signup data ')

    // if (signup.fulfilled.match(actionResult)) {
    //   window.alert(actionResult.payload.message);

    //   localStorage.setItem(
    //     "userId",
    //     JSON.stringify(actionResult.payload.user._id)
    //   );
    //   authData.setIsLogin(true);
    //   navigate("/");
    // } else {
    // }

    // try {
    //   fetch("/api/v1/users/register", {
    //     method: "post",
    //     headers: {
    //       Accept: "application/json",
    //       "Content-Type": "application/json",
    //     },

    //     //make sure to serialize your JSON body
    //     body: JSON.stringify({
    //       username,
    //       email,
    //       password,
    //     }),
    //   })
    //     .then((response) => {
    //       return response.json();
    //     })
    //     .then((data) => {
    //       console.log(data);
    //       if (data.sucess) {
    //         window.alert("User created");
    //         localStorage.setItem("userId", JSON.stringify(data.user._id));
    //         authData.setIsLogin(true);
    //         navigate("/");
    //       } else {
    //       }
    //     });
    // } catch (error) {
    //   console.log(error.message);
    // }
  }
  return (
    <div className=" w-full text-center h-screen flex justify-center items-center bg-slate-200">
      <div className=" h-screen bg-slate-200  w-full lg:w-3/4 flex  flex-col justify-center items-center flex-col-reverse lg:flex-row ">
        <div className="left  w-full lg:w-2/4 h-full lg:h-3/4 bg-white flex flex-col justify-center items-center px-8 py-4 px-4 lg:px-40">
          <h1 className=" text-black text-2xl font-bold my-8">Sign Up</h1>
          <label htmlFor=""></label>
          <img
            className=" h-40 "
            src="https://cdn-icons-png.flaticon.com/128/5004/5004111.png"
            alt=""
          />
          {/* <input className=" hidden" type="file" name="" id="" /> */}
          <button className=" my-2 bg-slate-800 text-white rounded-md px-2 py-1">
            Upload Image
          </button>
          <label htmlFor="" className=" text-left w-full">
            Username
          </label>

          <input
            type="text"
            id=" "
            ref={userNameRef}
            placeholder="Enter Username"
            className=" w-full bg-slate-300  rounded-lg py-2 px-4 my-2  outline-slate-500"
          />
          <label htmlFor="" className=" w-full text-left">
            Password
          </label>

          <input
            type="text"
            id=" "
            ref={passwordRef}
            placeholder="Enter Password"
            className="  w-full bg-slate-300  rounded-lg py-2 px-4 my-2  outline-slate-500"
          />

          <button
            className=" w-full bg-slate-800   rounded-2xl py-3 px-4 my-6  text-white font-semibold mt-12  "
            onClick={handelSignupBtn}
          >
            Sign Up
          </button>
          <h1>
            Already have an account?{" "}
            <Link to="/login" className=" font-bold hover:text-blue-500">
              Login
            </Link>
          </h1>
        </div>
      </div>
    </div>
  );
}

export default Signup;
