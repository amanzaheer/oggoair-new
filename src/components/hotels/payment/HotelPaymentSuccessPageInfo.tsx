"use client";

import React from "react";
import { FaCheck } from "react-icons/fa6";

export default function HotelPaymentSuccessPageInfo() {
  return (
    <div className=" w-full bg-[#00B3FF14] p-10 rounded-xl">
      <div className=" w-full flex items-center justify-between ">
        <span className=" h-[2px] w-[80px] bg-gradient-to-r  from-blue-300 to-from-white -translate-y-2 "></span>
        <div className="flex flex-col items-center">
          <div className=" h-16 w-16 rounded-full bg-primary flex items-center justify-center p-3">
            <FaCheck className=" text-white text-2xl" />
          </div>
          <p className="  mt-1">Search</p>
        </div>
        <span className=" h-[2px] w-[100px] bg-gradient-to-r from-blue-300 to-from-white -translate-y-2 "></span>
        <div className=" translate-y-3 flex flex-col items-center">
          <div className=" h-16 w-16 rounded-full bg-primary flex items-center justify-center p-3">
            <FaCheck className=" text-white text-2xl" />
          </div>
          <p className="text-center mt-1">
            Contact <br /> Information
          </p>
        </div>

        <span className=" h-[2px] w-[100px] bg-gradient-to-r from-blue-300 to-from-white -translate-y-2 "></span>
        <div className=" translate-y-4 flex flex-col items-center">
          <div className=" h-16 w-16 rounded-full bg-primary flex items-center justify-center p-3">
            <FaCheck className=" text-white text-2xl" />
          </div>
          <p className=" text-center mt-1 text-lg">
            Information <br /> And Payment
          </p>
        </div>

        <span className=" h-[2px] w-[100px] bg-gradient-to-r from-blue-300 to-from-white -translate-y-2 "></span>
        <div className=" translate-y-3 flex flex-col items-center">
          <div className=" h-16 w-16 rounded-full bg-primary flex items-center justify-center p-3">
            <FaCheck className=" text-white text-2xl" />
          </div>
          <p className="text-center mt-1">
            Confirmation <br /> Of Booking
          </p>
        </div>
        <span className=" h-[2px] w-[80px] bg-gradient-to-r from-blue-300 to-from-white -translate-y-2 "></span>
      </div>
    </div>
  );
}
