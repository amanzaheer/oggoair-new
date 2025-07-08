"use client";

import React, { useEffect, useState } from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

export default function HotelDetailsFilter() {
  const [selectedPriceType, setSelectedPriceType] = useState("Recommended");
  const [openSelectBox, setOpenSelectBox] = useState(false);

  useEffect(() => {
    if (openSelectBox) {
      if (window) {
        window.addEventListener("click", (e: any) => {
          const selectBox = document.getElementById("selectBox");

          if (selectBox && !selectBox.contains(e.target)) {
            setOpenSelectBox(false);
          }
        });
      }
    }
  }, [openSelectBox]);

  return (
    <div className=" w-full flex items-center mt-5">
      <div className=" flex items-center gap-2">
        <p className=" font-semibold">Sorting : </p>
        <div
          id="selectBox"
          className=" py-2 px-4 rounded-full flex items-center gap-1 cursor-pointer bg-blue-100 relative"
          onClick={() => setOpenSelectBox(!openSelectBox)}
        >
          <p className="">{selectedPriceType}</p>
          {openSelectBox ? <IoIosArrowUp /> : <IoIosArrowDown />}
          {openSelectBox && (
            <div
              id="selectBox"
              className=" absolute top-10 right-0 w-40 bg-white border border-gray-200 rounded-lg shadow-lg py-2"
            >
              <p
                className=" px-3 py-1 cursor-pointer hover:bg-blue-100"
                onClick={() => {
                  setSelectedPriceType("Recommended");
                  setOpenSelectBox(false);
                }}
              >
                Recommended
              </p>
              <p
                className=" px-3 py-1 cursor-pointer hover:bg-blue-100"
                onClick={() => {
                  setSelectedPriceType("Low to High");
                  setOpenSelectBox(false);
                }}
              >
                Low to High
              </p>
              <p
                className=" px-3 py-1 cursor-pointer hover:bg-blue-100"
                onClick={() => {
                  setSelectedPriceType("High to Low");
                  setOpenSelectBox(false);
                }}
              >
                High to Low
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
