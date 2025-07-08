"use client";

import React, { useState } from "react";
import FlightSegments from "./FlightSegments";
import Image from "next/image";
import { PiBagSimple } from "react-icons/pi";
import { useRouter, useSearchParams } from "next/navigation";
import FlightDetails from "./FlightDetails";

export default function FlightCardComponent({ flight }: any) {
  const [showDetails, setShowDetails] = useState(false);
  const router = useRouter();
  const searchParams = useSearchParams();

  const toggleDetails = () => {
    setShowDetails(!showDetails);
  };

  const goToCheckOutPage = () => {
    const flightType = searchParams.get("flightType");
    const adults = searchParams.get("adults");
    const child = searchParams.get("child");
    const infant = searchParams.get("infant");
    const depAirport = searchParams.get("depAirport");
    const arrAirport = searchParams.get("arrAirport");
    const depDate = searchParams.get("depDate");
    const returnDate = searchParams.get("returnDate");

    const params = new URLSearchParams(searchParams.toString());

    if (
      flightType &&
      adults &&
      child &&
      infant &&
      depAirport &&
      arrAirport &&
      depDate
    ) {
      params.set("flightType", flightType);
      params.set("adults", adults);
      params.set("child", child);
      params.set("infant", infant);
      params.set("depAirport", depAirport);
      params.set("arrAirport", arrAirport);
      params.set("depDate", depDate);
    }

    if (returnDate && flightType && flightType === "round-trip") {
      params.set("returnDate", returnDate);
    }

    router.push(`/flight/checkout?id=${flight.id}&${params.toString()}`);
  };

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
    <div className=" mt-5 w-full ">
      {flight && (
        <div className="bg-[#F8F9FE] rounded-2xl p-5">
          <div className={`grid grid-cols-1 sm:grid-cols-3`}>
            <div className="flex items-center gap-5 sm:border-r-2">
              {flight.slices[0].segments[0].operating_carrier
                .logo_symbol_url && (
                <div className=" h-12 w-12 rounded-lg bg-gray-200 overflow-hidden mt-1 p-3">
                  <Image
                    src={flight.owner.logo_symbol_url}
                    width={500}
                    height={500}
                    alt="Picture of the logo"
                    className=" h-full w-full object-cover"
                  />
                </div>
              )}
              <div>
                <p className=" font-semibold text-lg">{flight.owner.name}</p>
                <p className="">{flight.owner.iata_code}</p>
              </div>
            </div>
            <FlightSegments flight={flight} />
          </div>
          <div className=" flex items-end justify-end gap-3 mt-5">
            <p className=" font-semibold text-2xl sm:text-3xl">
              ${flight.total_amount}
            </p>
            <button
              onClick={goToCheckOutPage}
              className=" bg-primary px-5 py-2 rounded-lg text-white"
            >
              Select
            </button>
          </div>
          {!showDetails ? (
            <div className=" mt-5">
              <hr className=" bg-gray-100 h-[2px]" />
              <div className="flex justify-between items-center mt-3">
                <div>
                  <div className=" text-sm sm:text-base text-gray-500 flex items-center gap-2">
                    <span>Facilities:</span>
                    <div className=" flex items-center gap-[4px]">
                      <PiBagSimple />
                      <span>
                        {
                          flight.slices[0].segments[0].passengers[0].baggages
                            .length
                        }
                      </span>
                      <span>Baggage</span>
                    </div>
                  </div>
                </div>
                <div className=" flex items-end justify-end gap-3">
                  <p
                    onClick={toggleDetails}
                    className=" text-sm sm:text-xl cursor-pointer"
                  >
                    View Details
                  </p>
                </div>
              </div>
            </div>
          ) : (
            <FlightDetails toggleDetails={toggleDetails} flight={flight} />
          )}
        </div>
      )}
    </div>
  );
}
