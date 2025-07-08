import { TravelDuration } from "@/utils/dateFormate";
import React, { useState } from "react";
import { IoIosAirplane, IoIosArrowUp } from "react-icons/io";

export default function OrderSummery({ bookingDetails }: any) {
  const [flightDetailsExpanded, setFlightDetailsExpanded] = useState(true);
  const [airTicketExpanded, setAirTicketExpanded] = useState(true);
  const [additionalServicesExpanded, setAdditionalServicesExpanded] =
    useState(true);
  const [pricesExpanded, setpricesExpanded] = useState(true);

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

  const toggleAirTicket = () => {
    setAirTicketExpanded(!airTicketExpanded);
  };

  const toggleAdditionalServices = () => {
    setAdditionalServicesExpanded(!additionalServicesExpanded);
  };

  const getPassengerSummary = (passengers: any) => {
    let adults = 0;
    let children = 0;
    let infants = 0;

    // Iterate through each passenger object and count based on type
    passengers.forEach((passenger: any) => {
      if (passenger.type === "adult" || passenger.type === "adult") {
        adults += 1;
      } else if (passenger.type === "children") {
        children += 1;
      } else if (passenger.type === "infant") {
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
  return (
    <div className=" w-full">
      <div className=" w-full rounded-xl p-5 bg-[#F8F9FE] border relative">
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

        <div className={`${flightDetailsExpanded ? "block" : "hidden"} `}>
          {bookingDetails.bookingDetails.slices.map(
            (slice: any, index: number) => (
              <div className=" mt-5" key={index}>
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
            )
          )}
        </div>

        <div className=" mt-3 flex items-center gap-2 border-b pb-2">
          {bookingDetails.bookingDetails.passengers.length > 1 && (
            <p className=" font-medium">
              {bookingDetails.bookingDetails.passengers.length} Passengers
            </p>
          )}

          {bookingDetails.bookingDetails.passengers.length === 1 && (
            <p className=" font-medium">1 Passenger</p>
          )}
        </div>
        <div className=" font-medium flex items-center justify-between mt-3">
          <p>Hand luggage 10kg</p>
          <p className="">25*35*55cm</p>
        </div>
      </div>

      {/* <div className=" w-full rounded-xl p-5 bg-[#F8F9FE] relative mt-5">
        <div className=" flex items-center justify-between">
          <p className=" font-medium text-xl">Additional services</p>
          <IoIosArrowUp
            className={`${
              additionalServicesExpanded ? "" : "rotate-180"
            } cursor-pointer transition-all duration-150 ease-linear`}
            onClick={toggleAdditionalServices}
          />
        </div>

        <div className={`${additionalServicesExpanded ? "block" : "hidden"}`}>
          {bookingDetails.payment.selectedAdditionalServices.map(
            (service: any, index: number) => (
              <div
                key={index}
                className={` mt-2 flex items-center justify-between font-medium ${
                  index === 0 ? "mt-5" : "mt-2"
                }`}
              >
                <p>
                  {service.name.length > 20
                    ? service.name.slice(0, 20) + "..."
                    : service.name}
                </p>
                <p>1 * {service.charge} $</p>
              </div>
            )
          )}
        </div>
      </div> */}

      {/* <div className=" w-full rounded-xl p-5 bg-[#F8F9FE] relative mt-5">
        <div className=" font-medium flex items-center justify-between">
          <p className="">
            {getPassengerSummary(bookingDetails.bookingDetails.passengers)}
          </p>
          <p className="">$ {bookingDetails.payment.totalAmount}</p>
        </div>
        <div className=" flex items-center justify-between mt-3">
          <p className=" text-sm">Return Flight Package Service Fee</p>
          <p className="">$ $0.00</p>
        </div>
        <div className=" flex items-center justify-between mt-5">
          <p className=" font-medium">Total Fee</p>
          <p className="  font-medium text-2xl ">
            $ {bookingDetails.payment.totalAmount}
          </p>
        </div>
      </div> */}
      <div className=" w-full rounded-xl p-5 bg-[#F8F9FE] relative mt-5">
        <div className=" flex items-center justify-between">
          <p className=" font-medium text-xl">Prices</p>
          <IoIosArrowUp
            className={`${
              pricesExpanded ? "" : "rotate-180"
            } cursor-pointer transition-all duration-150 ease-linear`}
            onClick={() => setpricesExpanded(!pricesExpanded)}
          />
        </div>
        {pricesExpanded && (
          <div className=" mt-5">
            <div className=" font-medium flex items-center justify-between">
              <p className="">
                {getPassengerSummary(bookingDetails.bookingDetails.passengers)}
              </p>
              <p className="">
                {bookingDetails.bookingDetails.total_amount} ${" "}
              </p>
            </div>
            <div className=" flex items-center justify-between mt-3">
              <p className="">Service Fee</p>
              <p className="">{bookingDetails.payment.comissionAmount} $ </p>
            </div>
            <div>
              {bookingDetails.payment.selectedAdditionalServices.map(
                (service: any, index: number) => (
                  <div
                    key={index}
                    className={` mt-2 flex items-center justify-between`}
                  >
                    <p>
                      {service.name.length > 20
                        ? service.name.slice(0, 20) + "..."
                        : service.name}
                    </p>
                    <p>1 * {service.charge} $</p>
                  </div>
                )
              )}
            </div>
          </div>
        )}
        <div className=" flex items-center justify-between mt-3">
          <p className=" font-medium">Total Fee</p>
          <p className="  font-medium text-2xl ">
            {bookingDetails.payment.totalAmount} $
          </p>
        </div>
      </div>
    </div>
  );
}
