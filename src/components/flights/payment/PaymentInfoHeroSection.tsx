import Image from "next/image";
import React from "react";
import { Toaster } from "react-hot-toast";
import { FaCheck } from "react-icons/fa6";

export default function PaymentInfoHeroSection() {
  return (
    <div className=" w-full bg-[#00B3FF14] p-5 pb-10 sm:p-10 rounded-xl">
      <div className=" w-full flex items-center flex-wrap sm:flex-nowrap sm:justify-between ">
        <span className=" w-[40px] h-[2px] sm:w-[80px] bg-gradient-to-r  from-blue-300 to-from-white -translate-y-2 "></span>
        <div className="flex flex-col items-center">
          <div className=" h-16 w-16 rounded-full bg-primary flex items-center justify-center p-3">
            <FaCheck className=" text-white text-2xl" />
          </div>
          <p className="  mt-1 text-sm sm:text-base">Search</p>
        </div>
        <span className=" w-[40px] h-[2px] sm:w-[100px] bg-gradient-to-r from-blue-300 to-from-white -translate-y-2 "></span>
        <div className="flex flex-col items-center translate-y-3">
          <div className=" h-16 w-16 rounded-full bg-primary flex items-center justify-center p-3">
            <FaCheck className=" text-white text-2xl" />
          </div>
          <p className="text-sm sm:text-base">
            Passenger <br /> Information
          </p>
        </div>

        <span className=" w-[40px] h-[2px] sm:w-[100px] bg-gradient-to-r from-blue-300 to-from-white -translate-y-2 "></span>

        <div className="flex flex-col items-center translate-y-3">
          <div className=" h-16 w-16 rounded-full bg-primary flex items-center justify-center p-3">
            <FaCheck className=" text-white text-2xl" />
          </div>
          <p className="text-sm sm:text-base">
            Additional <br /> searvices
          </p>
        </div>
        <span className=" w-[40px] h-[2px] sm:w-[100px] bg-gradient-to-r from-blue-300 to-from-white -translate-y-2 "></span>

        <div className=" translate-y-4 flex flex-col items-center">
          <div className=" h-20 w-20 rounded-full bg-white text-primary border border-primary flex items-center justify-center">
            <p className=" text-3xl font-semibold ">4</p>
          </div>
          <p className=" text-center font-medium mt-1 text-sm sm:text-lg">
            Information <br /> And Payment
          </p>
        </div>
        <span className=" w-[40px] h-[2px] sm:w-[100px] bg-gradient-to-r from-blue-300 to-from-white -translate-y-2 "></span>
        <div className=" translate-y-3 flex flex-col items-center">
          <div className=" h-16 w-16 rounded-full bg-white flex items-center justify-center p-3 text-primary">
            <p className="  font-medium text-2xl">5</p>
          </div>
          <p className="text-center mt-1 text-sm sm:text-base">
            Confirmation <br /> Of Booking
          </p>
        </div>
        <span className=" w-[40px] h-[2px] sm:w-[80px] bg-gradient-to-r from-blue-300 to-from-white -translate-y-2 "></span>
      </div>
    </div>
  );
}
