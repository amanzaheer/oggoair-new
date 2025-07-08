import Image from "next/image";
import React from "react";

export default function PopularTourOprator() {
  return (
    <div className=" w-full xl:w-[1220px] 2xl:w-[1420px] mx-auto my-20">
      <p className=" text-center font-medium text-xl sm:text-3xl">
        Popular tour operators
      </p>
      <div className=" w-full grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 mt-12 px-5 lg:px-20">
        <div className="p-3 rounded-md custom-footer-boxshadow flex justify-center items-center">
          <div className=" w-[160px] h-[100px]">
            <Image
              src={"/New/hotel/popular-ture-oparators/1.png"}
              alt="wallet"
              height={1000}
              width={1000}
              className=" w-full h-full"
            />
          </div>
        </div>
        <div className="p-3 rounded-md custom-footer-boxshadow flex justify-center items-center">
          <div className=" w-[160px] h-[100px]">
            <Image
              src={"/New/hotel/popular-ture-oparators/2.png"}
              alt="wallet"
              height={1000}
              width={1000}
              className=" w-full h-full"
            />
          </div>
        </div>
        <div className="p-3 rounded-md custom-footer-boxshadow flex justify-center items-center">
          <div className=" w-[160px] h-[100px]">
            <Image
              src={"/New/hotel/popular-ture-oparators/3.png"}
              alt="wallet"
              height={1000}
              width={1000}
              className=" w-full h-full"
            />
          </div>
        </div>
        <div className="p-3 rounded-md custom-footer-boxshadow flex justify-center items-center">
          <div className=" w-[160px] h-[100px]">
            <Image
              src={"/New/hotel/popular-ture-oparators/4.png"}
              alt="wallet"
              height={1000}
              width={1000}
              className=" w-full h-full"
            />
          </div>
        </div>
        <div className="p-3 rounded-md custom-footer-boxshadow flex justify-center items-center">
          <div className=" w-[160px] h-[100px]">
            <Image
              src={"/New/hotel/popular-ture-oparators/5.png"}
              alt="wallet"
              height={1000}
              width={1000}
              className=" w-full h-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
