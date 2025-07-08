"use client";

import React, { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import CheckItem from "./CheckItem";

export default function ReviewScore({
  filterTypes,
  setFilterTypes,
  filterAbleTypes,
}: any) {
  const [colupsed, setColupsed] = useState(true);

  return (
    <div className=" py-5 px-3 bg-[#F8F9FE] rounded-xl mt-3">
      <div
        className=" flex items-center justify-between cursor-pointer"
        onClick={() => setColupsed(!colupsed)}
      >
        <p className="font-medium text-[#2D2D2D] text-lg">Review Score</p>
        <IoIosArrowDown className=" text-gray-500" />
      </div>

      {colupsed ? (
        <div className="">
          {filterAbleTypes.reviewScore.map(
            (reviewScore: any, index: number) => {
              return (
                <CheckItem
                  key={index}
                  title={reviewScore}
                  data={reviewScore}
                  filterTypes={filterTypes}
                  setFilterTypes={setFilterTypes}
                  type="reviewScore"
                />
              );
            }
          )}
        </div>
      ) : null}
    </div>
  );
}
