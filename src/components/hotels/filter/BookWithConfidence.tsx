"use client";

import React, { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import CheckItem from "./CheckItem";

export default function BookWithConfidence() {
  const [colupsed, setColupsed] = useState(true);

  return (
    <div className=" py-5 px-3 bg-[#F8F9FE] rounded-xl">
      <div
        className=" flex items-center justify-between cursor-pointer"
        onClick={() => setColupsed(!colupsed)}
      >
        <p className=" font-semibold">Book with confidence</p>
        <IoIosArrowDown className=" text-gray-500" />
      </div>

      {colupsed ? (
        <div className="">
          <CheckItem title="Free cancellation" />
          <CheckItem title="Pay on arrival" />
        </div>
      ) : null}
    </div>
  );
}
