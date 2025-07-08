"use client";

import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";

export default function Help() {
  return (
    <div>
      <Header />
      <div className="w-full flex items-center justify-center pt-24">
        <div className="w-full xl:w-[1220px] 2xl:w-[1420px] rounded-3xl bg-[#7BCAFF1A] flex items-center justify-between flex-wrap gap-5 p-10">
          <div>
            <p className=" font-semibold text-3xl">Trevel Promo</p>
            <p className=" font-medium mt-2">
              Exclusive travel deals and discounts
            </p>
          </div>
          <div className="">
            <div className=" w-[320px]">
              <Image
                src={"/New/promo/flight.png"}
                alt=""
                height={2000}
                width={2000}
                className=" w-full "
              />
            </div>
          </div>
        </div>
      </div>

      <div className=" w-full py-10 flex justify-center ">
        <div className=" w-full xl:w-[1220px] 2xl:w-[1420px]">
          <div className=" w-full flex justify-center">
            <div className=" flex items-center flex-wrap gap-2 px-5 lg:px-0">
              <Link
                href={"/promo/flight"}
                className={` py-2 px-8 cursor-pointer bg-primary text-white border border-blue-300 rounded-3xl flex items-center justify-center`}
              >
                <span>Air tickets</span>
              </Link>
              <Link
                href={"/promo/hotel"}
                className={` py-2 px-8 cursor-pointer  hover:bg-primary hover:text-white transition-all duration-150 ease-linear border border-blue-300 rounded-3xl flex items-center justify-center`}
              >
                <span>Hotel</span>
              </Link>
              <Link
                href={"/promo/car"}
                className={` py-2 px-8 cursor-pointer  hover:bg-primary hover:text-white transition-all duration-150 ease-linear border border-blue-300 rounded-3xl flex items-center justify-center`}
              >
                <span>Rental car</span>
              </Link>
            </div>
          </div>
          <div className=" px-5 mt-5 grid grid-cols-1 sm:grid-cols-3 gap-5">
            <div className=" rounded-2xl h-[340px] overflow-hidden relative">
              <Image
                src={"/New/promo/flights/side-beach-turkey.jpg"}
                alt=""
                height={2000}
                width={2000}
                className=" w-full h-full object-cover"
              />
              <div className=" w-full h-full absolute top-0 left-0 px-5 py-10 bg-black bg-opacity-20">
                <p className=" text-white text-2xl ">Hot tickets</p>
                <p className=" text-white mt-2 text-lg ">
                  They’ll take it apart soon!
                </p>
              </div>
            </div>
            <div className=" rounded-2xl h-[340px] overflow-hidden relative">
              <Image
                src={"/New/promo/flights/caption.jpg"}
                alt=""
                height={2000}
                width={2000}
                className=" w-full h-full object-cover"
              />
              <div className=" w-full h-full absolute top-0 left-0 px-5 py-10 bg-black bg-opacity-20">
                <p className=" text-white text-2xl ">Winter holidays!</p>
                <p className=" text-white mt-2 text-lg ">
                  Your best vacation in Kamchatka!
                </p>
              </div>
            </div>
            <div className=" rounded-2xl h-[340px] overflow-hidden relative">
              <Image
                src={"/New/promo/flights/hot.jpg"}
                alt=""
                height={2000}
                width={2000}
                className=" w-full h-full object-cover"
              />
              <div className=" w-full h-full absolute top-0 left-0 px-5 py-10 bg-black bg-opacity-20">
                <p className=" text-white text-2xl ">Summer holidays!</p>
                <p className=" text-white mt-2 text-lg ">
                  Your best vacation in Hawaii!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
