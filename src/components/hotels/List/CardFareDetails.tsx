import Image from "next/image";
import React from "react";
import { FaRegClock } from "react-icons/fa6";
import { IoMdAirplane } from "react-icons/io";

export default function CardFareDetails() {
  return (
    <div
      // bg-[#e2e2e2]
      className=" mt-5 bg-[#e2e2e2] rounded-md"
    >
      <div className=" flex items-center gap-5 flex-wrap shadow-sm shadow-gray-300 p-5">
        <div className=" flex items-center gap-3">
          <IoMdAirplane className=" text-lg sm:text-2xl rotate-90" />
          <p className=" font-semibold sm:text-base text-sm">
            Jomo Kenyatta Intl to Heathrow
          </p>
        </div>
        <p className=" text-gray-500 sm:text-base text-sm">
          17th Aug 2023 | 36 hrs 5 min
        </p>
        <p className="sm:text-base text-sm">2 stops</p>
      </div>
      <div className="flex sm:items-center sm:justify-between flex-col sm:flex-row p-5 gap-5">
        <div>
          <div className=" flex sm:items-center gap-3">
            <p className=" font-bold">NBO</p>
            <p className=" text-sm">Jomo Kenyatta Int</p>
          </div>
          <p className=" mt-2 text-sm">Kenya</p>
          <p className=" font-semibold mt-2 text-sm">
            Terminal: <span className=" font-normal">1C</span>
          </p>
          <p className=" font-extrabold text-lg mt-2">06:40</p>
        </div>
        <div className=" flex items-center gap-3">
          <div className=" h-[72px] w-[72px]">
            <Image
              src="/saudi-airline.gif"
              width={500}
              height={500}
              alt="Picture of the logo"
              className=" h-full w-full object-cover"
            />
          </div>
          <div>
            <p className=" font-semibold">Indigo</p>
            <p className=" font-medium text-sm mt-1">6E -1854</p>
            <p className=" text-sm mt-1 text-primary">6h 15m</p>
          </div>
        </div>
        <div className="sm:text-right">
          <div className=" flex items-center gap-3">
            <p className=" font-bold">NBO</p>
            <p className=" text-sm">Jomo Kenyatta Int</p>
          </div>
          <p className=" mt-2 text-sm">Kenya</p>
          <p className=" font-semibold mt-2 text-sm">
            Terminal: <span className=" font-normal">1C</span>
          </p>
          <p className=" font-extrabold text-lg mt-2">06:40</p>
        </div>
      </div>
      <div className=" my-5 w-full h-2 border-b border-dashed border-gray-300 relative">
        <div className=" w-[200px] absolute left-1/2 -translate-x-1/2 -top-3 bg-yellow-50 rounded px-4 py-2 flex items-center gap-3">
          <FaRegClock className=" text-gray-600" />
          <p className=" text-gray-500 text-xs sm:text-sm">LAYOVER</p>
          <p className=" text-primary text-xs sm:text-sm">15h 5min</p>
        </div>
      </div>
      <div className="flex sm:items-center sm:justify-between flex-col sm:flex-row p-5 gap-5">
        <div>
          <div className=" flex sm:items-center gap-3">
            <p className=" font-bold">NBO</p>
            <p className=" text-sm">Jomo Kenyatta Int</p>
          </div>
          <p className=" mt-2 text-sm">Kenya</p>
          <p className=" font-semibold mt-2 text-sm">
            Terminal: <span className=" font-normal">1C</span>
          </p>
          <p className=" font-extrabold text-lg mt-2">06:40</p>
        </div>
        <div className=" flex items-center gap-3">
          <div className=" h-[72px] w-[72px]">
            <Image
              src="/saudi-airline.gif"
              width={500}
              height={500}
              alt="Picture of the logo"
              className=" h-full w-full object-cover"
            />
          </div>
          <div>
            <p className=" font-semibold">Indigo</p>
            <p className=" font-medium text-sm mt-1">6E -1854</p>
            <p className=" text-sm mt-1 text-primary">6h 15m</p>
          </div>
        </div>
        <div className="sm:text-right">
          <div className=" flex items-center gap-3">
            <p className=" font-bold">NBO</p>
            <p className=" text-sm">Jomo Kenyatta Int</p>
          </div>
          <p className=" mt-2 text-sm">Kenya</p>
          <p className=" font-semibold mt-2 text-sm">
            Terminal: <span className=" font-normal">1C</span>
          </p>
          <p className=" font-extrabold text-lg mt-2">06:40</p>
        </div>
      </div>
      <div className=" my-5 w-full h-2 border-b border-dashed border-gray-300 relative">
        <div className=" w-[200px] absolute left-1/2 -translate-x-1/2 -top-3 bg-yellow-50 rounded px-4 py-2 flex items-center gap-3">
          <FaRegClock className=" text-gray-600" />
          <p className=" text-gray-500 text-xs sm:text-sm">LAYOVER</p>
          <p className=" text-primary text-xs sm:text-sm">15h 5min</p>
        </div>
      </div>
      <div className="flex sm:items-center sm:justify-between flex-col sm:flex-row p-5 gap-5">
        <div>
          <div className=" flex sm:items-center gap-3">
            <p className=" font-bold">NBO</p>
            <p className=" text-sm">Jomo Kenyatta Int</p>
          </div>
          <p className=" mt-2 text-sm">Kenya</p>
          <p className=" font-semibold mt-2 text-sm">
            Terminal: <span className=" font-normal">1C</span>
          </p>
          <p className=" font-extrabold text-lg mt-2">06:40</p>
        </div>
        <div className=" flex items-center gap-3">
          <div className=" h-[72px] w-[72px]">
            <Image
              src="/saudi-airline.gif"
              width={500}
              height={500}
              alt="Picture of the logo"
              className=" h-full w-full object-cover"
            />
          </div>
          <div>
            <p className=" font-semibold">Indigo</p>
            <p className=" font-medium text-sm mt-1">6E -1854</p>
            <p className=" text-sm mt-1 text-primary">6h 15m</p>
          </div>
        </div>
        <div className="sm:text-right">
          <div className=" flex items-center gap-3">
            <p className=" font-bold">NBO</p>
            <p className=" text-sm">Jomo Kenyatta Int</p>
          </div>
          <p className=" mt-2 text-sm">Kenya</p>
          <p className=" font-semibold mt-2 text-sm">
            Terminal: <span className=" font-normal">1C</span>
          </p>
          <p className=" font-extrabold text-lg mt-2">06:40</p>
        </div>
      </div>
    </div>
  );
}
