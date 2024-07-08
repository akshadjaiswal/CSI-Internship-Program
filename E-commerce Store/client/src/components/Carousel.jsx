import React, { useState, useEffect } from "react";
import { bannerAds } from "../assets";

const Carousel = () => {
  const [slideIndex, setSlideIndex] = useState(0);

  const handleDotClick = (index) => {
    setSlideIndex(index);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setSlideIndex((prevIndex) => (prevIndex < bannerAds.length - 1 ? prevIndex + 1 : 0));
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div className="slider flex overflow-hidden items-center sticky h-2/3 relative">
        <div className="slide text-black flex relative">
          {bannerAds.map((add, index) => (
            <div
              className="flex flex-col overflow-hidden md:flex-row justify-center items-center w-screen transition-all ease-in-out duration-1000 "
              style={{ transform: `translateX(${-slideIndex * 100}vw)` }}
              key={"key_" + index}
            >
              <div className="banner flex items-center justify-start h-full ">
                <img src={add.add} className="h-full -z-20 object-cover object-right " alt="banner" />
              </div>
            </div>
          ))}
        </div>
        {/* Dots */}
        <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {bannerAds.map((_, index) => (
            <div
              key={index}
              onClick={() => handleDotClick(index)}
              className={`w-2 h-2 rounded-full bg-gray-500 cursor-pointer hover:bg-gray-700 ${
                index === slideIndex ? "bg-white" : ""
              }`}
            ></div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Carousel;
