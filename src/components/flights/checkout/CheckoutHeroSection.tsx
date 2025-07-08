import React from "react";
import { FaCheck } from "react-icons/fa6";

export default function CheckoutHeroSection() {
  return (
    <div className=" w-full bg-[#00B3FF14] pb-10 p-5 sm:p-10 rounded-xl">
      <div className=" w-full flex items-center sm:justify-between flex-wrap gap-2 sm:gap-0">
        <span className=" w-[40px] h-[2px] sm:h-[2px] sm:w-[80px] bg-gradient-to-r  from-blue-300 to-from-white sm:-translate-y-2 "></span>
        <div className="flex flex-col items-center">
          <div className=" h-16 w-16 rounded-full bg-primary flex items-center justify-center p-3">
            <FaCheck className=" text-white text-2xl" />
          </div>
          <p className="  mt-1 text-sm sm:text-base">Search</p>
        </div>
        <span className=" w-[40px] h-[2px] sm:w-[100px] bg-gradient-to-r from-blue-300 to-from-white sm:-translate-y-2 "></span>
        <div className=" translate-y-4 flex flex-col items-center">
          <div className=" h-20 w-20 rounded-full bg-white text-primary border border-primary flex items-center justify-center">
            <p className=" text-3xl font-semibold ">2</p>
          </div>
          <p className=" text-center font-medium mt-1 text-sm sm:text-lg">
            Passenger <br /> Information
          </p>
        </div>

        <span className=" w-[40px] h-[2px] sm:w-[100px] bg-gradient-to-r from-blue-300 to-from-white sm:-translate-y-2 "></span>
        <div className=" translate-y-3 flex flex-col items-center">
          <div className=" h-16 w-16 rounded-full bg-white flex items-center justify-center p-3 text-primary">
            <p className="  font-medium text-2xl">3</p>
          </div>
          <p className="text-center mt-1 text-sm sm:text-base">
            Additional <br /> searvices
          </p>
        </div>
        <span className=" w-[40px] h-[2px] sm:w-[100px] bg-gradient-to-r from-blue-300 to-from-white sm:-translate-y-2 "></span>
        <div className=" translate-y-3 flex flex-col items-center">
          <div className=" h-16 w-16 rounded-full bg-white flex items-center justify-center p-3 text-primary">
            <p className="  font-medium text-2xl">4</p>
          </div>
          <p className="text-center mt-1 text-sm sm:text-base">
            Information <br /> And Payment
          </p>
        </div>
        <span className=" w-[40px] h-[2px] sm:w-[100px] bg-gradient-to-r from-blue-300 to-from-white sm:-translate-y-2 "></span>
        <div className=" translate-y-3 flex flex-col items-center">
          <div className=" h-16 w-16 rounded-full bg-white flex items-center justify-center p-3 text-primary">
            <p className="  font-medium text-2xl">5</p>
          </div>
          <p className="text-center mt-1 text-sm sm:text-base">
            Confirmation <br /> Of Booking
          </p>
        </div>
        <span className="  w-[40px] h-[2px] sm:h-[2px] sm:w-[80px] bg-gradient-to-r from-blue-300 to-from-white sm:-translate-y-2 "></span>
      </div>
    </div>
  );
}
