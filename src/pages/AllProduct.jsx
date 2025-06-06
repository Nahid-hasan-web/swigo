import React from "react";
import BreadCrumb from "../components/Common/BreadCrumb";
import CatHead from "../components/Common/CatHead";
import singelBurger from "../assets/images/singelBurger.jpg";
import { FaStar } from "react-icons/fa";
import { MdDeliveryDining } from "react-icons/md";

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
            <div className="w-[800px]">
              <div className="product head mb-4 lg:mb-6  flex justify-between  w-full ">
                <h2 className="text-xl font-semibold font-poppins text-black ">
                  Search Results
                </h2>
                <h3 className="text-[16px] font-medium font-poppins text-[#666666]">
                  Search: 51,740 items
                </h3>
              </div>
              {/* -------- product singel items */}
              <div className="singelPorductItem  flex  items-start w-full  border-[1px] border-gray-300 overflow-hidden rounded-[10px] mb-5">
                <div className="produt_image w-[110px]">
                  <img src={singelBurger} alt="singelProduct" />
                </div>
                {/* ---------- product text */}
                <div className=" w-full">
                  <div className="my-3 w-full px-5 flex justify-between items-center">
                    <div className="ProductName">
                      <h2 className="text-[16px] font-poppins font-semibold text-primary hover:text-brandColor duration-[.4s]">
                        Double Patty Burger
                      </h2>
                    </div>
                    <div className=" py-[2px] px-[4px] rounded-[5px]  bg-[#FE9F10] flex items-center gap-1">
                      <FaStar className="text-[14px] text-white" />{" "}
                      <p className="text-[14px] font-normal font-poppins text-white">
                        4.5
                      </p>
                    </div>
                  </div>

                  {/* --------- product details */}
                  <div className="felx w-full justify-between px-5 mt-5 flex  ">
                    {/* ----- product text */}
                    <div className="produt_text flex items-center gap-5">
                      <p className="text-[14px] font-normal font-poppins text-brandColor">
                        <span className="text-primary">By</span> Burger Farm
                      </p>
                      <p className="text-[14px] font-normal font-poppins text-primary flex  gap-2 items-center">
                        <span className="text-brandColor">
                          <MdDeliveryDining className="text-2xl" />
                        </span>{" "}
                        Burger Farm
                      </p>
                    </div>
                    {/* --------- product price */}
                    <div className="product_price">
                    <p className="text-[14px] font-normal font-poppins text-primary">
                        <span className="text-brandColor">$15.00</span> For a one
                      </p>
                    </div>
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
