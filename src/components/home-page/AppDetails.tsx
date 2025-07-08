"use client";

import Image from "next/image";
import React from "react";

export default function AppDetails() {
  return (
    <div className=" w-full">
      <div className=" sm:my-10 w-full px-5 sm:px-10 my-10">
        <div className=" w-full xl:w-[1220px] 2xl:w-[1420px] items-center mx-auto grid lg:grid-cols-9 gap-5 lg:px-16">
          <div className=" col-span-9 lg:col-span-5">
            <p className=" text-lg sm:text-5xl font-semibold">
              Simplify Your Travel
            </p>
            <p className=" mt-5 text-lg sm:text-5xl font-semibold">
              Experience with Oggoair!
            </p>
            <p className=" mt-10 text-blue-500 font-semibold text-2xl">
              Book on the go!
            </p>
            <p className=" mt-8 font-medium sm:text-2xl">
              Book flights, hotels, and cars with just a few taps. Get exclusive
              mobile-only deals and travel smarter!
            </p>
            <div className=" flex flex-col sm:flex-row sm:items-center gap-5 mt-8">
              <div>
                <Image
                  src="/New/app-details/qr-scaner.png"
                  width={500}
                  height={500}
                  alt="Picture of the icon"
                  className=" w-28"
                />
              </div>
              <div className=" text-sm sm:text-base">
                <p className=" font-semibold text-xl">Quick installation!</p>
                <p className=" mt-2 sm:w-[380px]">
                  Take the camera with the QR code to install the application.
                  Click on the QR code to enlarge it.
                </p>
              </div>
            </div>
            <div className=" flex items-center flex-wrap gap-5 mt-5">
              <div className=" bg-white shadow rounded-3xl px-5 py-3 flex items-center">
                <Image
                  src="/New/app-details/apple.jpg"
                  width={500}
                  height={500}
                  alt="Picture of the icon"
                  className=" w-6 mr-1"
                />
                <p className=" font-semibold">Apple Store</p>
              </div>
              <div className=" bg-white shadow rounded-3xl  px-5 py-3 flex items-center gap-2">
                <Image
                  src="/New/app-details/Google Play.jpg"
                  width={500}
                  height={500}
                  alt="Picture of the icon"
                  className=" w-5"
                />
                <p className=" font-semibold">Google Play</p>
              </div>
            </div>
          </div>
          <div className=" col-span-9 lg:col-span-4">
            <Image
              src="/New/app-details/traveling-with-a-suitcase 1.png"
              width={500}
              height={500}
              alt="Picture of the icon"
              className=""
            />
          </div>
        </div>
      </div>
    </div>
  );
}
