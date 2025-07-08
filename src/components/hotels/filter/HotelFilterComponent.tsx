"use client";

import React, { useState } from "react";
import StarRating from "./StarRating";
import Facilities from "./Facilities";
import Dining from "./Dining";
import BookWithConfidence from "./BookWithConfidence";
import ReviewScore from "./ReviewScore";
import FilterReset from "./FilterReset";

export default function HotelFilterComponent({
  filterTypes,
  setFilterTypes,
  filterAbleTypes,
  setFilterAbleTypes,
}: any) {
  const filterReset = () => {
    setFilterTypes({
      rating: [],
      amenities: [],
      dining: [],
      bookWithConfidence: [],
      reviewScore: [],
      sorting: "Recommended",
    });
  };
  // console.log(filterAbleTypes);
  // console.log(filterTypes);
  return (
    <div className=" bg-white rounded-md sticky top-1 h-[calc(100vh-.5rem)] scrollbar overflow-y-scroll pb-1">
      {/* <BookWithConfidence /> */}
      <FilterReset filterReset={filterReset} />
      <StarRating
        filterTypes={filterTypes}
        setFilterTypes={setFilterTypes}
        filterAbleTypes={filterAbleTypes}
      />
      <ReviewScore
        filterTypes={filterTypes}
        setFilterTypes={setFilterTypes}
        filterAbleTypes={filterAbleTypes}
      />
      {/* <Dining /> */}
      <Facilities
        filterTypes={filterTypes}
        setFilterTypes={setFilterTypes}
        filterAbleTypes={filterAbleTypes}
      />
    </div>
  );
}
