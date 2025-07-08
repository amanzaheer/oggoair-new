"use client";

import React, { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import ReturnSingleStopSelectItem from "./ReturnSingleStopSelectItem";

export default function ReturnStop({
  filterTypes,
  changeFilterTypesValue,
}: any) {
  const [colupsed, setColupsed] = useState(true);

  return (
    <div className=" py-5 px-3 bg-[#F8F9FE] rounded-xl mt-3">
      <div
        className=" flex items-center justify-between cursor-pointer"
        onClick={() => setColupsed(!colupsed)}
      >
        <p className=" font-semibold">Return Layovers</p>
        <IoIosArrowDown className=" text-gray-500" />
      </div>

      {colupsed ? (
        <div className="">
          <ReturnSingleStopSelectItem
            title="Non-stop"
            filterTypes={filterTypes}
            changeFilterTypesValue={changeFilterTypesValue}
          />
          <ReturnSingleStopSelectItem
            title="1 layover"
            filterTypes={filterTypes}
            changeFilterTypesValue={changeFilterTypesValue}
          />
          <ReturnSingleStopSelectItem
            title="2 or more layovers"
            filterTypes={filterTypes}
            changeFilterTypesValue={changeFilterTypesValue}
          />
        </div>
      ) : null}
    </div>
  );
}
