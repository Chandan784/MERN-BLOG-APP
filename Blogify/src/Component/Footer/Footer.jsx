import React from "react";

import {
  FaLinkedin,
  FaFacebook,
  FaInstagram,
  FaGithub,
  FaYoutube,
} from "react-icons/fa";
import { date } from "yup";

function Footer() {
  const year = new Date().getFullYear();
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <div className="bg-slate-700 ">
      <div className="px-4 py-7 md:py-8 lg:py-10 flex flex-col items-center text-white ">
        <a href="/" onClick={scrollToTop} className="font-semibold text-[clamp(1.875rem,2.5vw,3.375rem)]">
          Blogify Blog World
        </a>
        <p className=" text-base py-5 md:py-6 text-center lg:text-lg lg:w-2/4 lg:text-center">
          Let's explore 1000s+ blogs with Blogify.
        </p>

        <div className=" flex gap-4">
          <a target="_blank" href="https://www.facebook.com/">
            <FaFacebook className="h-6 w-6 md:h-8 md:w-8 hover:fill-[#e7d20a] duration-300" />
          </a>
          <a target="_blank" href="https://www.instagram.com/">
            <FaInstagram className="h-6 w-6 md:h-8 md:w-8 hover:fill-[#e7d20a] duration-300" />
          </a>
          <a target="_blank" href="https://github.com/">
            <FaGithub className="h-6 w-6 md:h-8 md:w-8 hover:fill-[#e7d20a] duration-300" />
          </a>
          <a target="_blank" href="https://www.linkedin.com/">
            <FaLinkedin className="h-6 w-6 md:h-8 md:w-8 hover:fill-[#e7d20a] duration-300" />
          </a>
          <a target="_blank" href="https://www.youtube.com/">
            <FaYoutube className="h-6 w-6 md:h-8 md:w-8 hover:fill-[#e7d20a] duration-300" />
          </a>
        </div>
      </div>
      <div className="buttom-footer p-4 text-white bg-slate-900 text-center">
        <p className=" text-sm lg:text-lg font-semobold">
          Copyright &copy;{year} Blogify. Design By Applute
        </p>
      </div>
    </div>
  );
}

export default Footer;
