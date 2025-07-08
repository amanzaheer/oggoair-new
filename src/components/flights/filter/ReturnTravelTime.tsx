"use client";

import React, { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import ReturnTravelTimeRangeComponent from "./ReturnTravelTimeRangeComponent";

export default function ReturnTravelTime({
  filterTypes,
  changeFilterTypesValue,
  filterAbleTypes,
}: any) {
  const [colupsed, setColupsed] = useState(true);

  return (
    <div className=" py-5 px-3 bg-[#F8F9FE] rounded-xl mt-3">
      <div
        className=" flex items-center justify-between cursor-pointer"
        onClick={() => setColupsed(!colupsed)}
      >
        <p className=" font-semibold">Travel Time Return</p>
        <IoIosArrowDown className=" text-gray-500" />
      </div>

      {colupsed ? (
        <div className="">
          <ReturnTravelTimeRangeComponent
            filterAbleTypes={filterAbleTypes}
            filterTypes={filterTypes}
            changeFilterTypesValue={changeFilterTypesValue}
          />
        </div>
      ) : null}
    </div>
  );
}
