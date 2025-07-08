"use client";

import React, { useState } from "react";
import SingleQuestion from "./SingleQuestion";
import { hotelFAQ } from "@/utils/data";

export default function HotelToggle() {
  const [selectedTitle, setSelectedTitle] = useState("Home");
  return (
    <div className=" px-5 grid grid-cols-12 gap-5 sm:gap-10 pb-5 sm:pb-10 mt-5">
      <div className=" col-span-12 lg:col-span-3">
        <div className=" w-full ">
          {Object.keys(hotelFAQ).map((key, index) => {
            return (
              <p
                key={index}
                onClick={() => setSelectedTitle(key)}
                className={`${
                  selectedTitle === key && "bg-primary text-white"
                } border border-primary rounded-xl hover:bg-primary hover:text-white transition-all duration-150 ease-in-out  mt-3 px-5 py-3 cursor-pointer font-medium text-gray-500 text-sm sm:text-base`}
              >
                {key}
              </p>
            );
          })}
        </div>
      </div>

      <div className="  col-span-12 lg:col-span-9 ">
        <div className="bg-white rounded-xl shadow p-5 pb-0">
          {hotelFAQ[selectedTitle].map((faq, index) => {
            return (
              <SingleQuestion
                key={index}
                faq={faq}
                index={index}
                dataLength={hotelFAQ[selectedTitle].length}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}
