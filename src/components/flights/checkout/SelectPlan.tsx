"use client";

import React from "react";
import { FaCheck } from "react-icons/fa6";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4,
    slidesToSlide: 1, // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    slidesToSlide: 1, // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
};
export default function SelectPlan({ selectedPlan, setSelectedPlan }: any) {
  return (
    <div className=" p-5 mb-5 w-full border rounded-md">
      <p className=" font-semibold text-xl border-b pb-5">Select you plan</p>
      <div className=" hidden sm:grid sm:grid-cols-2 md:grid-cols-3 gap-5 mt-5">
        {/* Economic */}
        <div
          onClick={() => setSelectedPlan("economic")}
          className={`border ${
            selectedPlan === "economic"
              ? "border-primary bg-primary bg-opacity-5"
              : "border-gray-300"
          } rounded-xl p-5 pb-16 relative cursor-pointer`}
        >
          <div
            className={` absolute bottom-0 right-0 ${
              selectedPlan === "economic"
                ? " bg-primary text-white"
                : "bg-gray-300"
            }  px-5 py-2 rounded-tl-lg rounded-br-lg`}
          >
            <p className=" font-semibold text-xl">250 USD</p>
          </div>
          <p className=" font-semibold text-xl sm:text-2xl">Economic plan</p>
          <p className=" mt-2 sm:text-lg">Perfect for light travelers</p>
          <p className=" font-medium sm:text-lg mt-2">Luggage Allowance</p>
          <div className=" flex items-center gap-2 mt-2 text-sm sm:text-base">
            <FaCheck className=" text-green-500 sm:text-xl" />
            <p>Upto 20 kg Luggage</p>
          </div>
          <div className=" flex items-center gap-2 mt-2 text-sm sm:text-base">
            <FaCheck className=" text-green-500 sm:text-xl" />
            <p>Upto 10kg Hand Luggage</p>
          </div>
          <p className=" font-medium text-lg mt-3">Features</p>
          <div className=" flex items-center gap-2 mt-2 text-sm sm:text-base">
            <FaCheck className=" text-green-500 sm:text-xl" />
            <p>Basic Seat Selection</p>
          </div>
          <div className=" flex items-center gap-2 mt-2 text-sm sm:text-base">
            <FaCheck className=" text-green-500 sm:text-xl" />
            <p>Best price for seat selection</p>
          </div>
        </div>
        {/* Economic */}
        {/* Economic Plus */}
        <div
          className={`border ${
            selectedPlan === "economicPlus"
              ? "border-primary bg-primary bg-opacity-5"
              : "border-gray-300"
          } rounded-xl p-5 pb-16 relative cursor-pointer`}
          onClick={() => setSelectedPlan("economicPlus")}
        >
          <div
            className={` absolute bottom-0 right-0 ${
              selectedPlan === "economicPlus"
                ? " bg-primary text-white"
                : "bg-gray-300"
            }  px-5 py-2 rounded-tl-lg rounded-br-lg`}
          >
            <p className=" font-semibold text-xl">350 USD</p>
          </div>
          <p className=" font-semibold text-xl sm:text-2xl">
            Economic Plus Plan
          </p>
          <p className=" mt-2 sm:text-lg">Enhanced travel experience</p>
          <p className=" font-medium sm:text-lg mt-2">Luggage Allowance</p>
          <div className=" flex items-center gap-2 mt-2 text-sm sm:text-base">
            <FaCheck className=" text-green-500 sm:text-xl" />
            <p>Upto 30 kg Luggage</p>
          </div>
          <div className=" flex items-center gap-2 mt-2 text-sm sm:text-base">
            <FaCheck className=" text-green-500 sm:text-xl" />
            <p>Upto 15kg Hand Luggage</p>
          </div>
          <p className=" font-medium text-lg mt-3">Features</p>
          <div className=" flex items-center gap-2 mt-2 text-sm sm:text-base">
            <FaCheck className=" text-green-500 sm:text-xl" />
            <p>Priority Seat Selection</p>
          </div>
          <div className=" flex items-center gap-2 mt-2 text-sm sm:text-base">
            <FaCheck className=" text-green-500 sm:text-xl" />
            <p>Priority Check-in</p>
          </div>
          <div className=" flex items-center gap-2 mt-2 text-sm sm:text-base">
            <FaCheck className=" text-green-500 sm:text-xl" />
            <p>Lounge Access</p>
          </div>
        </div>
        {/* Economic Plus */}
        {/* Premium */}
        <div
          className={`border ${
            selectedPlan === "premium"
              ? "border-primary bg-primary bg-opacity-5"
              : "border-gray-300"
          } rounded-xl p-5 pb-16 relative cursor-pointer`}
          onClick={() => setSelectedPlan("premium")}
        >
          <div
            className={` absolute bottom-0 right-0 ${
              selectedPlan === "premium"
                ? " bg-primary text-white"
                : "bg-gray-300"
            }  px-5 py-2 rounded-tl-lg rounded-br-lg`}
          >
            <p className=" font-semibold text-xl">450 USD</p>
          </div>
          <p className=" font-semibold text-xl sm:text-2xl">Premium Plan</p>
          <p className=" mt-2 sm:text-lg">Ultimate travel luxury</p>
          <p className=" font-medium sm:text-lg mt-2">Luggage Allowance</p>
          <div className=" flex items-center gap-2 mt-2 text-sm sm:text-base">
            <FaCheck className=" text-green-500 sm:text-xl" />
            <p>Upto 40 kg Luggage</p>
          </div>
          <div className=" flex items-center gap-2 mt-2 text-sm sm:text-base">
            <FaCheck className=" text-green-500 sm:text-xl" />
            <p>Upto 20kg Hand Luggage</p>
          </div>
          <p className=" font-medium text-lg mt-3">Features</p>
          <div className=" flex items-center gap-2 mt-2 text-sm sm:text-base">
            <FaCheck className=" text-green-500 sm:text-xl" />
            <p>Premium Seat Selection</p>
          </div>
          <div className=" flex items-center gap-2 mt-2 text-sm sm:text-base">
            <FaCheck className=" text-green-500 sm:text-xl" />
            <p>VIP Check-in</p>
          </div>
          <div className=" flex items-center gap-2 mt-2 text-sm sm:text-base">
            <FaCheck className=" text-green-500 sm:text-xl" />
            <p>Premium Lounge Access</p>
          </div>
          <div className=" flex items-center gap-2 mt-2 text-sm sm:text-base">
            <FaCheck className=" text-green-500 sm:text-xl" />
            <p>Priority Boarding</p>
          </div>
        </div>
        {/* Premium */}
      </div>
      <div className=" sm:hidden">
        <Carousel
          swipeable={true}
          draggable={false}
          showDots={false}
          arrows={true}
          responsive={responsive}
          ssr={true} // means to render carousel on server-side.
          infinite={true}
          autoPlay={false}
          autoPlaySpeed={2000}
          keyBoardControl={true}
          customTransition="all .5"
          transitionDuration={500}
          containerClass="hotel-details-carousel-container py-2 mt-5"
          itemClass="px-2"
        >
          {/* Economic */}
          <div
            onClick={() => setSelectedPlan("economic")}
            className={`border ${
              selectedPlan === "economic"
                ? "border-primary bg-primary bg-opacity-5"
                : "border-gray-300"
            } rounded-xl p-5 pb-16 relative cursor-pointer`}
          >
            <div
              className={` absolute bottom-0 right-0 ${
                selectedPlan === "economic"
                  ? " bg-primary text-white"
                  : "bg-gray-300"
              }  px-5 py-2 rounded-tl-lg rounded-br-lg`}
            >
              <p className=" font-semibold text-xl">250 USD</p>
            </div>
            <p className=" font-semibold text-xl sm:text-2xl">Economic plan</p>
            <p className=" mt-2 sm:text-lg">Perfect for light travelers</p>
            <p className=" font-medium sm:text-lg mt-2">Luggage Allowance</p>
            <div className=" flex items-center gap-2 mt-2 text-sm sm:text-base">
              <FaCheck className=" text-green-500 sm:text-xl" />
              <p>Upto 20 kg Luggage</p>
            </div>
            <div className=" flex items-center gap-2 mt-2 text-sm sm:text-base">
              <FaCheck className=" text-green-500 sm:text-xl" />
              <p>Upto 10kg Hand Luggage</p>
            </div>
            <p className=" font-medium text-lg mt-3">Features</p>
            <div className=" flex items-center gap-2 mt-2 text-sm sm:text-base">
              <FaCheck className=" text-green-500 sm:text-xl" />
              <p>Basic Seat Selection</p>
            </div>
            <div className=" flex items-center gap-2 mt-2 text-sm sm:text-base">
              <FaCheck className=" text-green-500 sm:text-xl" />
              <p>Best price for seat selection</p>
            </div>
          </div>
          {/* Economic */}
          {/* Economic Plus */}
          <div
            className={`border ${
              selectedPlan === "economicPlus"
                ? "border-primary bg-primary bg-opacity-5"
                : "border-gray-300"
            } rounded-xl p-5 pb-16 relative cursor-pointer`}
            onClick={() => setSelectedPlan("economicPlus")}
          >
            <div
              className={` absolute bottom-0 right-0 ${
                selectedPlan === "economicPlus"
                  ? " bg-primary text-white"
                  : "bg-gray-300"
              }  px-5 py-2 rounded-tl-lg rounded-br-lg`}
            >
              <p className=" font-semibold text-xl">350 USD</p>
            </div>
            <p className=" font-semibold text-xl sm:text-2xl">
              Economic Plus Plan
            </p>
            <p className=" mt-2 sm:text-lg">Enhanced travel experience</p>
            <p className=" font-medium sm:text-lg mt-2">Luggage Allowance</p>
            <div className=" flex items-center gap-2 mt-2 text-sm sm:text-base">
              <FaCheck className=" text-green-500 sm:text-xl" />
              <p>Upto 30 kg Luggage</p>
            </div>
            <div className=" flex items-center gap-2 mt-2 text-sm sm:text-base">
              <FaCheck className=" text-green-500 sm:text-xl" />
              <p>Upto 15kg Hand Luggage</p>
            </div>
            <p className=" font-medium text-lg mt-3">Features</p>
            <div className=" flex items-center gap-2 mt-2 text-sm sm:text-base">
              <FaCheck className=" text-green-500 sm:text-xl" />
              <p>Priority Seat Selection</p>
            </div>
            <div className=" flex items-center gap-2 mt-2 text-sm sm:text-base">
              <FaCheck className=" text-green-500 sm:text-xl" />
              <p>Priority Check-in</p>
            </div>
            <div className=" flex items-center gap-2 mt-2 text-sm sm:text-base">
              <FaCheck className=" text-green-500 sm:text-xl" />
              <p>Lounge Access</p>
            </div>
          </div>
          {/* Economic Plus */}
          {/* Premium */}
          <div
            className={`border ${
              selectedPlan === "premium"
                ? "border-primary bg-primary bg-opacity-5"
                : "border-gray-300"
            } rounded-xl p-5 pb-16 relative cursor-pointer`}
            onClick={() => setSelectedPlan("premium")}
          >
            <div
              className={` absolute bottom-0 right-0 ${
                selectedPlan === "premium"
                  ? " bg-primary text-white"
                  : "bg-gray-300"
              }  px-5 py-2 rounded-tl-lg rounded-br-lg`}
            >
              <p className=" font-semibold text-xl">450 USD</p>
            </div>
            <p className=" font-semibold text-xl sm:text-2xl">Premium Plan</p>
            <p className=" mt-2 sm:text-lg">Ultimate travel luxury</p>
            <p className=" font-medium sm:text-lg mt-2">Luggage Allowance</p>
            <div className=" flex items-center gap-2 mt-2 text-sm sm:text-base">
              <FaCheck className=" text-green-500 sm:text-xl" />
              <p>Upto 40 kg Luggage</p>
            </div>
            <div className=" flex items-center gap-2 mt-2 text-sm sm:text-base">
              <FaCheck className=" text-green-500 sm:text-xl" />
              <p>Upto 20kg Hand Luggage</p>
            </div>
            <p className=" font-medium text-lg mt-3">Features</p>
            <div className=" flex items-center gap-2 mt-2 text-sm sm:text-base">
              <FaCheck className=" text-green-500 sm:text-xl" />
              <p>Premium Seat Selection</p>
            </div>
            <div className=" flex items-center gap-2 mt-2 text-sm sm:text-base">
              <FaCheck className=" text-green-500 sm:text-xl" />
              <p>VIP Check-in</p>
            </div>
            <div className=" flex items-center gap-2 mt-2 text-sm sm:text-base">
              <FaCheck className=" text-green-500 sm:text-xl" />
              <p>Premium Lounge Access</p>
            </div>
            <div className=" flex items-center gap-2 mt-2 text-sm sm:text-base">
              <FaCheck className=" text-green-500 sm:text-xl" />
              <p>Priority Boarding</p>
            </div>
          </div>
          {/* Premium */}
        </Carousel>
      </div>
    </div>
  );
}
