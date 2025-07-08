import Image from "next/image";
import React from "react";
import { MdOutlineStarPurple500 } from "react-icons/md";

export default function PopularHotelInSearchedCity() {
  return (
    <div className=" mt-20 px-5">
      <p className=" text-2xl font-semibold text-center">
        Popular Hotels in Belek by Star Rating
      </p>
      <div className=" mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* item */}
        <div className=" rounded-2xl overflow-hidden h-[500px] relative">
          <div className=" p-4 absolute top-0 left-0 bg-black bg-opacity-40  w-full h-[100px]">
            <div className=" flex items-center gap-3">
              <p className=" text-white">5 Star Hotels</p>
              <div className=" bg-black bg-opacity-70 p-1 px-3 rounded-xl flex items-center">
                <MdOutlineStarPurple500 className=" text-yellow-500" />
                <MdOutlineStarPurple500 className=" text-yellow-500" />
                <MdOutlineStarPurple500 className=" text-yellow-500" />
                <MdOutlineStarPurple500 className=" text-yellow-500" />
                <MdOutlineStarPurple500 className=" text-yellow-500" />
              </div>
            </div>
            <p className=" text-sm text-white mt-2">689 properties</p>
          </div>
          <Image
            src="/New/hotel/list/popular-hotel-by-rating/1.png"
            width={1000}
            height={1000}
            alt="Picture of the hotel"
            className=" h-full w-full object-cover"
          />
        </div>
        {/* item */}
        {/* item */}
        <div className=" rounded-2xl overflow-hidden h-[500px] relative">
          <div className=" p-4 absolute top-0 left-0 bg-black bg-opacity-40  w-full h-[100px]">
            <div className=" flex items-center gap-3">
              <p className=" text-white text-lg">5 Star Hotels</p>
              <div className=" bg-black bg-opacity-70 p-1 px-3 rounded-xl flex items-center">
                <MdOutlineStarPurple500 className=" text-yellow-500" />
                <MdOutlineStarPurple500 className=" text-yellow-500" />
                <MdOutlineStarPurple500 className=" text-yellow-500" />
                <MdOutlineStarPurple500 className=" text-yellow-500" />
                <MdOutlineStarPurple500 className=" text-yellow-500" />
              </div>
            </div>
            <p className=" text-sm text-white mt-2">689 properties</p>
          </div>
          <Image
            src="/New/hotel/list/popular-hotel-by-rating/2.png"
            width={1000}
            height={1000}
            alt="Picture of the hotel"
            className=" h-full w-full object-cover"
          />
        </div>
        {/* item */}
        {/* item */}
        <div className=" rounded-2xl overflow-hidden h-[500px] relative">
          <div className=" p-4 absolute top-0 left-0 bg-black bg-opacity-40  w-full h-[100px]">
            <div className=" flex items-center gap-3">
              <p className=" text-white">5 Star Hotels</p>
              <div className=" bg-black bg-opacity-70 p-1 px-3 rounded-xl flex items-center">
                <MdOutlineStarPurple500 className=" text-yellow-500" />
                <MdOutlineStarPurple500 className=" text-yellow-500" />
                <MdOutlineStarPurple500 className=" text-yellow-500" />
                <MdOutlineStarPurple500 className=" text-yellow-500" />
                <MdOutlineStarPurple500 className=" text-yellow-500" />
              </div>
            </div>
            <p className=" text-sm text-white mt-2">689 properties</p>
          </div>
          <Image
            src="/New/hotel/list/popular-hotel-by-rating/3.png"
            width={1000}
            height={1000}
            alt="Picture of the hotel"
            className=" h-full w-full object-cover"
          />
        </div>
        {/* item */}
      </div>
    </div>
  );
}
