import Image from "next/image";
import React from "react";
import { IoMdStar } from "react-icons/io";

export default function SingleExclusiveHotelRecomandation({ image }: any) {
  return (
    <div className=" mx-3">
      <div className=" rounded-2xl overflow-hidden h-[400px] w-full relative">
        <div className=" absolute bottom-0 left-0 p-3 bg-black bg-opacity-60 h-[120px] w-full">
          <div className=" flex items-center gap-5">
            <p className=" text-white">Jinglun Hotel</p>
            <div className=" flex items-center">
              <IoMdStar className=" text-yellow-400 text-lg" />
              <IoMdStar className=" text-yellow-400 text-lg" />
              <IoMdStar className=" text-yellow-400 text-lg" />
              <IoMdStar className=" text-yellow-400 text-lg" />
              <IoMdStar className=" text-yellow-400 text-lg" />
            </div>
          </div>
          <p className=" text-blue-300 mt-2">China, Beijing</p>
          <div className=" flex items-center gap-3 mt-2">
            <span className=" bg-blue-600 p-1 px-[6px] rounded text-white">
              4.9
            </span>
            <p className=" text-white">Reviews: 2378</p>
          </div>
        </div>
        <Image
          src={`/New/hotel/exclusive-hotel-recomandation/${image}.png`}
          alt="line"
          height={1000}
          width={1000}
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
}
