import React from "react";
import ForwardIcon from "@mui/icons-material/Forward";
const Newsletter = () => {
  return (
    <div className="newsletter bg-red-400 p-20  flex flex-col  gap-6 justify-center items-center">
      <p className=" text-6xl text-white font-bold">Newsletter </p>
      <p className="mx-4 text-[17px] text-white">
        Get timely updates from your favourite products
      </p>
      <div className="input flex justify-center items-center border bg-white border-slate-300 rounded-3xl">
        <input
          type="text"
          placeholder="enter your email address"
          class="w-full focus:border-none focus:outline-none p-2 rounded-3xl "
          name="input"
          id="newsletter"
        />
        <div className="icon p-2  cursor-pointer rounded-full">
          <ForwardIcon className=" text-black" />
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
