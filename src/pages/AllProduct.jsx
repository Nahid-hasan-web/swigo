import React from "react";
import BreadCrumb from "../components/Common/BreadCrumb";
import CatHead from "../components/Common/CatHead";

const AllProduct = () => {
  return (
    <>
      <BreadCrumb />
      <section className="bg-white pt-[100px] pb-[350px] ">
        <div className="container">
          <div className="catagory_row flex  justify-between">
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
                  <input id="Pizza" className="w-[25px] h-[25px]" type="checkbox" />
                  <label for='Pizza' className="text-lg font-normal font-poppins text-primary">Pizza</label>
                </div>
                <div className="flex items-center gap-5 mt-5">
                  <input id="Hamburger" className="w-[25px] h-[25px]" type="checkbox" />
                  <label for='Hamburger' className="text-lg font-normal font-poppins text-primary">Hamburger</label>
                </div>
                <div className="flex items-center gap-5 mt-5">
                  <input id="Sandwich" className="w-[25px] h-[25px]" type="checkbox" />
                  <label for='Sandwich' className="text-lg font-normal font-poppins text-primary">Sandwich</label>
                </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AllProduct;
