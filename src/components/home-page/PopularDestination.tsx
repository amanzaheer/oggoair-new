"use client";

import Image from "next/image";
import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";

export default function PopularDestiontion() {
  return (
    <div className=" w-full sm:pt-20 ">
      <div className="w-full px-5">
        <div className=" w-full xl:w-[1220px] 2xl:w-[1420px] mx-auto">
          <p className=" text-center font-bold text-xl sm:text-4xl text-slate-900">
            Popular Destinations
          </p>
          <div className=" flex items-center justify-center">
            <p className=" mt-5 text-center text-slate-700 text-xl w-[660px]">
              Popular Destinations are well-loved travel spots known for their
              beauty, appeal, and cultural significance, attracting countless
              visitors.
            </p>
          </div>
          <div className=" w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-5 mt-5 sm:mt-10">
            {/* item */}
            <div className=" bg-whit px-5 py-8 rounded-2xl shadow hover:bg-primary hover:text-white cursor-pointer">
              <div className=" flex items-center gap-3">
                <div className=" w-12 flex items-center justify-center">
                  <Image
                    src={"/New/popular-destinations/Popular Destinations.png"}
                    alt="wallet"
                    height={1000}
                    width={1000}
                  />
                </div>
                <div>
                  <p className=" font-semibold text-lg">Istambul</p>
                  <p className=" ">Turkey</p>
                </div>
              </div>
            </div>
            {/* item */}
            {/* item */}
            <div className=" bg-whit px-5 py-8 rounded-2xl shadow hover:bg-primary hover:text-white cursor-pointer">
              <div className=" flex items-center gap-3">
                <div className=" w-12 flex items-center justify-center">
                  <Image
                    src={
                      "/New/popular-destinations/Popular Destinations (1).png"
                    }
                    alt="wallet"
                    height={1000}
                    width={1000}
                  />
                </div>
                <div>
                  <p className=" font-semibold text-lg">Bangkok</p>
                  <p className=" ">Thailand</p>
                </div>
              </div>
            </div>
            {/* item */}
            {/* item */}
            <div className=" bg-whit px-5 py-8 rounded-2xl shadow hover:bg-primary hover:text-white cursor-pointer">
              <div className=" flex items-center gap-3">
                <div className=" w-12 flex items-center justify-center">
                  <Image
                    src={
                      "/New/popular-destinations/Popular Destinations (2).png"
                    }
                    alt="wallet"
                    height={1000}
                    width={1000}
                  />
                </div>
                <div>
                  <p className=" font-semibold text-lg">Osh</p>
                  <p className=" ">Kyrgyzstan</p>
                </div>
              </div>
            </div>
            {/* item */}
            {/* item */}
            <div className=" bg-whit px-5 py-8 rounded-2xl shadow hover:bg-primary hover:text-white cursor-pointer">
              <div className=" flex items-center gap-3">
                <div className=" w-12 flex items-center justify-center">
                  <Image
                    src={
                      "/New/popular-destinations/Popular Destinations (3).png"
                    }
                    alt="wallet"
                    height={1000}
                    width={1000}
                  />
                </div>
                <div>
                  <p className=" font-semibold text-lg">Baku</p>
                  <p className=" ">Azerbaijan</p>
                </div>
              </div>
            </div>
            {/* item */}
            {/* item */}
            <div className=" bg-whit px-5 py-8 rounded-2xl shadow hover:bg-primary hover:text-white cursor-pointer">
              <div className=" flex items-center gap-3">
                <div className=" w-12 flex items-center justify-center">
                  <Image
                    src={
                      "/New/popular-destinations/Popular Destinations (4).png"
                    }
                    alt="wallet"
                    height={1000}
                    width={1000}
                  />
                </div>
                <div>
                  <p className=" font-semibold text-lg">Baku</p>
                  <p className=" ">Azerbaijan</p>
                </div>
              </div>
            </div>
            {/* item */}
            {/* item */}
            <div className=" bg-whit px-5 py-8 rounded-2xl shadow hover:bg-primary hover:text-white cursor-pointer">
              <div className=" flex items-center gap-3">
                <div className=" w-12 flex items-center justify-center">
                  <Image
                    src={
                      "/New/popular-destinations/Popular Destinations (5).png"
                    }
                    alt="wallet"
                    height={1000}
                    width={1000}
                  />
                </div>
                <div>
                  <p className=" font-semibold text-lg">Dushanbe</p>
                  <p className=" ">Tadjikistan</p>
                </div>
              </div>
            </div>
            {/* item */}
            {/* item */}
            <div className=" bg-whit px-5 py-8 rounded-2xl shadow hover:bg-primary hover:text-white cursor-pointer">
              <div className=" flex items-center gap-3">
                <div className=" w-12 flex items-center justify-center">
                  <Image
                    src={
                      "/New/popular-destinations/Popular Destinations (6).png"
                    }
                    alt="wallet"
                    height={1000}
                    width={1000}
                  />
                </div>
                <div>
                  <p className=" font-semibold text-lg">Yerevan</p>
                  <p className=" ">Armenia</p>
                </div>
              </div>
            </div>
            {/* item */}
            {/* item */}
            <div className=" bg-whit px-5 py-8 rounded-2xl shadow hover:bg-primary hover:text-white cursor-pointer">
              <div className=" flex items-center gap-3">
                <div className=" w-12 flex items-center justify-center">
                  <Image
                    src={
                      "/New/popular-destinations/Popular Destinations (7).png"
                    }
                    alt="wallet"
                    height={1000}
                    width={1000}
                  />
                </div>
                <div>
                  <p className=" font-semibold text-lg">Tashkent</p>
                  <p className=" ">Uzbekistan</p>
                </div>
              </div>
            </div>
            {/* item */}
            {/* item */}
            <div className=" bg-whit px-5 py-8 rounded-2xl shadow hover:bg-primary hover:text-white cursor-pointer">
              <div className=" flex items-center gap-3">
                <div className=" w-12 flex items-center justify-center">
                  <Image
                    src={
                      "/New/popular-destinations/Popular Destinations (8).png"
                    }
                    alt="wallet"
                    height={1000}
                    width={1000}
                  />
                </div>
                <div>
                  <p className=" font-semibold text-lg">Dubai</p>
                  <p className=" ">UAE</p>
                </div>
              </div>
            </div>
            {/* item */}
            {/* item */}
            <div className=" bg-whit px-5 py-8 rounded-2xl shadow hover:bg-primary hover:text-white cursor-pointer">
              <div className=" flex items-center gap-3">
                <div className=" w-12 flex items-center justify-center">
                  <Image
                    src={
                      "/New/popular-destinations/Popular Destinations (9).png"
                    }
                    alt="wallet"
                    height={1000}
                    width={1000}
                  />
                </div>
                <div>
                  <p className=" font-semibold text-lg">Tbilisi</p>
                  <p className=" ">Georgia</p>
                </div>
              </div>
            </div>
            {/* item */}
            {/* item */}
            <div className=" bg-whit px-5 py-8 rounded-2xl shadow hover:bg-primary hover:text-white cursor-pointer">
              <div className=" flex items-center gap-3">
                <div className=" w-12 flex items-center justify-center">
                  <Image
                    src={
                      "/New/popular-destinations/Popular Destinations (10).png"
                    }
                    alt="wallet"
                    height={1000}
                    width={1000}
                  />
                </div>
                <div>
                  <p className=" font-semibold text-lg">Phuket</p>
                  <p className=" ">Thailand</p>
                </div>
              </div>
            </div>
            {/* item */}
            {/* item */}
            <div className=" bg-whit px-5 py-8 rounded-2xl shadow hover:bg-primary hover:text-white cursor-pointer">
              <div className=" flex items-center gap-3">
                <div className=" w-12 flex items-center justify-center">
                  <Image
                    src={
                      "/New/popular-destinations/Popular Destinations (11).png"
                    }
                    alt="wallet"
                    height={1000}
                    width={1000}
                  />
                </div>
                <div>
                  <p className=" font-semibold text-lg">Antalya</p>
                  <p className=" ">Turkey</p>
                </div>
              </div>
            </div>
            {/* item */}
          </div>
        </div>
      </div>
    </div>
  );
}
