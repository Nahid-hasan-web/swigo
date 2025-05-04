import React from "react";
import BreadCrumb from "../components/Common/BreadCrumb";
import CatHead from "../components/Common/CatHead";
import { FaStar } from "react-icons/fa";
import { FaMotorcycle } from "react-icons/fa6";
import singelBurger from "../assets/images/singelBurger.jpg";
const AllProduct = () => {
  return (
    <>
      <BreadCrumb />
      <section className="bg-white pt-[100px] pb-[350px] ">
        <div className="container">
          <div className="catagory_row flex  gap-[100px]">
            <div className="catagory_sideBar w-[270px]">
              <CatHead cathead={"Current Search"} />
              <div className="flex flex-wrap gap-3 mt-10">
                <button className="py-1 px-3 border-[1px] rounded-[5px] border-gray-400 text-[16px] font-light hover:bg-gray-200 duration-[.4s] font-poppins text-primary">
                  Burger
                </button>
                <button className="py-1 px-3 border-[1px] rounded-[5px] border-gray-400 text-[16px] font-light hover:bg-gray-200 duration-[.4s] font-poppins text-primary">
                  Restaurant
                </button>
                <button className=" mb-5 py-1 px-3 border-[1px] rounded-[5px] border-gray-400 text-[16px] font-light hover:bg-gray-200 duration-[.4s] font-poppins text-primary">
                  Pizza
                </button>
              </div>
              <CatHead cathead={"Refine By Categories"} />
              <div className="flex items-center gap-5 mt-5">
                <input
                  id="Pizza"
                  className="w-[25px] h-[25px]"
                  type="checkbox"
                />
                <label
                  for="Pizza"
                  className="text-lg font-normal font-poppins text-primary"
                >
                  Pizza
                </label>
              </div>
              <div className="flex items-center gap-5 mt-5">
                <input
                  id="Hamburger"
                  className="w-[25px] h-[25px]"
                  type="checkbox"
                />
                <label
                  for="Hamburger"
                  className="text-lg font-normal font-poppins text-primary"
                >
                  Hamburger
                </label>
              </div>
              <div className="flex items-center gap-5 mt-5">
                <input
                  id="Sandwich"
                  className="w-[25px] h-[25px]"
                  type="checkbox"
                />
                <label
                  for="Sandwich"
                  className="text-lg font-normal font-poppins text-primary"
                >
                  Sandwich
                </label>
              </div>
            </div>
            {/* ----------- Product singel card */}
            <div className="w-full">
              <div className="product head mb-4 lg:mb-6  flex justify-between  w-full ">
                <h2 className="text-xl font-semibold font-poppins text-black ">
                  Search Results
                </h2>
                <h3 className="text-[16px] font-medium font-poppins text-[#666666]">
                  Search: 51,740 items
                </h3>
              </div>
              <div className="singelPorductItem  w-full h-[108px] border-[1px] border-gray-300 overflow-hidden rounded-[10px] mb-5">
                <div className="produt_image w-[110px]">
                  <img src={singelBurger} alt="singelProduct" />
                </div>
                <div className="my-5 flex justify-between items-center">
                  <div className="ProductName">
              
                    
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AllProduct;
