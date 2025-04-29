import React from "react";
import pizza from "../../assets/images/pizza.png";
const Menu_singelCard = () => {
  return (
    <>
      <div id="specialMenu" className="w-[270px] group h-[415px] rounded-[8px] overflow-hidden border-[1px] border-[#F5F5F5]  relative">
        <div
          id="gray_overlay"
          className="w-[335px] h-[335px] bg-[#F5F5F5] rounded-[50%] absolute top-[-200px] left-[-35px] group-hover:w-[270px] group-hover:rounded-[0px] group-hover:h-[415px] group-hover:top-0  group-hover:left-0    duration-[.6s]  z-[-2]"
        ></div>
        <div
          id="gray_overlay"
          className="w-[335px] h-[335px] bg-brandColor rounded-[50%] absolute top-[-400px] left-[-35px]  group-hover:top-[-200px]  duration-[.6s] z-[-1] "
        ></div>

        <div className="productImage w-[150px] h-[150px] rounded-full  outline-[9px] outline-white overflow-hidden z-[1] m-auto mt-[41px]">
          <img src={pizza} className=" w-full" alt="productImage" />
        </div>
        <h2 className="text-2xl font-semibold font-poppins text-[#222] text-center my-[10px]">
          Pizza
        </h2>
        <p className=" text-[14px] font-poppins font-light text-[#666666] text-center">
          Lorem ipsum dolor sit amet consectetur adipiscing.
        </p>
        <h3 className="text-xl font-semibold font-poppins text-brandColor text-center mt-[8px] mb-[18px]">
          $55.00
        </h3>
        <div className="flex justify-center">
          <button className="py-[13px] px-[25px] bg-brandColor text-[14px] font-medium font-poppins text-[#fff] rounded-[6px] active:scale-[1.1]">Add To Cart</button>
        </div>
      </div>
    </>
  );
};

export default Menu_singelCard;
