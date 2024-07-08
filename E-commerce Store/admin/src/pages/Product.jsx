import React from 'react'
import { productData } from '../constants/dummyData.js'
import AddBoxOutlinedIcon from '@mui/icons-material/AddBoxOutlined';
import Chart from '../components/Chart.jsx';
import UserImage from '../components/UserImage.jsx';
import { randomProduct } from '../assets/index.js';
import PublishIcon from '@mui/icons-material/Publish';const Product = () => {
    return (
        <div className="product">
            <div className="top my-2 mx-8 flex justify-between">
                <p className=' text-xl font-semibold'>Products</p>
                <button className=' cursor-pointer bg-green-400 rounded-xl font-semibold p-1 md:p-2 '>Create<AddBoxOutlinedIcon /></button>
            </div>
            <div className="middle flex flex-col md:flex-row gap-4">
                <div className="chart md:w-1/2 flex-1">
                <Chart data={productData} dataKey={"sales"} title={"Sales performance"}/>

                </div>
                <div className="info flex-1 border border-slate-200 shadow-md rounded-lg p-4  flex items-center gap-10">
                <div className="head flex items-center">
                    <UserImage UserImage={randomProduct} width={8}/>
                    
                </div>
                <div className="info">

                <div className="name flex">
                <p className=' text-slate-400 flex-1 '>name : </p>
                    <p className='text-lg flex-1 font-semibold'>Saree Red Blossom</p>
                </div>
                <div className="id flex">
                <p className=' text-slate-400 flex-1'>id : </p>
                    <p className='flex-1'>152dgH</p>
                </div>
                <div className="sales flex">
                <p className=' text-slate-400 flex-1'>sales : </p>
                    <p className='flex-1'>4569</p>
                </div>
                <div className="active flex">
                <p className=' text-slate-400 flex-1'>active : </p>
                    <p className='flex-1'>yes</p>
                </div>
                <div className="instock flex">
                    <p className=' text-slate-400 flex-1'>in stock : </p>
                    <p className='flex-1'>no</p>
                </div>
                </div>

                </div>
            </div>
            <div className="bottom">
            <div className="right w-full border border-slate-200 rounded-xl flex flex-col md:flex-row md:gap-12  gap-4 shadow-md p-4 md:px-20">
                    <div className="profile relative flex justify-center flex-wrap items-center ">
                        <img src={randomProduct} className='w-[7rem] md:w-[10rem] rounded-full' alt="" />
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
                            <div className="productname">
                                <p className=' text-xs'>productname</p>
                                <input type="text" className=' border-b border-green-500 outline-none underline underline-offset-8 p-2' name="productname" id="productname" placeholder='gold red blossom' />
                            </div>
                            <div className="instock">
                                <select name="stock" className='px-4 border border-slate-300' id="stock">
                                    <option value="yes">yes</option>
                                    <option value="no">no</option>
                                </select>
                            </div>
                            <div className="active">
                                <select className=' px-4 border border-slate-300' name="active" id="active">
                                    <option value="yes">yes</option>
                                    <option value="no">no</option>
                                </select>
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

export default Product
