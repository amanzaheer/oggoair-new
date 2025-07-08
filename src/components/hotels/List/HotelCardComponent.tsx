"use client";

import Image from "next/image";
import React, { useState } from "react";
import { CiHeart } from "react-icons/ci";
import { PiShareFatThin } from "react-icons/pi";
import { useRouter } from "next/navigation";
import commaNumber from "comma-number";
import StarRating from "./StarRating";
import ShowMoreLess from "./ShowMoreLess";

export default function HotelCardComponent({ hotel }: any) {
  const router = useRouter();
  const goToHotelDetails = () => {
    // console.log(hotel);
    router.push(`/hotel/details?id=${hotel.id}`);
  };
  return (
    <div className=" transition-all duration-300 ease-in-out mt-5 w-full grid grid-cols-10 gap-3 sm:gap-0 rounded-xl bg-[#F8F9FE] h-[270px]">
      <div className=" col-span-10 sm:col-span-3 rounded-l-2xl overflow-hidden w-full">
        {hotel.accommodation?.photos[0]?.url ? (
          <Image
            src={hotel.accommodation.photos[0].url}
            width={300}
            height={300}
            unoptimized
            alt="Picture of the hotel"
            className=" h-full w-full object-cover"
          />
        ) : null}
      </div>
      <div className=" col-span-10 sm:col-span-5 p-3">
        <div className=" w-full h-full">
          <div className=" flex items-center gap-2">
            <p className=" font-semibold text-xl">{hotel.accommodation.name}</p>
            <StarRating rating={hotel.accommodation.rating} />
          </div>
          {/* <div className=" flex items-center gap-1 mt-3">
            <Image
              src="/New/hotel/list/location.png"
              width={300}
              height={300}
              alt="Picture of the hotel"
              className=" h-5 w-5 object-cover"
            />
            <p>3,54 km from the city</p>
          </div> */}
          <div className=" flex items-center gap-3 mt-5">
            {hotel.accommodation.amenities?.find(
              (amenity: any) => amenity.type === "pool"
            ) && (
              <div className=" flex items-center gap-1 pl-2 py-1 pr-4 rounded-3xl bg-blue-100">
                <Image
                  src="/New/hotel/list/pool.png"
                  width={300}
                  height={300}
                  alt="Picture of the hotel"
                  className=" h-5 w-5 object-cover"
                />
                <p className=" text-gray-700 text-sm">Pool</p>
              </div>
            )}
            {hotel.accommodation.amenities?.find(
              (amenity: any) => amenity.type === "parking"
            ) && (
              <div className=" flex items-center gap-1 pl-2 py-1 pr-4 rounded-3xl bg-blue-100">
                <Image
                  src="/New/hotel/details/aminities/parking-icon 2.png"
                  width={300}
                  height={300}
                  alt="Picture of the hotel"
                  className=" h-5 w-5 object-cover"
                />
                <p className=" text-gray-700 text-sm">parking</p>
              </div>
            )}

            {hotel.accommodation.amenities?.find(
              (amenity: any) => amenity.type === "gym"
            ) && (
              <div className=" flex items-center gap-1 pl-2 py-1 pr-4 rounded-3xl bg-blue-100">
                <Image
                  src="/New/hotel/list/gym.png"
                  width={300}
                  height={300}
                  alt="Picture of the hotel"
                  className=" h-5 w-5 object-cover"
                />
                <p className=" text-gray-700 text-sm">Gym</p>
              </div>
            )}
          </div>
          <div className=" mt-5">
            <ShowMoreLess content={hotel.accommodation.description} />
          </div>
          <div className=" mt-5 flex items-center gap-3">
            <div className=" flex items-center justify-center px-3 py-1 rounded-lg bg-primary text-white">
              <span>{hotel.accommodation.rating}</span>
            </div>
            <p className=" font-semibold text-lg">
              Review Score: {hotel.accommodation.review_score}
            </p>
          </div>
        </div>
      </div>
      <div className=" col-span-10 sm:col-span-2 p-3 flex flex-col items-end">
        <div className=" px-3 py-1 rounded-lg bg-[#CDDFFF]">Excellent</div>
        <div className=" flex items-center gap-1 mt-3">
          <div className=" flex items-center justify-center bg-white p-1 rounded-full h-9 w-9">
            <CiHeart className=" text-lg text-blue-500 font-semibold" />
          </div>
          <div className=" flex items-center justify-center bg-white p-1 rounded-full h-9 w-9">
            <PiShareFatThin className=" text-lg text-blue-500 font-semibold" />
          </div>
        </div>
        <p className=" sm:text-right text-3xl font-semibold mt-5">
          {commaNumber(hotel.cheapest_rate_total_amount)} $
        </p>
        <p className=" text-gray-700 sm:text-right mt-2">Total</p>
        <button
          onClick={goToHotelDetails}
          className=" bg-primary text-white px-5 py-2 rounded-lg mt-3 "
        >
          View hotel
        </button>
      </div>
    </div>
  );
}
