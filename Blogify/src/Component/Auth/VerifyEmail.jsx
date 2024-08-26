import React from "react";
import Modal from "@mui/material/Modal";
import OtpInput from "react-otp-input";
import { useState } from "react";
import CircularProgress from "@mui/material/CircularProgress";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { verifyEmail, verifyOtp } from "../../Redux/api/auth";
import { act } from "react";

function VerifyEmail() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [otp, setOtp] = useState("");
  const [Loading, setLoading] = useState(false);
  console.log(otp, "otp");
  let [emailId, setEmailId] = useState("");
  console.log(emailId, "email id");

  let navigate = useNavigate();
  let dispatch = useDispatch()
  function handleVerifyEmailOnClick(e) {
    e.preventDefault();
    setLoading(true);
    sendOtpByMail(emailId).then(() => {
      console.log("hi");
      setLoading(false);
      handleOpen();
    });
    setOtp("");
  }

  function handleVerify(e) {
    e.preventDefault();
    e.stopPropagation();
    verifyByOtp(emailId, otp);
  }

  async function sendOtpByMail(email) {
   await dispatch(verifyEmail({email}))
  }

  async function verifyByOtp(email, otp) {
    let actionResult = await dispatch(verifyOtp({email,otp}))
    // let otpRes = await fetch("/api/v1/otp/verify-otp", {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //     Accept: "appliacation/json",
    //   },
    //   body: JSON.stringify({ email, otp }),
    // });
    // let otpData = await otpRes.json();
    // console.log(otpData, "otp data");
    if (verifyOtp.fulfilled.match(actionResult)) {
      window.alert(actionResult.payload.message);
      navigate("/signup");
    } else {
      window.alert(actionResult.payload.message);
    }
  }

  return (
    <div className=" h-screen lg:bg-slate-200 w-full  flex  flex-col justify-center items-center flex-col-reverse lg:flex-row      ">
      {Loading ? (
        <CircularProgress className=" absolute z-20 " size={80} />
      ) : null}
      <div className="left w-full lg:w-1/4 bg-white flex flex-col justify-center items-center px-8 lg:px-16 md:w-full lg:h-2/4  ">
        <h1 className=" text-black text-2xl font-bold my-8">Verify Yourself</h1>
        <form action="" method="POST">
          <div className=" w-full text-left relative">
            <label htmlFor="" className=" w-full text-left">
              Email
            </label>

            <input
              onChange={(e) => {
                setEmailId(e.target.value);
              }}
              required
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
            <div
              className=" absolute flex flex-col items-center justify-center left-2/4 top-2/4
              transform -translate-x-1/2 -translate-y-1/2 w-fit px-12 h-2/4 lg:h-1/4 lg:w-1/4 w-40 bg-slate-300 rounded-lg text-center"
            >
              <h1 className=" my-2 text-red-700 ">
                OTP has sent to your Email.
                <p>(OTP will be expired in 30 sec.)</p>
              </h1>
              <OtpInput
                inputStyle={{
                  height: 40,
                  width: 40,
                  borderRadius: 5,
                  margin: 2,
                }}
                value={otp}
                onChange={setOtp}
                numInputs={6}
                renderSeparator={<span>-</span>}
                renderInput={(props) => <input {...props} />}
              />
              <button
                onClick={handleVerify}
                className="w-52  bg-slate-800   rounded-2xl py-3 px-4 my-6  text-white font-semibold mt-6 "
              >
                Verify
              </button>
            </div>
          </Modal>
          <button
            type="submit"
            onClick={handleVerifyEmailOnClick}
            className=" w-full bg-slate-800   rounded-2xl py-3 px-4 my-6  text-white font-semibold mt-6 "
          >
            Verify Email
          </button>
        </form>
      </div>
    </div>
  );
}

export default VerifyEmail;
