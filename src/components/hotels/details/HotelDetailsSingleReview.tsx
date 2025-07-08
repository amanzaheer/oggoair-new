"use client";

import Image from "next/image";
import React from "react";
import { IoStar } from "react-icons/io5";

export default function HotelDetailsSingleReview() {
  return (
    <div className=" bg-[#F8F9FE] rounded-2xl px-8 py-10 w-full grid grid-cols-8 mt-5">
      <div className=" col-span-2 border-r border-blue-300">
        <div className=" flex items-center gap-3">
          <p className=" font-semibold text-2xl">Daria</p>
          <Image
            src={`/New/hotel/details/3.png`}
            alt="line"
            height={500}
            width={500}
            className=" w-[36px] h-[36px] rounded-full object-cover"
          />
        </div>
        <div className=" flex gap-2 mt-5">
          <Image
            src={`/New/hotel/details/family-traveler.png`}
            alt="line"
            height={500}
            width={500}
            className=" w-[26px] h-[26px] rounded-full object-cover"
          />

          <p>Family traveler</p>
        </div>
        <div className=" flex gap-2 mt-2">
          <Image
            src={`/New/hotel/details/date-calendar-icon 1.png`}
            alt="line"
            height={500}
            width={500}
            className=" w-[26px] h-[26px] rounded-full object-cover"
          />

          <p>August 2024</p>
        </div>
      </div>
      <div className=" col-span-6 pl-10 pr-5">
        <div className=" flex items-center gap-1">
          <IoStar className=" text-lg text-yellow-500" />
          <IoStar className=" text-lg text-yellow-500" />
          <IoStar className=" text-lg text-yellow-500" />
          <IoStar className=" text-lg text-yellow-500" />
          <IoStar className=" text-lg text-yellow-500" />
        </div>
        <p className=" mt-3 text-2xl font-semibold">
          Wonderful family vacation
        </p>
        <p className=" mt-3">{`The hotel grounds are spacious and clean, and the beach is also clean. Although it is stated that sun loungers should not be reserved, if you arrive after 10 a.m. as a family of four, you won't find any sun loungers next to each other as they will all be occupied. The rooms are clean but a bit tired; housekeeping is done daily. There is plenty of food available, with something open all day, so you can always find a snack. We really enjoyed the Turkish restaurant and the seafood restaurant. There is a large pool and a small water park. The kids' club operates all day for children. The evening shows are excellent.`}</p>
        <button className=" px-4 py-2 rounded-xl border border-primary text-primary mt-5">
          Show more
        </button>
      </div>
    </div>
  );
}
