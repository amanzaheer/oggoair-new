"use client";

import React from "react";

export default function PriceFilter({
  selectedPriceType,
  setSelectedPriceType,
}: any) {
  return (
    <div className=" w-full flex items-center flex-wrap justify-end gap-3">
      <p className="font-semibold">Shorting : </p>
      <select
        className=" focus:outline-none bg-blue-100 rounded-3xl py-2 px-3"
        name=""
        id=""
        value={selectedPriceType}
        onChange={(e) => setSelectedPriceType(e.target.value)}
      >
        <option value="recommended">Recommended</option>
        <option value="highest-price">Highest Price</option>
        <option value="lowest-price">Lowest Price</option>
      </select>
    </div>
  );
}
