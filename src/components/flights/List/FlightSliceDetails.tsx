import { TravelDuration } from "@/utils/dateFormate";
import { getName } from "country-list";
import Image from "next/image";
import React from "react";
import { BiSolidPlaneAlt } from "react-icons/bi";
import { FaRegClock } from "react-icons/fa6";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import { IoAirplaneSharp, IoClose } from "react-icons/io5";

export default function FlightSliceDetails({
  slice,
  DepartureTime,
  flight,
}: any) {
  return (
    <div>
      {slice.segments.map((segment: any, index: number) => {
        return (
          <div key={index}>
            <div className=" mt-5 w-full grid grid-cols-5 gap-5 items-center">
              <div className=" col-span-5 sm:col-span-3 rounded-xl bg-secoundery p-3">
                <div className=" grid grid-cols-10">
                  <p className=" col-span-4">
                    {DepartureTime(new Date(segment.departing_at))}
                  </p>
                  <div className=" flex items-center">
                    <div className=" h-4 w-4 rounded-full border-[4px] border-primary"></div>
                  </div>
                  <div className=" col-span-5">
                    <p className=" font-medium">{segment.origin.city_name}</p>
                    <p className=" text-sm">
                      {getName(segment.origin.iata_country_code)} (
                      {segment.origin.iata_code})
                    </p>
                  </div>
                </div>
                <div className=" h-28 grid grid-cols-10">
                  <div className=" col-span-4"></div>
                  <div className=" col-span-1 pl-2">
                    <div className=" w-[1px] h-full bg-primary"></div>
                  </div>
                  <div className=" col-span-5 flex items-center">
                    <div className=" flex items-center gap-2">
                      <IoAirplaneSharp className=" text-gray-400" />
                      <p>
                        {TravelDuration(
                          segment.arriving_at,
                          segment.departing_at
                        )}
                      </p>
                    </div>
                  </div>
                </div>
                <div className=" grid grid-cols-10">
                  <p className=" col-span-4">
                    {DepartureTime(new Date(segment.arriving_at))}
                  </p>
                  <div className=" flex items-center">
                    <div className=" h-4 w-4 rounded-full border-[4px] border-primary"></div>
                  </div>
                  <div className=" col-span-5">
                    <p className=" font-medium">
                      {segment.destination.city_name}
                    </p>
                    <p className=" text-sm">
                      {getName(segment.destination.iata_country_code)} (
                      {segment.destination.iata_code})
                    </p>
                  </div>
                </div>
              </div>
              <div className=" col-span-5 sm:col-span-2 rounded-xl bg-secoundery p-3 h-full">
                <div className=" flex items-center gap-5">
                  <div className=" w-8 h-8 rounded-full">
                    {segment.marketing_carrier.logo_symbol_url && (
                      <Image
                        src={segment.marketing_carrier.logo_symbol_url}
                        width={500}
                        height={500}
                        alt="Picture of the logo"
                        className=" w-full h-full object-cover"
                      />
                    )}
                  </div>
                  <p className=" font-medium text-xl">
                    {segment.marketing_carrier.name}
                  </p>
                </div>
                {segment.passengers[0]?.baggages[0] ? (
                  <div className=" flex items-center gap-1 mt-3">
                    <Image
                      src={"/New/flight-list/flight-component/8kg suitcase.png"}
                      alt=""
                      height={500}
                      width={500}
                      className=" w-7"
                    />
                    <p className=" text-green-500">Carry-on baggage 1*10 kg</p>
                  </div>
                ) : (
                  <div className=" flex items-center gap-1 mt-3">
                    <div className="relative">
                      <Image
                        src={
                          "/New/flight-list/flight-component/8kg suitcase.png"
                        }
                        alt=""
                        height={500}
                        width={500}
                        className=" w-7"
                      />
                      <span className=" absolute h-[1px] w-8 bg-red-600 top-4 left-0 -rotate-45"></span>
                    </div>
                    <p className=" text-red-500">
                      Carry-on baggage: not included
                    </p>
                  </div>
                )}
                {segment.passengers[0]?.baggages[1] ? (
                  <div className=" flex items-center gap-1 mt-1">
                    <Image
                      src={
                        "/New/flight-list/flight-component/20kg suitcase.png"
                      }
                      alt=""
                      height={500}
                      width={500}
                      className=" w-7"
                    />
                    <p className=" text-green-500">Luggage 1*20 kg</p>
                  </div>
                ) : (
                  <div className=" flex items-center gap-1 mt-1">
                    <div className="relative">
                      <Image
                        src={
                          "/New/flight-list/flight-component/20kg suitcase.png"
                        }
                        alt=""
                        height={500}
                        width={500}
                        className=" w-7"
                      />
                      <span className=" absolute h-[1px] w-8 bg-red-600 top-4 left-0 -rotate-45"></span>
                    </div>
                    <p className=" text-red-500">Luggage: not included</p>
                  </div>
                )}
                {segment.aircraft?.iata_code && segment.aircraft?.name && (
                  <div className=" flex gap-3 items-center mt-2 ">
                    <BiSolidPlaneAlt className=" text-gray-500 text-xl" />
                    <p>
                      <span className="">
                        {segment.aircraft.iata_code} {segment.aircraft.name}
                      </span>
                    </p>
                  </div>
                )}
                <div className=" flex gap-3 items-center mt-2 ">
                  <IoMdCheckmarkCircleOutline className=" text-gray-500 text-xl" />
                  <p>
                    Class:{" "}
                    <span className=" text-blue-500 capitalize">
                      {segment.passengers[0].cabin_class?.toLowerCase()}
                    </span>{" "}
                  </p>
                </div>
                <div className=" flex gap-3 items-center mt-2  ">
                  {/* {flight.conditions?.refund_before_departure?.allowed ? (
                    <IoMdCheckmarkCircleOutline className=" text-green-500 text-xl" />
                  ) : (
                    <IoClose className=" text-red-500 text-xl" />
                  )} */}
                  {flight.conditions?.refund_before_departure?.allowed ? (
                    <p className=" text-green-500">Refundable</p>
                  ) : (
                    <p className=" text-red-500">Non-Refundable</p>
                  )}
                </div>
              </div>
            </div>
            {index < slice.segments.length - 1 && (
              <div className=" w-full border rounded-xl p-3 my-5">
                <div className=" flex gap-3">
                  <FaRegClock className=" mt-1" />
                  <div>
                    <p>
                      Transfer in {segment.destination.city_name} (
                      {segment.destination.iata_city_code})
                    </p>
                    <p className=" text-red-500 font-medium">
                      {TravelDuration(
                        segment.arriving_at,
                        segment.departing_at
                      )}
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
