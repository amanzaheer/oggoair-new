"use client";

import React, { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import ReturnSingleLBaggageSelectItem from "./ReturnSingleBaggageSelectItem";

export default function ReturnBaggage({
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
        <p className=" font-semibold">Baggage Return</p>
        <IoIosArrowDown className=" text-gray-500" />
      </div>

      {colupsed ? (
        <div className="">
          <ReturnSingleLBaggageSelectItem
            title="Included"
            filterTypes={filterTypes}
            changeFilterTypesValue={changeFilterTypesValue}
          />
          <ReturnSingleLBaggageSelectItem
            title="Cary-on-luggage"
            filterTypes={filterTypes}
            changeFilterTypesValue={changeFilterTypesValue}
          />
        </div>
      ) : null}
    </div>
  );
}
