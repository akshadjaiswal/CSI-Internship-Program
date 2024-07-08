import React from "react";
import LocalMallOutlinedIcon from "@mui/icons-material/LocalMallOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import SearchIcon from "@mui/icons-material/Search";
import { Link } from "react-router-dom";
import { addProduct } from "../redux/cartRedux.js";

const Product = ({ product, index }) => {
  return (
    <div className="product w-4/12 md:w-2/12 flex-col justify-center items-center rounded-xl shadow-xl m-2  relative">
      <div className="img flex justify-center items-center">
        <img
          src={product.images[0]}
          alt="img"
          className="object-contain md:h-48 h-32 w-full    "
        />
      </div>

      <div className="navigation flex md:h-48 h-32  hover: bg-slate-800 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border border-gray-100   opacity-0 hover:opacity-100  md:gap-6  justify-center items-center gap-1 absolute top-0 bottom-0 w-full object-cover">
        <div className="icon cursor-pointer p-1   bg-slate-100 hover:bg-slate-200 rounded-full hover:scale-125  md:p-2 ">
          <Link to={`/product/${product._id}`}>
            <SearchIcon />
          </Link>
        </div>
        <div className="icon cursor-pointer p-1 bg-slate-100 hover:bg-slate-200 rounded-full hover:scale-125 md:p-2">
          <Link to={`/product/${product._id}`}>
            <LocalMallOutlinedIcon />
          </Link>
        </div>
        <div className="icon cursor-pointer p-1 bg-slate-100 hover:bg-slate-200 rounded-full hover:scale-125 md:p-2 ">
          <Link to={`/product/${product._id}`}>
            <FavoriteBorderOutlinedIcon />
          </Link>
        </div>
      </div>
      <div className="info mb-20 p-2">
        <div className="title md:text-xl py-6  font-semibold text-center ">
          {product.title}
        </div>
      </div>
      <div className=" absolute text-start bottom-0 w-full">
        <p className="mx-4 text-xs  ">{product.sub_title}</p>
        <p className="mx-4 text-[17px] text-bold line-through text-gray-400">
          {product.price}
        </p>

        <p className="price text-white w-full text-center bg-black md:text-4xl font-black urbanist-font">
          {product.price} ₹
        </p>
      </div>
    </div>
  );
};

export default Product;
