"use client";

import React, { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import CheckItem from "./CheckItem";

export default function Facilities({
  filterTypes,
  setFilterTypes,
  filterAbleTypes,
}: any) {
  const [colupsed, setColupsed] = useState(true);

  return (
    <div className=" py-5 px-3 bg-[#F8F9FE] rounded-xl mt-3">
      <div
        className=" flex items-center justify-between cursor-pointer"
        onClick={() => setColupsed(!colupsed)}
      >
        <p className=" font-medium text-[#2D2D2D] text-lg">
          Amenities and services
        </p>
        <IoIosArrowDown className=" text-gray-500" />
      </div>

      {colupsed ? (
        <div className="">
          {filterAbleTypes.amenities.map((amenity: any, index: number) => {
            return (
              <CheckItem
                key={index}
                title={amenity}
                data={amenity}
                filterTypes={filterTypes}
                setFilterTypes={setFilterTypes}
                type="amenities"
              />
            );
          })}
        </div>
      ) : null}
    </div>
  );
}
