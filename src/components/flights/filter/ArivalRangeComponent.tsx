"use client";

import { TravelTime } from "@/utils/dateFormate";
import React, { useEffect, useState } from "react";
import { Range, getTrackBackground } from "react-range";

export default function ArivalRangeComponent({
  filterTypes,
  changeFilterTypesValue,
  filterAbleTypes,
}: any) {
  const rangeValuesChange = (values: any) => {
    changeFilterTypesValue("arivalRangeValues", values);
  };

  return (
    <div className=" px-3 mt-5">
      <p className="mt-10 mb-2 text-xs text-gray-500">Arival</p>
      <div className="mb-5 flex items-center justify-between">
        <span>{TravelTime(filterAbleTypes.arivalRangeValues[0])}</span>
        <span>{TravelTime(filterAbleTypes.arivalRangeValues[1])}</span>
      </div>
      {filterTypes.arivalRangeValues.length && (
        <div>
          <Range
            step={900000}
            min={filterAbleTypes.arivalRangeValues[0]}
            max={filterAbleTypes.arivalRangeValues[1]}
            values={filterTypes.arivalRangeValues}
            onChange={(values) => rangeValuesChange(values)}
            renderTrack={({ props, children }) => (
              <div
                {...props}
                style={{
                  ...props.style,
                  height: "5px",
                  width: "100%",
                  background: getTrackBackground({
                    values: filterTypes.arivalRangeValues,
                    colors: ["#ccc", "#2B64C8", "#ccc"],
                    min: filterAbleTypes.arivalRangeValues[0],
                    max: filterAbleTypes.arivalRangeValues[1],
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
                  className={`absolute text-xs w-20 h-5 text-gray-500 -bottom-6 ${
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
