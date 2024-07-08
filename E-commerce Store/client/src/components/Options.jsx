import React from "react";
import Replay30Icon from "@mui/icons-material/Replay30";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
const Options = ({ freeDelivery, return30Days, cashOnDelivery }) => {
  return (
    <div>
      <div className="row flex w-full justify-evenly">
        <div className="flex flex-col items-center gap-2 justify-center">
          <div className="icon">
            <LocalShippingIcon
              style={{ fontSize: "3rem" }}
              className={` ${freeDelivery?("text-red-400 "):("text-gray-400")} h-28 w-28 border-4 p-2 rounded-full `}
            />
          </div>
          <p className="font-bold text-center">Free Delivery</p>

        </div>
        <div className="flex flex-col items-center gap-2 justify-center">
          <div className="icon">
            <Replay30Icon
              style={{ fontSize: "3rem" }}
              className={` ${return30Days?("text-red-400 "):("text-gray-400")} h-28 w-28 border-4 p-2 rounded-full `}
            />
          </div>
          <p className="font-bold text-center">30 Days Return</p>

        </div>
        <div className="flex flex-col items-center gap-2 justify-center">
          <div className="icon">
            <CurrencyRupeeIcon
              style={{ fontSize: "3rem" }}
              className={` ${cashOnDelivery?("text-red-400 "):("text-gray-400")} h-28 w-28 border-4 p-2 rounded-full `}
            />
          </div>
          <p className="font-bold text-center">Cash On Delivery</p>

        </div>
        <div className="flex flex-col items-center gap-2 justify-center">
          <div className="icon">
            <EmojiEventsIcon
              style={{ fontSize: "3rem" }}
              className="text-red-400 h-28 w-28 border-4 p-2 rounded-full "
            />
          </div>
          <p className="font-bold text-center">Top Brands</p>

        </div>
      </div>
    </div>
  );
};

export default Options;
