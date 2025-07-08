"use client";

import React, { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";

export default function SmallerDevicePriceDetails({
  flightDetails,
  passengersInfo,
  commissions,
}: any) {
  const [isExpanded, setIsExpanded] = useState(false);
  const toggleExpanded = () => {
    setIsExpanded(!isExpanded);
  };

  const getPassengerSummary = (passengers: any) => {
    let adults = 0;
    let children = 0;
    let infants = 0;

    // Iterate through each passenger object and count based on type
    passengers.forEach((passenger: any) => {
      if (passenger.type === "adults") {
        adults += 1;
      } else if (passenger.type === "children") {
        children += 1;
      } else if (passenger.type === "infants") {
        infants += 1;
      }
    });

    // Construct the summary string
    let summary = [];

    if (adults > 0) {
      summary.push(`${adults} Adult${adults > 1 ? "s" : ""}`);
    }
    if (children > 0) {
      summary.push(`${children} Child${children > 1 ? "ren" : ""}`);
    }
    if (infants > 0) {
      summary.push(`${infants} Infant${infants > 1 ? "s" : ""}`);
    }

    return summary.join(", ") || "No passengers";
  };

  return (
    <div className=" rounded-xl p-5 bg-[#F8F9FE] relative mb-5">
      <div className=" flex items-center justify-between">
        <p className=" font-semibold ">Price Details</p>
        <div>
          <IoIosArrowDown
            className={`${
              isExpanded ? " rotate-180" : " rotate-0"
            } transition-all duration-150 ease-linear text-xl cursor-pointer `}
            onClick={toggleExpanded}
          />
        </div>
      </div>
      {isExpanded && (
        <div className=" w-full relative mt-5">
          <div className=" font-medium flex items-center justify-between">
            <p className="">{getPassengerSummary(passengersInfo)}</p>
            <p className="">
              ${" "}
              {parseFloat(flightDetails.total_amount) + parseFloat(commissions)}
            </p>
          </div>
          <div className=" flex items-center justify-between mt-3">
            <p className=" text-sm">Return Flight Package Service Fee</p>
            <p className="">$ $0.00</p>
          </div>
          <div className=" flex items-center justify-between mt-5">
            <p className=" font-medium">Total Fee</p>
            <p className="  font-medium text-2xl ">
              ${" "}
              {parseFloat(flightDetails.total_amount) + parseFloat(commissions)}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
