"use client";

import Image from "next/image";
import React from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";
import { IoIosArrowBack, IoIosArrowForward, IoIosStar } from "react-icons/io";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

function CustomButtonGroup({ next, previous }: any) {
  return (
    <div className="absolute bottom-[-60px] left-0 right-0 flex items-center justify-between z-10 px-5">
      {/* Left Arrow */}
      <FaArrowLeft
        onClick={previous}
        className="text-xl text-blue-400 cursor-pointer"
      />
      {/* Middle Line */}
      <div className="h-[2px] bg-blue-300 w-full mx-5"></div>
      {/* Right Arrow */}
      <FaArrowRight
        onClick={next}
        className="text-xl text-blue-400 cursor-pointer"
      />
    </div>
  );
}

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1200 },
    items: 3,
    slidesToSlide: 1,
  },
  tablet: {
    breakpoint: { max: 1200, min: 640 },
    items: 2,
    slidesToSlide: 1,
  },
  mobile: {
    breakpoint: { max: 640, min: 0 },
    items: 1,
    slidesToSlide: 1,
  },
};

export default function TopFlightRoute() {
  return (
    <div className="w-full flex justify-center p-5 mt-10">
      <div className={`w-full xl:w-[1220px] 2xl:w-[1420px] pt-10`}>
        <p className=" text-center font-bold text-xl sm:text-4xl text-slate-900">
          Top Flight Routes
        </p>
        <p className=" mt-5 text-xl font-semibold text-center mb-20">
          Book Your Journey Today!
        </p>
        <div className="relative">
          {/* Add relative class to this div */}
          <Carousel
            swipeable={false}
            draggable={false}
            responsive={responsive}
            ssr={true}
            infinite={true}
            autoPlay={false}
            autoPlaySpeed={2000}
            keyBoardControl={true}
            customTransition="all .5"
            transitionDuration={500}
            containerClass="carousel-container"
            dotListClass="custom-dot-list-style"
            itemClass=""
            customButtonGroup={<CustomButtonGroup />}
            renderButtonGroupOutside={true}
            arrows={false} // Disable the default arrows
          >
            <div className=" rounded-2xl overflow-hidden bg-white shadow-md h-[400px] sm:h-[500px] relative mx-3">
              <div className=" w-full h-full ">
                <Image
                  src="/New/top-flights/1.jpg"
                  width={1000}
                  height={1000}
                  alt="Picture of the currency"
                  className=" w-full h-full object-cover"
                />
              </div>
              <div className=" px-5 pb-5 pt-3 absolute w-full bottom-0 left-0 h-32 bg-white bg-opacity-50 flex justify-between items-start rounded-t-xl">
                <div>
                  <p className="text-xl font-medium">Thailand ~ Bangkok</p>
                  <p className="mt-2 text-gray-700 font-medium">
                    Departure on April 23
                  </p>
                  <p className=" font-medium mt-2 text-lg">$74 </p>
                </div>
                <div className=" flex items-center gap-1 font-semibold">
                  <IoIosStar />
                  <p>4.84</p>
                </div>
              </div>
            </div>
            {/* item */}
            <div className=" rounded-2xl overflow-hidden bg-white shadow-md h-[400px] sm:h-[500px] relative mx-3">
              <div className=" w-full h-full ">
                <Image
                  src="/New/top-flights/2.jpg"
                  width={1000}
                  height={1000}
                  alt="Picture of the currency"
                  className=" w-full h-full object-cover"
                />
              </div>
              <div className=" px-5 pb-5 pt-3 absolute w-full bottom-0 left-0 h-32 bg-white bg-opacity-50 flex justify-between items-start rounded-t-xl">
                <div>
                  <p className="text-xl font-medium">Thailand ~ Bangkok</p>
                  <p className="mt-2 text-gray-700 font-medium">
                    Departure on April 23
                  </p>
                  <p className=" font-medium mt-2 text-lg">$74 </p>
                </div>
                <div className=" flex items-center gap-1 font-semibold">
                  <IoIosStar />
                  <p>4.84</p>
                </div>
              </div>
            </div>
            {/* item */}
            <div className=" rounded-2xl overflow-hidden bg-white shadow-md h-[400px] sm:h-[500px] relative mx-3">
              <div className=" w-full h-full ">
                <Image
                  src="/New/top-flights/3.jpg"
                  width={1000}
                  height={1000}
                  alt="Picture of the currency"
                  className=" w-full h-full object-cover"
                />
              </div>
              <div className=" px-5 pb-5 pt-3 absolute w-full bottom-0 left-0 h-32 bg-white bg-opacity-50 flex justify-between items-start rounded-t-xl">
                <div>
                  <p className="text-xl font-medium">Thailand ~ Bangkok</p>
                  <p className="mt-2 text-gray-700 font-medium">
                    Departure on April 23
                  </p>
                  <p className=" font-medium mt-2 text-lg">$74 </p>
                </div>
                <div className=" flex items-center gap-1 font-semibold">
                  <IoIosStar />
                  <p>4.84</p>
                </div>
              </div>
            </div>
          </Carousel>
        </div>
      </div>
    </div>
  );
}
