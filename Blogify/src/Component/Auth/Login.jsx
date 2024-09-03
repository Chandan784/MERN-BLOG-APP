import React, { useContext, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import AuthContext from "../Store/AuthStore";
import "react-toastify/dist/ReactToastify.css";
import { login } from "../../Redux/api/auth";
import { useDispatch } from "react-redux";
import PrimaryButton from "../common/PrimaryButton";
import { FaRegEyeSlash } from "react-icons/fa6";
import { IoEyeSharp } from "react-icons/io5";

function Login() {
  const [passwordShow, setPasswordShow] = useState(false);
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
      localStorage.setItem("userId", JSON.stringify(actionResult.payload.user._id));
      authData.setIsLogin(true);
      navigate("/");
    } else {
      window.alert(actionResult.payload.message);
    }
  }

  return (
    <div className="relative overflow-clip py-20 sm:py-24 md:py-28 lg:py-32 bg-[#ffd1b0] flex justify-center">
      <div className="absolute inset-0 bg-[#F9E7CA] blur-[21px]"></div>
      <div className="relative z-10 w-[90%] sm:w-full mx-auto max-w-[550px] px-4 sm:px-8 py-8 lg:px-10 bg-[#F9E7CA] flex flex-col rounded-lg shadow-lg">
        <div className="flex justify-center">
        <h1 className="text-blue-600 text-3xl  md:text-4xl font-black min-w-max relative after:absolute after:-bottom-1 after:left-0 after:w-full after:h-0.5 after:bg-blue-600">Sign In</h1>
        </div>
        <h2 className="text-slate-600 text-2xl text-center md:text-3xl pt-4 pb-6 font-bold">Welcome to BLOGIFY</h2>
        <form>
          <label htmlFor="email" className="text-base md:text-lg">Email</label>
          <input
            type="email"
            required
            id="email"
            ref={emailRef}
            className="w-full bg-slate-300 rounded-lg py-2 px-2 outline-slate-500 my-2"
          />
          <div className="pt-2">
            <label htmlFor="password" className="text-base md:text-lg">Password</label>
            <div className="relative">
              <div onClick={() => setPasswordShow(!passwordShow)} className="absolute cursor-pointer end-3 top-1/2 -translate-y-1/2">
                {passwordShow ? (<FaRegEyeSlash className="h-6 w-6" />) : (<IoEyeSharp className="h-6 w-6" />)}
              </div>
              <input
                required
                type={passwordShow ? "text" : "password"}
                id="password"
                ref={passwordRef}
                className="w-full bg-slate-300 rounded-lg py-2 ps-2 pe-8 my-2 outline-slate-500"
              />
            </div>
          </div>

          <PrimaryButton onClick={handelLoginBtn} className={"!bg-slate-600 !text-white mt-5 !w-full !py-2"}>Sign In</PrimaryButton>
          <p className="text-sm md:text-base mt-5 text-center">
            Don't have an account?{" "}
            <Link to="/email-verify" className="font-bold hover:text-blue-500 duration-300">
              Register Here
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}

export default Login;
