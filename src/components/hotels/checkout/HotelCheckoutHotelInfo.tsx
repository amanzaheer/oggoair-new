import { TravelersType } from "@/utils/types";
import Image from "next/image";
import React from "react";
import { IoMdCheckmarkCircleOutline, IoMdClose } from "react-icons/io";
import { IoStar } from "react-icons/io5";
import { MdKeyboardArrowUp, MdOutlinePets } from "react-icons/md";
import HotelRating from "../details/HotelRating";
import { icons } from "@/utils/data";
import {
  getFormattedTimeWithAmPm,
  ShortDate,
  ShortDate2,
} from "@/utils/dateFormate";
import { RiRefund2Line } from "react-icons/ri";

export default function HotelCheckoutHotelInfo({ hotelQueData }: any) {
  type Traveler = {
    age: number | null;
    type: "adult" | "child" | "infant";
  };

  function getTravelerString(travelers: Traveler[]): string {
    const countMap: Record<string, number> = travelers.reduce(
      (acc, { type }) => {
        acc[type] = (acc[type] || 0) + 1;
        return acc;
      },
      {} as Record<string, number>
    );

    return Object.entries(countMap)
      .map(([type, count]) => `${count} ${type}${count > 1 ? "s" : ""}`)
      .join(", ");
  }

  return (
    <div className=" mt-5 bg-[#F8F9FE] p-5 rounded-2xl w-full">
      <div className=" w-full flex justify-between border-b pb-5 ">
        <div>
          <p className=" text-xl font-semibold">
            {hotelQueData.accommodation.location.address.city_name}
          </p>
          <p className=" mt-1">
            {ShortDate2(new Date(hotelQueData.check_in_date))} -{" "}
            {ShortDate2(new Date(hotelQueData.check_out_date))},{" "}
            {getTravelerString(hotelQueData.guests)}
          </p>
        </div>
        <MdKeyboardArrowUp className=" text-gray-500 text-3xl cursor-pointer" />
      </div>
      <div className=" mt-5 grid grid-cols-2">
        <div className=" col-span-2 lg:col-span-1">
          <div className=" flex items-center justify-between flex-wrap gap-5">
            <p className=" text-xl font-semibold">
              {hotelQueData.accommodation.name}
            </p>

            <HotelRating rating={hotelQueData.accommodation.rating} />
          </div>
          <div className=" mt-5">
            <p className=" font-medium text-lg">
              {hotelQueData.accommodation.rooms[0].name}
            </p>
            <div className=" flex items-center gap-3 mt-3 flex-wrap">
              {hotelQueData.accommodation.amenities
                .slice(0, 3)
                .map((amenity: any, index: number) => {
                  return (
                    <div
                      className="  px-3 py-1 flex items-center gap-1 rounded-3xl bg-[#7BCAFF33]"
                      key={index}
                    >
                      {icons[amenity.type] && (
                        <Image
                          src={icons[amenity.type]}
                          width={300}
                          height={300}
                          alt="Picture of the hotel"
                          className=" h-[28px] w-[28px] object-cover"
                        />
                      )}
                      <p>{amenity.description}</p>
                    </div>
                  );
                })}
            </div>
            <div className=" mt-7 flex justify-between">
              <div>
                <p className=" font-medium text-lg">
                  {ShortDate(new Date(hotelQueData.check_in_date))}
                </p>
                <p>
                  Check-in from{" "}
                  {getFormattedTimeWithAmPm(
                    hotelQueData.accommodation.check_in_information
                      .check_in_after_time
                  )}
                </p>
              </div>
              <div>
                <p className=" font-medium text-lg">
                  {ShortDate(new Date(hotelQueData.check_out_date))}
                </p>
                <p>
                  Check-out by{" "}
                  {getFormattedTimeWithAmPm(
                    hotelQueData.accommodation.check_in_information
                      .check_out_before_time
                  )}
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className=" col-span-2 lg:col-span-1">
          <div className=" w-full flex justify-end">
            <div className="w-full lg:w-[300px] ">
              <div className=" w-full h-[140px] rounded-3xl overflow-hidden">
                <Image
                  src={hotelQueData.accommodation.photos[0].url}
                  width={1000}
                  height={1000}
                  alt="Picture of the hotel"
                  className=" w-full  object-cover"
                />
              </div>
              <div className=" mt-5 flex flex-wrap gap-3">
                {hotelQueData.accommodation.rooms[0].rates[0].conditions.find(
                  (condition: any) =>
                    condition.title === "Refund Policy" &&
                    condition.description.includes("Non-Refundable")
                ) ? (
                  <div className=" flex gap-2 mb-2">
                    <IoMdClose className=" text-blue-400 text-xl" />
                    <p className="text-gray-500 text-sm">Non-Refundable</p>
                  </div>
                ) : (
                  <div className=" flex gap-2 mb-2">
                    <IoMdCheckmarkCircleOutline className=" text-blue-400 text-xl" />
                    <p className="text-gray-500 text-sm">Refundable</p>
                  </div>
                )}
                <div className=" flex items-center gap-1">
                  <IoMdCheckmarkCircleOutline className=" text-blue-400 text-xl" />
                  <p className=" text-gray-500 text-sm">All-inclusive</p>
                </div>
                <div className=" flex items-center gap-1">
                  <IoMdCheckmarkCircleOutline className=" text-blue-400 text-xl" />
                  <p className=" text-gray-500 text-sm">Online payment</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
