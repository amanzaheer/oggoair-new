import Image from "next/image";
import React from "react";

export default function HotelLanguage() {
  return (
    <div className=" mt-20">
      <p className=" text-2xl font-bold">Languages spoken</p>
      <div className=" mt-5 flex items-center gap-5">
        <div className=" flex items-center gap-2">
          <Image
            src="/New/hotel/details/turkey.png"
            width={300}
            height={300}
            alt="Picture of the hotel"
            className=" h-[28px] w-[28px] object-cover"
          />
          <p>Turkish</p>
        </div>
        <div className=" flex items-center gap-2">
          <Image
            src="/New/hotel/details/germany.png"
            width={300}
            height={300}
            alt="Picture of the hotel"
            className=" h-[28px] w-[28px] object-cover"
          />
          <p>German</p>
        </div>
        <div className=" flex items-center gap-2">
          <Image
            src="/New/hotel/details/russia.png"
            width={300}
            height={300}
            alt="Picture of the hotel"
            className=" h-[28px] w-[28px] object-cover"
          />
          <p>Russian</p>
        </div>
      </div>
    </div>
  );
}
