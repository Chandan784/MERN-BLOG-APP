import React, { useContext, useState } from "react";

import { Link, useLocation, useNavigate } from "react-router-dom";
import { useRef } from "react";
import AuthContext from "../Store/AuthStore";
import { useDispatch } from "react-redux";
import { signup } from "../../Redux/api/auth";
import PrimaryButton from "../Common/PrimaryButton";
import { EditIcon } from "../Common/Icons";

function Signup() {
  let authData = useContext(AuthContext);
  let email = "";
  let navigate = useNavigate();
  let { state } = useLocation();
  const [imagePreview, setImagePreview] = useState(null);

  console.log(state, "state data");

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

    let obj = { username, email, password };
    console.log(obj, "obj data");

    let actionResult = await dispatch(signup(obj));
    console.log(actionResult, "dispatch signup data ");

    if (signup.fulfilled.match(actionResult)) {
      window.alert(actionResult.payload.message);
      navigate("/login");
    } else {
      window.alert(actionResult.payload.message);
    }
  }

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className=" w-full text-center py-16 md:py-20 lg:py-24 flex justify-center items-center bg-slate-200">
      <div className=" bg-slate-200 flex  flex-col justify-center items-center lg:flex-row ">
        <div className="left w-full max-w-[550px] rounded-md bg-white flex flex-col justify-center items-center p-6">
          <h2 className=" text-black text-2xl lg:text-3xl font-bold mb-4">Sign Up</h2>
          <div className="relative">
            <div className='h-24 w-24 rounded-full border border-gray-500 bg-[#E3E3E3] overflow-hidden relative'>
              {imagePreview ? (
                <img src={imagePreview} alt="avatar" className='h-full w-full object-cover' />
              ) : (<img
                className="border-4 border-white rounded-full"
                src="https://i.imghippo.com/files/hsQ8q1725361317.webp"
                alt="User Img"
              />)}
            </div>
            <div className="absolute z-30 bottom-1 -right-0">
              <label htmlFor="image" className='text-sm text-gray-600 cursor-pointer h-7 w-7 shadow shadow-black bg-white rounded-full flex items-center justify-center'>
                <EditIcon />
              </label>
              <input type="file" id="image" name="avatar" accept="image/png, image/jpeg" hidden onChange={handleImageChange} />
            </div>
          </div>
          <label htmlFor="userName" className=" text-left w-full pt-4">
            Username
          </label>
          <input
            type="text"
            id="userName"
            ref={userNameRef}
            placeholder="Enter Username"
            className="w-full bg-slate-300 rounded-lg py-2 px-4 my-2 outline-slate-500"
          />
          <label htmlFor="passwordId" className="mt-2 w-full text-left">
            Password
          </label>
          <input
            type="text"
            id="passwordId"
            ref={passwordRef}
            placeholder="Enter Password"
            className="w-full bg-slate-300 rounded-lg py-2 px-4 my-2 outline-slate-500"
          />
          {/* <button
            className=" w-full bg-slate-800   rounded-2xl py-3 px-4 my-6  text-white font-semibold mt-12  "
            onClick={handelSignupBtn}
          >
            Sign Up
          </button> */}
          <PrimaryButton onClick={handelSignupBtn} className={"mb-2 mt-3 !px-5 lg:!px-8 !bg-green-500"}>Sign Up</PrimaryButton>
          <h3 className="text-base lg:text-lg mt-1">
            Already have an account?{" "}
            <Link to="/login" className=" font-bold hover:text-blue-500">
              Login
            </Link>
          </h3>
        </div>
      </div>
    </div>
  );
}

export default Signup;
