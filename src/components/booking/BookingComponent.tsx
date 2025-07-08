"use client";

import {
  formatDate,
  formatDate2,
  formatDateShort,
  FormatTime,
  TravelDuration,
} from "@/utils/dateFormate";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";

export default function BookingComponent({ booking }: any) {
  const [expended, setExpended] = useState(false);
  const [passengers, setPassengers] = useState("");

  useEffect(() => {
    if (booking) {
      let adults = 0;
      let infant = 0;
      booking.bookingDetails.passengers.forEach(
        (passenger: any, index: number) => {
          if (passenger.type === "adult") {
            adults += 1;
          }
          if (passenger.type !== "adult") {
            infant += 1;
          }

          let passengerString = `${adults} Adults`;
          if (infant) {
            passengerString += ` ${infant} infant`;
          }
          setPassengers(passengerString);
        }
      );
    }
  }, [booking]);
  console.log(booking);
  return (
    <div className=" w-full bg-white shadow-lg rounded-xl mt-5">
      <div className=" px-5 py-2 bg-primary text-white grid lg:grid-cols-3 gap-3 rounded-t-xl">
        <div className=" flex items-center gap-3">
          <div className=" w-20 h-16 bg-white rounded-lg flex items-center justify-center">
            {booking.bookingDetails.owner.logo_symbol_url && (
              <Image
                src={booking.bookingDetails.owner.logo_symbol_url}
                width={500}
                height={500}
                alt="Picture of airline"
                className=" h-full w-full object-cover rounded-lg"
              />
            )}
          </div>
          <p className=" font-medium text-sm ">
            {booking.bookingDetails.owner.name}
          </p>
        </div>
        <div className=" text-sm lg:text-center leading-6">
          <p>
            Ticket Status :
            {booking.ticketStatus === "pending" && (
              <span className=" text-yellow-300"> Pending</span>
            )}
            {booking.ticketStatus === "success" && (
              <span className=" text-green-900 font-semibold"> Success</span>
            )}
            {booking.ticketStatus === "canceled" && (
              <span className=" text-red-600 font-medium"> Canceled</span>
            )}
          </p>
          <p>Booking ID : {booking._id}</p>
          {/* <p>Last Ticketing Date : 17-02-2024 15:15</p> */}
        </div>
        <div className=" flex items-end flex-col">
          <div className=" flex flex-col  items-center gap-3 lg:justify-end">
            <p>{booking.payment.totalAmount} USD</p>
            <div className=" flex items-center gap-3">
              <button className=" bg-gray-100 py-1 px-2 rounded-md text-sm text-red-500 capitalize">
                {booking.payment.status}
              </button>
              {booking.payment.status === "pending" && (
                <Link
                  href={booking.payment.paymentLink}
                  className=" block w-[80px] bg-gray-100 py-1 px-2 rounded-md text-sm text-gray-800"
                >
                  Pay Now
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>
      <div className=" w-full grid lg:grid-cols-3 p-5">
        <div className=" border-b lg:border-b-0 lg:border-r border-primary text-sm leading-7 pb-5 lg:pb-0">
          <p className=" font-semibold">
            Lead Passenger :{" "}
            <span className=" text-primary font-light">
              {" "}
              {`${booking.leadPassenger.gender === "male" ? "Mr" : "Mrs"} ${
                booking.leadPassenger.firstName
              } ${booking.leadPassenger.lastName}`}
              {/* Mr Shohel Mia */}
            </span>
          </p>
          <p className=" font-semibold">
            Booked On :{" "}
            <span className=" text-gray-500 font-light">
              {formatDate2(new Date(booking.createdAt))},{" "}
              {FormatTime(new Date(booking.createdAt))}
            </span>
          </p>
          <p className=" font-semibold">
            Flight Date :{" "}
            <span className=" text-gray-500 font-light">
              {formatDate2(
                new Date(
                  booking.bookingDetails.slices[0].segments[0].departing_at
                )
              )}
              ,{" "}
              {FormatTime(
                new Date(
                  booking.bookingDetails.slices[0].segments[0].departing_at
                )
              )}
            </span>
          </p>
          <p className=" font-semibold">
            Trip Type :{" "}
            <span className=" text-gray-500 font-light">
              {booking.bookingDetails.slices.length === 1 && "Oneway"}
              {booking.bookingDetails.slices.length === 2 && "Round Trip"}
            </span>
          </p>
        </div>
        <div className=" border-b lg:border-b-0 lg:border-r border-primary text-sm leading-7 lg:px-5 py-5 lg:py-0">
          <p className=" lg:text-center text-sm font-light text-gray-500">
            {booking.bookingDetails.owner.name} |{" "}
            {booking.bookingDetails.owner.iata_code}
          </p>
          {booking.bookingDetails.slices.map((slice: any, index: number) => {
            return (
              <div
                className=" flex items-center justify-between mt-5"
                key={index}
              >
                <p className=" font-semibold text-sm text-gray-800">
                  {slice.origin.city_name}
                </p>
                <div className=" flex flex-col items-center gap-1">
                  <p className=" text-xs font-light text-gray-400">
                    {" "}
                    {TravelDuration(
                      slice.segments[slice.segments.length - 1].arriving_at,
                      slice.segments[0].departing_at
                    )}
                    {/* 45 munite */}
                  </p>
                  <div className=" w-[100px] h-[1px] relative bg-primary">
                    <div className=" absolute top-0 right-0 h-[1px] w-[10px] rotate-45 bg-primary translate-x-[1px] -translate-y-[4px]"></div>
                  </div>
                  <p className=" text-xs font-light text-gray-400">
                    {slice.segments.length - 1} stop
                  </p>
                </div>
                <p className=" font-semibold text-sm text-gray-800">
                  {slice.destination.city_name}
                </p>
              </div>
            );
          })}
          <p className=" lg:text-center font-semibold text-gray-800 mt-2">
            Passenger : <span className=" font-normal">{passengers}</span>
          </p>
        </div>
        <div className=" lg:px-5 pt-5 lg:pt-0 ">
          <div className=" flex justify-between items-center text-sm">
            <p className=" text-gray-800 font-semibold">Aircraft Code :</p>
            <p className=" text-gray-700">
              {booking.bookingDetails.slices[0].segments[0].aircraft.iata_code}
            </p>
          </div>
          <div className=" flex justify-between items-center text-sm mt-2">
            <p className=" text-gray-800 font-semibold">Aircraft Name: </p>
            <p className=" text-gray-700">
              {booking.bookingDetails.slices[0].segments[0].aircraft.name}
            </p>
          </div>
          <div className=" flex justify-between items-center text-sm mt-2">
            <p className=" text-gray-800 font-semibold">Tickets No :</p>
            <p className=" text-gray-700">______</p>
          </div>
          <div className=" flex justify-between items-center text-sm mt-2">
            <p className=" text-gray-800 font-semibold">Flight No :</p>
            <p className=" text-gray-700">
              {
                booking.bookingDetails.slices[0].segments[0]
                  .operating_carrier_flight_number
              }
            </p>
          </div>
        </div>
      </div>
      <div className=" flex justify-end px-5 pb-5">
        <button
          onClick={() => setExpended(!expended)}
          className=" text-primary text-sm font-semibold hover:text-gray-800 transition-all duration-150 ease-linear"
        >
          {expended ? "Hide Details" : "View Details"}
        </button>
      </div>
      <div
        className={`${
          expended ? " max-h-[1800px]" : "max-h-0 overflow-hidden"
        } transition-all duration-300 ease-in-out`}
      >
        <div
          className={` p-5 border-t transition-all duration-150 ease-linear `}
        >
          <div className=" pb-3 border-b border-gray-300 w-full max-w-[600px]">
            <p>Passenger Name</p>
            <p className=" text-gray-500 mt-2">Mr Shohel Mia</p>
          </div>
          <div className=" mt-3 pb-3 border-b border-gray-300 w-full max-w-[600px]">
            <div className=" flex justify-between items-center text-sm">
              <p className=" text-gray-800 font-semibold">Aircraft Code :</p>
              <p className=" text-gray-700">
                {
                  booking.bookingDetails.slices[0].segments[0].aircraft
                    .iata_code
                }
              </p>
            </div>
            <div className=" flex justify-between items-center text-sm mt-2">
              <p className=" text-gray-800 font-semibold">Aircraft Name: </p>
              <p className=" text-gray-700">
                {booking.bookingDetails.slices[0].segments[0].aircraft.name}
              </p>
            </div>
            <div className=" flex justify-between items-center text-sm mt-2">
              <p className=" text-gray-800 font-semibold">Tickets No :</p>
              <p className=" text-gray-700">______</p>
            </div>
            <div className=" flex justify-between items-center text-sm mt-2">
              <p className=" text-gray-800 font-semibold">Flight No :</p>
              <p className=" text-gray-700">
                {
                  booking.bookingDetails.slices[0].segments[0]
                    .operating_carrier_flight_number
                }
              </p>
            </div>
          </div>
        </div>
        <div className=" p-5">
          <p className=" text-sm">Flight summary</p>
          {booking.bookingDetails.slices.map((slice: any, index: number) => {
            return (
              <div key={index} className=" w-full border mt-2 p-3 text-sm">
                <p>
                  {formatDateShort(new Date(slice.segments[0].departing_at))}
                  {/* February 17th, 2024{" "} */}
                  <span className=" font-medium">
                    {" "}
                    ({slice.origin.city_name} - {slice.destination.city_name})
                  </span>
                </p>
                <div className=" flex items-center justify-between gap-5 flex-wrap  mt-5">
                  <div className="">
                    <div className=" w-14 h-14 rounded-full flex items-center justify-center">
                      {slice.segments[0].operating_carrier.logo_symbol_url && (
                        <Image
                          src={
                            slice.segments[0].operating_carrier.logo_symbol_url
                          }
                          width={500}
                          height={500}
                          alt="Picture of airline"
                          className=" h-full w-full object-cover"
                        />
                      )}
                    </div>
                    <p className=" text-xs font-light text-gray-400 ">
                      {slice.segments[0].operating_carrier.name}
                    </p>
                  </div>
                  <div className=" leading-6">
                    <p className=" text-sm text-gray-500">Depart</p>
                    {FormatTime(new Date(slice.segments[0].departing_at))}
                    <p className=" text-gray-800">
                      {slice.segments[0].origin.city_name}
                    </p>
                  </div>
                  <div className=" flex flex-col items-center gap-1">
                    <p className=" text-xs font-light text-gray-400">
                      {" "}
                      {TravelDuration(
                        slice.segments[slice.segments.length - 1].arriving_at,
                        slice.segments[0].departing_at
                      )}
                    </p>
                    <div className=" w-[100px] h-[1px] relative bg-primary">
                      <div className=" absolute top-0 right-0 h-[1px] w-[10px] rotate-45 bg-primary translate-x-[1px] -translate-y-[4px]"></div>
                    </div>
                    <p className=" text-xs font-light text-gray-400">
                      {slice.segments.length - 1} stop
                    </p>
                  </div>

                  <div className=" leading-6">
                    <p className=" text-sm text-gray-500">Arival</p>
                    <p className=" text-gray-800">
                      {" "}
                      {FormatTime(
                        new Date(
                          slice.segments[slice.segments.length - 1].arriving_at
                        )
                      )}
                      {/* 19:40 */}
                    </p>
                    <p className=" text-gray-800">
                      {" "}
                      {
                        slice.segments[slice.segments.length - 1].destination
                          .city_name
                      }
                    </p>
                  </div>
                  <div className=" leading-6">
                    <p className=" text-sm text-gray-500">Total Price</p>
                    <p className=" text-gray-800">
                      {booking.payment.totalAmount} USD (including all fees)
                    </p>
                  </div>
                </div>
                <p className=" font-semibold text-primary mt-5">
                  Itinerary Details
                </p>
                <div className=" mt-5 flex justify-between flex-wrap gap-5">
                  <div className="">
                    <p className=" text-xs text-gray-700">Flight</p>
                    <p className=" text-xs font-light text-gray-700 mt-1">
                      {slice.segments[0].operating_carrier.name}
                    </p>
                    <p className=" text-sm font-semibold text-gray-900 mt-1">
                      {slice.segments[0].operating_carrier.iata_code}
                    </p>
                    <p className=" text-xs font-light text-gray-700 mt-1">
                      {
                        slice.segments[0].passengers[0]
                          .cabin_class_marketing_name
                      }{" "}
                      Class
                    </p>
                    <p className=" text-xs font-semibold text-gray-600 mt-1">
                      Aircraft - {slice.segments[0].aircraft.name}
                    </p>
                  </div>
                  <div className="">
                    <p className=" text-xs text-gray-700">Departure</p>
                    <p className=" text-xs font-light text-gray-700 mt-1">
                      {slice.origin.iata_code}
                    </p>
                    <p className=" text-xs font-light text-gray-700 mt-1">
                      ({slice.origin.name})
                    </p>
                    <p className=" text-xs font-light text-gray-700 mt-1">
                      Terminal -{slice.segments[0].origin_terminal}
                    </p>

                    <p className=" text-xs font-semibold text-gray-600 mt-1">
                      {formatDate(slice.segments[0].departing_at)}
                    </p>
                  </div>
                  <div className="">
                    <p className=" text-xs text-gray-700">Arival</p>
                    <p className=" text-xs font-light text-gray-700 mt-1">
                      {slice.destination.iata_code}
                    </p>
                    <p className=" text-xs font-light text-gray-700 mt-1">
                      ({slice.destination.name})
                    </p>
                    <p className=" text-xs font-light text-gray-700 mt-1">
                      Terminal -
                      {
                        slice.segments[slice.segments.length - 1]
                          .destination_terminal
                      }
                    </p>

                    <p className=" text-xs font-semibold text-gray-600 mt-1">
                      {formatDate(
                        slice.segments[slice.segments.length - 1].arriving_at
                      )}
                    </p>
                  </div>
                  <div className="">
                    <p className=" text-xs text-gray-700">Status</p>
                    <p className=" text-yellow-400 font-medium text-sm mt-1">
                      {booking.payment.status}
                    </p>
                    <p className=" text-sm font-light text-gray-700 mt-1">
                      CheckIn Baggage :{" "}
                      <span className=" font-medium">20 Kg(s)</span>
                    </p>
                    <p className=" text-xs font-light text-gray-700 mt-1">
                      Cabin Baggage :{" "}
                      <span className=" font-medium">7 Kg(s)</span>
                    </p>

                    <p className=" text-sm font-semibold text-gray-900 mt-1">
                      Duration:{" "}
                      {TravelDuration(
                        slice.segments[slice.segments.length - 1].arriving_at,
                        slice.segments[0].departing_at
                      )}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
