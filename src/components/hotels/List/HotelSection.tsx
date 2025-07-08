import Image from "next/image";
import React from "react";
import { MdOutlineStarPurple500 } from "react-icons/md";

export default function HotelSection() {
  return (
    <div className=" mt-20 px-5">
      <p className=" text-2xl font-semibold text-center">
        Hotel selection: as easy as 1-2-3
      </p>
      <div className=" mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {/* item */}
        <div className=" px-5">
          <div className=" w-full flex items-center justify-center">
            <Image
              src="/New/hotel/list/hotel-section/3.png"
              width={1000}
              height={1000}
              alt="Picture of the hotel"
              className=" h-[100px] w-[100px]"
            />
          </div>
          <p className=" font-semibold mt-5 text-center">Select destination</p>
          <p className=" mt-5 text-center ">
            Enter your arrival city and date to find available hotels. Our
            service will offer you the best options for your trip.
          </p>
        </div>
        {/* item */}
        {/* item */}
        <div className=" px-5">
          <div className=" w-full flex items-center justify-center">
            <Image
              src="/New/hotel/list/hotel-section/2.png"
              width={1000}
              height={1000}
              alt="Picture of the hotel"
              className=" h-[100px] w-[100px]"
            />
          </div>
          <p className=" font-semibold mt-5 text-center">
            Compare the Best Deals
          </p>
          <p className=" mt-5 text-center ">
            Choose the right hotel based on price, amenities, traveler reviews,
            and additional services. We’ll help you find the best option.
          </p>
        </div>
        {/* item */}
        {/* item */}
        <div className=" px-5">
          <div className=" w-full flex items-center justify-center">
            <Image
              src="/New/hotel/list/hotel-section/1.png"
              width={1000}
              height={1000}
              alt="Picture of the hotel"
              className=" h-[100px] w-[100px]"
            />
          </div>
          <p className=" font-semibold mt-5 text-center">
            Book your accommodation
          </p>
          <p className=" mt-5 text-center ">
            Book your accommodation quickly and easily through our website.
            Choose the suitable option and complete your reservation in just a
            few clicks, with no additional fees.
          </p>
        </div>
        {/* item */}
      </div>
    </div>
  );
}
