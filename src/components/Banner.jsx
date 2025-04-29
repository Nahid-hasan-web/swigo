import React from "react";
import bannerBg from "../assets/images/banner_bg.png";
import { Link } from "react-router-dom";
import bannerSpoon from "../assets/images/bannerSpoon.png";
import bannerLeaf from "../assets/images/bannerleaf.png";
import bannerArrow from "../assets/images/bannerArrow.png";
import Slider from "react-slick";
import { FaArrowUp } from "react-icons/fa";
import { FaArrowDown } from "react-icons/fa";

const Banner = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    vertical: true,
    verticalSwiping: true,
    nextArrow: <FaArrowUp className="arrow" />,
    prevArrow: <FaArrowDown />
  };

  return (
    <>
      <section
        id="banner"
        className="w-full h-screen pt-[224px] relative"
        style={{ background: `url("${bannerBg}")` }}
      >
        <div className="container ">
          <Slider className="banner_main_slider" {...settings}>
            <div>
              <div className="banner_Slider_row flex gap-[448px]">
                <div className="banner_slider_Text">
                  <h2 className="text-xl font-medium font-poppins text-[#FE9F10]">
                    High Quality Test Station
                  </h2>
                  <h1 className="text-[80px] font-normal font-lobster  text-[#222222] w-full lg:w-[551px] my-[10px] leading-[96px]">
                    Choosing The Best{" "}
                    <span className="text-brandColor">Quality Food</span>
                  </h1>
                  <p className="text-[18px] font-normal font-poppins text-[#666666] w-full lg:w-[496px] mb-[40px]">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </p>
                  <div className="banner_buttons flex flex-wrap gap-[30px]">
                    <Link
                      to={"#"}
                      className="py-[16px] px-[31px] bg-brandColor  rounded-[6px] text-[16px] font-medium font-poppins text-white duration-[.4s] hover:scale-[1.2] "
                    >
                      Book a Table
                    </Link>
                    <Link
                      to={"#"}
                      className="py-[16px] px-[31px] border-[1px]  rounded-[6px] text-[16px] font-medium font-poppins text-brandColor  duration-[.4s]  hover:scale-[1.2]"
                    >
                      View More
                    </Link>
                  </div>
                </div>
                <div className="banner_slider_iamge mt-[8px]">
                  <img src={bannerSpoon} alt="" />
                </div>
              </div>
            </div>
            <div>
              <div className="banner_Slider_row flex gap-[448px]">
                <div className="banner_slider_Text">
                  <h2 className="text-xl font-medium font-poppins text-[#FE9F10]">
                    High Quality Test Station
                  </h2>
                  <h1 className="text-[80px] font-normal font-lobster  text-[#222222] w-full lg:w-[551px] my-[10px] leading-[96px]">
                    Choosing The Best{" "}
                    <span className="text-brandColor">Quality Food</span>
                  </h1>
                  <p className="text-[18px] font-normal font-poppins text-[#666666] w-full lg:w-[496px] mb-[40px]">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </p>
                  <div className="banner_buttons flex flex-wrap gap-[30px]">
                    <Link
                      to={"#"}
                      className="py-[16px] px-[31px] bg-brandColor  rounded-[6px] text-[16px] font-medium font-poppins text-white duration-[.4s] hover:scale-[1.2] "
                    >
                      Book a Table
                    </Link>
                    <Link
                      to={"#"}
                      className="py-[16px] px-[31px] border-[1px]  rounded-[6px] text-[16px] font-medium font-poppins text-brandColor  duration-[.4s]  hover:scale-[1.2]"
                    >
                      View More
                    </Link>
                  </div>
                </div>
                <div className="banner_slider_iamge mt-[8px]">
                  <img src={bannerSpoon} alt="" />
                </div>
              </div>
            </div>
            <div>
              <div className="banner_Slider_row flex gap-[448px]">
                <div className="banner_slider_Text">
                  <h2 className="text-xl font-medium font-poppins text-[#FE9F10]">
                    High Quality Test Station
                  </h2>
                  <h1 className="text-[80px] font-normal font-lobster  text-[#222222] w-full lg:w-[551px] my-[10px] leading-[96px]">
                    Choosing The Best{" "}
                    <span className="text-brandColor">Quality Food</span>
                  </h1>
                  <p className="text-[18px] font-normal font-poppins text-[#666666] w-full lg:w-[496px] mb-[40px]">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </p>
                  <div className="banner_buttons flex flex-wrap gap-[30px]">
                    <Link
                      to={"#"}
                      className="py-[16px] px-[31px] bg-brandColor  rounded-[6px] text-[16px] font-medium font-poppins text-white duration-[.4s] hover:scale-[1.2] "
                    >
                      Book a Table
                    </Link>
                    <Link
                      to={"#"}
                      className="py-[16px] px-[31px] border-[1px]  rounded-[6px] text-[16px] font-medium font-poppins text-brandColor  duration-[.4s]  hover:scale-[1.2]"
                    >
                      View More
                    </Link>
                  </div>
                </div>
                <div className="banner_slider_iamge mt-[8px]">
                  <img src={bannerSpoon} alt="" />
                </div>
              </div>
            </div>
          </Slider>
        </div>
        <div className="banner_arrow absolute top-[120px] right-[750px]">
          <img src={bannerArrow} alt="bannerArrow" />
        </div>
        <div className="banner_leaf  absolute top-[25%]  right-[200px]">
          <img src={bannerLeaf} alt="banner leaf" />
        </div>
      </section>
    </>
  );
};

export default Banner;
