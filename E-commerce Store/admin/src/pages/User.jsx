import React from 'react'
import { randomUser } from '../assets'
import UserImage from '../components/UserImage';
import PublishIcon from '@mui/icons-material/Publish';
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined';
import PersonAddAltOutlinedIcon from '@mui/icons-material/PersonAddAltOutlined';
import CalendarMonthOutlinedIcon from '@mui/icons-material/CalendarMonthOutlined';
import SmartphoneOutlinedIcon from '@mui/icons-material/SmartphoneOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import MyLocationOutlinedIcon from '@mui/icons-material/MyLocationOutlined';
const User = () => {
    return (
        <div className="user text-sm md:text-base">
            <div className="top my-2 mx-8 flex justify-between">
                <p className=' text-xl font-semibold'>Edit User</p>
                <button className=' cursor-pointer bg-green-400 rounded-xl font-semibold p-1 md:p-2 '>Create<PersonAddAltOutlinedIcon /></button>
            </div>
            <div className="bottom flex flex-col md:flex-row md:gap-8">
                <div className="left ps-8 border border-slate-200 rounded-xl shadow-md p-2 md:p-8 flex flex-col gap-2 md:gap-6">
                    <div className="first flex gap-4 items-center">
                        <UserImage UserImage={randomUser} />
                        <p className='text-xl font-bold'>Anna Becker</p>
                    </div>
                    <div className="second flex flex-col gap-1 md:gap-4">
                        <p className='text-slate-400'>Account Details</p>
                        <div className="username flex gap-2">
                            <PersonOutlinedIcon />
                            <p>annabeck99</p>
                        </div>
                        <div className="birthdate flex gap-2">
                            <CalendarMonthOutlinedIcon />
                            <p>10.12.1999</p>
                        </div>
                    </div>
                    <div className="third flex flex-col gap-1 md:gap-4">
                        <p className='text-slate-400'>Contact Details</p>
                        <div className="mono flex gap-2">
                            <SmartphoneOutlinedIcon />
                            <p>+91 7858694589</p>
                        </div>
                        <div className="email flex gap-2">
                            <EmailOutlinedIcon />
                            <p>annabecka@gmail.com</p>
                        </div>
                        <div className="location flex gap-2">
                            <MyLocationOutlinedIcon />
                            <p>new york | usa</p>
                        </div>
                    </div>

                </div>
                <div className="right w-full border border-slate-200 rounded-xl flex flex-col md:flex-row md:gap-12  gap-4 shadow-md p-4 md:px-20">
                    <div className="profile relative flex justify-center flex-wrap items-center ">
                        <img src={randomUser} className='w-[7rem] md:w-[10rem] rounded-full' alt="" />
                        <div className=' md:text-black text-white md:border md:border-slate-300   z-50 absolute bottom-0 p-2 bg-white bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 w-full rounded-xl   flex justify-center '>
                            <div>

                            </div>
                            <input type="file" name="profileImg" id="profileImg" style={{ display: "none" }} className=' cursor-pointer '>

                            </input>
                            <label className=' cursor-pointer' htmlFor='profileImg' >
                                <PublishIcon />
                            </label>


                        </div>
                    </div>
                    <div className="details text-sm md:text-base ms-6 md:p-4">
                        <p className='text-xl font-bold my-2'>Edit</p>
                        <div className='flex flex-col gap-4 md:gap-8'>
                            <div className="username">
                                <p className=' text-xs'>Username</p>
                                <input type="text" className=' border-b border-green-500 outline-none underline underline-offset-8 p-2' name="username" id="username" placeholder='annabeck' />
                            </div>
                            <div className="email">
                                <p className=' text-xs'>Email</p>
                                <input type="text" className=' border-b border-green-500 outline-none underline underline-offset-8 p-2' name="email" id="email" placeholder='anna@gmail.com' />
                            </div>
                            <div className="phone">
                                <p className=' text-xs'>Phone</p>
                                <input type="text" className=' border-b border-green-500 outline-none underline underline-offset-8 p-2' name="phone" id="phone" placeholder='+11 22334455677' />
                            </div>
                            <div className="address">
                                <p className=' text-xs'>Address</p>
                                <input type="text" className=' border-b border-green-500 outline-none underline underline-offset-8 p-2' name="address" id="address" placeholder='new york | usa' />
                            </div>
                            <div className="update my-2">
                                <button className=' bg-purple-900 rounded-2xl p-2 text-white'>Update</button>
                            </div>
                        </div>

                    </div>

                </div>
            </div>
        </div>
    )
}

export default User
