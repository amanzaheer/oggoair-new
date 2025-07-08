"use client";

import { Airport } from "@/utils/types";
import React from "react";
import { CiLocationOn } from "react-icons/ci";
import { RiHotelLine } from "react-icons/ri";

export default function HotelFrom({
  initialData,
  setFilghtFrom,
  setShowHotelFrom,
}: {
  initialData: Airport[];
  setFilghtFrom: Function;
  setShowHotelFrom: Function;
}) {
  return (
    <div className="hotel-from-container cursor-default absolute left-0 top-full translate-y-1 rounded-md bg-white w-full h-[300px] p-3 shadow overflow-y-scroll scrollbar flex flex-col gap-3 z-50">
      {initialData.map((item: any, index) => {
        return (
          <div
            key={index}
            onClick={() => {
              setFilghtFrom(item);
              setShowHotelFrom(false);
            }}
            className=" bg-gray-100 p-1 rounded cursor-pointer flex items-center gap-2"
          >
            <div className=" w-8 flex items-center justify-center">
              <RiHotelLine className=" text-xl" />
            </div>
            <div>
              <p className=" font-medium">{item.place_name}</p>
              {/* <p className=" text-sm text-gray-500">
                {item.city} - {item.country}
              </p> */}
            </div>
          </div>
        );
      })}
    </div>
  );
}
