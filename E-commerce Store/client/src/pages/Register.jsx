import React, { useState } from "react";
import { bag, google, usa, whitebag } from "../assets";
import { Link, useNavigate } from "react-router-dom";
import { register } from "../redux/apiCalls.js";
import toast from "react-hot-toast";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useDispatch, useSelector } from "react-redux";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
const Register = () => {
  const isNonMobileScreen = useMediaQuery("(min-width:1000px)");
  const [email, setEmail] = useState("");
  const [country, setCountry] = useState("+91");
  const navigate = useNavigate();
  const [cfpassword, setCfpassword] = useState("");
  const [contact, setContact] = useState("");
  const [fullname, setFullname] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const { isFetching, error } = useSelector((state) => state.user);
  const handleClick = async (e) => {
    e.preventDefault();
    if (!password.match(cfpassword)) {
      toast.error("Password and confirm password should be the same!");
    } else {
      try {
        await register(dispatch, {
          fullname,
          email,
          contact: country.concat(contact),
          password,
        });

        if (!error) {
          toast.success("Registration successful!");
          navigate("/");
        } else {
          toast.error("Registration failed. Please try again.");
        }
      } catch (error) {
        // Handle any errors that might occur during registration
        console.error("Registration failed:", error);
        toast.error("Registration failed. Please try again.");
      }
    }
  };

  return (
    <div className="loginpage overflow-x-hidden overflow-y-hidden relative mb-12 flex justify-center items-center gap-8">
      {isNonMobileScreen ? (
        <div>
          <div className="color rounded-full -z-10 bg-red-400 md:p-80 top-[-200px] absolute md:left-56 "></div>
          <div className="2ndclr rounded-full -z-10 bg-red-300 md:p-52 absolute md:right-[300px] md:mt-[100px]"></div>
        </div>
      ) : (
        <div>
          <div className="color rounded-full -z-10 bg-red-400 p-64 md:p-96 absolute md:bottom-0 md:left-32 right-12 top-[-100px] "></div>
          <div className="2ndclr rounded-full -z-10 p-40 bg-red-300 md:p-52 absolute md:right-[300px] right-[-100px] top-[500px] md:mt-[500px]"></div>
        </div>
      )}

      <div className="card flex flex-col  gap-4 ">
        <div
          className="logo py-4 text-3xl text-white relative md:left-[-40px]  rounded-lg mt-8 font-bold flex text-start justify-start items-center"
          style={{ fontFamily: "'Happy Monkey', cursive" }}
        >
          <p>URBAN-ST</p>
          <img src={whitebag} className="w-8 " alt="" />
          <p>RE.in</p>
        </div>
        <div className="shadow-md bg-white mb-10 rounded-2xl min-w-full p-6">
          <p className=" text-start text-xl font-semibold mb-4">Sign in here</p>

          <div className=" flex  justify-center w-full items-center flex-col ">
            <div className="  flex flex-col w-full  justify-center items-center gap-2">
              <div class="relative z-0 w-full mb-5 group">
                <input
                  type="text"
                  name="floating_name"
                  id="floating_name"
                  class="block py-2.5 w-80 px-0   text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:border-gray-300 dark:focus:border-red-400 focus:outline-none focus:ring-0 focus:border-red-400 peer"
                  onChange={(e) => {
                    setFullname(e.target.value);
                  }}
                  placeholder=" "
                  required
                />
                <label
                  for="floating_name"
                  class="peer-focus:font-medium  z-50 absolute  text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3  origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-red-400 peer-focus:dark:text-red-400 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                  Username
                </label>
              </div>
              <div class="relative z-0 w-full mb-5 group">
                <input
                  type="email"
                  name="floating_email"
                  id="floating_email"
                  class="block py-2.5 w-80 px-0  text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:border-gray-300 dark:focus:border-red-400 focus:outline-none focus:ring-0 focus:border-red-400 peer"
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                  placeholder=" "
                  required
                />
                <label
                  for="floating_email"
                  class="peer-focus:font-medium  z-50 absolute  text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3  origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-red-400 peer-focus:dark:text-red-400 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                  Email address
                </label>
              </div>
              <div class="relative z-0 w-full mb-5 group flex gap-3 items-center">
                <div className="county">
                  <select
                    id="countries"
                    class="bg-gray-50 border p-1 outline-none rounded-lg border-gray-300"
                  >
                    <option selected>
                      IND +91 <img src={usa} alt="" />
                    </option>
                    <option value="USA">USA +62</option>
                  </select>
                </div>
                <div>
                  <input
                    type="number"
                    name="floating_contact"
                    id="floating_contact"
                    class="block py-4 px-0 w-full    text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:border-gray-300 dark:focus:border-red-400 focus:outline-none focus:ring-0 focus:border-red-400 peer"
                    onChange={(e) => {
                      setContact(e.target.value);
                    }}
                    placeholder=" "
                    required
                  />
                  <label
                    for="floating_contact"
                    class="peer-focus:font-medium  z-50 absolute  text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3  origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-red-400 peer-focus:dark:text-red-400 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                  >
                    Contact
                  </label>
                </div>
              </div>
              <div class="relative z-0 w-full mb-5 group">
                <input
                  type="password"
                  name="floating_password"
                  id="floating_password"
                  class="block py-2.5 px-0 w-full  text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  dark:border-gray-300 dark:focus:border-red-400 focus:outline-none focus:ring-0 focus:border-red-400 peer"
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                  placeholder=" "
                  required
                />
                <label
                  for="floating_password"
                  class="peer-focus:font-medium absolute z-50  text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3  origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-red-400 peer-focus:dark:text-red-400 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                  Password
                </label>
              </div>
              <div class="relative z-0 w-full mb-5 group">
                <input
                  type="password"
                  name="floating_cfpassword"
                  id="floating_cfpassword"
                  class="block py-2.5 px-0 w-full  text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  dark:border-gray-300 dark:focus:border-red-400 focus:outline-none focus:ring-0 focus:border-red-400 peer"
                  onChange={(e) => {
                    setCfpassword(e.target.value);
                  }}
                  placeholder=" "
                  required
                />
                <label
                  for="floating_cfpassword"
                  class="peer-focus:font-medium absolute z-50  text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3  origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-red-400 peer-focus:dark:text-red-400 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                  Confirm password
                </label>
              </div>

              <div className="btn w-full">
                <button
                  type="button"
                  className=" border-2 text-red-400 font-bold w-full hover:bg-red-400 hover:text-white border-red-400 p-2  rounded-2xl "
                  onClick={handleClick}
                  disabled={isFetching}
                >
                  {isFetching ? (
                    <Box sx={{ display: "flex", justifyContent: "center" }}>
                      <CircularProgress style={{ color: "white" }} />
                    </Box>
                  ) : (
                    <p>sign up</p>
                  )}
                </button>
              </div>
              <div className="options my-4">
                <button className="flex border-2 hover:text-black  bg-slate-100 rounded-2xl gap-4 font-bold text-gray-400 p-2">
                  <img src={google} alt="google" className="h-6 w-6" /> Sign up
                  with google
                </button>
              </div>
              <div className=" w-full h-[1px] bg-slate-300" />
              <div className="signup flex">
                <Link to="/login" className="flex">
                  Already have an account?
                  <p className=" font-bold hover:text-red-400 px-2">
                    Sign in
                  </p>{" "}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
