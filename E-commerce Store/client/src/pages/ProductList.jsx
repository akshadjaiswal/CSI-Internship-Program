import React, { useState } from "react";
import Products from "../components/Products";
import Navbar from "../components/Navbar";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";
import { useLocation } from "react-router-dom";

const ProductList = () => {
  const location = useLocation();
  const category = location.pathname.split("/")[2];
  const [filters, setFilters] = useState({});
  const [sort,setSort] = useState("newest");
  const handleFilters = (e) => {
    const value = e.target.value;
    setFilters({
      ...filters,
      [e.target.name]: value.toLowerCase(),
    })
  }
  console.log(filters)
  return (
    <div>
      <div className="productlistpage ">
      <p className="font-bold text-white my-4 text-start bg-teal-400 w-min px-4">#{category}</p>
        <div className="filters flex justify-between items-center mx-10">

          <div className="filter">
            <p className="text-xl font-semibold">filter products</p>
            <select onChange={handleFilters} name="size" className="border border-slate-300 p-1 rounded-sm" id="filter">
              <option value="" disabled >size</option>
              <option >
                S
              </option>
              <option >M</option>
              <option >L</option>

              <option>XL</option>
              <option >XXL</option>
            </select>
            <select  name="color" className="border border-slate-300 p-1 rounded-sm" id="filter">
              <option value="" disabled >color</option>
              <option>
                Red
              </option>
              <option>Blue</option>
              <option >Green</option>

              <option>Black</option>
              <option >White</option>
            </select>
          </div>
          <div className="sort">
            <p className="text-xl font-semibold">sort products</p>

            <select name="sort"  className="border border-slate-300 p-1 rounded-sm" id="sort">
              <option value="newest">
                Newest
              </option>
              <option value="asc">Price (asc)</option>
              <option value="desc">Price (desc)</option>
            </select>
          </div>
        </div>
        <div className="products">
          <Products cat={category} filters={filters} sort={sort} />
        </div>
      </div>
     
    </div>

  );
};

export default ProductList;
