"use client";

import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import SingleExclusiveHotelRecomandation from "./SingleExclusiveHotelRecomandation";
import { IoArrowBack, IoArrowForwardSharp } from "react-icons/io5";

// Custom button group for next and previous buttons
function CustomButtonGroup({ next, previous }: any) {
  return (
    <div className="absolute top-[-60px] right-5 flex gap-2 z-10">
      <div
        className="border border-blue-600 bg-white hover:bg-blue-600 text-blue-600 hover:text-white cursor-pointer flex items-center justify-center rounded-full p-3"
        onClick={previous}
      >
        <IoArrowBack className="text-xl" />
      </div>
      <div
        className="border border-blue-600 bg-white hover:bg-blue-600 text-blue-600 hover:text-white cursor-pointer flex items-center justify-center rounded-full p-3"
        onClick={next}
      >
        <IoArrowForwardSharp className="text-xl" />
      </div>
    </div>
  );
}

export default function ExclusiveHotelRecomandation() {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
      slidesToSlide: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 640 },
      items: 2,
      slidesToSlide: 1,
    },
    mobile: {
      breakpoint: { max: 640, min: 0 },
      items: 1,
      slidesToSlide: 1,
    },
  };

  return (
    <div className="w-full flex justify-center p-5 mt-5">
      <div className={`w-full xl:w-[1220px] 2xl:w-[1420px] pt-10`}>
        <p className="text-3xl font-semibold text-[#001B4C] text-center mb-20">
          Exclusive hotel recommendations
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
            <SingleExclusiveHotelRecomandation image={1} />
            <SingleExclusiveHotelRecomandation image={2} />
            <SingleExclusiveHotelRecomandation image={3} />
            <SingleExclusiveHotelRecomandation image={4} />
          </Carousel>
        </div>
      </div>
    </div>
  );
}
