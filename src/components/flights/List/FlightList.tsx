"use client";

import React from "react";
import FlightCardComponent from "./FlightCardComponent";

export default function FlightList({ displayFlightsDataList }: any) {
  return (
    <div>
      {displayFlightsDataList.length === 0 && (
        <div className="mt-10">
          <p className="font-semibold text-center text-red-500">
            No flight found
          </p>
        </div>
      )}
      {displayFlightsDataList.map((flight: any, index: number) => {
        return <FlightCardComponent key={index} flight={flight} />;
      })}
    </div>
  );
}
