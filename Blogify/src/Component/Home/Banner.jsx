import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

function Banner() {
  gsap.registerPlugin(useGSAP);

  useGSAP(() => {
    gsap.from("span", {
      opacity: 0,
      scale: 3,
      repeat: -1,
      duration: 4,
      stagger: 0.4,
      delay: 1,
    });

    gsap.from(".subtitle", {
      opacity: 0,
      scale: 1.8,
      duration: 4,
      stagger: 0.2,
      delay: 6,
      
    });
  });

  return (
    <div className="h-[30vh] lg:h-[80vh] w-full flex flex-col justify-center items-center  bg-[url('https://img.freepik.com/free-vector/dark-gradient-background-with-copy-space_53876-99548.jpg?size=626&ext=jpg&ga=GA1.1.107563469.1687931192&semt=ais_user')] bg-no-repeat bg-cover bg-center  backdrop-opacity-100 text-white">
      <div id="heading" className="intro text-3xl lg:text-6xl  font-semibold  text-center ">
        <span className=" inline-block ">W</span>
        <span className=" inline-block">e</span>
        <span className=" inline-block">l</span>
        <span className=" inline-block">c</span>
        <span className=" inline-block">o</span>
        <span className=" inline-block">m</span>
        <span className=" inline-block">e </span>
        <span className=" inline-block w-4"> </span>

        <br /><br />
        <span className=" inline-block">t</span>
        <span className=" inline-block">o</span>
        <span className=" inline-block w-4"> </span>

        <br></br><br />
        <span className=" inline-block">B</span>
        <span className=" inline-block">l</span>
        <span className=" inline-block">o</span>
        <span className=" inline-block">g</span>
        <span className=" inline-block">i</span>
        <span className=" inline-block">f</span>
        <span className=" inline-block">y</span>
      </div>
      <h2 className=" subtitle text:normal lg:text-3xl font-medium my-8  lg:my-16 text-white">
        {/* Explore the Articles World */}
      </h2>
    </div>
  );
}

export default Banner;
