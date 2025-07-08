"use client";
import { Toaster } from "react-hot-toast";

import React, { Suspense } from "react";
import Image from "next/image";
import Link from "next/link";
import { MdLocalAirport } from "react-icons/md";
import { FaCar, FaHotel } from "react-icons/fa6";
import HomeSearchComponent from "../flights/search/HomeSearchComponent";

export default function Hero({ page }: any) {
  return (
    <section className=" w-full h-[600px] relative  ">
      <div className=" h-full w-full flex justify-center items-center move-up">
        <div className=" w-[800px]">
          <Image
            src={"/New/hero-section/plan2.png"}
            alt="line"
            height={4000}
            width={4000}
            className=" w-full h-full -translate-y-14 sm:translate-y-20"
          />
        </div>
      </div>
      <Suspense>
        <div
          className={`w-full xl:w-[1220px] 2xl:w-[1420px] z-[1500] absolute left-1/2 -translate-x-1/2 top-40 `}
        >
          <div className=" px-2 xl:px-0 move-up-delayed">
            <div className="flex items-center ">
              <Link href={"/"}>
                <div
                  className={` cursor-pointer flex gap-2 items-center p-3 rounded-tl-lg  bg-[#F8F9FE]`}
                >
                  <MdLocalAirport className={`rotate-45 text-lg `} />
                  <p className={`font-semibold`}>Flight</p>
                </div>
              </Link>
              <Link href={"/hotel"}>
                <div
                  className={` cursor-pointer flex gap-2 items-center p-3 bg-primary text-white`}
                >
                  <FaHotel className={`text-white`} />
                  <p className={`font-semibold text-white`}>Hotel</p>
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
            <HomeSearchComponent page={page} />
          </div>
        </div>
      </Suspense>
      <Toaster />
    </section>
  );
}
