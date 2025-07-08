"use client";

import Image from "next/image";
import React, { useState } from "react";
import { IoMdStar, IoMdStarOutline } from "react-icons/io";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

export default function SpecialHotelOffers() {
  const [selectedCountry, setSelectedCountry] = useState("germary");
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 1, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 640 },
      items: 2,
      slidesToSlide: 1, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 640, min: 0 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
  };

  return (
    <div className="w-full flex justify-center p-5">
      <div className={`w-full xl:w-[1220px] 2xl:w-[1420px] py-10`}>
        <p className=" text-3xl font-semibold text-[#001B4C] text-center">
          Special hotel offers
        </p>
        <div className=" mt-5 ">
          <div className=" flex gap-2 flex-wrap items-center">
            <button
              onClick={() => setSelectedCountry("germary")}
              className={`px-5 py-2 rounded-3xl border border-blue-300 ${
                selectedCountry === "germary"
                  ? " text-white bg-primary"
                  : " text-gray-900"
              }`}
            >
              Germary
            </button>
            <button
              onClick={() => setSelectedCountry("turkey")}
              className={`px-5 py-2 rounded-3xl border border-blue-300 ${
                selectedCountry === "turkey"
                  ? " text-white bg-primary"
                  : " text-gray-900"
              }`}
            >
              Turkey
            </button>
            <button
              onClick={() => setSelectedCountry("egypt")}
              className={`px-5 py-2 rounded-3xl border border-blue-300 ${
                selectedCountry === "egypt"
                  ? " text-white bg-primary"
                  : " text-gray-900"
              }`}
            >
              Egypt
            </button>
            <button
              onClick={() => setSelectedCountry("poland")}
              className={`px-5 py-2 rounded-3xl border border-blue-300 ${
                selectedCountry === "poland"
                  ? " text-white bg-primary"
                  : " text-gray-900"
              }`}
            >
              Poland
            </button>
            <button
              onClick={() => setSelectedCountry("thailand")}
              className={`px-5 py-2 rounded-3xl border border-blue-300 ${
                selectedCountry === "thailand"
                  ? " text-white bg-primary"
                  : " text-gray-900"
              }`}
            >
              Thailand
            </button>
          </div>
        </div>
        <Carousel
          swipeable={false}
          draggable={false}
          responsive={responsive}
          ssr={true} // means to render carousel on server-side.
          infinite={true}
          autoPlay={true}
          autoPlaySpeed={2000}
          keyBoardControl={true}
          customTransition="all .5"
          transitionDuration={500}
          containerClass="special-hotel-offers-carousel-container mt-10"
          dotListClass="custom-dot-list-style"
          itemClass=""
        >
          {/* Carousel Items */}
          <div className=" mx-3">
            <div className=" rounded-2xl overflow-hidden h-[400px] w-full relative">
              <div className=" absolute top-2 left-3 p-2 rounded-3xl bg-black bg-opacity-35 flex items-center gap-1">
                <IoMdStar className=" text-yellow-400 text-lg" />
                <IoMdStar className=" text-yellow-400 text-lg" />
                <IoMdStar className=" text-yellow-400 text-lg" />
                <IoMdStarOutline className=" text-yellow-400 text-lg" />
                <IoMdStarOutline className=" text-yellow-400 text-lg" />
              </div>
              <Image
                src={`/New/hotel/special-hotel-offers/1.png`}
                alt="line"
                height={1000}
                width={1000}
                className="w-full h-full object-cover"
              />
            </div>
            <div className=" flex items-center justify-between mt-2">
              <p className=" font-medium text-xl">Ataer Hotel</p>
              <div className=" flex items-center gap-2">
                <div className=" bg-primary rounded-md p-1 px-2 text-white">
                  5.6
                </div>
                <p>Reviews: 280</p>
              </div>
            </div>
            <div>
              <p className=" text-lg mt-5">Antalya</p>
              <p className=" mt-2">
                A great choice for those looking to recharge, Jinglun Hotel
                offers a family-friendly atmosphere and is close to excellent
                restaurants and attractions, making it easy to experience the
                best of Beijing
              </p>
            </div>
          </div>
          {/* Carousel Items */}
          {/* Carousel Items */}
          <div className=" mx-3">
            <div className=" rounded-2xl overflow-hidden h-[400px] w-full relative">
              <div className=" absolute top-2 left-3 p-2 rounded-3xl bg-black bg-opacity-35 flex items-center gap-1">
                <IoMdStar className=" text-yellow-400 text-lg" />
                <IoMdStar className=" text-yellow-400 text-lg" />
                <IoMdStar className=" text-yellow-400 text-lg" />
                <IoMdStar className=" text-yellow-400 text-lg" />
                <IoMdStar className=" text-yellow-400 text-lg" />
              </div>
              <Image
                src={`/New/hotel/special-hotel-offers/2.png`}
                alt="line"
                height={1000}
                width={1000}
                className="w-full h-full object-cover"
              />
            </div>
            <div className=" flex items-center justify-between mt-2">
              <p className=" font-medium text-xl">The Marmara Taksim</p>
              <div className=" flex items-center gap-2">
                <div className=" bg-primary rounded-md p-1 px-2 text-white">
                  9.6
                </div>
                <p>Reviews: 280</p>
              </div>
            </div>
            <div>
              <p className=" text-lg mt-5">Antalya</p>
              <p className=" mt-2">
                A great choice for those looking to recharge, Jinglun Hotel
                offers a family-friendly atmosphere and is close to excellent
                restaurants and attractions, making it easy to experience the
                best of Beijing
              </p>
            </div>
          </div>
          {/* Carousel Items */}
          {/* Carousel Items */}
          <div className=" mx-3">
            <div className=" rounded-2xl overflow-hidden h-[400px] w-full relative">
              <div className=" absolute top-2 left-3 p-2 rounded-3xl bg-black bg-opacity-35 flex items-center gap-1">
                <IoMdStar className=" text-yellow-400 text-lg" />
                <IoMdStar className=" text-yellow-400 text-lg" />
                <IoMdStar className=" text-yellow-400 text-lg" />
                <IoMdStarOutline className=" text-yellow-400 text-lg" />
                <IoMdStarOutline className=" text-yellow-400 text-lg" />
              </div>
              <Image
                src={`/New/hotel/special-hotel-offers/1.png`}
                alt="line"
                height={1000}
                width={1000}
                className="w-full h-full object-cover"
              />
            </div>
            <div className=" flex items-center justify-between mt-2">
              <p className=" font-medium text-xl">Sultan Sipahi Resort</p>
              <div className=" flex items-center gap-2">
                <div className=" bg-primary rounded-md p-1 px-2 text-white">
                  5.6
                </div>
                <p>Reviews: 280</p>
              </div>
            </div>
            <div>
              <p className=" text-lg mt-5">Antalya</p>
              <p className=" mt-2">
                A great choice for those looking to recharge, Jinglun Hotel
                offers a family-friendly atmosphere and is close to excellent
                restaurants and attractions, making it easy to experience the
                best of Beijing
              </p>
            </div>
          </div>
          {/* Carousel Items */}
        </Carousel>
      </div>
    </div>
  );
}
