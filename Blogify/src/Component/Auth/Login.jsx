import React, { useContext, useRef } from "react";

import { Link, useNavigate } from "react-router-dom";
import AuthContext from "../Store/AuthStore";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


function Login() {
  let authData = useContext(AuthContext);

  let emailRef = useRef();
  let passwordRef = useRef();

  async function handelLoginBtn(e) {
    e.preventDefault();

    let email = emailRef.current.value;
    let password = passwordRef.current.value;

    try {
      let responce = await fetch("/api/v1/users/login", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          password,
        }),
      });

      let data = await responce.json();

      notify("sucess");

      console.log(data);

      if (data.sucess) {
        window.alert(data.message);

        localStorage.setItem("userId", JSON.stringify(data.user._id));
        authData.setIsLogin(true);
        navigate("/");
      } else {
        window.alert(data.message);
      }
    } catch (error) {
      window.alert(error);
      console.log(error);
    }
  }

  let notify = (message) => {
    toast.success(message);
  };
  let navigate = useNavigate();

  // function handelLoginBtn() {
  //   console.log("signup");
  //   authData.setIsLogin(true);

  //   navigate("/");
  // }

  return (
    <div className=" w-full text-center h-screen flex justify-center items-center bg-slate-200">
      <div className=" h-screen bg-slate-200 w-full lg:w-3/4 flex  flex-col justify-center items-center flex-col-reverse lg:flex-row     ">
        <div className="left w-full lg:w-2/4  bg-white flex flex-col justify-center items-center  py-4 px-4 lg:px-40 h-3/4   ">
          <h1 className=" text-black text-2xl font-bold my-8">Sign In</h1>

          <label htmlFor="" className=" text-left w-full">
            Email
          </label>

          <input
            type="text"
            id=" "
            ref={emailRef}
            className=" w-full bg-slate-300  rounded-lg py-2 px-4 my-2  outline-slate-500"
          />

          <label htmlFor="" className=" w-full text-left">
            Password
          </label>

          <input
            type="text"
            id=" "
            ref={passwordRef}
            className="  w-full bg-slate-300  rounded-lg py-2 px-4 my-2  outline-slate-500"
          />

          <button
            className=" w-full bg-slate-800   rounded-2xl py-3 px-4 my-4  text-white font-semibold mt-12  "
            onClick={handelLoginBtn}
          >
            Sign In
          </button>

          <p className=" font-bold">Forgot Password</p>
        </div>

        <div className="right w-full lg:w-2/4 bg-slate-800 flex justify-center items-center flex-col h-3/4">
          <h1 className=" text-white text-4xl  font-semibold ">
            Welcome to Login
          </h1>

          <p className=" text-white text-lg my-4">Don't have an Account</p>

          <Link
            to="/signup"
            className=" text-white border-2 border-white rounded-xl px-4 p-2  font-semibold "
          >
            Sign Up
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Login;
