"use client";

import React, { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import SingleAirlineItem from "./SingleAirlineItem";

export default function Airlines({
  filterTypes,
  changeFilterTypesValue,
  filterAbleTypes,
}: any) {
  const [colupsed, setColupsed] = useState(true);
  // console.log("filterAbleTypes", filterAbleTypes);

  return (
    <div className=" py-5 px-3 bg-[#F8F9FE] rounded-xl mt-3">
      <div
        className=" flex items-center justify-between cursor-pointer"
        onClick={() => setColupsed(!colupsed)}
      >
        <p className=" font-semibold">Airlines</p>
        <IoIosArrowDown className=" text-gray-500" />
      </div>

      {colupsed ? (
        <div className="">
          {filterAbleTypes.airlinesLogo.map((airline: any, index: number) => {
            return (
              <SingleAirlineItem
                key={index}
                title={airline.name}
                logo={airline.logo}
                filterTypes={filterTypes}
                changeFilterTypesValue={changeFilterTypesValue}
              />
            );
          })}
        </div>
      ) : null}
    </div>
  );
}
