import React from 'react'
import NotificationsIcon from '@mui/icons-material/Notifications';
import LanguageIcon from '@mui/icons-material/Language';
import SettingsIcon from '@mui/icons-material/Settings';
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';
import { logo, randomUser } from '../assets';
import UserImage from './UserImage';
import { useMediaQuery } from '@mui/material';
import { Menu } from '@mui/icons-material';
const Topbar = () => {
  const isNonMobileScreen = useMediaQuery('(min-width:600px)');
  return (
    <div className="topbar w-screen flex justify-between items-center z-50  py-2 px-4 top-0 sticky  bg-white rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border border-gray-100">
      <div className="left">
        <div
          className="logo text-[1rem] m-0 p-0 md:text-2xl    rounded-lg  font-bold flex justify-center items-center"
          style={{ fontFamily: "'Happy Monkey', cursive" }}
        >
          <p className="">URBAN_ST</p>
          <img src={logo} className="w-[1.5rem] " alt="" />
          <p>RE.in  |  ADMIN</p>
        </div>

      </div>
      <div className="right flex  items-center gap-4 md:mx-8">
        {
          isNonMobileScreen ? (<div className='flex items-center gap-8'><NotificationsOutlinedIcon />
            <LanguageIcon />
            <SettingsIcon />
           </div>) : (
            <div className=' items-end'>
              <Menu />
            </div>
            
          )
        }
         <UserImage UserImage={randomUser} />

      </div>
    </div>
  )
}

export default Topbar
