import Image from "next/image";
import React from "react";

export default function HotelPopularDestinations() {
  return (
    <div className="w-full flex justify-center p-5">
      <div className={`w-full xl:w-[1220px] 2xl:w-[1420px] py-10`}>
        <p className=" text-3xl font-semibold text-[#001B4C] text-center">
          Popular destinations
        </p>
        <div className=" w-full grid grid-cols-1 lg:grid-cols-2 gap-4 mt-8">
          <div className=" col-span-1 grid grid-cols-3 gap-5">
            <div className=" col-span-3 sm:col-span-2 h-[400px]">
              <Image
                src={`/New/hotel/popular-destinations/1.png`}
                alt="line"
                height={500}
                width={500}
                className="w-full h-full rounded-2xl"
              />
            </div>
            <div className=" col-span-3 sm:col-span-1 flex flex-col gap-5">
              <div className=" w-full h-[400px] sm:h-[190px]">
                <Image
                  src={`/New/hotel/popular-destinations/2.png`}
                  alt="line"
                  height={500}
                  width={500}
                  className="w-full h-full rounded-2xl"
                />
              </div>
              <div className=" w-full h-[400px] sm:h-[190px]">
                <Image
                  src={`/New/hotel/popular-destinations/3.png`}
                  alt="line"
                  height={500}
                  width={500}
                  className="w-full h-full rounded-2xl"
                />
              </div>
            </div>
          </div>
          <div className=" col-span-1 grid grid-cols-3 gap-5">
            <div className=" col-span-3 sm:col-span-2 h-[400px]">
              <Image
                src={`/New/hotel/popular-destinations/4.png`}
                alt="line"
                height={500}
                width={500}
                className="w-full h-full rounded-2xl"
              />
            </div>
            <div className=" col-span-3 sm:col-span-1 flex flex-col gap-5">
              <div className=" w-full h-[400px] sm:h-[190px]">
                <Image
                  src={`/New/hotel/popular-destinations/5.png`}
                  alt="line"
                  height={500}
                  width={500}
                  className="w-full h-full rounded-2xl"
                />
              </div>
              <div className=" w-full h-[400px] sm:h-[190px]">
                <Image
                  src={`/New/hotel/popular-destinations/6.png`}
                  alt="line"
                  height={500}
                  width={500}
                  className="w-full h-full rounded-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
