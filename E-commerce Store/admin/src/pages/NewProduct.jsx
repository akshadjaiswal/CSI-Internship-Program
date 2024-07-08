import React from 'react'
import { imageUploadSvg } from '../assets'
const NewProduct = () => {
    return (
        <div className="newproduct flex">
            <div className="datafill flex flex-col gap-4">
                <div className='flex flex-col gap-4 md:gap-8'>
                    <div className="productname">
                        <p className=' text-xs'>product name</p>
                        <input type="text" className=' border-b border-green-500 outline-none underline underline-offset-8 p-2' name="productname" id="productname" placeholder='Product Name' />
                    </div>
                </div>
                <div className='flex flex-col gap-4 md:gap-8'>
                    <div className="description">
                        <p className=' text-xs'>description</p>
                        <input type="text" className=' border-b border-green-500 outline-none underline underline-offset-8 p-2' name="description" id="description" placeholder='Description' />
                    </div>
                </div>
                <div className='flex flex-col gap-4 md:gap-8'>
                    <div className="price">
                        <p className=' text-xs'>price</p>
                        <input type="text" className=' border-b border-green-500 outline-none underline underline-offset-8 p-2' name="price" id="productname" placeholder='Price' />
                    </div>
                </div>
            </div>
            <div className="imageUpload relative flex justify-center flex-wrap items-center ">
                <img src={imageUploadSvg} className='w-[7rem] md:w-[10rem] rounded-full' alt="" />
                <div className=' md:text-black text-white md:border md:border-slate-300   z-50 absolute bottom-0 p-2 bg-white bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 w-full rounded-xl   flex justify-center '>
                    <div>

                    </div>
                    <input type="file" name="profileImg" id="profileImg" style={{ display: "none" }} className=' cursor-pointer '>

                    </input>
                    <label className=' cursor-pointer' htmlFor='profileImg' >
                        button
                    </label>


                </div>
            </div>
        </div>
    )
}

export default NewProduct
