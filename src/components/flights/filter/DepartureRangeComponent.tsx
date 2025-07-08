"use client";

import { TimeDuration, TravelTime } from "@/utils/dateFormate";
import React, { useEffect, useState } from "react";
import { Range, getTrackBackground } from "react-range";

export default function DepartureRangeComponent({
  filterTypes,
  changeFilterTypesValue,
  filterAbleTypes,
}: any) {
  const rangeValuesChange = (values: any) => {
    changeFilterTypesValue("departureRangeValues", values);
  };

  return (
    <div className=" px-3 mt-5">
      <p className="mt-3 mb-2 text-xs text-gray-500">Departure</p>
      <div className="mb-5 flex items-center justify-between">
        <span>{TravelTime(filterAbleTypes.departureRangeValues[0])}</span>
        <span>{TravelTime(filterAbleTypes.departureRangeValues[1])}</span>
      </div>
      {filterTypes.departureRangeValues.length && (
        <div>
          <Range
            step={900000}
            min={filterAbleTypes.departureRangeValues[0]}
            max={filterAbleTypes.departureRangeValues[1]}
            values={filterTypes.departureRangeValues}
            onChange={(values) => rangeValuesChange(values)}
            renderTrack={({ props, children }) => (
              <div
                {...props}
                style={{
                  ...props.style,
                  height: "5px",
                  width: "100%",
                  background: getTrackBackground({
                    values: filterTypes.departureRangeValues,
                    colors: ["#ccc", "#2B64C8", "#ccc"],
                    min: filterAbleTypes.departureRangeValues[0],
                    max: filterAbleTypes.departureRangeValues[1],
                  }),
                }}
              >
                {children}
              </div>
            )}
            renderThumb={({ props, isDragged, index }) => (
              <div
                {...props}
                style={{
                  ...props.style,
                }}
                className="w-5 h-5 bg-white rounded-full flex items-center justify-center shadow outline-none relative"
              >
                <span className="bg-primary h-2 w-2 rounded-full"></span>
                <div
                  className={`absolute text-xs h-5 w-20 text-gray-500 -bottom-6 ${
                    index === 0 ? "left-2" : "right-2 text-right"
                  }`}
                >
                  {/* {TravelTime(rangeValues[index])} */}
                </div>
              </div>
            )}
          />
        </div>
      )}
    </div>
  );
}
