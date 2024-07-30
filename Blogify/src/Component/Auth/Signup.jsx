import React, { useContext } from "react";

import { Link, useNavigate } from "react-router-dom";
import { useRef } from "react";
import AuthContext from "../Store/AuthStore";

function Signup() {
  let authData = useContext(AuthContext);
  let navigate = useNavigate();

  let userNameRef = useRef();
  let emailRef = useRef();
  let passwordRef = useRef();

  function handelSignupBtn(e) {
    e.preventDefault();
    let username = userNameRef.current.value;
    let email = emailRef.current.value;
    let password = passwordRef.current.value;

    try {
      fetch("http://localhost:8080/api/v1/users/register", {                                   
        method: "post",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },

        //make sure to serialize your JSON body
        body: JSON.stringify({
          username,
          email,
          password,
        }),
      })
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          console.log(data);
          if (data.sucess) {
            window.alert("User created");
            localStorage.setItem("userId", JSON.stringify(data.user._id));
            authData.setIsLogin(true);
            navigate("/");
          } else {
          }
        });
    } catch (error) {
      console.log(error.message);
    }
  }
  return (
    <div className=" w-full text-center h-screen flex justify-center items-center bg-slate-200">
      <div className=" h-screen bg-slate-200  w-full lg:w-3/4 flex  flex-col justify-center items-center flex-col-reverse lg:flex-row ">
        <div className="left w-full w-full lg:w-2/4 h-3/4 bg-white flex flex-col justify-center items-center px-8 py-4 px-4 lg:px-40">
          <h1 className=" text-black text-2xl font-bold my-8">Sign Up</h1>

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
            Email
          </label>

          <input
            type="text"
            id=" "
            ref={emailRef}
            placeholder="Enter Email"
            className="  w-full bg-slate-300  rounded-lg py-2 px-4 my-2  outline-slate-500"
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
            className=" w-full bg-slate-800   rounded-2xl py-3 px-4 my-4  text-white font-semibold mt-12  "
            onClick={handelSignupBtn}
          >
            Sign Up
          </button>
        </div>

        <div className="right w-full lg:w-2/4  bg-slate-800 flex justify-center items-center flex-col h-3/4">
          <h1 className=" text-white text-4xl  font-semibold ">
            Welcome to Sign Up
          </h1>

          <p className=" text-white text-lg my-4">Already have an Account</p>

          <Link
            to="/login"
            className=" text-white border-2 border-white rounded-xl px-4 p-2  font-semibold "
          >
            Log In
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Signup;
