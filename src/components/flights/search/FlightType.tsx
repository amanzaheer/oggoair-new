"use client";

import React from "react";
import { FaCheck } from "react-icons/fa6";

export default function FlightType({
  flightType,
  setFlightType,
}: {
  flightType: string;
  setFlightType: Function;
}) {
  return (
    <div
      id="flight-type"
      className=" absolute top-full translate-y-2 w-[200px] bg-white shadow-md rounded z-50"
    >
      <div
        onClick={() => setFlightType("one-way")}
        className={`p-3 rounded-t-md text-sm font-medium border-b flex items-center justify-between ${
          flightType === "one-way" && " bg-blue-100"
        }`}
      >
        <p>One Way</p>
      </div>
      <div
        onClick={() => setFlightType("round-trip")}
        className={`p-3 text-sm rounded-b-md font-medium border-b flex items-center justify-between ${
          flightType === "round-trip" && "bg-blue-100"
        }`}
      >
        <p>Round Trip</p>
      </div>
    </div>
  );
}
