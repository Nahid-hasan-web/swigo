import React from 'react'
import logo from '../assets/images/logo.png'
import { Link } from 'react-router-dom'
import { IoIosArrowDown } from "react-icons/io";
import { FaRegUser } from "react-icons/fa";
import { BsHandbag } from "react-icons/bs";

const Navbar = () => {
  return (
    <>
      <nav className='main_menu pt-[19px]  absolute  top-0 left-0 w-full'>
        <div className="container">
          <div className="manu_row flex justify-between items-center">
            {/* ------- menu logo */}
            <div className="logo_col w-[162px]"><img className='w-full' src={logo} alt="swigo" /></div>
          {/* ------- menu items */}
          <div className="menu_items flex gap-[60px] items-center">
            <ul className='flex gap-5  text-[16px] font-normal  font-poppins'>
              <li ><Link className='flex items-center gap-[7px] text-primary' to="#">Home <IoIosArrowDown/></Link></li>
              <li ><Link className='flex items-center gap-[7px] text-primary' to="#">Pages <IoIosArrowDown/></Link></li>
              <li ><Link className='flex items-center gap-[7px] text-primary' to="#">Shop <IoIosArrowDown/></Link></li>
              <li ><Link className='flex items-center gap-[7px] text-primary' to="#">Blogs <IoIosArrowDown/></Link></li>
              <li ><Link className='flex items-center gap-[7px] text-primary' to="#">Contact Us</Link></li>
            </ul>
            <div className="menu_buttons flex gap-[10px] ">
              <button className='w-[45px] h-[45px] rounded-[6px] bg-[#fff] flex justify-center items-center hover:bg-brandColor hover:text-white duration-[1s] text-[#222]'><FaRegUser/></button>
              <button className='w-[45px] h-[45px] rounded-[6px] bg-[#fff] flex justify-center items-center hover:bg-brandColor hover:text-white duration-[1s] text-[#222]'><BsHandbag/></button>
            </div>
          </div>
          </div>

        </div>
      </nav>
    </>
  )
}

export default Navbar