import React from "react";
import { categories, banner } from "../assets";
import { Link } from "react-router-dom";

const Categories = () => {
  return (
    <div className="cat relative">
      <div className="flex flex-wrap md:mt-[-80px] backdrop-blur-sm bg-white/30 justify-center md:mx-2">
        {categories.map((cat, index) => (
          <div
            key={"index_" + index}
            className="w-full md:mt-[-50px] sm:w-1/2 md:w-1/2 lg:w-1/3 xl:w-1/4 px-2 mb-4"
          >
            <Link to={`/products/${cat.cat}`}>
              <div className="relative">
                <img
                  src={cat.img}
                  className="w-full h-96 object-cover object-top rounded-md  shadow-xl"
                  alt="categories"
                />
                <div className="absolute inset-0 bg-black opacity-0 hover:opacity-75 transition duration-300 rounded-lg flex flex-col justify-center items-center">
                  <button className="text-white text-lg font-bold bg-transparent border-2  border-white p-2 rounded-md hover:bg-white hover:text-black transition duration-300">
                    SHOP NOW
                  </button>
                  <p className="text-white text-4xl font-black urbanist-font mt-2">
                    {cat.title}
                  </p>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Categories;
