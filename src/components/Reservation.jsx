import React from "react";
import { FaUserAlt, FaPhoneAlt, FaUsers } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { BsCalendarDate } from "react-icons/bs";
import { BiTimeFive } from "react-icons/bi";
import  reservationBg from '../assets/images/reservationBg.png'
const Reservation = () => {
  return (
    <div
      className=" py-[60px] bg-cover bg-center flex items-center mt-10 justify-center px-4"
      style={{
        backgroundImage:
          `url(${reservationBg})` // Replace with your actual image URL
      }}
    >
      <div className="w-full max-w-6xl  bg-opacity-60 rounded-lg">
        <h2 className="text-[#fff] text-4xl font-bold text-center mb-10 italic font-poppins">
          Reservation
        </h2>
        <form className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Your Name */}
          <div className="flex items-center border-b border-white py-2">
            <FaUserAlt className="mr-3 text-xl text-white" />
            <input
              type="text"
              placeholder="Your Name"
              className="bg-transparent outline-none flex-grow text-lg font-poppins font-medium text-[#fff] placeholder-[#fff]"
            />
          </div>

          {/* Phone Number */}
          <div className="flex items-center border-b border-white py-2">
            <FaPhoneAlt className="mr-3 text-xl text-white" />
            <input
              type="number"
              placeholder="Phone Number"
              className="bg-transparent outline-none flex-grow text-lg font-poppins font-medium text-[#fff] placeholder-[#fff]"
            />
          </div>

          {/* Email */}
          <div className="flex items-center border-b border-white py-2">
            <MdEmail className="mr-3 text-2xl text-white" />
            <input
              type="email"
              placeholder="Your Email"
              className="bg-transparent outline-none flex-grow text-lg font-poppins font-medium text-[#fff] placeholder-[#fff]"
            />
          </div>

          {/* Number of People */}
          <div className="flex items-center border-b border-white py-2">
            <FaUsers className="mr-3 text-xl text-white" />
            <input
              type="number"
              placeholder="Number Of People"
              className="bg-transparent outline-none flex-grow text-lg font-poppins font-medium text-[#fff] placeholder-[#fff]"
            />
          </div>

          {/* Date */}
          <div className="flex items-center border-b border-white py-2">
            <BsCalendarDate className="mr-3 text-xl text-white" />
            <input
              type="date"
              className="bg-transparent outline-none flex-grow text-lg font-poppins font-medium text-[#fff] placeholder-[#fff]"
            />
          </div>

          {/* Time */}
          <div className="flex items-center border-b border-white py-2">
            <BiTimeFive className="mr-3 text-2xl text-white" />
            <input
              type="time"
              className="bg-transparent outline-none flex-grow text-lg font-poppins font-medium text-[#fff] placeholder-[#fff]"
            />
          </div>
        </form>

        <div className="text-center mt-10">
          <button
            type="submit"
            className="bg-white text-black font-poppins font-medium text-lg px-8 py-3 rounded-full hover:bg-gray-200 transition duration-300"
          >
            Book a Table
          </button>
        </div>
      </div>
    </div>
  );
};

export default Reservation;
