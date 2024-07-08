import React, { useEffect } from "react";
import Slider from "../components/Slider";
import Categories from "../components/Categories";
import Products from "../components/Products";
import { useDispatch } from "react-redux";
import { setCart } from "../redux/cartRedux";
const Home = () => {
  const dispatch = useDispatch();
  // useEffect(()=>{
  //   const storedCart = JSON.parse(localStorage.getItem('cart'));
  //   if (storedCart) {
  //     dispatch(setCart(storedCart));
  //   }
  // },[])
  return (
    <div>
      <div>
        <Slider />

        <Categories />
        <p className="font-bold text-white text-start bg-teal-400 w-min px-4">
          #trending today
        </p>
        <Products />
      </div>
    </div>
  );
};

export default Home;
