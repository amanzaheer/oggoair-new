"use client";

import React, { useState } from "react";

export default function FilterReset({ filterReset }: any) {
  return (
    <div className=" py-5 px-3 bg-[#F8F9FE] rounded-xl">
      <div className=" flex items-center justify-between cursor-pointer">
        <p className="font-medium text-[#2D2D2D] text-lg">Filters</p>
        <p className=" text-blue-500" onClick={filterReset}>
          Reset filters
        </p>
      </div>
    </div>
  );
}
