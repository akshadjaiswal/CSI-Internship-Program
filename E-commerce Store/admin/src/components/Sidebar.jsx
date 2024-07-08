import React from 'react'
import WindowIcon from '@mui/icons-material/Window';
import ShowChartIcon from '@mui/icons-material/ShowChart';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import Inventory2OutlinedIcon from '@mui/icons-material/Inventory2Outlined';
import CurrencyRupeeOutlinedIcon from '@mui/icons-material/CurrencyRupeeOutlined';
import AssessmentOutlinedIcon from '@mui/icons-material/AssessmentOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import DynamicFeedIcon from '@mui/icons-material/DynamicFeed';
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';
import WorkOutlineIcon from '@mui/icons-material/WorkOutline';
import ErrorRoundedIcon from '@mui/icons-material/ErrorRounded';

import TimelineIcon from '@mui/icons-material/Timeline';
const Sidebar = () => {
  return (
  <div className="sidebar p-4 ps-4 ">
    <div className="content">
    <p className='text-slate-400 my-2  '>Dashboard</p>
    <ul className='flex flex-col '>
        <li className='flex gap-4 items-center cursor-pointer hover:bg-blue-100 rounded-lg p-1 active:bg-blue-300'>
            <WindowIcon/>
            <p>Home</p>

        </li>
        <li className='flex gap-4 items-center cursor-pointer hover:bg-blue-100 rounded-lg p-1 active:bg-blue-300'>
            <TimelineIcon/>
            <p>Analytics</p>

        </li>
        <li className='flex gap-4 items-center cursor-pointer hover:bg-blue-100 rounded-lg p-1 active:bg-blue-300'>
            <TrendingUpIcon/>
            <p>Sales</p>

        </li>
    </ul>
    </div>
    
    <div className="content">
    <p className='text-slate-400 my-2 '>Quick Menu</p>
    <ul className='flex flex-col '>
        <li className='flex gap-4 items-center cursor-pointer hover:bg-blue-100 rounded-lg p-1 active:bg-blue-300'>
            <PersonOutlineOutlinedIcon/>
            <p>Users</p>

        </li>
        <li className='flex gap-4 items-center cursor-pointer hover:bg-blue-100 rounded-lg p-1 active:bg-blue-300'>
            <Inventory2OutlinedIcon/>
            <p>Products</p>

        </li>
        <li className='flex gap-4 items-center cursor-pointer hover:bg-blue-100 rounded-lg p-1 active:bg-blue-300'>
            <CurrencyRupeeOutlinedIcon/>
            <p>Transactions</p>

        </li>
        <li className='flex gap-4 items-center cursor-pointer hover:bg-blue-100 rounded-lg p-1 active:bg-blue-300'>
            <AssessmentOutlinedIcon/>
            <p>Reports</p>

        </li>
    </ul>
    </div>
    <div className="content">
    <p className='text-slate-400 my-2 '>Quick Menu</p>
    <ul className='flex flex-col '>
        <li className='flex gap-4 items-center cursor-pointer hover:bg-blue-100 rounded-lg p-1 active:bg-blue-300'>
            <EmailOutlinedIcon/>
            <p>Mail</p>

        </li>
        <li className='flex gap-4 items-center cursor-pointer hover:bg-blue-100 rounded-lg p-1active:bg-blue-300'>
            <DynamicFeedIcon/>
            <p>Feedbacks</p>

        </li>
        <li className='flex gap-4 items-center cursor-pointer hover:bg-blue-100 rounded-lg p-1 active:bg-blue-300'>
            <ChatBubbleOutlineOutlinedIcon/>
            <p>Messages</p>

        </li>
       
    </ul>
    </div>
    <div className="content">
    <p className='text-slate-400 my-2 '>Staff</p>
    <ul className='flex flex-col '>
        <li className='flex gap-4 items-center cursor-pointer hover:bg-blue-100 rounded-lg p-1 active:bg-blue-300'>
            <WorkOutlineIcon/>
            <p>Manage</p>

        </li>
        <li className='flex gap-4 items-center cursor-pointer hover:bg-blue-100 rounded-lg p-1 active:bg-blue-300'>
            <TrendingUpIcon/>
            <p>Analytics</p>

        </li>
        <li className='flex gap-4 items-center cursor-pointer hover:bg-blue-100 rounded-lg p-1 active:bg-blue-300'>
            <ErrorRoundedIcon/>
            <p>Reports</p>

        </li>
       
    </ul>
    </div>
    
  </div>
  )
}

export default Sidebar
