"use client";

import Image from "next/image";
import React from "react";
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

export default function AirlinePartners() {
  return (
    <div className=" w-full sm:pt-10 sm:pb-20">
      <div className="w-full px-5">
        <div className=" w-full xl:w-[1220px] mx-auto">
          <p className="text-center font-bold text-xl sm:text-4xl text-slate-900">
            Airline Partners
          </p>
          <Carousel
            swipeable={false}
            draggable={false}
            showDots={false}
            arrows={false}
            responsive={responsive}
            ssr={true} // means to render carousel on server-side.
            infinite={true}
            autoPlay={true}
            autoPlaySpeed={2000}
            keyBoardControl={true}
            customTransition="all .5"
            transitionDuration={500}
            containerClass="carousel-container py-2 mt-5"
            itemClass="px-2"
          >
            <div className=" bg-white p-3 rounded-md shadow-md flex flex-col justify-center items-center gap-3 h-32">
              <div className=" w-full h-full flex items-center justify-center">
                <Image
                  src={"/New/airline-partners/Emirates_logo.png"}
                  alt="airline-partners"
                  height={1000}
                  width={1000}
                  className=" w-full h-full object-contain"
                />
              </div>
            </div>
            <div className=" bg-white p-3 rounded-md shadow-md flex flex-col justify-center items-center gap-3 h-32">
              <div className=" w-full h-full flex items-center justify-center">
                <Image
                  src={"/New/airline-partners/british airways.jpg"}
                  alt="airline-partners"
                  height={1000}
                  width={1000}
                  className=" w-full h-full object-contain"
                />
              </div>
            </div>
            <div className=" bg-white p-3 rounded-md shadow-md flex flex-col justify-center items-center gap-3 h-32">
              <div className=" w-full h-full flex items-center justify-center">
                <Image
                  src={"/New/airline-partners/cathay pacific.jpg"}
                  alt="airline-partners"
                  height={1000}
                  width={1000}
                  className=" w-full h-full object-contain"
                />
              </div>
            </div>
            <div className=" bg-white p-3 rounded-md shadow-md flex flex-col justify-center items-center gap-3 h-32">
              <div className=" w-full h-full flex items-center justify-center">
                <Image
                  src={"/New/airline-partners/air-canada.png"}
                  alt="airline-partners"
                  height={1000}
                  width={1000}
                  className=" w-full h-full object-contain"
                />
              </div>
            </div>
            <div className=" bg-white p-3 rounded-md shadow-md flex flex-col justify-center items-center gap-3 h-32">
              <div className=" w-full h-full flex items-center justify-center">
                <Image
                  src={"/New/airline-partners/etihad.png"}
                  alt="airline-partners"
                  height={1000}
                  width={1000}
                  className=" w-full h-full object-contain"
                />
              </div>
            </div>
            <div className=" bg-white p-3 rounded-md shadow-md flex flex-col justify-center items-center gap-3 h-32">
              <div className=" w-full h-full flex items-center justify-center">
                <Image
                  src={"/New/airline-partners/FlyDubai.jpg"}
                  alt="airline-partners"
                  height={1000}
                  width={1000}
                  className=" w-full h-full object-contain"
                />
              </div>
            </div>
            <div className=" bg-white p-3 rounded-md shadow-md flex flex-col justify-center items-center gap-3 h-32">
              <div className=" w-full h-full flex items-center justify-center">
                <Image
                  src={"/New/airline-partners/kenya airways.png"}
                  alt="airline-partners"
                  height={1000}
                  width={1000}
                  className=" w-full h-full object-contain"
                />
              </div>
            </div>
            <div className=" bg-white p-3 rounded-md shadow-md flex flex-col justify-center items-center gap-3 h-32">
              <div className=" w-full h-full flex items-center justify-center">
                <Image
                  src={"/New/airline-partners/air arabia.png"}
                  alt="airline-partners"
                  height={1000}
                  width={1000}
                  className=" w-full h-full object-contain"
                />
              </div>
            </div>
            <div className=" bg-white p-3 rounded-md shadow-md flex flex-col justify-center items-center gap-3 h-32">
              <div className=" w-full h-full flex items-center justify-center">
                <Image
                  src={"/New/airline-partners/malaysia-airlines.png"}
                  alt="airline-partners"
                  height={1000}
                  width={1000}
                  className=" w-full h-full object-contain"
                />
              </div>
            </div>
            <div className=" bg-white p-3 rounded-md shadow-md flex flex-col justify-center items-center gap-3 h-32">
              <div className=" w-full h-full flex items-center justify-center">
                <Image
                  src={"/New/airline-partners/Qatar-Airways.jpg"}
                  alt="airline-partners"
                  height={1000}
                  width={1000}
                  className=" w-full h-full object-contain"
                />
              </div>
            </div>
            <div className=" bg-white p-3 rounded-md shadow-md flex flex-col justify-center items-center gap-3 h-32">
              <div className=" w-full h-full flex items-center justify-center">
                <Image
                  src={"/New/airline-partners/RwandAir.jpg"}
                  alt="airline-partners"
                  height={1000}
                  width={1000}
                  className=" w-full h-full object-contain"
                />
              </div>
            </div>
            <div className=" bg-white p-3 rounded-md shadow-md flex flex-col justify-center items-center gap-3 h-32">
              <div className=" w-full h-full flex items-center justify-center">
                <Image
                  src={"/New/airline-partners/singapore-airlines.png"}
                  alt="airline-partners"
                  height={1000}
                  width={1000}
                  className=" w-full h-full object-contain"
                />
              </div>
            </div>
            <div className=" bg-white p-3 rounded-md shadow-md flex flex-col justify-center items-center gap-3 h-32">
              <div className=" w-full h-full flex items-center justify-center">
                <Image
                  src={"/New/airline-partners/united-airlines.svg"}
                  alt="airline-partners"
                  height={1000}
                  width={1000}
                  className=" w-full h-full object-contain"
                />
              </div>
            </div>
          </Carousel>
        </div>
      </div>
    </div>
  );
}
