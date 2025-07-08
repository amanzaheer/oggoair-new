import Image from "next/image";
import React from "react";

export default function HotelCharacteristics() {
  return (
    <div className=" w-full flex justify-center p-5 py-10 pt-[400px] sm:pt-[300px] lg:pt-36">
      <div
        className={`w-full xl:w-[1220px] 2xl:w-[1420px] grid sm:grid-cols-3 gap-5 px-5 sm:px-20 pt-10 pb-10`}
      >
        <div className=" flex flex-col items-center justify-center">
          <div className=" h-[70px] w-[70px] rounded-full flex items-center justify-center overflow-hidden">
            <Image
              src={"/New/hotel/characteristic/global.png"}
              alt="line"
              height={500}
              width={500}
              className=" w-full h-full"
            />
          </div>
          <p className=" font-semibold mt-3 text-center">
            Best Prices and Discounts
          </p>
          <p className=" text-gray-500 mt-2 text-center">
            Exclusive deals and discounts on top hotels worldwide.
          </p>
        </div>
        <div className=" flex flex-col items-center justify-center">
          <div className=" h-[70px] w-[70px] rounded-full flex items-center justify-center overflow-hidden">
            <Image
              src={"/New/hotel/characteristic/easy-booking.png"}
              alt="line"
              height={500}
              width={500}
              className=" w-full h-full"
            />
          </div>
          <p className=" font-semibold mt-3 text-center">Easy Booking</p>
          <p className=" text-gray-500 mt-2 text-center">
            Quick and straightforward booking with a user-friendly interface.
          </p>
        </div>
        <div className=" flex flex-col items-center justify-center">
          <div className=" h-[70px] w-[70px] rounded-full flex items-center justify-center overflow-hidden">
            <Image
              src={"/New/hotel/characteristic/reviews.png"}
              alt="line"
              height={500}
              width={500}
              className=" w-full h-full"
            />
          </div>
          <p className=" font-semibold mt-3 text-center">Genuine Reviews</p>
          <p className=" text-gray-500 mt-2 text-center">
            Thousands of real guest reviews to guide your choice.
          </p>
        </div>
      </div>
    </div>
  );
}
