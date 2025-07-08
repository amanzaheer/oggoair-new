import Image from "next/image";
import React, { Suspense } from "react";
import { Toaster } from "react-hot-toast";
import Link from "next/link";
import { MdLocalAirport } from "react-icons/md";
import { FaCar, FaHotel } from "react-icons/fa6";
import HotelHomeSearchComponent from "../search/HotelHomeSearchComponent";

export default function HotelHomeHeroSection() {
  return (
    <section className="  w-full h-[400px] sm:h-[600px] 2xl:h-[800px] relative">
      <Image
        src={"/New/hotel/hotel-bg.png"}
        alt="line"
        height={4000}
        width={4000}
        className=" w-full h-full"
      />
      <Suspense>
        <div
          className={`w-full xl:w-[1220px] 2xl:w-[1420px] z-[1500] absolute left-1/2 -translate-x-1/2 top-1/2`}
        >
          <div className=" px-2 xl:px-0">
            <div className="flex items-center ">
              <Link href={"/"}>
                <div
                  className={` cursor-pointer flex gap-2 items-center p-3 rounded-tl-lg bg-primary text-white`}
                >
                  <FaHotel className={`text-white`} />
                  <p className={`font-semibold text-white`}>Flight</p>
                </div>
              </Link>
              <Link href={"/hotel"}>
                <div
                  className={` cursor-pointer flex gap-2 items-center p-3  bg-[#F8F9FE]`}
                >
                  <MdLocalAirport className={`rotate-45 text-lg `} />
                  <p className={`font-semibold`}>Hotel</p>
                </div>
              </Link>

              <Link href={"/car"}>
                <div
                  className={` cursor-pointer flex gap-2 items-center p-3 rounded-tr-lg  bg-primary text-white`}
                >
                  <FaCar className={`text-white`} />
                  <p className={`font-semibold text-white`}>Car</p>
                </div>
              </Link>
            </div>
            <HotelHomeSearchComponent />
          </div>
        </div>
      </Suspense>
      <Toaster />
    </section>
  );
}
