import React from 'react'
import logo from '../assets/images/logo.png'
import { Link } from 'react-router-dom'
import { IoIosArrowDown } from "react-icons/io";

const Navbar = () => {
  return (
    <>
      <nav className='main_menu'>
        <div className="container">
          <div className="manu_row flex justify-between items-center">
            {/* ------- menu logo */}
            <div className="logo_col w-[162px]"><img className='w-full' src={logo} alt="swigo" /></div>
          {/* ------- menu items */}
          <div className="menu_items">
            <ul className='flex gap-5  text-[16px] font-normal  font-poppins'>
              <li ><Link className='flex items-center gap-[7px] text-primary' to="#">Home <IoIosArrowDown/></Link></li>
              <li ><Link className='flex items-center gap-[7px] text-primary' to="#">Pages <IoIosArrowDown/></Link></li>
              <li ><Link className='flex items-center gap-[7px] text-primary' to="#">Shop <IoIosArrowDown/></Link></li>
              <li ><Link className='flex items-center gap-[7px] text-primary' to="#">Blogs <IoIosArrowDown/></Link></li>
              <li ><Link className='flex items-center gap-[7px] text-primary' to="#">Contact Us</Link></li>
            </ul>
          </div>
          </div>

        </div>
      </nav>
    </>
  )
}

export default Navbar