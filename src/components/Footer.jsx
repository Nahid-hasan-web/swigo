import React from 'react'
import { Link } from 'react-router-dom'
import { LuMapPin } from "react-icons/lu";
import { MdOutlineLocalPhone } from "react-icons/md";
import { IoMailOutline } from "react-icons/io5";
import { FaHeart } from "react-icons/fa";
import tomato from '../assets/images/tomato.png'


const Footer = () => {
  return (
   <>

    <footer className='bg-[#222222] pt-[85px] pb-[22px] relative '>
        <div className="container">
            <div className="footer_row flex justify-end gap-[30px]">
                <ul>
                    <li className='text-2xl font-semibold font-poppins text-white mb-[30px]'>Contact</li>
                    <li className='flex gap-[15px]'>
                    <LuMapPin className='text-[30px] text-brandColor '/>  
                    <p className=' text-[14px] font-poppins font-normal text-[#CCCCCC] w-[215px]'>1247/Plot No. 39, 15th Phase,
                    Colony, Kkatpally, Hyderabad</p>
                    </li>
                    
                    <li className='flex gap-[15px] my-[25px]'>
                    <MdOutlineLocalPhone className='text-[30px] text-brandColor '/>  
                    <div>

                    <a href={'tel:+91 987-654-3210'} className=' text-[14px] font-poppins font-normal text-[#CCCCCC] w-[215px]'>+91 987-654-3210</a>
                    <a href={'tel:+91 123-456-7890'} className=' text-[14px] font-poppins font-normal text-[#CCCCCC]  block w-[215px]'>+91 123-456-7890</a>
                    </div>
                    </li>

                    <li className='flex gap-[15px]'>
                    <IoMailOutline className='text-[30px] text-brandColor '/>  
                    <div>
                    <a href={'mailto:info@example.com'} className=' text-[14px] font-poppins font-normal text-[#CCCCCC] w-[215px]'>info@example.com</a>
                    <a href={'mailto:info@example.com'} className=' text-[14px] font-poppins font-normal text-[#CCCCCC]  block w-[215px]'>info@example.com</a>
                    </div>
                    </li>
                </ul>
                {/* ---------------- footer row  */}
                <ul>
                    <li className='text-2xl font-semibold font-poppins text-white mb-[30px]'>Our Links</li>
                    <li><Link className='text-[16px] font-normal font-poppins text-[#CCCCCC] mb-[16px] inline-block' to={'#'}>Home</Link></li>
                    <li><Link className='text-[16px] font-normal font-poppins text-[#CCCCCC] mb-[16px] inline-block' to={'#'}>About Us</Link></li>
                    <li><Link className='text-[16px] font-normal font-poppins text-[#CCCCCC] mb-[16px] inline-block' to={'#'}>Services</Link></li>
                    <li><Link className='text-[16px] font-normal font-poppins text-[#CCCCCC] mb-[16px] inline-block' to={'#'}>Team</Link></li>
                    <li><Link className='text-[16px] font-normal font-poppins text-[#CCCCCC] mb-[16px] inline-block' to={'#'}>Blog</Link></li>
                </ul>
                <ul>
                    <li className='text-2xl font-semibold font-poppins text-white mb-[30px]'>Help Center</li>
                    <li><Link className='text-[16px] font-normal font-poppins text-[#CCCCCC] mb-[16px] inline-block' to={'#'}>FAQ</Link></li>
                    <li><Link className='text-[16px] font-normal font-poppins text-[#CCCCCC] mb-[16px] inline-block' to={'#'}>Shop</Link></li>
                    <li><Link className='text-[16px] font-normal font-poppins text-[#CCCCCC] mb-[16px] inline-block' to={'#'}>Category Filter</Link></li>
                    <li><Link className='text-[16px] font-normal font-poppins text-[#CCCCCC] mb-[16px] inline-block' to={'#'}>Testimonials</Link></li>
                    <li><Link className='text-[16px] font-normal font-poppins text-[#CCCCCC] mb-[16px] inline-block' to={'#'}>Contact Us</Link></li>
                </ul>
            </div>
            <hr  className='text-[#CCCCCC] mt-[71px]' />
            <div className='flex justify-between py-[24px]'>
                <p className='text-[14px] font-normal font-poppins text-[#999999]'>Copyright 2024 All rights reserved.</p>
                <p className='text-[14px] font-normal font-poppins text-[#999999] flex items-center gap-[10px]'>Crafted With <FaHeart/> by <span className='text-brandColor'>DexignZone</span>  </p>
            </div>
        </div>
     <div className="flex items-center w-[470px] justify-center p-6 absolute  top-[-50%] left-[15%]">
      <div className="bg-[#7DA640] p-[40px] w-full max-w-md rounded-md shadow-md">
        <h2 className="text-[45px] font-normal font-lobster text-white mb-4">
          Contact us
        </h2>
        <p className="text-[16px] font-light text-white  mb-8">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry.
        </p>
        <form className="space-y-6">
          <div>
            <label className="block text-[16px] font-normal font-poppins text-white mb-1">
              Your Name
            </label>
            <input
              type="text"
              className="w-full border-b border-white bg-transparent outline-none text-white placeholder-white"
             
            />
          </div>
          <div>
            <label className="block text-[16px] font-normal font-poppins text-white mb-1">
              Email Address
            </label>
            <input
              type="email"
              className="w-full border-b border-white bg-transparent outline-none text-white placeholder-white"
              
            />
          </div>
          <div>
            <label className="block text-[16px] font-normal font-poppins text-white mb-1">
              Subject
            </label>
            <input
              type="text"
              className="w-full border-b border-white bg-transparent outline-none text-white placeholder-white"
    
            />
          </div>
          <div>
            <label className="block text-[16px] font-normal font-poppins text-white mb-1">
              Message
            </label>
            <textarea
              rows="3"
              className="w-full border-b border-white bg-transparent outline-none text-white placeholder-white resize-none"
            
            ></textarea>
          </div>
          <button
            type="submit"
            className="bg-white text-black py-2 px-6 rounded-md font-semibold hover:bg-gray-200 transition"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
    <div className="toamto  absolute bottom-0 left-0">
        <img src={tomato} alt="" />
    </div>
    </footer>
   </>
  )
}

export default Footer