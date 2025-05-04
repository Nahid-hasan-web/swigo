import React from "react";
import CommonHead from "./Common/CommonHead";
import pasta from "../assets/images/pasta.png";
import bbq from "../assets/images/bbq.png";
import dal from "../assets/images/dal.png";
import burger from "../assets/images/burger copy.png";
import bins from "../assets/images/bins.png";
import { FiShoppingCart } from "react-icons/fi";

const Todays_menu = () => {
  return (
    <section className="bg-[#F4FDE7] pt-[60px] pb-[100px] lg:pt-[100px]  relative  mt-[100px]">
      <div className="container">
        <CommonHead CommonHead={"Today's Menu"} />
        <div className="nahid_todays_menu_row mt-[50px] flex flex-wrap gap-[30px] justify-center ronded-[10px] overflow-hidden ">
          {/* -------- singel menu item */}
          <div className="singelmenu_item relative group   w-[270px] h-[351px] rounded-[10px]  overflow-hidden shadow-[0px_8px_16px_-2px_rgba(0,_0,_0,_0.1)] ">
            <div className="w-full overflow-hidden relative">
              <img src={pasta} alt="pasta" />
              <div className="topslae  z-10 px-[9px] py-[3px] bg-[#FE9F10] absolute top-0 left-0 text-[12px] font-poppins font-semibold text-[#fff] rounded-br-[10px]">
                TOP SALE
              </div>
            </div>
            <div className=" w-full h-[130px] bg-white pt-[23px] absolute bottom-[0] left-0 duration-[.7s] group-hover:bottom-[-100%] ">
              <h2 className="text-xl font-semibold font-poppins text-[#222222] text-center mb-[10px]">
                Pasta
              </h2>
              <p className=" text-[16px] font-normal font-poppins text-[#666666] text-center">
                Lorem ipsum dolor sit amet, dipiscing elit, sed
              </p>
            </div>
            <div className=" w-full h-full bg-[#0000002f] px-[30px] pb-[30px] pt-[23px] absolute bottom-[-100%] left-0 duration-[1s] group-hover:bottom-[0]  bg-gradient-to-t from-[#3b3b3b] via-transparent to-transparent">
              <div className=" absolute w-[230px] left-[20px] bottom-5 flex justify-between items-center">
                <div>
                  <h2 className="text-xl font-poppins font-semibold text-[#fff]">
                    Pasta
                  </h2>
                  <h2 className="text-xl font-poppins font-bold text-[#FE9F10]">
                    $35.00
                  </h2>
                </div>
                <button className=" w-[45px] h-[45px] active:scale-[1.1]  rounded-[6px] bg-white flex justify-center items-center text-brandColor hover:text-white hover:bg-brandColor duration-[.4s]">
                  <FiShoppingCart />
                </button>
              </div>
            </div>
          </div>
          {/* -------- singel menu item */}
          <div className="singelmenu_item relative group   w-[270px] h-[351px] rounded-[10px]  overflow-hidden shadow-[0px_8px_16px_-2px_rgba(0,_0,_0,_0.1)] ">
            <div className="w-full overflow-hidden relative">
              <img src={bbq} alt="pasta" />
              <div className="topslae  z-10 px-[9px] py-[3px] bg-[#FE9F10] absolute top-0 left-0 text-[12px] font-poppins font-semibold text-[#fff] rounded-br-[10px]">
                TOP SALE
              </div>
            </div>
            <div className=" w-full h-[130px] bg-white pt-[23px] absolute bottom-[0] left-0 duration-[.7s] group-hover:bottom-[-100%] ">
              <h2 className="text-xl font-semibold font-poppins text-[#222222] text-center mb-[10px]">
                BBQ
              </h2>
              <p className=" text-[16px] font-normal font-poppins text-[#666666] text-center">
                Lorem ipsum dolor sit amet, dipiscing elit, sed
              </p>
            </div>
            <div className=" w-full h-full bg-[#0000002f] px-[30px] pb-[30px] pt-[23px] absolute bottom-[-100%] left-0 duration-[1s] group-hover:bottom-[0]  bg-gradient-to-t from-[#3b3b3b] via-transparent to-transparent">
              <div className=" absolute w-[230px] left-[20px] bottom-5 flex justify-between items-center">
                <div>
                  <h2 className="text-xl font-poppins font-semibold text-[#fff]">
                    Pasta
                  </h2>
                  <h2 className="text-xl font-poppins font-bold text-[#FE9F10]">
                    $35.00
                  </h2>
                </div>
                <button className=" w-[45px] h-[45px] active:scale-[1.1]  rounded-[6px] bg-white flex justify-center items-center text-brandColor hover:text-white hover:bg-brandColor duration-[.4s]">
                  <FiShoppingCart />
                </button>
              </div>
            </div>
          </div>
          {/* -------- singel menu item */}
          <div className="singelmenu_item relative group   w-[270px] h-[351px] rounded-[10px]  overflow-hidden shadow-[0px_8px_16px_-2px_rgba(0,_0,_0,_0.1)] ">
            <div className="w-full overflow-hidden relative">
              <img src={dal} alt="pasta" />
              <div className="topslae  z-10 px-[9px] py-[3px] bg-[#FE9F10] absolute top-0 left-0 text-[12px] font-poppins font-semibold text-[#fff] rounded-br-[10px]">
                TOP SALE
              </div>
            </div>
            <div className=" w-full h-[130px] bg-white pt-[23px] absolute bottom-[0] left-0 duration-[.7s] group-hover:bottom-[-100%] ">
              <h2 className="text-xl font-semibold font-poppins text-[#222222] text-center mb-[10px]">
                Dal
              </h2>
              <p className=" text-[16px] font-normal font-poppins text-[#666666] text-center">
                Lorem ipsum dolor sit amet, dipiscing elit, sed
              </p>
            </div>
            <div className=" w-full h-full bg-[#0000002f] px-[30px] pb-[30px] pt-[23px] absolute bottom-[-100%] left-0 duration-[1s] group-hover:bottom-[0]  bg-gradient-to-t from-[#3b3b3b] via-transparent to-transparent">
              <div className=" absolute w-[230px] left-[20px] bottom-5 flex justify-between items-center">
                <div>
                  <h2 className="text-xl font-poppins font-semibold text-[#fff]">
                    Pasta
                  </h2>
                  <h2 className="text-xl font-poppins font-bold text-[#FE9F10]">
                    $35.00
                  </h2>
                </div>
                <button className=" w-[45px] h-[45px] active:scale-[1.1]  rounded-[6px] bg-white flex justify-center items-center text-brandColor hover:text-white hover:bg-brandColor duration-[.4s]">
                  <FiShoppingCart />
                </button>
              </div>
            </div>
          </div>
          {/* -------- singel menu item */}
          <div className="singelmenu_item relative group   w-[270px] h-[351px] rounded-[10px]  overflow-hidden shadow-[0px_8px_16px_-2px_rgba(0,_0,_0,_0.1)] ">
            <div className="w-full overflow-hidden relative">
              <img src={burger} alt="pasta" />
              <div className="topslae  z-10 px-[9px] py-[3px] bg-[#FE9F10] absolute top-0 left-0 text-[12px] font-poppins font-semibold text-[#fff] rounded-br-[10px]">
                TOP SALE
              </div>
            </div>
            <div className=" w-full h-[130px] bg-white pt-[23px] absolute bottom-[0] left-0 duration-[.7s] group-hover:bottom-[-100%] ">
              <h2 className="text-xl font-semibold font-poppins text-[#222222] text-center mb-[10px]">
                Burger
              </h2>
              <p className=" text-[16px] font-normal font-poppins text-[#666666] text-center">
                Lorem ipsum dolor sit amet, dipiscing elit, sed
              </p>
            </div>
            <div className=" w-full h-full bg-[#0000002f] px-[30px] pb-[30px] pt-[23px] absolute bottom-[-100%] left-0 duration-[1s] group-hover:bottom-[0]  bg-gradient-to-t from-[#3b3b3b] via-transparent to-transparent">
              <div className=" absolute w-[230px] left-[20px] bottom-5 flex justify-between items-center">
                <div>
                  <h2 className="text-xl font-poppins font-semibold text-[#fff]">
                    Pasta
                  </h2>
                  <h2 className="text-xl font-poppins font-bold text-[#FE9F10]">
                    $35.00
                  </h2>
                </div>
                <button className=" w-[45px] h-[45px] active:scale-[1.1]  rounded-[6px] bg-white flex justify-center items-center text-brandColor hover:text-white hover:bg-brandColor duration-[.4s]">
                  <FiShoppingCart />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className=" absolute  hidden lg:block top-10  right-20">
        <img src={bins} alt="bins" />
      </div>
    </section>
  );
};

export default Todays_menu;
