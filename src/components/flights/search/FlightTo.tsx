"use client";

import { Airport } from "@/utils/types";
import React from "react";
import { CiLocationOn } from "react-icons/ci";
import { IoAirplaneSharp } from "react-icons/io5";

export default function FlightTo({
  initialData,
  setFlightTo,
  setShowFlightTo,
}: {
  initialData: Airport[];
  setFlightTo: Function;
  setShowFlightTo: Function;
}) {
  return (
    <div className="flight-from-container cursor-default absolute left-0 top-full translate-y-1 rounded-md bg-white w-full h-[300px] shadow overflow-y-scroll scrollbar flex flex-col gap-3 z-50">
      {initialData.map((item, index) => {
        return (
          <div
            key={index}
            onClick={() => {
              setFlightTo(item);
              setShowFlightTo(false);
            }}
            className="group py-2 pl-3 pr-2 first:mt-1 hover:bg-blue-100  rounded cursor-pointer"
          >
            <div className="  flex items-center justify-between">
              <div className=" flex gap-1">
                <div className=" w-6">
                  <IoAirplaneSharp className=" group-hover:text-blue-500 text-gray-600" />
                </div>
                <div className=" ">
                  <p className=" capitalize text-sm text-gray-800">
                    <span>{item.address.cityName.toLocaleLowerCase()}</span> ,
                    <span> {item.address.countryName.toLocaleLowerCase()}</span>
                  </p>
                  <p className=" capitalize mt-2 text-xs text-gray-500">
                    {item.name.toLocaleLowerCase()}
                  </p>
                </div>
              </div>
              <div>
                <p className=" text-white px-3 py-2 bg-primary rounded-lg text-xs font-semibold">
                  {item.iataCode}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
