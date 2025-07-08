"use client";

import React, { useEffect, useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const responsive = {
  largeDesktop: {
    breakpoint: { max: 3000, min: 1420 },
    items: 7,
    slidesToSlide: 1,
  },
  desktop: {
    breakpoint: { max: 1420, min: 1024 },
    items: 5,
    slidesToSlide: 1,
  },
  tablet: {
    breakpoint: { max: 1024, min: 640 },
    items: 4,
    slidesToSlide: 1,
  },
  mobile: {
    breakpoint: { max: 640, min: 0 },
    items: 2,
    slidesToSlide: 1,
  },
};

export default function PriceCalander({ filterTypes, filterAbleTypes }: any) {
  const [selectedDate, setSelectedDate] = useState("mo");

  useEffect(() => {
    if (filterTypes.PriceCalander === 0) {
      setSelectedDate("su");
    }
    if (filterTypes.PriceCalander === 1) {
      setSelectedDate("mo");
    }
    if (filterTypes.PriceCalander === 2) {
      setSelectedDate("tu");
    }
    if (filterTypes.PriceCalander === 3) {
      setSelectedDate("we");
    }
    if (filterTypes.PriceCalander === 4) {
      setSelectedDate("th");
    }
    if (filterTypes.PriceCalander === 5) {
      setSelectedDate("fr");
    }
    if (filterTypes.PriceCalander === 6) {
      setSelectedDate("sa");
    }
  }, []);

  return (
    <div className=" w-full">
      <p className=" font-medium text-lg sm:text-2xl">Price Calander</p>
      <div className=" w-full ">
        <Carousel
          swipeable={false}
          draggable={false}
          responsive={responsive}
          ssr={true}
          keyBoardControl={true}
          containerClass="carousel-container"
          dotListClass="custom-dot-list-style"
          itemClass="px-2 my-5"
        >
          <div
            onClick={() => setSelectedDate("sa")}
            className={`${
              selectedDate === "sa" && " bg-primary"
            } group cursor-pointer w-32 shadow rounded-lg py-2 px-5 text-center`}
          >
            <p
              className={` ${
                selectedDate === "sa" ? " text-white" : "text-primary"
              }  font-medium`}
            >
              Aug 3, Sa
            </p>
            <p
              className={` ${
                selectedDate === "sa" ? " text-white" : "text-gray-500"
              } `}
            >
              95$
            </p>
          </div>
          <div
            onClick={() => setSelectedDate("su")}
            className={`${
              selectedDate === "su" && " bg-primary"
            } group cursor-pointer w-32 ml-2 shadow rounded-lg py-2 px-5 text-center`}
          >
            <p
              className={` ${
                selectedDate === "su" ? " text-white" : "text-primary"
              }  font-medium`}
            >
              Aug 4, Su
            </p>
            <p
              className={` ${
                selectedDate === "su" ? " text-white" : "text-gray-500"
              } `}
            >
              93$
            </p>
          </div>
          <div
            onClick={() => setSelectedDate("mo")}
            className={`${
              selectedDate === "mo" && " bg-primary"
            } group cursor-pointer w-32 ml-2 shadow rounded-lg py-2 px-5 text-center`}
          >
            <p
              className={` ${
                selectedDate === "mo" ? " text-white" : "text-primary"
              }  font-medium`}
            >
              Aug 5, Mo
            </p>
            <p
              className={` ${
                selectedDate === "mo" ? " text-white" : "text-gray-500"
              } `}
            >
              91$
            </p>
          </div>
          <div
            onClick={() => setSelectedDate("tu")}
            className={`${
              selectedDate === "tu" && " bg-primary"
            } group cursor-pointer w-32 ml-2 shadow rounded-lg py-2 px-5 text-center`}
          >
            <p
              className={` ${
                selectedDate === "tu" ? " text-white" : "text-primary"
              }  font-medium`}
            >
              Aug 6, Tu
            </p>
            <p
              className={` ${
                selectedDate === "tu" ? " text-white" : "text-gray-500"
              } `}
            >
              90$
            </p>
          </div>
          <div
            onClick={() => setSelectedDate("we")}
            className={`${
              selectedDate === "we" && " bg-primary"
            } group cursor-pointer w-32 ml-2 shadow rounded-lg py-2 px-5 text-center`}
          >
            <p
              className={` ${
                selectedDate === "we" ? " text-white" : "text-primary"
              }  font-medium`}
            >
              Aug 7, We
            </p>
            <p
              className={` ${
                selectedDate === "we" ? " text-white" : "text-gray-500"
              } `}
            >
              90$
            </p>
          </div>
          <div
            onClick={() => setSelectedDate("th")}
            className={`${
              selectedDate === "th" && " bg-primary"
            } group cursor-pointer w-32 ml-2 shadow rounded-lg py-2 px-5 text-center`}
          >
            <p
              className={` ${
                selectedDate === "th" ? " text-white" : "text-primary"
              }  font-medium`}
            >
              Aug 8, Th
            </p>
            <p
              className={` ${
                selectedDate === "th" ? " text-white" : "text-gray-500"
              } `}
            >
              90$
            </p>
          </div>
          <div
            onClick={() => setSelectedDate("fr")}
            className={`${
              selectedDate === "fr" && " bg-primary"
            } group cursor-pointer w-32 ml-2 shadow rounded-lg py-2 px-5 text-center`}
          >
            <p
              className={` ${
                selectedDate === "fr" ? " text-white" : "text-primary"
              }  font-medium`}
            >
              Aug 9, Fr
            </p>
            <p
              className={` ${
                selectedDate === "fr" ? " text-white" : "text-gray-500"
              } `}
            >
              90$
            </p>
          </div>
        </Carousel>
      </div>
    </div>
  );
}
