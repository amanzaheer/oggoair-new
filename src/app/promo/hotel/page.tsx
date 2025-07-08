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
            <div className=" w-[350px]">
              <Image
                src={"/New/promo/hotel.png"}
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
                className={` py-2 px-8 cursor-pointer  hover:bg-primary hover:text-white transition-all duration-150 ease-linear border border-blue-300 rounded-3xl flex items-center justify-center`}
              >
                <span>Air tickets</span>
              </Link>
              <Link
                href={"/promo/hotel"}
                className={` py-2 px-8 cursor-pointer bg-primary text-white rounded-3xl flex items-center justify-center`}
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
          <div className=" mt-5 px-5 grid grid-cols-1 sm:grid-cols-3 gap-5">
            <div className=" rounded-2xl h-[340px] overflow-hidden relative">
              <Image
                src={"/New/promo/hotels/demiray-hotel-spa.jpg"}
                alt=""
                height={2000}
                width={2000}
                className=" w-full h-full object-cover"
              />
              <div className=" w-full h-full flex flex-col justify-between absolute top-0 left-0 px-5 py-10 bg-black bg-opacity-30">
                <div>
                  <p className=" text-white text-2xl ">Hot offers!</p>
                  <p className=" text-white mt-2 text-lg ">
                    A week in the best hotel in Istanbul!
                  </p>
                </div>
                <div className=" text-white">
                  <p>Travel dates</p>
                  <p className=" text-sm">1 Jan, 2024 - 9 Jan 2024</p>
                </div>
              </div>
            </div>
            <div className=" rounded-2xl h-[340px] overflow-hidden relative">
              <Image
                src={
                  "/New/promo/hotels/intercontinental-istanbul-10039185898-2x1.jpg"
                }
                alt=""
                height={2000}
                width={2000}
                className=" w-full h-full object-cover"
              />
              <div className=" w-full h-full flex flex-col justify-between absolute top-0 left-0 px-5 py-10 bg-black bg-opacity-30">
                <div>
                  <p className=" text-white text-2xl ">Hot offers!</p>
                  <p className=" text-white mt-2 text-lg ">
                    A week in the best hotel in Istanbul!
                  </p>
                </div>
                <div className=" text-white">
                  <p>Travel dates</p>
                  <p className=" text-sm">1 Jan, 2024 - 9 Jan 2024</p>
                </div>
              </div>
            </div>
            <div className=" rounded-2xl h-[340px] overflow-hidden relative">
              <Image
                src={"/New/promo/hotels/the-istanbul-hotel.jpg"}
                alt=""
                height={2000}
                width={2000}
                className=" w-full h-full object-cover"
              />
              <div className=" w-full h-full flex flex-col justify-between absolute top-0 left-0 px-5 py-10 bg-black bg-opacity-30">
                <div>
                  <p className=" text-white text-2xl ">Hot offers!</p>
                  <p className=" text-white mt-2 text-lg ">
                    A week in the best hotel in Istanbul!
                  </p>
                </div>
                <div className=" text-white">
                  <p>Travel dates</p>
                  <p className=" text-sm">1 Jan, 2024 - 9 Jan 2024</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
