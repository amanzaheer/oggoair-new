import React, { useEffect, useState } from "react";

export default function ParsentageType({
  title,
  type,
  setType,
  changeValue,
}: any) {
  const percentTypes = [
    { type: "in USD", id: "in_usd" },
    { type: "in Percent", id: "in_percent" },
  ];

  return (
    <div>
      {percentTypes.map((percentType, index) => {
        return (
          <div
            key={index}
            className={` ${
              index !== 0 && "mt-1"
            } flex items-center gap-1 transition-all duration-150 ease-in text-gray-500`}
          >
            <input
              checked={type === percentType.type}
              onChange={(e) => {
                setType(percentType.type);
                changeValue(
                  percentType.type === "in USD" ? "money" : "percentage",
                  "commissionBy"
                );
              }}
              type="radio"
              name=""
              id={percentType.id + title}
              className=" cursor-pointer"
            />
            <label
              htmlFor={percentType.id + title}
              className=" cursor-pointer text-sm block w-full"
            >
              {percentType.type}
            </label>
          </div>
        );
      })}
    </div>
  );
}
