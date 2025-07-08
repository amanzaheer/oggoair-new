"use client";

import { TravelDuration, TravelDurationLongFormate } from "@/utils/dateFormate";
import { useState } from "react";
import { BsInfoCircleFill } from "react-icons/bs";
import { IoIosAirplane, IoIosArrowUp } from "react-icons/io";
import { IoAirplaneSharp } from "react-icons/io5";

export default function FlightDetails({
  flightDetails,
  commissions,
  bookTheFlight,
  passengersInfo,
}: any) {
  const [flightDetailsExpanded, setFlightDetailsExpanded] = useState(true);
  const [airTicketExpanded, setAirTicketExpanded] = useState(true);

  const [pricesExpanded, setPricesExpanded] = useState(true);

  const toggleAirTicket = () => {
    setAirTicketExpanded(!airTicketExpanded);
  };

  function formatDate(date: any) {
    const now = new Date(date);

    // Get day of the week (Thu, Fri, etc.)
    const dayOfWeek = now.toLocaleString("en-US", { weekday: "short" });

    // Get day of the month (25)
    const dayOfMonth = now.getDate();

    // Get full month name (July, August, etc.)
    const month = now.toLocaleString("en-US", { month: "long" });

    // Get time in 24-hour format (18:30)
    const hours = now.getHours();
    const minutes = now.getMinutes().toString().padStart(2, "0"); // Adds leading zero to minutes if needed
    const time = `${hours}:${minutes}`;

    // Construct the final string
    return `${dayOfWeek}, ${dayOfMonth} ${month}, ${time}`;
  }

  const getPassengerSummary = (passengers: any) => {
    let adults = 0;
    let children = 0;
    let infants = 0;

    // Iterate through each passenger object and count based on type
    passengers.forEach((passenger: any) => {
      if (passenger.type === "adults" || passenger.type === "adult") {
        adults += 1;
      } else if (passenger.type === "children") {
        children += 1;
      } else if (passenger.type === "infants") {
        infants += 1;
      }
    });

    // Construct the summary string
    let summary = [];

    if (adults > 0) {
      summary.push(`${adults} Adult${adults > 1 ? "s" : ""}`);
    }
    if (children > 0) {
      summary.push(`${children} Child${children > 1 ? "ren" : ""}`);
    }
    if (infants > 0) {
      summary.push(`${infants} Infant${infants > 1 ? "s" : ""}`);
    }

    return summary.join(", ") || "No passengers";
  };

  // console.log(flightDetails);

  return (
    <div className="">
      {/* <div className=" w-full rounded-xl p-5 bg-[#F8F9FE] relative">
        <div className=" font-medium flex items-center justify-between">
          <p className="">{getPassengerSummary(passengersInfo)}</p>
          <p className="">$ {parseFloat(flightDetails.total_amount)}</p>
        </div>
        <div className=" flex items-center justify-between mt-3">
          <p className=" text-sm">Flight Package Service Fee</p>
          <p className="">$ {parseFloat(commissions)}</p>
        </div>
        <div className=" flex items-center justify-between mt-5">
          <p className=" font-medium">Total Fee</p>
          <p className="  font-medium text-2xl ">
            $ {parseFloat(flightDetails.total_amount) + parseFloat(commissions)}
          </p>
        </div>
      </div> */}

      <div className=" bg-[#F8F9FE] p-5 rounded-md">
        <div className=" flex items-center justify-between">
          <p className=" font-semibold text-2xl">Flight</p>
          <IoIosArrowUp
            className={`
                    ${
                      flightDetailsExpanded ? "" : "rotate-180"
                    } cursor-pointer transition-all duration-150 ease-linear`}
            onClick={() => {
              setFlightDetailsExpanded(!flightDetailsExpanded);
            }}
          />
        </div>
        {flightDetailsExpanded && (
          <div className="  ">
            {flightDetails.slices.map((slice: any, index: number) => (
              <div key={index}>
                {slice.segments.map((segment: any, ind: number) => (
                  <div key={ind} className=" mt-3">
                    <div className=" flex items-center gap-2">
                      <div className=" flex items-center gap-2 bg-primary px-3 py-[6px] rounded-2xl text-white">
                        <IoIosAirplane className="text-xl" />
                        <p className=" ">
                          Flight Time:{" "}
                          {TravelDuration(
                            segment.arriving_at,
                            segment.departing_at
                          )}
                        </p>
                      </div>
                    </div>
                    <div className=" flex justify-between mt-4">
                      <div className=" w-[48%]">
                        <p className=" font-medium text-lg">Departure</p>
                        <p className=" text-sm mt-2">
                          {formatDate(segment.departing_at)}
                        </p>
                        <p className=" font-medium mt-2">
                          {segment.origin.city_name}
                        </p>
                        <p className=" text-sm mt-2">
                          {segment.origin.name} ({segment.origin.iata_code})
                        </p>
                      </div>
                      <div className=" w-[48%]">
                        <p className=" font-medium text-lg">Arrival</p>
                        <p className=" text-sm mt-2">
                          {formatDate(segment.arriving_at)}
                        </p>
                        <p className=" font-medium mt-2">
                          {segment.destination.city_name}
                        </p>
                        <p className=" text-sm mt-2">
                          {segment.destination.name} (
                          {segment.destination.iata_code})
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </div>
        )}
        <div className=" mt-3 flex items-center gap-2 border-b pb-2">
          {flightDetails.passengers.length > 1 && (
            <p className=" font-medium">
              {flightDetails.passengers.length} Passengers
            </p>
          )}

          {flightDetails.passengers.length === 1 && (
            <p className=" font-medium">1 Passenger</p>
          )}
        </div>

        <div className=" font-medium flex items-center justify-between mt-3">
          <p>Hand luggage 10kg</p>
          <p className="">25*35*55cm</p>
        </div>
      </div>

      <div className=" w-full rounded-xl p-5 bg-[#F8F9FE] relative mt-5">
        <div className=" flex items-center justify-between">
          <p className=" font-medium text-xl">Prices</p>
          <IoIosArrowUp
            className={`${
              pricesExpanded ? "" : "rotate-180"
            } cursor-pointer transition-all duration-150 ease-linear`}
            onClick={() => setPricesExpanded(!pricesExpanded)}
          />
        </div>
        {pricesExpanded && (
          <div className=" mt-5">
            <div className=" font-medium flex items-center justify-between">
              <p className="">
                {getPassengerSummary(flightDetails.passengers)}
              </p>
              <p className="">{flightDetails.total_amount} $ </p>
            </div>
            <div className=" flex items-center justify-between mt-3">
              <p className="">Service Fee</p>
              <p className="">{parseFloat(commissions)} $ </p>
            </div>
          </div>
        )}
        <div className=" flex items-center justify-between mt-3">
          <p className=" font-medium">Total Fee</p>
          <p className="  font-medium text-2xl ">
            {parseFloat(flightDetails.total_amount) + parseFloat(commissions)}
          </p>
        </div>
      </div>

      {/* <button
        onClick={bookTheFlight}
        className=" w-full bg-primary rounded-xl py-3 text-white mt-5"
      >
        Continue
      </button> */}
    </div>
  );
}
