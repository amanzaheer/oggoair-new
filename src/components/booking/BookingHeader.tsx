"use client";

import React, { useState } from "react";
import { FaHotel } from "react-icons/fa6";
import { IoMdAirplane } from "react-icons/io";

export default function BookingHeader() {
  const [selectedBooking, setSelectedBooking] = useState("flight");
  return (
    <div className=" w-full bg-white shadow-custom p-3 rounded-md flex items-center gap-3 sm:gap-5">
      <div
        onClick={() => setSelectedBooking("flight")}
        className={`flex items-center gap-1 sm:gap-2 py-1 sm:py-2 px-3 sm:px-5 rounded cursor-pointer ${
          selectedBooking === "flight"
            ? " bg-primary text-white"
            : " text-primary bg-gray-50"
        } `}
      >
        <IoMdAirplane className=" sm:text-lg" />
        <p className=" text-sm sm:text-base font-medium">Flight Booking</p>
      </div>
      <div
        onClick={() => setSelectedBooking("hotel")}
        className={`flex items-center gap-1 sm:gap-2 py-1 sm:py-2 px-3 sm:px-5 rounded cursor-pointer ${
          selectedBooking === "hotel"
            ? " bg-primary text-white"
            : " text-primary bg-gray-50"
        } `}
      >
        <FaHotel className=" text-sm sm:text-base" />
        <p className=" text-sm sm:text-base font-medium">Hotel Booking</p>
      </div>
    </div>
  );
}
