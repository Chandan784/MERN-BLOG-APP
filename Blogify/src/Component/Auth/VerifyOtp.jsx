import React from "react";

function VerifyOtp() {
  
  return (
    <div className=" h-screen lg:bg-slate-200 w-full  flex  flex-col justify-center items-center flex-col-reverse lg:flex-row      ">
      <div className="left w-full lg:w-1/4 bg-white flex flex-col justify-center items-center px-8 lg:px-16 md:w-full lg:h-2/4  ">
        <h1 className=" text-black text-2xl font-bold my-8">Verify Yourself</h1>
        <div className=" w-full text-left relative">
          <label htmlFor="" className=" w-full text-left">
            Email
          </label>

          <input
            type="text"
            id=" "
            // ref={emailRef}
            placeholder="Enter Email"
            className="  w-full bg-slate-300  rounded-lg py-2 px-4 my-2  outline-slate-500"
          />
        </div>
        <button className=" w-full bg-slate-800   rounded-2xl py-3 px-4 my-6  text-white font-semibold mt-6 ">
          Verify
        </button>
      </div>
    </div>
  );
}

export default VerifyOtp;
