import React from "react";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import PinterestIcon from "@mui/icons-material/Pinterest";
import TwitterIcon from "@mui/icons-material/Twitter";
import LocationOnIcon from '@mui/icons-material/LocationOn';
import CallIcon from '@mui/icons-material/Call';
import EmailIcon from '@mui/icons-material/Email';
import { mastercard,paypal,visa,bag } from "../assets";
const Footer = () => {
  return (
    <div className="footer gap-8 p-8 flex flex-col  md:flex-row md:justify-center md:items-center">
      <div className="left flex-1 flex flex-col gap-4">
        <div className="desc flex flex-col justify-start items-start gap-4">
        <div
          className="logo text-xl   rounded-lg  font-bold flex justify-center items-center"
          style={{ fontFamily: "'Happy Monkey', cursive" }}
        >
          <p className="">URBAN-ST</p>
          <img src={bag} className="w-[1.5rem] " alt="" />
          <p>RE.in</p>
        </div>
          <p className=" text-start">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat,
            beatae quibusdam porro, voluptatibus, eaque explicabo facere quam
            repudiandae soluta quod amet doloremque excepturi quos iure?
          </p>
        </div>
        <div className="links flex my-4  gap-4">
          <FacebookIcon />
          <InstagramIcon />
          <TwitterIcon />
          <LinkedInIcon />
          <PinterestIcon />
        </div>
      </div>
      <div className="middle flex-1">
        <p className="text-xl text-start font-bold my-2">Useful Links</p>
        <div className="flex ">
        <ul className="flex-1 space-y-2 text-start">
          <li>Home</li>
          <li>Man Fashion</li>
          <li>Accessories</li>
          <li>Order Tracking</li>
          <li>Wishlist</li>
        </ul>
        <ul className="flex-1 space-y-2 text-start">
          <li>Cart</li>
          <li>Woman Fashion</li>
          <li>My Account</li>
          <li>Wishlist</li>
          <li>Terms</li>
        </ul>
        </div>
        
      </div>
      <div className="right flex-1">
      <p className="text-xl text-start font-bold my-4">Contact</p>
      <div className="flex flex-col gap-4">
      <div className="flex gap-4">
      <LocationOnIcon/>
<p>416410 Miraj,Sangli</p>
      </div>
      <div className="flex gap-4">
      <CallIcon/>
<p>+91 7499893511</p>
      </div>
      <div className="flex gap-4">
      <EmailIcon/>
<p>harshkhavale1102@gmail.com</p>
      </div>
      </div>
      <div className="cards flex gap-4 items-center">
        <img src={mastercard} className="h-6" alt="" />
        <img src={visa} className="h-10" alt="" />
        <img src={paypal} className="h-16" alt="" />
      </div>
     

      </div>
    </div>
  );
};

export default Footer;
