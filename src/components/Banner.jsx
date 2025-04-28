import React from "react";
import bannerBg from "../assets/images/banner_bg.png";
import { Link } from "react-router-dom";
import bannerSpoon from '../assets/images/bannerSpoon.png'
const Banner = () => {
  return (
    <>
      <section
        id="banner"
        className="w-full lg:h-[930px] pt-[224px]"
        style={{ background: `url("${bannerBg}")` }}
      >
        <div className="container">
          <div className="banner_Slider_row flex  justify-between">
            <div className="banner_slider_Text">
              <h2 className="text-xl font-medium font-poppins text-[#FE9F10]">
                High Quality Test Station
              </h2>
              <h1 className="text-[80px] font-normal font-lobster  text-[#222222] w-full lg:w-[551px] my-[10px] leading-[96px]">
                Choosing The Best{" "}
                <span className="text-brandColor">Quality Food</span>
              </h1>
              <p className="text-[18px] font-normal font-poppins text-[#666666] w-full lg:w-[496px] mb-[40px]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <div className="banner_buttons flex flex-wrap gap-[30px]">
                <Link to={'#'} className="py-[16px] px-[31px] bg-brandColor  rounded-[6px] text-[16px] font-medium font-poppins text-white duration-[.4s] hover:scale-[1.2] ">Book a Table</Link>
                <Link to={'#'} className="py-[16px] px-[31px] border-[1px]  rounded-[6px] text-[16px] font-medium font-poppins text-brandColor  duration-[.4s]  hover:scale-[1.2]">View More</Link>
              </div>
            </div>
            <div className="banner_slider_iamge mt-[8px]">
              <img src={bannerSpoon} alt="" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Banner;
