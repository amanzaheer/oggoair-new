import Image from "next/image";
import React from "react";
import { MdOutlineStarPurple500 } from "react-icons/md";

export default function BestTravelRating() {
  return (
    <div className=" mt-20 px-5">
      <p className=" text-2xl font-semibold text-center">
        Hotels in Belek with the Best Traveler Ratings
      </p>
      <div className=" mt-10 grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-8">
        {/* item */}
        <div className=" rounded-2xl overflow-hidden h-[400px] relative">
          <div className=" p-2 absolute bottom-0 left-0 bg-black bg-opacity-40 w-full h-[70px]">
            <div className=" flex items-center gap-3">
              <p className=" text-white">Jinglun Hotel</p>
              <div className=" bg-black bg-opacity-70 p-1 px-3 rounded-xl flex items-center">
                <MdOutlineStarPurple500 className=" text-yellow-500" />
                <MdOutlineStarPurple500 className=" text-yellow-500" />
                <MdOutlineStarPurple500 className=" text-yellow-500" />
                <MdOutlineStarPurple500 className=" text-yellow-500" />
                <MdOutlineStarPurple500 className=" text-yellow-500" />
              </div>
            </div>
            <p className=" text-sm text-blue-400 mt-2">China, Beijing</p>
          </div>
          <div className=" p-3 absolute top-0 right-0 bg-primary rounded-bl-2xl text-white">
            <span className=" font-semibold">4.5</span>
          </div>
          <Image
            src="/New/hotel/list/best-travel-rating/1.png"
            width={1000}
            height={1000}
            alt="Picture of the hotel"
            className=" h-full w-full object-cover"
          />
        </div>
        {/* item */}
        {/* item */}
        <div className=" rounded-2xl overflow-hidden h-[400px] relative">
          <div className=" p-2 absolute bottom-0 left-0 bg-black bg-opacity-40 w-full h-[70px]">
            <div className=" flex items-center gap-3">
              <p className=" text-white">Jinglun Hotel</p>
              <div className=" bg-black bg-opacity-70 p-1 px-3 rounded-xl flex items-center">
                <MdOutlineStarPurple500 className=" text-yellow-500" />
                <MdOutlineStarPurple500 className=" text-yellow-500" />
                <MdOutlineStarPurple500 className=" text-yellow-500" />
                <MdOutlineStarPurple500 className=" text-yellow-500" />
                <MdOutlineStarPurple500 className=" text-yellow-500" />
              </div>
            </div>
            <p className=" text-sm text-blue-400 mt-2">China, Beijing</p>
          </div>
          <div className=" p-3 absolute top-0 right-0 bg-primary rounded-bl-2xl text-white">
            <span className=" font-semibold">4.5</span>
          </div>
          <Image
            src="/New/hotel/list/best-travel-rating/2.png"
            width={1000}
            height={1000}
            alt="Picture of the hotel"
            className=" h-full w-full object-cover"
          />
        </div>
        {/* item */}
        {/* item */}
        <div className=" rounded-2xl overflow-hidden h-[400px] relative">
          <div className=" p-2 absolute bottom-0 left-0 bg-black bg-opacity-40 w-full h-[70px]">
            <div className=" flex items-center gap-3">
              <p className=" text-white">Jinglun Hotel</p>
              <div className=" bg-black bg-opacity-70 p-1 px-3 rounded-xl flex items-center">
                <MdOutlineStarPurple500 className=" text-yellow-500" />
                <MdOutlineStarPurple500 className=" text-yellow-500" />
                <MdOutlineStarPurple500 className=" text-yellow-500" />
                <MdOutlineStarPurple500 className=" text-yellow-500" />
                <MdOutlineStarPurple500 className=" text-yellow-500" />
              </div>
            </div>
            <p className=" text-sm text-blue-400 mt-2">China, Beijing</p>
          </div>
          <div className=" p-3 absolute top-0 right-0 bg-primary rounded-bl-2xl text-white">
            <span className=" font-semibold">4.5</span>
          </div>
          <Image
            src="/New/hotel/list/best-travel-rating/3.png"
            width={1000}
            height={1000}
            alt="Picture of the hotel"
            className=" h-full w-full object-cover"
          />
        </div>
        {/* item */}
        {/* item */}
        <div className=" rounded-2xl overflow-hidden h-[400px] relative">
          <div className=" p-2 absolute bottom-0 left-0 bg-black bg-opacity-40 w-full h-[70px]">
            <div className=" flex items-center gap-3">
              <p className=" text-white">Jinglun Hotel</p>
              <div className=" bg-black bg-opacity-70 p-1 px-3 rounded-xl flex items-center">
                <MdOutlineStarPurple500 className=" text-yellow-500" />
                <MdOutlineStarPurple500 className=" text-yellow-500" />
                <MdOutlineStarPurple500 className=" text-yellow-500" />
                <MdOutlineStarPurple500 className=" text-yellow-500" />
                <MdOutlineStarPurple500 className=" text-yellow-500" />
              </div>
            </div>
            <p className=" text-sm text-blue-400 mt-2">China, Beijing</p>
          </div>
          <div className=" p-3 absolute top-0 right-0 bg-primary rounded-bl-2xl text-white">
            <span className=" font-semibold">4.5</span>
          </div>
          <Image
            src="/New/hotel/list/best-travel-rating/4.png"
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
