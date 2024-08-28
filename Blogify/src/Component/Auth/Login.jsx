import React, { useContext, useRef } from "react";

import { Link, useNavigate } from "react-router-dom";
import AuthContext from "../Store/AuthStore";
import "react-toastify/dist/ReactToastify.css";
import { login } from "../../Redux/api/auth";
import { useDispatch, useSelector } from "react-redux";

function Login() {
  let authData = useContext(AuthContext);

  let emailRef = useRef();
  let passwordRef = useRef();

  let navigate = useNavigate();

  let dispatch = useDispatch();

  async function handelLoginBtn(e) {
    e.preventDefault();

    let email = emailRef.current.value;
    let password = passwordRef.current.value;

    let obj = { email, password };

    let actionResult = await dispatch(login(obj));
    console.log(actionResult, "login by id");

    if (login.fulfilled.match(actionResult)) {
      window.alert(actionResult.payload.message);

      localStorage.setItem(
        "userId",
        JSON.stringify(actionResult.payload.user._id)
      );
      authData.setIsLogin(true);
      navigate("/");
    } else {
      window.alert(actionResult.payload.message);
    }


  }
  // function handelLoginBtn() {
  //   console.log("signup");
  //   authData.setIsLogin(true);

  //   navigate("/");
  // }

  return (
    // <div className=" w-full text-center h-screen flex justify-center items-center bg-slate-200">
    <div className=" h-screen lg:bg-slate-200 w-full  flex  flex-col justify-center items-center flex-col-reverse lg:flex-row      ">
      <div className="left w-full lg:w-1/4 bg-white flex flex-col justify-center items-center  py-4 px-8 lg:px-16 md:w-full h-3/4 lg:h-2/4  ">
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
          className=" w-full lg:w-40 bg-slate-800   rounded-2xl py-3 px-4 my-4  text-white font-semibold mt-12  "
          onClick={handelLoginBtn}
        >
          Sign In
        </button>
        <h1>
          Don't have an account?{" "}
          <Link to="/email-verify" className=" font-bold hover:text-blue-500">
            Register Here
          </Link>
        </h1>

        {/* <p className=" font-bold">Forgot Password</p> */}
      </div>


    </div>
  
  );
}

export default Login;
