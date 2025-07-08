"use client";

import Image from "next/image";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
};

export default function Slider() {
  return (
    <div className=" w-full sm:-translate-y-32 ">
      <div className=" py-5 sm:py-10 px-5 w-full flex justify-center move-up-delayed-2">
        <div className="w-full xl:w-[1220px] 2xl:w-[1420px]">
          <p className="text-center font-bold text-xl sm:text-4xl text-slate-900 ">
            Unbeatable Promo Offer
          </p>
          <p className=" text-center text-lg mt-3 mb-5 sm:mb-10">
            Grab it Now—Limited Time Only!
          </p>
          <Carousel
            swipeable={false}
            draggable={false}
            // showDots={true}
            responsive={responsive}
            ssr={true} // means to render carousel on server-side.
            infinite={true}
            autoPlay={true}
            autoPlaySpeed={2000}
            keyBoardControl={true}
            customTransition="all .5"
            transitionDuration={500}
            containerClass="carousel-container"
            dotListClass="custom-dot-list-style"
            // itemClass="carousel-item-padding-40-px"
            itemClass="px-2"
          >
            <div
              className={`w-full h-[320px] sm:h-[440px] rounded-2xl overflow-hidden`}
            >
              <Image
                src="/New/banners/girl-on-world.jpg"
                alt="Promo 1"
                height={1000}
                width={2000}
                className=" w-full h-full object-cover"
              />
            </div>
            <div
              className={`w-full h-[320px] sm:h-[440px] rounded-2xl overflow-hidden`}
            >
              <Image
                src="/New/banners/girl-on-world.jpg"
                alt="Promo 1"
                height={1000}
                width={2000}
                className=" w-full h-full object-cover"
              />
            </div>
            <div
              className={`w-full h-[320px] sm:h-[440px] rounded-2xl overflow-hidden`}
            >
              <Image
                src="/New/banners/girl-on-world.jpg"
                alt="Promo 1"
                height={1000}
                width={2000}
                className=" w-full h-full object-cover"
              />
            </div>
          </Carousel>
        </div>
      </div>
    </div>
  );
}
