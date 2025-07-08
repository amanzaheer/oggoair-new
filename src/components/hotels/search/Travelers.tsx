"use client";

import { TravelersType } from "@/utils/types";
import React, { useEffect, useState } from "react";
import { FaCheck, FaMinus, FaPlus } from "react-icons/fa6";

export default function Travelers({ travelers, setTravelers }: any) {
  const [openClassSection, setOpenClassSection] = useState(false);

  useEffect(() => {
    function handleClickOutside(event: any) {
      const flightClass = document.getElementById("flight-class");

      if (
        flightClass &&
        !flightClass.contains(event.target) &&
        !event.target.closest(".flight-class")
      ) {
        setOpenClassSection(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
  }, [openClassSection]);

  const roomIncrement = () => {
    if (travelers.rooms < 5) {
      const newData = { ...travelers };
      newData.rooms += 1;
      setTravelers(newData);
    }
  };
  const roomDecrement = () => {
    if (travelers.rooms > 1) {
      const newData = { ...travelers };
      newData.rooms -= 1;
      setTravelers(newData);
    }
  };
  const adultIncrement = () => {
    if (travelers.adults < 5) {
      const newData = { ...travelers };
      newData.adults += 1;
      setTravelers(newData);
    }
  };
  const adultDecrement = () => {
    if (travelers.adults > 1) {
      const newData = { ...travelers };
      newData.adults -= 1;
      setTravelers(newData);
    }
  };
  const childIncrement = () => {
    if (travelers.child < 5) {
      const newData = { ...travelers };
      newData.child += 1;
      setTravelers(newData);
    }
  };
  const childDecrement = () => {
    if (travelers.child > 0) {
      const newData = { ...travelers };
      newData.child -= 1;
      setTravelers(newData);
    }
  };
  const infantIncrement = () => {
    if (travelers.infant < 5) {
      const newData = { ...travelers };
      newData.infant += 1;
      setTravelers(newData);
    }
  };
  const infantDecrement = () => {
    if (travelers.infant > 0) {
      const newData = { ...travelers };
      newData.infant -= 1;
      setTravelers(newData);
    }
  };

  return (
    <div
      id="travelers"
      className="donotclose absolute top-full translate-y-1 w-[220px] p-1  bg-white shadow-md rounded z-50"
    >
      <div className=" flex items-center justify-between p-3 ">
        <div>
          <p className=" text-gray-700 font-light text-sm">Adults</p>
          <p className=" text-gray-400 font-light text-xs mt-1">Age 12+</p>
        </div>
        <div className=" flex items-center gap-3 p-[2px] border border-blue-300 rounded-md">
          <div
            onClick={adultDecrement}
            className={`h-7 w-7 flex items-center justify-center`}
          >
            <FaMinus
              className={`${
                travelers.adults > 1 ? " text-primary" : "text-gray-700"
              }`}
            />
          </div>
          <p>{travelers.adults}</p>
          <div
            onClick={adultIncrement}
            className={`h-7 w-7 rounded flex items-center justify-center `}
          >
            <FaPlus
              className={`${
                travelers.adults < 5 ? "text-primary " : "text-gray-700"
              }`}
            />
          </div>
        </div>
      </div>
      <div className=" flex items-center justify-between p-3">
        <div>
          <p className=" text-gray-700 font-light text-sm">Child</p>
          <p className=" text-gray-400 font-light text-xs mt-1">Age 2-12</p>
        </div>
        <div className=" flex items-center gap-3 p-[2px] border border-blue-300 rounded-md">
          <div
            onClick={childDecrement}
            className={`h-7 w-7 rounded flex items-center justify-center`}
          >
            <FaMinus
              className={`${
                travelers.child > 0 ? "text-primary" : "text-gray-700"
              }`}
            />
          </div>
          <p>{travelers.child}</p>
          <div
            onClick={childIncrement}
            className={`h-7 w-7 rounded flex items-center justify-center`}
          >
            <FaPlus
              className={`${
                travelers.child < 5 ? "text-primary" : "text-gray-700"
              }`}
            />
          </div>
        </div>
      </div>
      <div className=" flex items-center justify-between p-3 ">
        <div>
          <p className=" text-gray-700 font-light text-sm">Infant</p>
          <p className=" text-gray-400 font-light text-xs mt-1">{"<2 years"}</p>
        </div>
        <div className=" flex items-center gap-3 p-[2px] border border-blue-300 rounded-md">
          <div
            onClick={infantDecrement}
            className={`h-7 w-7 rounded flex items-center justify-center group ${
              travelers.infant > 0 ? "text-primary" : "text-gray-500"
            } `}
          >
            <FaMinus
              className={`${
                travelers.infant > 0 ? "text-primary" : "text-gray-500"
              }`}
            />
          </div>
          <p>{travelers.infant}</p>
          <div
            onClick={infantIncrement}
            className={`h-7 w-7 rounded flex items-center justify-center `}
          >
            <FaPlus
              className={`${
                travelers.infant < 5 ? "text-primary " : "text-gray-700"
              }`}
            />
          </div>
        </div>
      </div>
      <div className=" flex items-center justify-between p-3 ">
        <div>
          <p className=" text-gray-700 font-light text-sm">Room</p>
        </div>
        <div className=" flex items-center gap-3 p-[2px] border border-blue-300 rounded-md">
          <div
            onClick={roomDecrement}
            className={`h-7 w-7 rounded flex items-center justify-center group `}
          >
            <FaMinus
              className={`${
                travelers.rooms > 1 ? "text-primary " : "text-gray-700"
              }`}
            />
          </div>
          <p>{travelers.rooms}</p>
          <div
            onClick={roomIncrement}
            className={`h-7 w-7 rounded flex items-center justify-center group `}
          >
            <FaPlus
              className={`${
                travelers.rooms < 5 ? "text-primary " : "text-gray-700"
              }`}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
