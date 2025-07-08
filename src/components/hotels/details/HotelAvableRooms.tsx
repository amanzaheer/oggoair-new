"use client";

import { TravelersType } from "@/utils/types";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { BiShare } from "react-icons/bi";
import { FaUserGroup } from "react-icons/fa6";
import { IoIosArrowDown } from "react-icons/io";
// import { IoInformationCircleOutline, IoWifi } from "react-icons/io5";
// import { LuBedDouble } from "react-icons/lu";
// import {
//   MdOutlineFreeBreakfast,
//   MdOutlinePayment,
//   MdSmokeFree,
// } from "react-icons/md";
import HotelSingleRoomDetails from "./HotelSingleRoomDetails";

export default function HotelAvableRooms({
  travelers,
  hotelSingleDate,
  hotelReturnDate,
  hotelDetailsData,
}: any) {
  const [showMeals, setShowMeals] = useState(false);
  const [showBeds, setShowBeds] = useState(false);
  const [selectedMeals, setSelectedMeals] = useState("all");
  const [selectedBeds, setSelectedBeds] = useState("All");
  const [showFreeCancellation, setShowFreeCancellation] = useState(false);
  const [showPaymentOnSite, setShowPaymentOnSite] = useState(false);

  function getTotalTravelers(travelers: TravelersType) {
    let totalTravelers = `${travelers.adults}`;
    if (travelers.adults > 1) {
      totalTravelers += ` adults`;
    } else {
      totalTravelers += ` adult`;
    }
    if (travelers.child > 0) {
      totalTravelers += `, ${travelers.child} children`;
    }
    if (travelers.infant > 0) {
      totalTravelers += `, ${travelers.infant} infants`;
    }
    return totalTravelers;
  }

  function formatDate(date: any) {
    const options = { month: "long", day: "numeric" };
    return date.toLocaleDateString("en-US", options);
  }

  useEffect(() => {
    function handleClickOutside(event: any) {
      const mealsOptions = document.getElementById("Meals-options");
      const bedsOptions = document.getElementById("Beds-options");
      if (mealsOptions && !mealsOptions.contains(event.target)) {
        setShowMeals(false);
      }
      if (bedsOptions && !bedsOptions.contains(event.target)) {
        setShowBeds(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
  }, [showMeals, showBeds]);

  return (
    <div className=" w-full">
      <div className=" w-full flex items-center justify-center ">
        <div className=" rounded-2xl bg-[#F8F9FE] px-8 py-4 text-center">
          <p className=" text-2xl font-semibold">Available rooms</p>
          <p className=" mt-1">
            {formatDate(new Date(hotelDetailsData.check_in_date))} -{" "}
            {formatDate(new Date(hotelDetailsData.check_out_date))},{" "}
            {getTotalTravelers(travelers)}
          </p>
        </div>
      </div>
      <div className=" w-full flex items-center justify-center gap-3 mt-5">
        <div
          onClick={() => setShowMeals(true)}
          className=" py-3 px-4 border border-blue-300 rounded-2xl flex items-center gap-2 cursor-pointer relative"
        >
          <p className="">
            {selectedMeals === "all" ? (
              "Meals"
            ) : (
              <span className=" capitalize">{selectedMeals}</span>
            )}
          </p>
          <IoIosArrowDown className=" text-lg" />
          {showMeals && (
            <div
              id="Meals-options"
              className=" absolute top-full translate-y-1 left-0 w-full bg-white shadow-md rounded"
            >
              <p
                onClick={() => setSelectedMeals("all")}
                className={` rounded-md hover:bg-primary hover:text-white px-3 py-[6px] ${
                  selectedMeals === "all"
                    ? "bg-primary text-white"
                    : " text-primary"
                }`}
              >
                All
              </p>
              <p
                onClick={() => setSelectedMeals("breakfast")}
                className={` rounded-md hover:bg-primary hover:text-white px-3 py-[6px] mt-1 ${
                  selectedMeals === "breakfast"
                    ? "bg-primary text-white"
                    : " text-primary"
                }`}
              >
                Breakfast
              </p>
              <p
                onClick={() => setSelectedMeals("room_only")}
                className={` rounded-md hover:bg-primary hover:text-white px-3 py-[6px] mt-1 ${
                  selectedMeals === "room_only"
                    ? "bg-primary text-white"
                    : " text-primary"
                }`}
              >
                Room Only
              </p>
            </div>
          )}
        </div>
        <div
          onClick={() => setShowBeds(true)}
          className=" py-3 px-4 border border-blue-300 rounded-2xl flex items-center gap-2 cursor-pointer relative"
        >
          <p className="">
            {selectedBeds === "All" ? (
              "Beds"
            ) : (
              <span className=" capitalize">{selectedMeals}</span>
            )}
          </p>
          <IoIosArrowDown className=" text-lg" />
          {showBeds && (
            <div
              id="Beds-options"
              className=" absolute top-full translate-y-1 left-0 w-full bg-white shadow-md rounded"
            >
              <p
                onClick={() => setSelectedBeds("All")}
                className={` rounded-md hover:bg-primary hover:text-white px-3 py-[6px] ${
                  selectedBeds === "All"
                    ? "bg-primary text-white"
                    : " text-primary"
                }`}
              >
                All
              </p>
              <p
                onClick={() => setSelectedBeds("Single")}
                className={` rounded-md hover:bg-primary hover:text-white px-3 py-[6px] ${
                  selectedBeds === "Single"
                    ? "bg-primary text-white"
                    : " text-primary"
                }`}
              >
                Single
              </p>
              <p
                onClick={() => setSelectedBeds("Double")}
                className={` rounded-md hover:bg-primary hover:text-white px-3 py-[6px] mt-1 ${
                  selectedBeds === "Double"
                    ? "bg-primary text-white"
                    : " text-primary"
                }`}
              >
                Double
              </p>
              <p
                onClick={() => setSelectedBeds("Triple")}
                className={` rounded-md hover:bg-primary hover:text-white px-3 py-[6px] mt-1 ${
                  selectedBeds === "Triple"
                    ? "bg-primary text-white"
                    : " text-primary"
                }`}
              >
                Triple
              </p>
            </div>
          )}
        </div>
        <div className=" py-3 px-4 border border-blue-300 rounded-2xl flex items-center gap-2 cursor-pointer relative">
          <p className="">Free Cancellation</p>
          {/* switch */}
          <div
            onClick={() => setShowFreeCancellation(!showFreeCancellation)}
            className={` h-5 w-10  rounded-full flex items-center py-1 px-[2px] ${
              showFreeCancellation ? "bg-primary" : "bg-gray-200"
            }`}
          >
            <div
              className={`h-4 w-4 rounded-full transition-all duration-150 ease-linear ${
                showFreeCancellation
                  ? " bg-white translate-x-[21px]"
                  : "bg-gray-400"
              }`}
            ></div>
          </div>
        </div>
        <div className=" py-3 px-4 border border-blue-300 rounded-2xl flex items-center gap-2 cursor-pointer relative">
          <p className="">Payment on site</p>
          {/* switch */}
          <div
            onClick={() => setShowPaymentOnSite(!showPaymentOnSite)}
            className={` h-5 w-10  rounded-full flex items-center py-1 px-[2px] ${
              showPaymentOnSite ? "bg-primary" : "bg-gray-200"
            }`}
          >
            <div
              className={`h-4 w-4 rounded-full transition-all duration-150 ease-linear ${
                showPaymentOnSite
                  ? " bg-white translate-x-[21px]"
                  : "bg-gray-400"
              }`}
            ></div>
          </div>
        </div>
      </div>
      {hotelDetailsData.accommodation.rooms.map((room: any, index: number) => {
        return (
          <HotelSingleRoomDetails
            key={index}
            room={room}
            hotelDetailsData={hotelDetailsData}
            selectedBeds={selectedBeds}
            selectedMeals={selectedMeals}
            showFreeCancellation={showFreeCancellation}
            showPaymentOnSite={showPaymentOnSite}
          />
        );
      })}
    </div>
  );
}
