"use client";

import React, { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import SingleStopSelectItem from "./SingleStopSelectItem";

export default function Stop({ filterTypes, changeFilterTypesValue }: any) {
  const [colupsed, setColupsed] = useState(true);

  return (
    <div className=" py-5 px-3  bg-[#F8F9FE] rounded-xl">
      <div
        className=" flex items-center justify-between cursor-pointer"
        onClick={() => setColupsed(!colupsed)}
      >
        <p className=" font-semibold">Layovers</p>
        <IoIosArrowDown className=" text-gray-500" />
      </div>

      {colupsed ? (
        <div className="">
          <SingleStopSelectItem
            title="Non-stop"
            filterTypes={filterTypes}
            changeFilterTypesValue={changeFilterTypesValue}
          />
          <SingleStopSelectItem
            title="1 layover"
            filterTypes={filterTypes}
            changeFilterTypesValue={changeFilterTypesValue}
          />
          <SingleStopSelectItem
            title="2 or more layovers"
            filterTypes={filterTypes}
            changeFilterTypesValue={changeFilterTypesValue}
          />
        </div>
      ) : null}
    </div>
  );
}
