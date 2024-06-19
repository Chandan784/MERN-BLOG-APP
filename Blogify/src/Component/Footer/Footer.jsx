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
      <div className="top-footer h-fit py-8 lg:flex lg:flex-col lg:items-center text-white ">
        <h1 className=" text-3xl font-semibold">Blogify blog world</h1>
        <p className=" text-lg lg:my-4  lg:w-2/4 lg:text-center">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Distinctio
          hic velit officia? Facilis harum consequuntur sapiente. Nulla
          reiciendis eius quod.
        </p>

        <div className=" lg:flex lg:text-2xl lg:gap-4 my-4">
          <FaFacebook />
          <FaInstagram />
          <FaGithub />
          <FaLinkedin />
          <FaYoutube />
        </div>
      </div>
      <div className="buttom-footer top-footer h-fit py-4  text-white bg-slate-900 text-center">
        <p className=" text-lg font-semobold">
          Copyright @2024 Blogify. Design By Applute
        </p>
      </div>
    </div>
  );
}

export default Footer;
