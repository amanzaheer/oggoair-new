"use client";

import React from "react";

export default function HotelDescription({ hotelDetailsData }: any) {
  return (
    <div id="hotel-description" className=" mt-20">
      <p className=" font-semibold text-2xl">Hotel Description</p>
      <div className=" mt-5">
        <p>{hotelDetailsData?.accommodation?.description}</p>
      </div>
    </div>
  );
}
