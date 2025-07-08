"use client";

import { TimeDuration } from "@/utils/dateFormate";
import commaNumber from "comma-number";
import React, { useEffect, useState } from "react";
import { Range, getTrackBackground } from "react-range";

export default function FlightPriceRangeComponent({
  filterTypes,
  changeFilterTypesValue,
  filterAbleTypes,
}: any) {
  const rangeValuesChange = (values: any) => {
    changeFilterTypesValue("flightPrice", values);
  };

  return (
    <div className=" px-3 mt-5">
      <div className="my-5 flex items-center justify-between">
        <span>{commaNumber(parseInt(filterAbleTypes.flightPrice[0]))} $</span>
        <span>{commaNumber(parseInt(filterAbleTypes.flightPrice[1]))} $</span>
      </div>
      {filterTypes.flightPrice.length && (
        <div>
          <Range
            step={1}
            min={filterAbleTypes.flightPrice[0]}
            max={filterAbleTypes.flightPrice[1]}
            values={filterTypes.flightPrice}
            onChange={(values) => rangeValuesChange(values)}
            renderTrack={({ props, children }) => (
              <div
                {...props}
                style={{
                  ...props.style,
                  height: "5px",
                  width: "100%",
                  background: getTrackBackground({
                    values: filterTypes.flightPrice,
                    colors: ["#ccc", "#2B64C8", "#ccc"],
                    min: filterAbleTypes.flightPrice[0],
                    max: filterAbleTypes.flightPrice[1],
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
                {/* <div
                  className={`absolute w-20 h-5  text-xs text-gray-500 -bottom-6 ${
                    index === 0 ? "left-2" : "right-2 text-right"
                  }`}
                >
                  {commaNumber(parseInt(rangeValues[index]))}
                </div> */}
              </div>
            )}
          />
        </div>
      )}
    </div>
  );
}
