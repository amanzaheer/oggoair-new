"use client";

import React from "react";
import { IoStar } from "react-icons/io5";
import HotelDetailsFilter from "./HotelDetailsFilter";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Image from "next/image";
import HotelDetailsSingleReview from "./HotelDetailsSingleReview";

export default function HotelReview({ hotelDetailsData }: any) {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 6,
      slidesToSlide: 1, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 640 },
      items: 3,
      slidesToSlide: 1, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 640, min: 0 },
      items: 2,
      slidesToSlide: 1, // optional, default to 1.
    },
  };
  return (
    <div className=" w-full mt-20">
      <p className=" font-bold text-2xl">Reviews</p>
      <div className=" mt-10 grid grid-cols-6">
        <div className=" col-span-6 lg:col-span-2 flex items-center gap-3 ">
          <div className=" bg-primary text-white px-3 py-3 rounded flex items-center justify-center">
            <span className=" text-lg font-semibold">10,0</span>
          </div>
          <div>
            <div className=" flex items-center gap-1">
              <IoStar className=" text-lg text-yellow-500" />
              <IoStar className=" text-lg text-yellow-500" />
              <IoStar className=" text-lg text-yellow-500" />
              <IoStar className=" text-lg text-yellow-500" />
              <IoStar className=" text-lg text-yellow-500" />
            </div>
            <p className=" mt-2 font-medium text-lg">182 Reviews</p>
          </div>
        </div>
        <div className="col-span-6 lg:col-span-4">
          <div className=" w-full grid grid-cols-3 gap-28">
            <div>
              <div className=" w-full flex items-center justify-between">
                <p>Cleanliness</p>
                <p>8.5</p>
              </div>
              <div className=" mt-1 w-full h-[6px] rounded-lg bg-gray-300 relative overflow-hidden">
                <div className=" w-[85%] h-full bg-blue-600 absolute top-0 left-0"></div>
              </div>
            </div>
            <div>
              <div className=" w-full flex items-center justify-between">
                <p>Cleanliness</p>
                <p>8.5</p>
              </div>
              <div className=" mt-1 w-full h-[6px] rounded-lg bg-gray-300 relative overflow-hidden">
                <div className=" w-[85%] h-full bg-blue-600 absolute top-0 left-0"></div>
              </div>
            </div>
            <div>
              <div className=" w-full flex items-center justify-between">
                <p>Cleanliness</p>
                <p>8.5</p>
              </div>
              <div className=" mt-1 w-full h-[6px] rounded-lg bg-gray-300 relative overflow-hidden">
                <div className=" w-[85%] h-full bg-blue-600 absolute top-0 left-0"></div>
              </div>
            </div>
          </div>
          <div className=" w-full grid grid-cols-3 gap-28 mt-5">
            <div>
              <div className=" w-full flex items-center justify-between">
                <p>Cleanliness</p>
                <p>8.5</p>
              </div>
              <div className=" mt-1 w-full h-[6px] rounded-lg bg-gray-300 relative overflow-hidden">
                <div className=" w-[85%] h-full bg-blue-600 absolute top-0 left-0"></div>
              </div>
            </div>
            <div>
              <div className=" w-full flex items-center justify-between">
                <p>Cleanliness</p>
                <p>8.5</p>
              </div>
              <div className=" mt-1 w-full h-[6px] rounded-lg bg-gray-300 relative overflow-hidden">
                <div className=" w-[85%] h-full bg-blue-600 absolute top-0 left-0"></div>
              </div>
            </div>
            <div>
              <div className=" w-full flex items-center justify-between">
                <p>Cleanliness</p>
                <p>8.5</p>
              </div>
              <div className=" mt-1 w-full h-[6px] rounded-lg bg-gray-300 relative overflow-hidden">
                <div className=" w-[85%] h-full bg-blue-600 absolute top-0 left-0"></div>
              </div>
            </div>
          </div>
          <div className=" w-full grid grid-cols-3 gap-28 mt-5">
            <div>
              <div className=" w-full flex items-center justify-between">
                <p>Cleanliness</p>
                <p>8.5</p>
              </div>
              <div className=" mt-1 w-full h-[6px] rounded-lg bg-gray-300 relative overflow-hidden">
                <div className=" w-[85%] h-full bg-blue-600 absolute top-0 left-0"></div>
              </div>
            </div>
            <div>
              <div className=" w-full flex items-center justify-between">
                <p>Cleanliness</p>
                <p>8.5</p>
              </div>
              <div className=" mt-1 w-full h-[6px] rounded-lg bg-gray-300 relative overflow-hidden">
                <div className=" w-[85%] h-full bg-blue-600 absolute top-0 left-0"></div>
              </div>
            </div>
            <div>
              <div className=" w-full flex items-center justify-between">
                <p>Cleanliness</p>
                <p>8.5</p>
              </div>
              <div className=" mt-1 w-full h-[6px] rounded-lg bg-gray-300 relative overflow-hidden">
                <div className=" w-[85%] h-full bg-blue-600 absolute top-0 left-0"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <HotelDetailsFilter />
      <div className=" mt-5">
        <p className=" font-medium text-lg">Photos from reviews</p>
        <Carousel
          swipeable={false}
          draggable={false}
          responsive={responsive}
          ssr={true} // means to render carousel on server-side.
          // infinite={true}
          // autoPlay={true}
          // autoPlaySpeed={2000}
          keyBoardControl={true}
          customTransition="all .5"
          transitionDuration={500}
          containerClass="hotel-details-carousel-container mt-5"
          dotListClass="custom-dot-list-style"
          itemClass=""
        >
          {/* Carousel Items */}
          <div className="mr-3 h-[200px] rounded-2xl overflow-hidden">
            <Image
              src={`/New/hotel/details/3.png`}
              alt="line"
              height={1000}
              width={1000}
              className="w-full h-full object-cover"
            />
          </div>
          {/* Carousel Items */}
          {/* Carousel Items */}
          <div className="mr-3 h-[200px] rounded-2xl overflow-hidden">
            <Image
              src={`/New/hotel/details/3.png`}
              alt="line"
              height={1000}
              width={1000}
              className="w-full h-full object-cover"
            />
          </div>
          {/* Carousel Items */}
          {/* Carousel Items */}
          <div className="mr-3 h-[200px] rounded-2xl overflow-hidden">
            <Image
              src={`/New/hotel/details/3.png`}
              alt="line"
              height={1000}
              width={1000}
              className="w-full h-full object-cover"
            />
          </div>
          {/* Carousel Items */}
          {/* Carousel Items */}
          <div className="mr-3 h-[200px] rounded-2xl overflow-hidden">
            <Image
              src={`/New/hotel/details/3.png`}
              alt="line"
              height={1000}
              width={1000}
              className="w-full h-full object-cover"
            />
          </div>
          {/* Carousel Items */}
          {/* Carousel Items */}
          <div className="mr-3 h-[200px] rounded-2xl overflow-hidden">
            <Image
              src={`/New/hotel/details/3.png`}
              alt="line"
              height={1000}
              width={1000}
              className="w-full h-full object-cover"
            />
          </div>
          {/* Carousel Items */}
          {/* Carousel Items */}
          <div className="mr-3 h-[200px] rounded-2xl overflow-hidden">
            <Image
              src={`/New/hotel/details/3.png`}
              alt="line"
              height={1000}
              width={1000}
              className="w-full h-full object-cover"
            />
          </div>
          {/* Carousel Items */}
          {/* Carousel Items */}
          <div className="mr-3 h-[200px] rounded-2xl overflow-hidden">
            <Image
              src={`/New/hotel/details/3.png`}
              alt="line"
              height={1000}
              width={1000}
              className="w-full h-full object-cover"
            />
          </div>
          {/* Carousel Items */}
          {/* Carousel Items */}
          <div className="mr-3 h-[200px] rounded-2xl overflow-hidden">
            <Image
              src={`/New/hotel/details/3.png`}
              alt="line"
              height={1000}
              width={1000}
              className="w-full h-full object-cover"
            />
          </div>
          {/* Carousel Items */}
        </Carousel>
      </div>
      <HotelDetailsSingleReview />
      <HotelDetailsSingleReview />
      <HotelDetailsSingleReview />
      <HotelDetailsSingleReview />
    </div>
  );
}
