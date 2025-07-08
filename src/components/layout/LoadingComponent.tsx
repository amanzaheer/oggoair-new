"use client";

import Image from "next/image";
import React from "react";

export default function LoadingComponent({ option, message }: any) {
  // console.log("LoadingComponent", message);

  return (
    <div className=" z-[3500] w-full h-screen fixed top-0 left-0 bg-white flex items-center justify-center">
      <div className=" w-[400px]">
        <Image
          src="/New/Loading/plane.png"
          width={2000}
          height={2000}
          alt="Picture of the logo"
          className=" h-full w-full object-cover"
        />
        {option && message && option === "search-page" && (
          <div className=" mt-3 text-primary">
            {message.map((item: any, index: number) => (
              <div
                key={index}
                className=" flex items-center justify-center gap-5"
              >
                <p className=" font-semibold">{item.origin}</p>
                <div className=" flex items-center gap-1">
                  <span className=" h-[1px] w-[6px] bg-primary"></span>
                  <span className=" h-[1px] w-[6px] bg-primary"></span>
                  <span className=" h-[1px] w-[6px] bg-primary"></span>
                  <span className=" h-[1px] w-[6px] bg-primary"></span>
                  <span className=" h-[1px] w-[6px] bg-primary"></span>
                  <span className=" h-[1px] w-[6px] bg-primary"></span>
                  <span className=" h-[1px] w-[6px] bg-primary"></span>
                  <span className=" h-[1px] w-[6px] bg-primary"></span>
                  <span className=" h-[1px] w-[6px] bg-primary"></span>
                  <span className=" h-[1px] w-[6px] bg-primary"></span>
                  <span className=" h-[1px] w-[6px] bg-primary"></span>
                  <span className=" h-[1px] w-[6px] bg-primary"></span>
                  <span className=" h-[1px] w-[6px] bg-primary"></span>
                  <span className=" h-[1px] w-[6px] bg-primary"></span>
                  <span className=" h-[1px] w-[6px] bg-primary"></span>
                  <span className=" h-[1px] w-[6px] bg-primary"></span>
                  <span className=" h-[1px] w-[6px] bg-primary"></span>
                  <span className=" h-[1px] w-[6px] bg-primary"></span>
                  <span className=" h-[1px] w-[6px] bg-primary"></span>
                  <span className=" h-[1px] w-[6px] bg-primary"></span>
                  <span className=" h-[1px] w-[6px] bg-primary"></span>
                </div>
                <p className=" font-semibold">{item.destination}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
