"use client";

import React, { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import CheckItem from "./CheckItem";

export default function StarRating({
  filterTypes,
  setFilterTypes,
  filterAbleTypes,
}: any) {
  // console.log(filterAbleTypes);
  const [colupsed, setColupsed] = useState(true);

  return (
    <div className=" py-5 px-3 bg-[#F8F9FE] rounded-xl mt-3">
      <div
        className=" flex items-center justify-between cursor-pointer"
        onClick={() => setColupsed(!colupsed)}
      >
        <p className="font-medium text-[#2D2D2D] text-lg">Rating</p>
        <IoIosArrowDown className=" text-gray-500" />
      </div>

      {colupsed ? (
        <div className="">
          {filterAbleTypes.rating.map((rating: any, index: number) => {
            return (
              <CheckItem
                key={index}
                title={`${rating} Star`}
                data={rating}
                filterTypes={filterTypes}
                setFilterTypes={setFilterTypes}
                type="rating"
              />
            );
          })}
        </div>
      ) : null}
    </div>
  );
}
