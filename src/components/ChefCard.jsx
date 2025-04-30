import React from "react";
import { FiShare2 } from "react-icons/fi";
import CommonHead from "./Common/CommonHead";
import chef1 from '../assets/images/chef1.png'
import chef2 from '../assets/images/chef2.png'
import chef3 from '../assets/images/chef3.png'
import chef4 from '../assets/images/chef4.png'
const ChefCard = () => {
  return (
    <section className="py-[100px] bg-[#F4FDE7]">
      <div className="container">
        <CommonHead CommonHead={"Master Chefs"} />

        <div className="w-[270px] h-[388px] bg-white rounded-xl shadow-lg overflow-hidden transition-transform duration-300 hover:scale-105 hover:shadow-xl">
          <img
            src={chef1} // replace with actual image path
            alt="Chef"
            className="w-full h-[320px] object-cover"
          />
          <div className="p-4 flex justify-between items-center">
            <div>
              <h3 className="text-[16px] font-semibold font-poppins text-[#000]">
                John Doe
              </h3>
              <p className="text-[14px] font-normal font-poppins text-[#7DA640]">
                Senior Chef
              </p>
            </div>
            <button className="p-[10px] bg-[#7DA640] text-white rounded-md hover:bg-[#68932e] transition-colors duration-200">
              <FiShare2 size={16} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChefCard;
