"use client";

import React, { useState } from "react";
import { Range, getTrackBackground } from "react-range";

export default function RangeComponent({ title }: { title: String }) {
  const [rangeValues, setRangeValues] = useState([0, 100]);

  return (
    <div className=" px-3 mt-5">
      <p className="mt-2 mb-4 text-xs text-gray-500">{title}</p>
      <div>
        <Range
          step={0.1}
          min={0}
          max={100}
          values={rangeValues}
          onChange={(values) => setRangeValues(values)}
          renderTrack={({ props, children }) => (
            <div
              {...props}
              style={{
                ...props.style,
                height: "5px",
                width: "100%",
                background: getTrackBackground({
                  values: rangeValues,
                  colors: ["#ccc", "#33BC90", "#ccc"],
                  min: 0,
                  max: 100,
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
                className={`absolute text-xs text-gray-500 text-center -bottom-5 ${
                  index === 0 ? "left-2" : "right-2"
                }`}
              >
                {rangeValues[index].toFixed(1)}
              </div>
            </div>
          )}
        />
      </div>
      <div className="mt-10 flex items-center justify-between">
        <div className="py-2 px-5 bg-gray-100 flex justify-center items-center rounded-md text-xs">
          <span>{0}</span>
        </div>
        <div className="py-2 px-5 bg-gray-100 flex justify-center items-center rounded-md text-xs">
          <span>{100}</span>
        </div>
      </div>
    </div>
  );
}
