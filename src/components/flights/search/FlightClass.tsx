"use client";

import { TravelersType } from "@/utils/types";
import React, { useEffect, useState } from "react";
import { FaCheck, FaMinus, FaPlus } from "react-icons/fa6";
import { IoMdArrowDropdown } from "react-icons/io";

export default function FlightClass({
  setShowFlightClassSelection,
  flightClass,
  setFlightClass,
}: {
  setShowFlightClassSelection: Function;
  flightClass: string;
  setFlightClass: Function;
}) {
  const [openClassSection, setOpenClassSection] = useState(false);
  const flightClassList = ["economy", "premium_economy", "business", "first"];

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

  return (
    <div
      id="flightClass"
      className="donotclose absolute top-full translate-y-2 w-[280px]  bg-white shadow-md rounded z-50"
    >
      <div className=" flight-class absolute top-full left-0 bg-white shadow rounded-md">
        {flightClassList.map((singleFlightClass, index) => {
          return (
            <div
              key={index}
              onClick={() => {
                setFlightClass(singleFlightClass);
                setShowFlightClassSelection();
              }}
              className={` ${index === 0 && "rounded-t-md"} ${
                index === flightClassList.length - 1 && "rounded-b-md"
              } p-3 text-sm font-medium border-b flex items-center gap-3 justify-between ${
                flightClass === singleFlightClass && "bg-blue-100"
              }`}
            >
              <p className=" capitalize">
                {singleFlightClass === "premium_economy"
                  ? "Premium Economy"
                  : singleFlightClass}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
