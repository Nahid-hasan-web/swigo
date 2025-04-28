import React, { useState } from "react";
import logo from "../assets/images/logo.png";
import { IoMdArrowDropdown } from "react-icons/io";

const ResponsiveMenu = () => {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <>
      <nav
        id="respnsiveMenu"
        className="lg:hidden absolute top-0 left-0  w-full px-5 py-5"
      >
        <div className="container">
          <div className="menu_row  flex justify-between items-center">
            <div id="res_menu_logo" className="w-[100px]">
              <img src={logo} alt="menu_logo" />
            </div>
            <button
              onClick={() => setShowMenu(!showMenu)}
              className={` duration-[.4s] relative w-[30px] h-[30px] border-2 border-brandColor rounded-[5px] ${
                showMenu && "shadow-[0px_4px_6px_0px_#7DA640]"
              }`}
            >
              <div
                id="line1"
                className={`w-[22px] h-[2px] absolute duration-[.4s] ${
                  showMenu
                    ? "top-[51%] left-[50%] translate-[-50%] rotate-[45deg]"
                    : "top-[40%] left-[50%] translate-[-50%]"
                } bg-brandColor `}
              ></div>
              <div
                id="line1"
                className={`w-[22px] h-[2px] absolute duration-[.4s] ${
                  showMenu
                    ? "top-[51%] left-[50%] translate-[-50%] rotate-[-45deg]"
                    : "top-[60%] left-[50%] translate-[-50%]"
                } bg-brandColor `}
              ></div>
            </button>
          </div>
        </div>
        {/* ------------- slide menus  */}
      </nav>
      <div
        className={`w-[310px]  h-screen bg-red-400  absolute top-0 p-3 ${
          showMenu ? "left-0 bg-red-400" : "left-[-400px]"
        }  duration-[.4s] bg-white shadow-[6px_-1px_10px_-3px_rgba(149,_157,_165,_0.2)]
`}
      >
        <div className="res_logo w-[150px]  mb-5">
          <img src={logo} alt="swigo" />
        </div>
        <div className="menu_item  border-b-[1px] border-gray-200 py-3 "><h4 className="text-lg font-normal font-poppins flex justify-between items-center">Home </h4></div>
        <div className="menu_item  border-b-[1px] border-gray-200 py-3 "><h4 className="text-lg font-normal font-poppins flex justify-between items-center">Shop <IoMdArrowDropdown className="text-2xl" /></h4></div>
        <div className="menu_item  border-b-[1px] border-gray-200 py-3 "><h4 className="text-lg font-normal font-poppins flex justify-between items-center">Blogs <IoMdArrowDropdown className="text-2xl" /></h4></div>
        <div className="menu_item  border-b-[1px] border-gray-200 py-3 "><h4 className="text-lg font-normal font-poppins flex justify-between items-center">Contact Us </h4></div>
      </div>
    </>
  );
};

export default ResponsiveMenu;
