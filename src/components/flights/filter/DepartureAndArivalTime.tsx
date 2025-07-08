"use client";

import React, { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import ArivalRangeComponent from "./ArivalRangeComponent";
import DepartureRangeComponent from "./DepartureRangeComponent";

export default function DepartureAndArivalTime({
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
        <p className=" font-semibold">Departure and arrival time</p>
        <IoIosArrowDown className=" text-gray-500" />
      </div>

      {colupsed ? (
        <div className="">
          <DepartureRangeComponent
            filterTypes={filterTypes}
            filterAbleTypes={filterAbleTypes}
            changeFilterTypesValue={changeFilterTypesValue}
          />
          <ArivalRangeComponent
            filterTypes={filterTypes}
            filterAbleTypes={filterAbleTypes}
            changeFilterTypesValue={changeFilterTypesValue}
          />
        </div>
      ) : null}
    </div>
  );
}
