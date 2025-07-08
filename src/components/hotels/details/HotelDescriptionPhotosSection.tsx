"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";
import HotelRating from "./HotelRating";
import commaNumber from "comma-number";
import {
  Link,
  Button,
  Element,
  Events,
  animateScroll as scroll,
  scrollSpy,
  scroller,
} from "react-scroll";

export default function HotelDescriptionPhotosSection({
  gotoCheckoutPage,
  hotelDetailsData,
}: any) {
  return (
    <div className=" w-full mt-10 ">
      <div className=" w-full grid grid-cols-5 gap-2">
        <div className="col-span-2">
          {hotelDetailsData?.accommodation?.photos[0]?.url && (
            <Image
              src={hotelDetailsData?.accommodation.photos[0].url}
              width={2000}
              height={2000}
              alt="Picture of the hotel"
              className=" w-full h-[500px] rounded-2xl object-cover"
            />
          )}
        </div>
        <div className="col-span-3">
          <div className=" grid grid-cols-5 gap-2">
            <div className=" col-span-3">
              {hotelDetailsData?.accommodation?.photos[1]?.url && (
                <Image
                  src={hotelDetailsData?.accommodation.photos[1].url}
                  width={2000}
                  height={2000}
                  alt="Picture of the hotel"
                  className=" w-full h-[245px] rounded-2xl object-cover"
                />
              )}
            </div>
            <div className=" col-span-2">
              {hotelDetailsData?.accommodation?.photos[2]?.url && (
                <Image
                  src={hotelDetailsData?.accommodation.photos[2].url}
                  width={2000}
                  height={2000}
                  alt="Picture of the hotel"
                  className=" w-full h-[245px] rounded-2xl object-cover"
                />
              )}
            </div>
          </div>
          <div className=" grid grid-cols-11 gap-2 mt-2">
            <div className=" col-span-3">
              {hotelDetailsData?.accommodation?.photos[3]?.url && (
                <Image
                  src={hotelDetailsData?.accommodation.photos[3].url}
                  width={2000}
                  height={2000}
                  alt="Picture of the hotel"
                  className=" w-full h-[245px] rounded-2xl object-cover"
                />
              )}
            </div>
            <div className=" col-span-5">
              {hotelDetailsData?.accommodation?.photos[4]?.url && (
                <Image
                  src={hotelDetailsData?.accommodation.photos[4].url}
                  width={2000}
                  height={2000}
                  alt="Picture of the hotel"
                  className=" w-full h-[245px] rounded-2xl object-cover"
                />
              )}
            </div>
            <div className=" col-span-3">
              {hotelDetailsData?.accommodation?.photos[5]?.url && (
                <Image
                  src={hotelDetailsData?.accommodation.photos[5].url}
                  width={2000}
                  height={2000}
                  alt="Picture of the hotel"
                  className=" w-full h-[245px] rounded-2xl object-cover"
                />
              )}
            </div>
          </div>
        </div>
      </div>

      <div className=" mt-10 flex items-center justify-between">
        <div className=" flex items-center gap-5">
          <p className=" text-4xl font-semibold">
            {hotelDetailsData.accommodation.name}
          </p>
          <HotelRating rating={hotelDetailsData.accommodation.rating} />
        </div>
        <div className=" flex items-center gap-5">
          <p className=" text-lg font-semibold">Review Score:</p>
          <div className=" px-3 py-1 rounded-md bg-primary text-white font-semibold">
            {hotelDetailsData.accommodation.review_score}
          </div>
        </div>
      </div>
      <div className=" mt-5 flex items-center justify-between">
        <div>
          <div className=" flex items-center gap-5">
            <div className=" flex items-center gap-1">
              <Image
                src="/New/hotel/details/location.png"
                width={500}
                height={500}
                alt="Picture of the hotel"
                className=" w-[24px] h-[24px]"
              />
              <div className=" text-blue-500">
                {hotelDetailsData.accommodation.location.address.line_one},
                {hotelDetailsData.accommodation.location.address.city_name}
              </div>
            </div>
            <Link
              className=""
              to="Location"
              activeClass="active"
              spy={true}
              smooth={true}
              offset={-10}
              duration={500}
            >
              <div className=" flex items-center gap-1 cursor-pointer">
                <Image
                  src="/New/hotel/details/map.png"
                  width={500}
                  height={500}
                  alt="Picture of the hotel"
                  className=" w-[24px] h-[24px]"
                />
                <div className=" text-blue-500">Show on map</div>
              </div>
            </Link>
            <Link
              className=""
              to="Location"
              activeClass="active"
              spy={true}
              smooth={true}
              offset={-10}
              duration={500}
            >
              <div className=" flex items-center gap-1 cursor-pointer">
                <Image
                  src="/New/hotel/details/question.png"
                  width={500}
                  height={500}
                  alt="Picture of the hotel"
                  className=" w-[24px] h-[24px]"
                />
                <div className=" text-blue-500">What else is nearby?</div>
              </div>
            </Link>
          </div>
          {/* <p className=" mt-1">{hotelDetailsData.accommodation.name}</p> */}
        </div>
        <div className=" mt-10">
          <p className=" text-xl font-semibold">
            from{" "}
            <span className=" font-semibold text-2xl">
              $
              {commaNumber(
                parseFloat(hotelDetailsData.cheapest_rate_total_amount)
              )}
            </span>
          </p>
          <div className=" flex justify-end">
            <Link
              className=""
              to="available-accommodations"
              activeClass="active"
              spy={true}
              smooth={true}
              offset={-10}
              duration={500}
            >
              <button
                // onClick={gotoCheckoutPage}
                className=" mt-3 px-5 py-2 rounded-md bg-primary text-white "
              >
                Book now
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
