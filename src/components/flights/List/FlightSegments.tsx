import {
  formatDateLong,
  FormatTime,
  formatTo12HourTime,
  TravelDuration,
} from "@/utils/dateFormate";
import Image from "next/image";
import React from "react";
import { IoIosAirplane } from "react-icons/io";

export default function FlightSegments({ flight }: any) {
  const formatRule = (rule: any, option: string) => {
    if (!rule) return "Non " + option;

    if (rule.allowed) {
      return rule.penalty_amount
        ? `${rule.penalty_currency} ${rule.penalty_amount}`
        : option + " no penalty";
    }

    return "Non " + option;
  };

  return (
    <div className="w-full col-span-2 ">
      {flight &&
        flight.slices.map((slice: any, index: number) => {
          return (
            <div key={index} className={`w-full my-5`}>
              <div
                className={` w-full grid grid-cols-10 gap-8 sm:gap-0 items-center`}
              >
                <div className=" col-span-10 sm:col-span-2 text-center">
                  <p className=" font-semibold text-2xl ">
                    {formatTo12HourTime(
                      new Date(slice.segments[0].departing_at)
                    )}
                  </p>
                  <p className=" text-gray-500 text-sm mt-1">
                    {slice.origin.city_name}
                  </p>
                </div>
                <div className=" col-span-10 sm:col-span-6 w-full">
                  <div className=" flex items-center gap-2">
                    <p className=" text-blue-500">{slice.origin.iata_code}</p>
                    <div className=" group cursor-pointer hover:bg-opacity-100 flex justify-between w-full h-[4px] border-b-[3px] border-dashed rounded-md my-2 relative">
                      <div className=" h-[5px] w-[5px] rounded-full bg-blue-500"></div>
                      <IoIosAirplane className=" text-primary text-2xl -translate-y-[9px]" />
                      <div className=" h-[5px] w-[5px] rounded-full bg-blue-500"></div>
                    </div>
                    <p className=" text-blue-500">
                      {slice.destination.iata_code}
                    </p>
                  </div>
                  <div className=" w-full">
                    <div className=" flex justify-between text-sm">
                      <div className=" w-full flex items-center justify-center gap-2">
                        <p className=" text-sm text-gray-500">
                          {TravelDuration(
                            slice.segments[slice.segments.length - 1]
                              .arriving_at,
                            slice.segments[0].departing_at
                          )}
                        </p>
                        <span>.</span>
                        <div className=" group relative text-gray-500">
                          {slice.segments.length === 1 && "direct"}{" "}
                          {slice.segments.length === 2 && "1 transfer"}{" "}
                          {slice.segments.length > 2 &&
                            `${slice.segments.length - 1} transfers`}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className=" col-span-10 sm:col-span-2 flex justify-center sm:justify-end">
                  <div className=" text-center">
                    <p className=" font-semibold text-2xl ">
                      {formatTo12HourTime(
                        new Date(
                          slice.segments[slice.segments.length - 1].arriving_at
                        )
                      )}
                    </p>
                    <p className=" text-gray-500 text-sm mt-1">
                      {slice.destination.city_name}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
    </div>
  );
}
