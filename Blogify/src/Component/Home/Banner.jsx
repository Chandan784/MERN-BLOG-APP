import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import Slider from "react-slick";


function Banner() {
  let sliderData = [
    "https://st2.depositphotos.com/1420973/6409/i/450/depositphotos_64095317-stock-photo-blog-concept-cloud-chart-print.jpg",
    "https://img.freepik.com/free-photo/makeup-brush-eyeglasses-cactus-plant-white-flower-bouquet-with-laptop-blue-background_23-2148178672.jpg?size=626&ext=jpg&ga=GA1.1.2008272138.1722470400&semt=ais_hybrid",
    "https://st2.depositphotos.com/1006899/8421/i/450/depositphotos_84219350-stock-photo-word-blog-suspended-by-ropes.jpg",
  ];

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 3000,
    cssEase: "ease",
  };

  return (
    <div className="slider-container w-full h-[280px] sm:h-[370px] md:h-[520px] lg:h-[590px] bg-cyan-950">
      <Slider {...settings}>
        {sliderData.map((url) => {
          return (
            <div className="h-[280px] sm:h-[370px] md:h-[520px] lg:h-[590px] w-screen object-cover">
              <img src={url} alt="hero-slider-img" className="w-screen h-full object-cover" />
            </div>
          );
        })}
      </Slider>
    </div>
  );
}

export default Banner;
