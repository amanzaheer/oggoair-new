"use client";

import { getName } from "country-list";
import React from "react";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import { IoClose } from "react-icons/io5";
import { LuArrowRightLeft } from "react-icons/lu";
import FlightSliceDetails from "./FlightSliceDetails";

export default function FlightDetails({ toggleDetails, flight }: any) {
  const DepartureTime = (date: any) => {
    const options = {
      weekday: "short", // "Thu"
      day: "numeric", // "5"
      month: "short", // "Aug"
      hour: "2-digit", // "18"
      minute: "2-digit", // "30"
      hour12: false, // 24-hour format
    };

    // Get the formatted string
    let formattedDate = date.toLocaleString("en-GB", options);

    // Add the comma after the weekday name
    formattedDate = formattedDate.replace(/^([a-zA-Z]+) (\d+)/, "$1, $2");

    return formattedDate;
  };

  return (
    <div className=" p-5 rounded-md mt-5 bg-white">
      <div className=" ">
        <div className=" flex items-center justify-between">
          <p className=" font-medium text-2xl">Trip details</p>
          <IoClose
            className=" text-gray-500 cursor-pointer text-xl"
            onClick={toggleDetails}
          />
        </div>
        <div className=" flex gap-5 mt-5">
          <div className="">
            <p className=" font-medium text-lg">
              {flight.slices[0].origin.city_name},{" "}
              {getName(flight.slices[0].origin.iata_country_code)} -{" "}
              {flight.slices[0].destination.city_name},{" "}
              {getName(flight.slices[0].destination.iata_country_code)}
            </p>
            <p>
              {DepartureTime(
                new Date(flight.slices[0].segments[0].departing_at)
              )}
            </p>
          </div>
          {flight.slices.length > 1 && (
            <div className=" bg-primary h-8 w-8 rounded-full flex items-center justify-center">
              <LuArrowRightLeft className=" text-white" />
            </div>
          )}
          {flight.slices.length > 1 && (
            <div className="">
              <p className=" font-medium text-lg">
                {flight.slices[1].origin.city_name},{" "}
                {getName(flight.slices[1].origin.iata_country_code)} -{" "}
                {flight.slices[1].destination.city_name},{" "}
                {getName(flight.slices[1].destination.iata_country_code)}
              </p>
              <p>
                {DepartureTime(
                  new Date(flight.slices[1].segments[0].departing_at)
                )}
              </p>
            </div>
          )}
        </div>
        <div className=" mt-3">
          {flight.slices.length > 1 ? (
            <div className=" flex items-center gap-3">
              <IoMdCheckmarkCircleOutline className=" text-primary text-xl" />
              <p>
                Round trip
                <span>{flight.slices[0].segments.length > 1 && ` , `}</span>
                <span className=" text-red-500">
                  {flight.slices[0].segments.length === 2 && `1 transfer`}
                </span>
                <span className=" text-red-500">
                  {flight.slices[0].segments.length > 2 &&
                    `${flight.slices[0].segments.length - 1} transfers`}
                </span>
              </p>
            </div>
          ) : (
            <div className=" flex items-center gap-3">
              <IoMdCheckmarkCircleOutline className=" text-primary text-xl" />
              <p>
                One way
                <span>{flight.slices[0].segments.length > 1 && ` , `}</span>
                <span className=" text-red-500">
                  {flight.slices[0].segments.length === 2 && `1 transfer`}
                </span>
                <span className=" text-red-500">
                  {flight.slices[0].segments.length > 2 &&
                    `${flight.slices[0].segments.length - 1} transfers`}
                </span>
              </p>
            </div>
          )}
        </div>
        {flight.slices.map((slice: any, index: number) => {
          return (
            <div key={index}>
              {index === 1 && (
                <p className=" font-semibold text-lg my-5">
                  Return ticket
                  <span className=" text-sm">
                    {flight.slices[1].segments.length > 1 && ` , `}
                  </span>
                  <span className=" text-red-500 font-normal text-sm">
                    {flight.slices[1].segments.length === 2 && `1 transfer`}
                  </span>
                  <span className=" text-red-500 font-normal text-sm">
                    {flight.slices[1].segments.length > 2 &&
                      `${flight.slices[1].segments.length - 1} transfers`}
                  </span>
                </p>
              )}
              <FlightSliceDetails
                DepartureTime={DepartureTime}
                slice={slice}
                flight={flight}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}
