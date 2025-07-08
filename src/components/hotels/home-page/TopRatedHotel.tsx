"use client";

import Image from "next/image";
import React from "react";
import { IoIosArrowForward, IoMdStar } from "react-icons/io";
import { IoArrowBack, IoArrowForwardSharp } from "react-icons/io5";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

// Custom button group for next and previous buttons
function CustomButtonGroup({ next, previous }: any) {
  return (
    <div className="flex gap-2 mt-4">
      <div
        className=" hover:bg-white border border-white cursor-pointer flex items-center justify-center rounded-full p-3 "
        onClick={previous}
      >
        <IoArrowBack className=" text-xl text-blue-500" />
      </div>
      <div
        className=" hover:bg-white border border-white cursor-pointer flex items-center justify-center rounded-full p-3 "
        onClick={next}
      >
        <IoArrowForwardSharp className=" text-xl text-blue-500" />
      </div>
    </div>
  );
}

export default function TopRatedHotel() {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 2.5,
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
      <div
        className={`w-full xl:w-[1220px] 2xl:w-[1420px] custom-liniar-gradient py-10 pl-8 rounded-lg`}
      >
        <div className="w-full grid grid-cols-10 mt-8">
          <div className=" col-span-10 lg:col-span-3 flex items-center">
            <div className="w-[220px]">
              <p className="text-white text-xl">
                {`Choose from all the tour operators' offers`}
              </p>
              <div className="flex">
                <div className="text-white border border-white mt-5 rounded-xl px-3 py-2 flex items-center gap-5">
                  <p>All sentences</p>
                  <IoIosArrowForward />
                </div>
              </div>
            </div>
          </div>
          <div className=" col-span-10 lg:col-span-7">
            <p className=" mb-8 text-white font-semibold text-2xl">
              {`Top-rated hotels according to travelers' reviews`}
            </p>
            <Carousel
              swipeable={false}
              draggable={false}
              responsive={responsive}
              ssr={true}
              infinite={true}
              //   autoPlay={true}
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
              {/* Carousel Items */}
              {[1, 2, 3].map((item) => (
                <div key={item} className=" bg-white rounded-2xl p-5 pb-0 mr-5">
                  <div className="flex items-center justify-center rounded-md h-[260px] overflow-hidden">
                    <Image
                      src={`/New/hotel/top-rated-hotel/${item}.png`}
                      alt="line"
                      height={500}
                      width={500}
                      className="w-full h-full rounded-2xl"
                    />
                  </div>
                  <p className="mt-5 font-medium">Papillon Zeugma Relaxury</p>
                  <div className="flex items-center mt-1">
                    <IoMdStar className="text-yellow-400" />
                    <IoMdStar className="text-yellow-400" />
                    <IoMdStar className="text-yellow-400" />
                    <IoMdStar className="text-yellow-400" />
                    <IoMdStar className="text-yellow-400" />
                  </div>
                  <div className="flex gap-3 mt-2">
                    <span className="text-white bg-primary p-1 px-[6px] rounded text-sm">
                      10.0
                    </span>
                    <p>Reviews: 2580</p>
                  </div>
                  <div className="w-full flex justify-end -translate-y-5 translate-x-2">
                    <div>
                      <p className="text-gray-700">from</p>
                      <p className="font-semibold text-xl">$430</p>
                      <p>per night</p>
                    </div>
                  </div>
                </div>
              ))}
            </Carousel>
          </div>
        </div>
      </div>
    </div>
  );
}
