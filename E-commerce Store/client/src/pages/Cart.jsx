import React, { useEffect, useState } from "react";

import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";

import { useDispatch, useSelector } from "react-redux";
import StripeCheckout from "react-stripe-checkout";
import axios from "axios";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { useNavigate } from "react-router-dom";
import { CloseOutlined } from "@mui/icons-material";
import VerifiedIcon from "@mui/icons-material/Verified";
import BeenhereOutlinedIcon from "@mui/icons-material/BeenhereOutlined";
import { ribbon, urbanlogo } from "../assets";
import { removeProduct } from "../redux/cartRedux.js";
import toast from "react-hot-toast";
import { userRequest } from "../redux/requestMethods.js";
const KEY = process.env.REACT_APP_STRIPE;
const Cart = () => {
  const dispatch = useDispatch();

  const handleDelete = (productId,size,color) => {
    dispatch(removeProduct({ productId,size,color }));
  };
  const [stripeToken, setStripeToken] = useState(null);
  const onToken = (token) => {
    setStripeToken(token);
  };
  console.log(stripeToken);
  const products = useSelector((state) => state.cart.products);

  const history = useNavigate();

  const cart = useSelector((state) => state.cart);
  useEffect(() => {
    const makeRequest = async () => {
      try {
        const res = await userRequest.post("/payments", {
          tokenId: stripeToken.id,
          amount: cart.total * 100,
        });
        toast.success("Transaction successful!");
        history.push("/success", { data: res.data });
      } catch (error) {
        toast.error("Transaction failed!");
      }
    };

    // Only make the request if stripeToken is available and cart total is greater than or equal to 1
    stripeToken && cart.total >= 1 && makeRequest();
  }, [stripeToken, cart.total, history]);

  return (
    <div className="cartpage md:px-44 text-sm md:text-base overflow-hidden">
      <div className="bag my-8">
        <div className="cartage   flex w-full gap-0 ">
          <div className="box flex flex-col w-7/12 gap-2">
            <div className=" upperbox flex-col  ">
              <div className="box1 border m-2 flex justify-between rounded-md gap-2 p-2">
                <p className="font-bold">check delivery time & services</p>
                <button className=" bg-transparent border-2 border-red-400 font-bold text-red-400 p-1 rounded-md">
                  continue shopping
                </button>
              </div>
              <div className="box2 border m-2 text-start rounded-md gap-2 p-2">
                <p className="font-bold">
                  <VerifiedIcon /> Available Offers
                </p>
                <p className="">
                  7.5% Instant Discount on every spends with URBAN_STORE HDFC
                  Credit Card.TCA
                </p>
                <p className="text-red-400 font-bold">
                  Show More
                  <KeyboardArrowDownIcon />
                </p>
              </div>
            </div>
            <div className="">
              {products.map((product) => (
                <div className="product m-4 p-2 rounded-lg border border-slate-200  items-center justify-between gap-2">
                  <div className="flex flex-col md:flex-row relative gap-8">
                    <div className="img">
                      <img
                        src={product.images}
                        alt="product6"
                        className="w-32"
                      />
                    </div>
                    <div className="info">
                      <div className="details flex flex-col items-start">
                        <div className="productname flex flex-col">
                          <p className="font-bold text-start">
                            {product.title}
                          </p>
                          <p className="font-bold text-xs text-gray-400 text-start">
                            Sold by : {product.brand}
                          </p>
                          <p className="text-start">{product.sub_title}</p>
                        </div>

                        <div className="p-2 flex gap-4">
                          <div className="selectedcolor bg-slate-100 flex items-center p-1">
                            <p className="font-bold px-2">color </p>

                            <div
                              style={{ backgroundColor: product.color }}
                              className="color h-4 w-4"
                            ></div>
                          </div>
                          <div className="size flex bg-slate-100 items-center p-1">
                            <p className="font-bold">Size </p>
                            <p className="font-bold px-2">{product.size}</p>
                          </div>
                        </div>
                        <div className="price flex gap-2">
                          <p className="font-bold">₹ {product.price}</p>
                          <p className="line-through font-bold text-gray-400">
                            {product.actual_price}
                          </p>
                        </div>

                        <div className="pricer my-2 relative h-full  flex justify-center items-center gap-4">
                          <div className="quantity border-2 border-slate-300 rounded-md flex items-center gap-4">
                            <div className="minus w-full cursor-pointer border border-slate-300">
                              <RemoveIcon />
                            </div>
                            <div className="value  rounded-lg">1</div>
                            <div className="plus cursor-pointer border border-slate-300">
                              <AddIcon />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="btn absolute right-0 top-0 ">
                      <button
                        className="bg-transparent border bg-white border-slate-300 p-1 rounded-md"
                        onClick={()=>handleDelete(product._id,product.size,product.color)}
                      >
                        <CloseOutlined />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="orderbox p-2 shadow-lg w-5/12 h-min border border-slate-200 rounded-lg m-2 box-border flex flex-col gap-6">
            <div className="coupons text-start">
              <p className="text-gray-500 font-bold">COUPONS</p>
              <div className="flex justify-between p-2 my-4 items-center">
                <BeenhereOutlinedIcon />
                <p className="font-bold text-center md:text-[17px] ">
                  Apply Coupons
                </p>
                <button className=" bg-transparent border-2 border-red-400 font-bold text-red-400 p-1 rounded-md">
                  APPLY
                </button>
              </div>
              <div className="flex justify-center text-center">
                <p className="text-red-400 font-bold">Apply</p>to get upto ₹200
                OFF on first order
              </div>
            </div>
            <div className="gift">
              <p className="text-gray-500 font-bold text-start">
                GIFTING & PERSONALIZATION
              </p>
              <div className="p-2 m-2 design flex flex-col md:flex-row items-center bg-red-100 rounded-md">
                <img src={ribbon} className=" h-20  w-20" alt="bow" />
                <div className="text-start p-4 flex flex-col gap-2">
                  <p className="font-bold">Buying for a loved one?</p>
                  <p className="text-xs">
                    Gift wrap and personalised message on card,only for ₹ 25
                  </p>
                  <p className="text-red-400 uppercase font-bold">
                    ADD GIFT WRAP
                  </p>
                </div>
              </div>
            </div>
            <p className=" font-semibold bg-gray-100 py-2 text-black rounded-md overflow-hidden">
              ORDER SUMMERY
            </p>
            <div className="flex flex-col gap-2 p-2">
              <div className="subtotal  flex justify-between ">
                <p className=" font-bold">Subtotal</p>
                <p>0 ₹</p>
              </div>
              <div className="subtotal flex justify-between ">
                <p className=" font-bold ">Shipping</p>
                <p>0 ₹</p>
              </div>
              <div className="subtotal flex justify-between ">
                <p className=" font-bold">Discount</p>
                <p>0 ₹</p>
              </div>
              <div className="subtotal font-bold flex justify-between ">
                <p className=" font-bold">Total Amount</p>
                <p className=" text-black">{cart && cart.total} ₹</p>
              </div>
            </div>

            <StripeCheckout
              name="Urban_Store"
              image={urbanlogo}
              billingAddress
              shippingAddress
              description={`Your total is ${cart.total}`}
              amount={cart.total * 100}
              token={onToken}
              stripeKey={KEY}
            >
              <button className=" bg-red-400 font-bold w-full py-4 border rounded-md text-white">
                PLACE ORDER
              </button>
            </StripeCheckout>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
