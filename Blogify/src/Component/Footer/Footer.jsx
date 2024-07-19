import React from "react";

import {
  FaLinkedin,
  FaFacebook,
  FaInstagram,
  FaGithub,
  FaYoutube,
} from "react-icons/fa";

function Footer() {
  return (
    <div className="  h-fit bg-slate-700">
      <div className="top-footer h-fit py-4 lg:py-8 flex flex-col items-center  lg:flex lg:flex-col lg:items-center text-white ">
        <h1 className=" text-xl lg:text-3xl font-semibold">
          Blogify Blog World
        </h1>
        <p className=" text-sm my-4  text-center lg:text-lg lg:my-4  lg:w-2/4 lg:text-center">
          Let's explore 1000s+ blogs with Blogify.
        </p>

        <div className=" flex gap-2 my-2 lg:flex lg:text-2xl lg:gap-4 lg:my-4">
          <FaFacebook />
          <FaInstagram />
          <FaGithub />
          <FaLinkedin />
          <FaYoutube />
        </div>
      </div>
      <div className="buttom-footer top-footer h-fit py-4  text-white bg-slate-900 text-center">
        <p className=" text-sm lg:text-lg font-semobold">
          Copyright  &copy;2024 Blogify. Design By Applute
        </p>
      </div>
    </div>
  );
}

export default Footer;
