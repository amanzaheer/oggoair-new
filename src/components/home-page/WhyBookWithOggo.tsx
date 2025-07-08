import Image from "next/image";
import React from "react";

export default function WhyBookWithOggo() {
  return (
    <div className=" w-full my-20 px-5">
      <div className=" w-full xl:w-[1220px] 2xl:w-[1420px] mx-auto">
        <p className=" text-center font-bold text-xl sm:text-4xl text-slate-900">
          Why Book with oggoair
        </p>
        <div className=" flex items-center justify-center">
          <p className=" mt-5 text-center text-slate-700 text-xl w-[660px]">
            OggoAir is your all-in-one travel app for booking flights, hotels,
            cars, and top destinations with ease!
          </p>
        </div>

        <div className=" w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-8 mt-10">
          <div className="p-3 rounded-xl border border-gray-100 flex flex-col justify-center items-center gap-3 cursor-pointer hover:bg-primary hover:text-white">
            <div className=" h-20 w-20 flex items-center justify-center bg-white p-2 rounded-full border border-gray-900">
              <Image
                src={"/New/why-with-oggo/calendar-with-offers 1.png"}
                alt="wallet"
                height={1000}
                width={1000}
              />
            </div>
            <div className=" text-center">
              <p className=" font-semibold">Exclusive Offer Everyday</p>
              <p className=" mt-2 text-sm">
                {`Various daily promo with competitive price for all travelers`}
              </p>
            </div>
          </div>
          <div className="p-3 rounded-xl border border-gray-100 flex flex-col justify-center items-center gap-3 cursor-pointer hover:bg-primary hover:text-white">
            <div className=" w-20 h-20 flex items-center justify-center bg-white p-2 rounded-full border border-gray-900">
              <Image
                src={"/New/why-with-oggo/a-simple-hotel-booking-process 2.png"}
                alt="wallet"
                height={1000}
                width={1000}
              />
            </div>
            <div className=" text-center">
              <p className=" font-semibold">Simplify Your Booking Experience</p>
              <p className=" mt-2 text-sm">
                Feel the flexibility and simplicity throughout your booking
                process
              </p>
            </div>
          </div>
          <div className="p-3 rounded-xl border border-gray-100 flex flex-col justify-center items-center gap-3 cursor-pointer hover:bg-primary hover:text-white">
            <div className="w-20 h-20 flex items-center justify-center bg-white p-2 rounded-full border border-gray-900">
              <Image
                src={"/New/why-with-oggo/a-simple-hotel-booking-process 2.png"}
                alt="wallet"
                height={1000}
                width={1000}
              />
            </div>
            <div className=" text-center">
              <p className=" font-semibold">Online Booking Expert</p>
              <p className=" mt-2 text-sm">
                {`Together with our credible partners, fulfilling countless traveler's needs`}
              </p>
            </div>
          </div>
          <div className="p-3 rounded-xl border border-gray-100 flex flex-col justify-center items-center gap-3 cursor-pointer hover:bg-primary hover:text-white">
            <div className="w-20 h-20 flex items-center justify-center bg-white p-2 rounded-full border border-gray-900">
              <Image
                src={"/New/why-with-oggo/24-7-support 1.png"}
                alt="wallet"
                height={1000}
                width={1000}
              />
            </div>
            <div className=" text-center">
              <p className=" font-semibold">Affectionate Customer Service</p>
              <p className=" mt-2 text-sm">
                Giving best assistance, our customer support is available 24/7
                with your local language
              </p>
            </div>
          </div>

          <div className="p-3 rounded-xl border border-gray-100 flex flex-col justify-center items-center gap-3 cursor-pointer hover:bg-primary hover:text-white">
            <div className="w-20 h-20 flex items-center justify-center bg-white p-2 rounded-full border border-gray-900">
              <Image
                src={"/New/why-with-oggo/currency--language--payment 1.png"}
                alt="wallet"
                height={1000}
                width={1000}
              />
            </div>
            <div className=" text-center">
              <p className=" font-semibold">
                {`World's Local Booking Excitement`}
              </p>
              <p className=" mt-2 text-sm">
                {`Stress-free booking experience with local payment, currency, and language`}
              </p>
            </div>
          </div>

          <div className="p-3 rounded-xl border border-gray-100 flex flex-col justify-center items-center gap-3 cursor-pointer hover:bg-primary hover:text-white">
            <div className="w-20 h-20 flex items-center justify-center bg-white p-2 rounded-full border border-gray-900 ">
              <Image
                src={
                  "/New/why-with-oggo/many-airlines--long-distance-flights 1.png"
                }
                alt="wallet"
                height={1000}
                width={1000}
              />
            </div>
            <div className=" text-center">
              <p className=" font-semibold">
                Book from a wide choice of Airlines.
              </p>
              <p className=" mt-2 text-sm">
                Enjoy your memorable moments with millions of favorable flights
                and accommodations
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
