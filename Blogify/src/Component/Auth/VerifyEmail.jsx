import React from "react";
import Modal from "@mui/material/Modal";
import OtpInput from "react-otp-input";
import { useState } from "react";

function VerifyEmail() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [otp, setOtp] = useState('');
    console.log(otp,'otp')
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

        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <div className=" absolute flex flex-col items-center justify-center left-2/4 top-2/4
            transform -translate-x-1/2 -translate-y-1/2 w-fit px-12 h-2/4 lg:h-1/4 lg:w-1/4 w-40 bg-slate-300 rounded-lg">
            <OtpInput 
              inputStyle={{
                height:40,
                width:40,
                borderRadius:5,
                margin:2
              } }
              value={otp}
              onChange={setOtp}
              numInputs={4}
              renderSeparator={<span>-</span>}
              renderInput={(props) => <input {...props} />}
            />
            <button
          onClick={handleOpen}
          className="w-52  bg-slate-800   rounded-2xl py-3 px-4 my-6  text-white font-semibold mt-6 "
        >
          Verify
        </button>
          </div>
        </Modal>
        <button
          onClick={handleOpen}
          className=" w-full bg-slate-800   rounded-2xl py-3 px-4 my-6  text-white font-semibold mt-6 "
        >
          Verify
        </button>
      </div>
    </div>
  );
}

export default VerifyEmail;
