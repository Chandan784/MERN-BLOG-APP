import React from "react";
import Modal from "@mui/material/Modal";
import OtpInput from "react-otp-input";
import { useState } from "react";
import CircularProgress from "@mui/material/CircularProgress";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { verifyEmail, verifyOtp } from "../../Redux/api/auth";
import { act } from "react";
import PrimaryButton from "../common/PrimaryButton";

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
  let dispatch = useDispatch();
  async function handleVerifyEmailOnClick(e) {
    e.preventDefault();
    setLoading(true);

    let actionResult = await dispatch(verifyEmail({ email: emailId }));

    if (actionResult.payload.succes) {
      setLoading(false);
      handleOpen();
      setOtp("");
    }
    if (verifyOtp.fulfilled.match(actionResult)) {
      window.alert(actionResult.payload.message);
      navigate("/signup", { state: { email: emailId } });
    } else {
      window.alert(actionResult.payload.message);
    }

    console.log(actionResult, "send otp by email action result");
  }

  function handleVerify(e) {
    e.preventDefault();
    e.stopPropagation();
    verifyByOtp(emailId, otp);
  }

  async function sendOtpByMail(email) { }

  async function verifyByOtp(email, otp) {
    let actionResult = await dispatch(verifyOtp({ email, otp }));
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
  }

  return (
    <div className="relative overflow-clip py-20 sm:py-24 md:py-28 lg:py-32 xl:py-36 bg-slate-300 flex justify-center">
      <div className="absolute inset-0 bg-slate-200 blur-[21px]"></div>
      {Loading ? (
        <CircularProgress className="absolute z-40 top-[40%] left-[47%] -translate-y-1/2 -translate-x-1/2" size={80} />
      ) : null}
      <div className="relative z-10 w-[90%] sm:w-full mx-auto max-w-[550px] px-4 sm:px-8 py-8 lg:px-10 bg-slate-200 flex flex-col rounded-lg shadow-lg">
        <div className="flex justify-center">
          <h1 className="text-blue-600 text-3xl  md:text-4xl font-black min-w-max relative after:absolute after:-bottom-1 after:left-0 after:w-full after:h-0.5 after:bg-blue-600">Verify Yourself</h1>
        </div>

        <form action="" method="POST" className="pt-10">
          <div className=" w-full text-left relative">
            <label htmlFor="email" className="text-base md:text-lg">Email</label>

            <input
              onChange={(e) => {
                setEmailId(e.target.value);
              }}
              required
              type="email"
              id="email"
              // ref={emailRef}
              placeholder="Enter Email"
              className="w-full bg-slate-300 rounded-lg py-2 px-2 outline-slate-500 my-2"
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
              transform -translate-x-1/2 -translate-y-1/2 px-12 h-2/4 lg:h-1/4 lg:w-1/4 w-40 bg-slate-300 rounded-lg text-center"
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
                numInputs={4}
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
          <PrimaryButton type={"submit"} onClick={handleVerifyEmailOnClick} className={"!bg-slate-600 !text-white mt-4 !w-full !py-2"}> Verify Email</PrimaryButton>
        </form>
      </div>
    </div>
  );
}

export default VerifyEmail;
