import React from "react";
import bradcrumbBg from "../../assets/images/breadcrumb.jpg";
import { Link } from "react-router-dom";
import { MdKeyboardArrowRight } from "react-icons/md";

const BreadCrumb = ({ pageName, breadCrumbPageName, breadCrubmPageLink }) => {
  return (
    <>
      <div
        style={{ background: `url(${bradcrumbBg})` }}
        className="w-full py-[100px] lg:py-[250px]   fixed top-0 left-0 z-[-1]  "
      >
        <span className="w-full h-full absolute top-0 left-0 bg-[#000000a8] z-[-1]"></span>
      </div>
      <div className="breadCrumbsTex mt-[100px]  mb-[100px] ">
        <h2 className="lg:text-[70px] text-[40px]  font-nomal font-lobster text-[#fff] text-center ">
          All Products
        </h2>
        <div className="py-3 px-6 bg-brandColor rounded-[8px] w-fit m-auto flex items-center gap-5 mt-[30px]">
          <Link
            className="text-[18px] font-normal font-poppins text-[#fff]"
            to={"/"}
          >
            Home
          </Link>
          <MdKeyboardArrowRight className="text-xl text-white" />
          <Link
            className="text-[18px] font-normal font-poppins text-[#fff]"
            to={"/"}
          >
            All Products
          </Link>
        </div>
      </div>
    </>
  );
};

export default BreadCrumb;
