import React from "react";
import { FiCalendar, FiEye } from "react-icons/fi";
import CommonHead from "./Common/CommonHead";

const FoodBlogCard = () => {
  return (
    <section id="foodBlogCard" className=" py-[100px]">
      <div className="container">
        <CommonHead CommonHead={"News & Blog"} />

        <div className="flex max-w-[600px] bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
          <img
            src="https://i.ibb.co/DLg0gVr/blog-food.png" // Replace with your actual image
            alt="Food"
            className="w-[220px] h-full object-cover"
          />

          <div className="p-5 flex flex-col justify-between">
            <div className="flex items-center gap-5 mb-2 text-sm text-[#7DA640] font-poppins">
              <div className="flex items-center gap-1">
                <FiCalendar />
                <span>30 Nov 2024</span>
              </div>
              <div className="flex items-center gap-1">
                <FiEye />
                <span>3.5K</span>
              </div>
            </div>

            <h3 className="text-lg font-semibold font-poppins text-[#000] mb-2">
              The Fork & Knife
            </h3>

            <p className="text-sm font-poppins text-gray-500 mb-4 max-w-[300px]">
              There are many variations of passages of Lorem Ipsum available,
              but the majority have.
            </p>

            <button className="bg-[#7DA640] text-white text-sm font-semibold font-poppins px-5 py-2 rounded-md hover:bg-[#68932e] transition-colors duration-200 w-fit">
              Read More
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FoodBlogCard;
