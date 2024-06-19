import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

function Banner() {
  gsap.registerPlugin(useGSAP);

  useGSAP(() => {
    gsap.from("span", {
      opacity: 0,
      scale: 2,
      repeat: -1,
      duration: 2,
      stagger: 0.8,
      delay: 2,
    });

    gsap.from(".subtitle", {
      opacity: 0,
      scale: 1.8,
      duration: 2,
      stagger: 0.2,
      delay: 1,
    });
  });

  return (
    <div className="h-[30vh] lg:h-[80vh] w-full flex flex-col justify-center items-center  bg-[url('https://images.pexels.com/photos/5011647/pexels-photo-5011647.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')] bg-no-repeat bg-cover bg-center  backdrop-opacity-100 text-white">
      <div id="heading" className="intro text-3xl lg:text-6xl  font-semibold  ">
        <span className=" inline-block ">w</span>
        <span className=" inline-block">e</span>
        <span className=" inline-block">l</span>
        <span className=" inline-block">c</span>
        <span className=" inline-block">o</span>
        <span className=" inline-block">m</span>
        <span className=" inline-block">e </span>
        <span className=" inline-block w-4"> </span>

        <span className=" inline-block">t</span>
        <span className=" inline-block">o</span>
        <span className=" inline-block w-4"> </span>
        <span className=" inline-block">b</span>
        <span className=" inline-block">l</span>
        <span className=" inline-block">o</span>
        <span className=" inline-block">g</span>
        <span className=" inline-block">i</span>
        <span className=" inline-block">f</span>
        <span className=" inline-block">y</span>
      </div>
      <h2 className=" subtitle text:normal lg:text-3xl font-medium my-8  lg:my-16 text-white">
        Explore the Articles World
      </h2>
    </div>
  );
}

export default Banner;
