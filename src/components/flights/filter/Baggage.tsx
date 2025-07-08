"use client";

import React, { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import SingleLBaggageSelectItem from "./SingleBaggageSelectItem";

export default function Baggage({ filterTypes, changeFilterTypesValue }: any) {
  const [colupsed, setColupsed] = useState(true);

  return (
    <div className=" py-5 px-3 bg-[#F8F9FE] rounded-xl mt-3">
      <div
        className=" flex items-center justify-between cursor-pointer"
        onClick={() => setColupsed(!colupsed)}
      >
        <p className=" font-semibold">Baggage</p>
        <IoIosArrowDown className=" text-gray-500" />
      </div>

      {colupsed ? (
        <div className="">
          <SingleLBaggageSelectItem
            title="Included"
            filterTypes={filterTypes}
            changeFilterTypesValue={changeFilterTypesValue}
          />
          <SingleLBaggageSelectItem
            title="Cary-on-luggage"
            filterTypes={filterTypes}
            changeFilterTypesValue={changeFilterTypesValue}
          />
        </div>
      ) : null}
    </div>
  );
}
