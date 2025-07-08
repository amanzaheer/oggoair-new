import Image from "next/image";
import React from "react";

export default function AboutUs() {
  return (
    <div>
      <div className=" p-5 mt-5 w-full flex justify-center">
        <div className="w-full max-w-[920px]">
          <p>{`
      Since 2023, we've been helping our users find the best deals on flights, hotels, and car rentals, ensuring they travel in comfort. Our goal is not just to help you save money, but to be your personal assistant throughout the entire journey—from choosing a destination to returning home.
      `}</p>
          <div className=" mt-16 w-full flex justify-center">
            <div className="  w-[700px]">
              <Image
                src={"/New/about-us/Frame.png"}
                alt=""
                height={2000}
                width={2000}
                className=" w-full "
              />
            </div>
          </div>
        </div>
      </div>
      {/* our values */}
      <div className=" px-5 lg:px-0 mt-10">
        <p className=" text-2xl font-semibold">Our Values</p>
        <div className=" mt-10 grid grid-cols-1 sm:grid-cols-2  md:grid-cols-3 xl:grid-cols-4 gap-5">
          <div className=" rounded-2xl px-8 py-5 bg-[#7BCAFF1A]">
            <p className=" text-lg font-semibold text-blue-500">Reliability</p>
            <p className=" text-gray-500 mt-1">accurate flight information</p>
          </div>
          <div className=" rounded-2xl px-8 py-5 bg-[#7BCAFF1A]">
            <p className=" text-lg font-semibold text-blue-500">Transparency</p>
            <p className=" text-gray-500 mt-1">Honest prices, no hidden fees</p>
          </div>
          <div className=" rounded-2xl px-8 py-5 bg-[#7BCAFF1A]">
            <p className=" text-lg font-semibold text-blue-500">Convenience</p>
            <p className=" text-gray-500 mt-1">Easy search and booking</p>
          </div>
          <div className=" rounded-2xl px-8 py-5 bg-[#7BCAFF1A]">
            <p className=" text-lg font-semibold text-blue-500">
              Personalization
            </p>
            <p className=" text-gray-500 mt-1">Tailored recommendations</p>
          </div>
        </div>
      </div>
      {/* our values */}
      {/* Our technology */}
      <div className=" mt-20 px-5 lg:px-0">
        <p className=" text-2xl font-semibold">Our technology</p>
        <div className=" mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          <div className=" rounded-2xl px-8 py-5 bg-secoundery">
            <p className=" text-lg font-semibold">Seamless Integration</p>
            <p className=" text-gray-500 mt-2 border rounded-xl py-1 px-2 ">
              Intuitive design for a smooth booking experience
            </p>
          </div>
          <div className=" rounded-2xl px-8 py-5 bg-secoundery">
            <p className=" text-lg font-semibold">Real-Time Data</p>
            <p className=" text-gray-500 mt-2 border rounded-xl py-1 px-2 ">
              Up-to-date information on availability and prices
            </p>
          </div>
          <div className=" rounded-2xl px-8 py-5 bg-secoundery">
            <p className=" text-lg font-semibold">User-Friendly Interface</p>
            <p className=" text-gray-500 mt-2 border rounded-xl py-1 px-2 ">
              Intuitive design for a smooth booking experience
            </p>
          </div>
          <div className=" rounded-2xl px-8 py-5 bg-secoundery">
            <p className=" text-lg font-semibold">Smart Recommendations</p>
            <p className=" text-gray-500 mt-2 border rounded-xl py-1 px-2 ">
              Personalized suggestions for you
            </p>
          </div>
          <div className=" rounded-2xl px-8 py-5 bg-secoundery">
            <p className=" text-lg font-semibold">Secure Transactions</p>
            <p className=" text-gray-500 mt-2 border rounded-xl py-1 px-2 ">
              Encrypted payment processes for your safety
            </p>
          </div>
          <div className=" rounded-2xl px-8 py-5 bg-secoundery">
            <p className=" text-lg font-semibold">Advanced Search Algorithms</p>
            <p className=" text-gray-500 mt-2 border rounded-xl py-1 px-2 ">
              Find the best travel options fast
            </p>
          </div>
        </div>
      </div>
      {/* Our technology */}
    </div>
  );
}
