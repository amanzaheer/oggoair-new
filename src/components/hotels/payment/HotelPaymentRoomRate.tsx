import React from "react";

export default function HotelPaymentRoomRate({ hotelQueData }: any) {
  return (
    <div className=" rounded-xl bg-[#F8F9FE] p-5 mt-5 ">
      <div className=" pb-5 border-b ">
        <p className=" text-2xl font-semibold text-center">Room rate</p>
      </div>
      <div className=" mt-5 border-b pb-5">
        <div className=" w-full flex items-center justify-between">
          <p className=" font-semibold">
            {/* {hotelQueData.rooms} {hotelQueData.rooms > 1 ? "rooms" : "room"}{" "} */}
            1 room
          </p>
          <p className=" font-semibold">
            100$
            {/* {hotelQueData.accommodation.rooms[0].rates[0].base_amount} $ */}
          </p>
        </div>
        <div className=" w-full flex items-center justify-between mt-2">
          <p className=" text-sm text-gray-500">Taxes and Fees </p>
          <p className=" text-sm text-gray-500">
            20$
            {/* {hotelQueData.accommodation.rooms[0].rates[0].tax_amount} $ */}
          </p>
        </div>
      </div>
      <div className=" mt-5 flex items-center justify-between">
        <p className=" font-semibold text-xl">Online Payment</p>
        <p className=" font-bold text-2xl">
          120$
          {/* {hotelQueData.accommodation.rooms[0].rates[0].total_amount} $ */}
        </p>
      </div>
    </div>
  );
}
