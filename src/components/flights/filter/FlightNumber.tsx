"use client";

import React, { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";

export default function FlightNumber({
  filterTypes,
  changeFilterTypesValue,
}: any) {
  const [colupsed, setColupsed] = useState(true);
  const [flightNumber, setFlightNumber] = useState("");

  return (
    <div className=" py-5 px-3 border-b">
      <div
        className=" flex items-center justify-between cursor-pointer"
        onClick={() => setColupsed(!colupsed)}
      >
        <p className=" font-semibold">Flight number</p>
        <IoIosArrowDown className=" text-gray-500" />
      </div>

      {colupsed ? (
        <form
          onSubmit={(e) => {
            e.preventDefault();
            changeFilterTypesValue("flightNumber", flightNumber);
          }}
          className=""
        >
          <p className=" text-sm mt-5">Enter the full name of the flight</p>
          <input
            type="text"
            placeholder="For example, SU-2550"
            value={flightNumber}
            onChange={(e) => setFlightNumber(e.target.value)}
            className=" border rounded-md p-2 w-full placeholder:text-sm mt-5 focus:outline-none focus:border-primary"
          />
        </form>
      ) : null}
    </div>
  );
}
