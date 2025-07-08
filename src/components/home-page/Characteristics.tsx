import Image from "next/image";
import React from "react";

export default function Characteristics() {
  return (
    <section className=" w-full p-5">
      <div className=" w-full xl:w-[1220px] 2xl:w-[1420px] mx-auto grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-5">
        {/* item */}
        <div className=" bg-[#F6F8FF] rounded-2xl p-3 xl:p-5 xl:px-3 2xl:p-5 flex gap-3 cursor-pointer hover:-translate-y-2 transition-all duration-150 ease-linear">
          <Image
            src="/New/characteristics/money 1.png"
            width={500}
            height={500}
            alt="Picture of the icon"
            className=" w-12 h-12"
          />
          <div>
            <p className=" text-blue-800 text-lg font-semibold">
              Lowest Budget Airline
            </p>
            <p className="text-sm">Fare Guarantee</p>
          </div>
        </div>
        {/* item */}
        {/* item */}
        <div className=" bg-[#F6F8FF] rounded-2xl p-3 xl:p-5 xl:px-3 2xl:p-5 flex gap-3 cursor-pointer hover:-translate-y-2 transition-all duration-150 ease-linear">
          <Image
            src="/New/characteristics/a-simple-hotel-booking-process 1.png"
            width={500}
            height={500}
            alt="Picture of the icon"
            className=" w-12 h-12"
          />
          <div>
            <p className=" text-blue-800 text-lg font-semibold">Easy Book In</p>
            <p className="text-sm">Book Your Ticket in 3 Steps</p>
          </div>
        </div>
        {/* item */}
        {/* item */}
        <div className=" bg-[#F6F8FF] rounded-2xl p-3 xl:p-5 xl:px-3 2xl:p-5 flex gap-3 cursor-pointer hover:-translate-y-2 transition-all duration-150 ease-linear">
          <Image
            src="/New/characteristics/24-7-support 1.png"
            width={500}
            height={500}
            alt="Picture of the icon"
            className=" w-12 h-12"
          />
          <div>
            <p className=" text-blue-800 text-lg font-semibold">24/7 Support</p>
            <p className="text-sm">Assistance at any time of day</p>
          </div>
        </div>
        {/* item */}
        {/* item */}
        <div className=" bg-blue-50 rounded-2xl p-3 xl:p-5 xl:px-3 2xl:p-5 flex gap-3 cursor-pointer hover:-translate-y-2 transition-all duration-150 ease-linear">
          <Image
            src="/New/characteristics/secure-payment-protected-transactions 1.png"
            width={500}
            height={500}
            alt="Picture of the icon"
            className=" w-12 h-12"
          />
          <div>
            <p className=" text-blue-800 text-lg font-semibold">
              Secure Payment
            </p>
            <p className="text-sm">Protected transactions</p>
          </div>
        </div>
        {/* item */}
      </div>
    </section>
  );
}
