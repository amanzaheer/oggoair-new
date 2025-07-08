"use client";

import Image from "next/image";
import React from "react";
import { BsCheck2 } from "react-icons/bs";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

export default function HotelAmenitiesAndSearvices({ hotelDetailsData }: any) {
  const aminities = {
    general: [
      "Electric vehicle charging",
      "Private check-in and check-out",
      "Air conditioning",
      "24-hour front desk",
      "Outdoor furniture",
      "Designated smoking areas",
      "Fire extinguisher",
      "Heating",
      "Heating",
      "Late check-out",
      "Dishwasher",
      "Early check-in",
      "Washing machine",
      "Dryer",
      "Terrace",
      "Express check-in/check-out",
    ],
    inTheRoom: [
      "Minibar",
      "Mosquito net",
      "Allergy-free rooms",
      "Non-smoking rooms",
      "Soundproof rooms",
      "In-room safe",
      "Family rooms",
      "Television",
      "Bathrobe",
      "Refrigerator",
    ],
    children: [
      "Children's playground",
      "Children's TV channels",
      "Children's pool",
      "Family/child-friendly accommodation",
    ],
    entertainment: [
      "Karaoke",
      "Hiking",
      "Barbecue area",
      "Suitable for hosting events",
      "Bicycle rental",
      "Fishing",
      "Sun terrace",
      "BBQ facilities",
    ],
    poolandBeach: [
      "Pool",
      "Outdoor pool",
      "Heated outdoor pool",
      "Beach/pool towels",
      "Water activities",
      "Beach facilities",
    ],
    dining: [
      "Bar",
      "Poolside bar",
      "Free tea/coffee",
      "Breakfast",
      "Café",
      "Kitchen",
      "Microwave",
      "Shared kitchen",
      "Restaurant",
    ],
    transfer: ["Car rental"],
    internet: ["Free Wi-Fi"],
    servicesAndAmenities: [
      "Ironing facilities",
      "Additional charge",
      "Iron",
      "Ironing services",
      "additional fee",
      "Laundry",
      "additional fee",
      "Hairdryer",
      "upon request",
    ],
    bussiness: ["Photocopying", "Meeting and banquet facilities"],
    parking: ["Parking near the hotel"],
    beautyAndWellness: [
      "Steam bath",
      "Massage",
      "additional fee",
      "Sauna",
      "Spa center",
      "additional fee",
    ],
    sports: ["Badminton", "Darts", "Cycling", "Boating", "Snorkeling"],
    pets: ["Pet-friendly accommodation"],
  };

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1240 },
      items: 4,
      slidesToSlide: 1, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1240, min: 640 },
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
    <div id="Amenities" className=" w-full mt-20">
      <p className=" font-bold text-2xl">All amenities and services</p>
      <div className=" w-full grid grid-cols-3 mt-10">
        <div>
          <div className=" flex items-center gap-1">
            <Image
              src="/New/hotel/details/aminities/hotel-service-icon 1.png"
              width={300}
              height={300}
              alt="Picture of the hotel"
              className=" h-[28px] w-[28px] object-cover"
            />
            <p className=" font-medium text-lg">General</p>
          </div>
          <div className=" pl-8">
            {aminities.general.map((title, index) => {
              return (
                <p key={index} className=" text-gray-500 mt-2">
                  {title}
                </p>
              );
            })}
            {/* {hotelDetailsData.accommodation.amenities.map(
              (amenity: any, index: number) => {
                return (
                  <p key={index} className=" text-gray-500 mt-2">
                    {amenity.description}
                  </p>
                );
              }
            )} */}
          </div>
        </div>
        <div>
          <div className=" flex items-center gap-1">
            <Image
              src="/New/hotel/details/aminities/room-icon 1.png"
              width={300}
              height={300}
              alt="Picture of the hotel"
              className=" h-[28px] w-[28px] object-cover"
            />
            <p className=" font-medium text-lg">In the Rooms</p>
          </div>
          <div className=" pl-8">
            {aminities.inTheRoom.map((title, index) => {
              return (
                <p key={index} className=" text-gray-500 mt-2">
                  {title}
                </p>
              );
            })}
          </div>
          <div className=" flex items-center gap-1 mt-5">
            <Image
              src="/New/hotel/details/aminities/room-icon 1.png"
              width={300}
              height={300}
              alt="Picture of the hotel"
              className=" h-[28px] w-[28px] object-cover"
            />
            <p className=" font-medium text-lg">Children</p>
          </div>
          <div className=" pl-8">
            {aminities.children.map((title, index) => {
              return (
                <p key={index} className=" text-gray-500 mt-2">
                  {title}
                </p>
              );
            })}
          </div>
        </div>
        <div>
          <div className=" flex items-center gap-1">
            <Image
              src="/New/hotel/details/aminities/room-icon 1.png"
              width={300}
              height={300}
              alt="Picture of the hotel"
              className=" h-[28px] w-[28px] object-cover"
            />
            <p className=" font-medium text-lg">Entertainment</p>
          </div>
          <div className=" pl-8">
            {aminities.entertainment.map((title, index) => {
              return (
                <p key={index} className=" text-gray-500 mt-2">
                  {title}
                </p>
              );
            })}
          </div>
          <div className=" flex items-center gap-1 mt-5">
            <Image
              src="/New/hotel/details/aminities/room-icon 1.png"
              width={300}
              height={300}
              alt="Picture of the hotel"
              className=" h-[28px] w-[28px] object-cover"
            />
            <p className=" font-medium text-lg">Pool and Beach</p>
          </div>
          <div className=" pl-8">
            {aminities.poolandBeach.map((title, index) => {
              return (
                <p key={index} className=" text-gray-500 mt-2">
                  {title}
                </p>
              );
            })}
          </div>
        </div>
      </div>
      <div className=" mt-10">
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
          containerClass="hotel-details-carousel-container"
          // containerClass="carousel-container special-hotel-offers-carousel-container"
          // dotListClass="custom-dot-list-style"
          // itemClass="carousel-item-padding-40-px"
          itemClass="px-2"
        >
          <div
            className={`w-full h-[240px] rounded-2xl overflow-hidden relative`}
          >
            <Image
              src="/New/hotel/details/aminities/bar.png"
              alt="Promo 1"
              height={1000}
              width={2000}
              className=" w-full h-full object-cover"
            />
            <div className=" absolute bottom-0 left-0 bg-black bg-opacity-30 w-full h-[40px]  flex items-center justify-center">
              <p className=" font-medium text-white">Bar</p>
            </div>
          </div>
          <div
            className={`w-full h-[240px] rounded-2xl overflow-hidden relative`}
          >
            <Image
              src="/New/hotel/details/aminities/spa.jpg"
              alt="Promo 1"
              height={1000}
              width={2000}
              className=" w-full h-full object-cover"
            />
            <div className=" absolute bottom-0 left-0 bg-black bg-opacity-30 w-full h-[40px]  flex items-center justify-center">
              <p className=" font-medium text-white">Spa Center</p>
            </div>
          </div>
          <div
            className={`w-full h-[240px] rounded-2xl overflow-hidden relative`}
          >
            <Image
              src="/New/hotel/details/aminities/swimming.jpg"
              alt="Promo 1"
              height={1000}
              width={2000}
              className=" w-full h-full object-cover"
            />
            <div className=" absolute bottom-0 left-0 bg-black bg-opacity-30 w-full h-[40px]  flex items-center justify-center">
              <p className=" font-medium text-white">Swimming pool</p>
            </div>
          </div>
          <div
            className={`w-full h-[240px] rounded-2xl overflow-hidden relative`}
          >
            <Image
              src="/New/hotel/details/aminities/fitchness.jpg"
              alt="Promo 1"
              height={1000}
              width={2000}
              className=" w-full h-full object-cover"
            />
            <div className=" absolute bottom-0 left-0 bg-black bg-opacity-30 w-full h-[40px]  flex items-center justify-center">
              <p className=" font-medium text-white">Fitness center</p>
            </div>
          </div>
        </Carousel>
      </div>
      <div className=" w-full grid grid-cols-3 mt-10">
        <div>
          <div className=" flex items-center gap-1">
            <Image
              src="/New/hotel/details/aminities/hotel-service-icon 1.png"
              width={300}
              height={300}
              alt="Picture of the hotel"
              className=" h-[28px] w-[28px] object-cover"
            />
            <p className=" font-medium text-lg">Dining</p>
          </div>
          <div className=" pl-8">
            {aminities.dining.map((title, index) => {
              return (
                <p key={index} className=" text-gray-500 mt-2">
                  {title}
                </p>
              );
            })}
          </div>
          <div className=" flex items-center gap-1 mt-5">
            <Image
              src="/New/hotel/details/aminities/draw-an-booking-a-car-icon 1.png"
              width={300}
              height={300}
              alt="Picture of the hotel"
              className=" h-[28px] w-[28px] object-cover"
            />
            <p className=" font-medium text-lg">Transfer</p>
          </div>
          <div className=" pl-8">
            {aminities.transfer.map((title, index) => {
              return (
                <p key={index} className=" text-gray-500 mt-2">
                  {title}
                </p>
              );
            })}
          </div>
          <div className=" flex items-center gap-1 mt-5">
            <Image
              src="/New/hotel/details/aminities/wifi-free-icon 2.png"
              width={300}
              height={300}
              alt="Picture of the hotel"
              className=" h-[28px] w-[28px] object-cover"
            />
            <p className=" font-medium text-lg">Internet</p>
          </div>
          <div className=" pl-8">
            {aminities.internet.map((title, index) => {
              return (
                <p key={index} className=" text-gray-500 mt-2">
                  {title}
                </p>
              );
            })}
          </div>
        </div>
        <div>
          <div className=" flex items-center gap-1">
            <Image
              src="/New/hotel/details/aminities/iron-hair-dryer-washing-machine-icon (1) 2.png"
              width={300}
              height={300}
              alt="Picture of the hotel"
              className=" h-[28px] w-[28px] object-cover"
            />
            <p className=" font-medium text-lg">Services and Amenities</p>
          </div>
          <div className=" pl-8">
            {aminities.servicesAndAmenities.map((title, index) => {
              return (
                <p key={index} className=" text-gray-500 mt-2">
                  {title}
                </p>
              );
            })}
          </div>
          <div className=" flex items-center gap-1 mt-5">
            <Image
              src="/New/hotel/details/aminities/business-lounge-hall-icon 3.png"
              width={300}
              height={300}
              alt="Picture of the hotel"
              className=" h-[28px] w-[28px] object-cover"
            />
            <p className=" font-medium text-lg">Business:</p>
          </div>
          <div className=" pl-8">
            {aminities.bussiness.map((title, index) => {
              return (
                <p key={index} className=" text-gray-500 mt-2">
                  {title}
                </p>
              );
            })}
          </div>
          <div className=" flex items-center gap-1 mt-5">
            <Image
              src="/New/hotel/details/aminities/parking-icon 2.png"
              width={300}
              height={300}
              alt="Picture of the hotel"
              className=" h-[28px] w-[28px] object-cover"
            />
            <p className=" font-medium text-lg">Parking</p>
          </div>
          <div className=" pl-8">
            {aminities.parking.map((title, index) => {
              return (
                <p key={index} className=" text-gray-500 mt-2">
                  {title}
                </p>
              );
            })}
          </div>
        </div>
        <div>
          <div className=" flex items-center gap-1">
            <Image
              src="/New/hotel/details/aminities/spa-icon 2.png"
              width={300}
              height={300}
              alt="Picture of the hotel"
              className=" h-[28px] w-[28px] object-cover"
            />
            <p className=" font-medium text-lg">Beauty and Wellness</p>
          </div>
          <div className=" pl-8">
            {aminities.beautyAndWellness.map((title, index) => {
              return (
                <p key={index} className=" text-gray-500 mt-2">
                  {title}
                </p>
              );
            })}
          </div>
          <div className=" flex items-center gap-1 mt-5">
            <Image
              src="/New/hotel/details/aminities/2-children-icon 2.png"
              width={300}
              height={300}
              alt="Picture of the hotel"
              className=" h-[28px] w-[28px] object-cover"
            />
            <p className=" font-medium text-lg">Sports</p>
          </div>
          <div className=" pl-8">
            {aminities.sports.map((title, index) => {
              return (
                <p key={index} className=" text-gray-500 mt-2">
                  {title}
                </p>
              );
            })}
          </div>
          <div className=" flex items-center gap-1 mt-5">
            <Image
              src="/New/hotel/details/aminities/dog-and-cat-icon 2.png"
              width={300}
              height={300}
              alt="Picture of the hotel"
              className=" h-[28px] w-[28px] object-cover"
            />
            <p className=" font-medium text-lg">Pets</p>
          </div>
          <div className=" pl-8">
            {aminities.pets.map((title, index) => {
              return (
                <p key={index} className=" text-gray-500 mt-2">
                  {title}
                </p>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
