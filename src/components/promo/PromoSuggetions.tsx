"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

export default function PromoSuggetions() {
  const [selectedSuggetion, setSelectedSuggetion] = useState("flight");
  return (
    <div className=" py-5 sm:py-10">
      <div className=" flex items-center flex-wrap gap-3">
        <button
          onClick={() => setSelectedSuggetion("flight")}
          className={`${
            selectedSuggetion === "flight"
              ? " bg-primary text-white"
              : " text-primary"
          } hover:bg-primary hover:text-white transition-all duration-150 ease-in-out border border-primary px-5 py-2 rounded-3xl text-sm`}
        >
          Flight
        </button>
        <button
          onClick={() => setSelectedSuggetion("hotel")}
          className={`${
            selectedSuggetion === "hotel"
              ? " bg-primary text-white"
              : " text-primary"
          } hover:bg-primary hover:text-white transition-all duration-150 ease-in-out border border-primary px-5 py-2 rounded-3xl text-sm`}
        >
          Hotel
        </button>
        <button
          onClick={() => setSelectedSuggetion("holiday")}
          className={`${
            selectedSuggetion === "holiday"
              ? " bg-primary text-white"
              : " text-primary"
          } hover:bg-primary hover:text-white transition-all duration-150 ease-in-out border border-primary px-5 py-2 rounded-3xl text-sm`}
        >
          Holiday
        </button>
      </div>
      <div className=" grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-5">
        {/* item */}
        <Link
          href={"/promo/single"}
          className=" rounded-xl overflow-hidden shadow-md bg-white cursor-pointer group"
        >
          <div className=" h-60 overflow-hidden">
            <Image
              src="/promo-2.png"
              width={500}
              height={500}
              alt="Picture of the promo"
              className=" w-full h-full object-cover group-hover:scale-110 transition-all duration-700 ease-in-out"
            />
          </div>
          <div className=" text-center p-5 bg-white  group-hover:text-primary">
            <p className=" border-b pb-3 font-medium ">
              Super App for a perfect vacation
            </p>
            <div className=" text-sm font-medium mt-5 ">
              <p>Promo Period</p>
              <p className=" my-3">1 Jan,2024 - 31 Dec 2024</p>
              <p className=" mb-3">Travel Period</p>
              <p>1 Jan,2024 - 31 Dec 2024</p>
            </div>
          </div>
        </Link>
        {/* item */}
        {/* item */}
        <Link
          href={"/promo/single"}
          className=" rounded-xl overflow-hidden shadow-md bg-white cursor-pointer group"
        >
          <div className=" h-60 overflow-hidden">
            <Image
              src="/promo-3.png"
              width={500}
              height={500}
              alt="Picture of the promo"
              className=" w-full h-full object-cover group-hover:scale-110 transition-all duration-700 ease-in-out"
            />
          </div>
          <div className=" text-center p-5 bg-white  group-hover:text-primary">
            <p className=" border-b pb-3 font-medium ">
              Super App for a perfect vacation
            </p>
            <div className=" text-sm font-medium mt-5 ">
              <p>Promo Period</p>
              <p className=" my-3">1 Jan,2024 - 31 Dec 2024</p>
              <p className=" mb-3">Travel Period</p>
              <p>1 Jan,2024 - 31 Dec 2024</p>
            </div>
          </div>
        </Link>
        {/* item */}
        {/* item */}
        <Link
          href={"/promo/single"}
          className=" rounded-xl overflow-hidden shadow-md bg-white cursor-pointer group"
        >
          <div className=" h-60 overflow-hidden">
            <Image
              src="/promo-2.png"
              width={500}
              height={500}
              alt="Picture of the promo"
              className=" w-full h-full object-cover group-hover:scale-110 transition-all duration-700 ease-in-out"
            />
          </div>
          <div className=" text-center p-5 bg-white  group-hover:text-primary">
            <p className=" border-b pb-3 font-medium ">
              Super App for a perfect vacation
            </p>
            <div className=" text-sm font-medium mt-5 ">
              <p>Promo Period</p>
              <p className=" my-3">1 Jan,2024 - 31 Dec 2024</p>
              <p className=" mb-3">Travel Period</p>
              <p>1 Jan,2024 - 31 Dec 2024</p>
            </div>
          </div>
        </Link>
        {/* item */}
      </div>
    </div>
  );
}
