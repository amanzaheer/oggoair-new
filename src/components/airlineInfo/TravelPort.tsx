import Image from "next/image";
import React from "react";

export default function TravelPort() {
  return (
    <div className=" py-5 sm:py-10">
      <p className=" mt-5 text-center text-sky-950 text-2xl font-bold">
        Travelport
      </p>

      <div className=" px-5 mt-10 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5">
        {/* item */}
        <div className="bg-white custom-airline-boxshadow p-5 sm:p-8 rounded-xl flex items-center justify-center">
          <Image
            src="/New/airlines/rectangle30@2x.png"
            width={150}
            height={100}
            alt="Picture of the logo"
            className=""
          />
        </div>
        {/* item */}
        {/* item */}
        <div className="bg-white custom-airline-boxshadow p-5 sm:p-8 rounded-xl flex items-center justify-center">
          <Image
            src="/New/airlines/rectangle31@2x.png"
            width={150}
            height={100}
            alt="Picture of the logo"
            className=""
          />
        </div>
        {/* item */}
        {/* item */}
        <div className="bg-white custom-airline-boxshadow p-5 sm:p-8 rounded-xl flex items-center justify-center">
          <div className=" w-[90px]">
            <Image
              src="/New/airlines/rectangle32@2x.png"
              width={500}
              height={500}
              alt="Picture of the logo"
              className=" w-full"
            />
          </div>
        </div>
        {/* item */}
        {/* item */}
        <div className="bg-white custom-airline-boxshadow p-5 sm:p-8 rounded-xl flex items-center justify-center">
          <div className=" w-[100px]">
            <Image
              src="/New/airlines/rectangle33@2x.png"
              width={500}
              height={500}
              alt="Picture of the logo"
              className=" w-full"
            />
          </div>
        </div>
        {/* item */}
        {/* item */}
        <div className="bg-white custom-airline-boxshadow p-5 sm:p-8 rounded-xl flex items-center justify-center">
          <div className=" w-[100px]">
            <Image
              src="/New/airlines/rectangle34@2x.png"
              width={500}
              height={500}
              alt="Picture of the logo"
              className=" w-full"
            />
          </div>
        </div>
        {/* item */}
        {/* item */}
        <div className="bg-white custom-airline-boxshadow p-5 sm:p-8 rounded-xl flex items-center justify-center">
          <Image
            src="/New/airlines/rectangle35@2x.png"
            width={150}
            height={100}
            alt="Picture of the logo"
            className=""
          />
        </div>
        {/* item */}
        {/* item */}
        <div className="bg-white custom-airline-boxshadow p-5 sm:p-8 rounded-xl flex items-center justify-center">
          <Image
            src="/New/airlines/rectangle36@2x.png"
            width={150}
            height={100}
            alt="Picture of the logo"
            className=""
          />
        </div>
        {/* item */}
        {/* item */}
        <div className="bg-white custom-airline-boxshadow p-5 sm:p-8 rounded-xl flex items-center justify-center">
          <div className=" w-[100px]">
            <Image
              src="/New/airlines/rectangle37@2x.png"
              width={500}
              height={500}
              alt="Picture of the logo"
              className=" w-full"
            />
          </div>
        </div>
        {/* item */}
      </div>
    </div>
  );
}
