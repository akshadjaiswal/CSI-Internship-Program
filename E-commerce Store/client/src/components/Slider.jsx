import React, { useState, useEffect } from "react";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import ArrowLeftIcon from "@mui/icons-material/ArrowLeft";
import { adds, banner } from "../assets";

const Slider = () => {
  const [slideIndex, setSlideIndex] = useState(0);

  const handleClick = (direction) => {
    let size = adds.length - 1;
    if (direction === "left") {
      setSlideIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : size));
    } else {
      setSlideIndex((prevIndex) => (prevIndex < size ? prevIndex + 1 : 0));
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setSlideIndex((prevIndex) => (prevIndex < adds.length - 1 ? prevIndex + 1 : 0));
    }, 10000); // Change slide every 10 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div className="slider flex overflow-hidden items-center sticky h-2/3 relative">
        {/* Left arrow */}
        <div
          onClick={() => handleClick("left")}
          className="leftarrow z-30 flex justify-center items-center h-min bg-slate-200 rounded-full p-2 w-auto cursor-pointer opacity-70 hover:opacity-100 absolute top-0 bottom-0 my-auto left-10"
        >
          <ArrowLeftIcon />
        </div>
        {/* Slide content */}
        <div className="slide text-black flex relative">
          {adds.map((add, index) => (
            <div
              className="flex flex-col overflow-hidden md:flex-row justify-center items-center w-screen transition-all ease-in-out duration-1000"
              style={{ transform: `translateX(${-slideIndex * 100}vw)` }}
              key={"key_" + index}
            >
              <div className="banner flex items-center justify-start h-full md:w-5/6 ">
                <img src={add.banner} className="h-full -z-20 object-cover object-top " alt="banner" />
              </div>
              <div className="description flex flex-col justify-center items-start md:items-center rounded-full relative ps-4 w-full ">
                <div
                  className="color rounded-full -z-10 p-32 md:p-96 absolute bottom-0 md:left-32 -mt-4"
                  style={{ backgroundColor: add.color }}
                ></div>
                <div
                  className="2ndclr rounded-full -z-10 p-20 md:p-52 absolute md:right-[-100px] right-1 md:mt-[500px]"
                  style={{ backgroundColor: add.color }}
                ></div>
                <div className="main mt-[-200px] absolute md:mt-0 text-start md:text-center">
                  <h1 className="text-5xl md:text-[150px] font-black">{add.title}</h1>
                  <p className="text-[1rem] text-center w-2/3 md:w-full rounded-full p-4">
                    {add.subtitle}
                  </p>
                  <button className="my-4 border-2 rounded-lg hover:bg-black hover:text-white p-1 border-black text-[17px]">
                    SHOP NOW
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        {/* Right arrow */}
        <div
          onClick={() => handleClick("right")}
          className="rightarrow flex justify-center items-center h-min bg-slate-200 rounded-full p-2 cursor-pointer opacity-70 hover:opacity-100 absolute top-0 bottom-0 my-auto right-10"
        >
          <ArrowRightIcon />
        </div>
      </div>
    </>
  );
};

export default Slider;
