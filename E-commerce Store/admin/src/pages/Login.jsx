import React, { useState } from 'react'
import { logo } from '../assets'
import { Link } from 'react-router-dom'
import { login } from '../redux/apiCalls.js';
import { useDispatch, useSelector } from 'react-redux';

const Login = () => {

  const [email, setemail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const { isFetching, error } = useSelector((state) => state.user);
  const handleClick = (e) => {
    e.preventDefault();
    login(dispatch,{email,password});

  }

  return (
    <div className="loginpage flex gap-8  ">
      <div className="card  flex flex-col  gap-4 ">
        <div
          className="logo my-8 text-4xl rounded-lg px-4 py-1 font-bold flex justify-center items-center"
          style={{ fontFamily: "'Happy Monkey', cursive" }}
        >
          <p>URBAN-ST</p>
          <img src={logo} className="w-8 " alt="" />
          <p>RE.in</p>
        </div>

        <div className=" flex p-8  justify-center items-center flex-col shadow-lg  border border-slate-200 rounded-lg">
          <p className=" text-start text-xl mb-8">Sign in here</p>
          <div className="  flex flex-col justify-center items-center gap-4">

            <div className="flex gap-4 w-full">
              <input
                type="email"
                className="border w-full border-slate-300 p-2  rounded-md"
                placeholder="email"
                onChange={(e) => { setemail(e.target.value);  }}
              />
            </div>

            <div className="flex gap-4 w-full">
              <input
                type="password"
                className="border w-full border-slate-300 p-2 rounded-md"
                placeholder="password"
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              />
            </div>

            <div className="btn">
              <button type="button" className="bg-transparent border border-slate-300 px-2 rounded-sm py-2 hover:bg-black hover:text-white hover:rounded-sm " onClick={handleClick} disabled={isFetching}>
                sign in
              </button>
              {error &&
                <p className=' text-red-500'>Something went wrong</p>
              }
            </div>
            <div className=" w-full h-[1px] bg-slate-300" />
            <div className="signup">
              <Link to="/register">Dont have any account? Sign up</Link>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Login
