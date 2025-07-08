"use client";

import React, { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import ReturnDepartureRangeComponent from "./ReturnDepartureRangeComponent";
import ReturnArivalRangeComponent from "./ReturnArivalRangeComponent";

export default function ReturnDepartureAndArivalTime({
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
        <p className=" font-semibold">Departure and arrival time return</p>
        <IoIosArrowDown className=" text-gray-500" />
      </div>

      {colupsed ? (
        <div className="">
          <ReturnDepartureRangeComponent
            filterTypes={filterTypes}
            filterAbleTypes={filterAbleTypes}
            changeFilterTypesValue={changeFilterTypesValue}
          />
          <ReturnArivalRangeComponent
            filterTypes={filterTypes}
            filterAbleTypes={filterAbleTypes}
            changeFilterTypesValue={changeFilterTypesValue}
          />
        </div>
      ) : null}
    </div>
  );
}
