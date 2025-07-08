import { formatDate, TravelDuration } from "@/utils/dateFormate";
import React, { useState } from "react";
import { IoIosAirplane, IoIosArrowDown } from "react-icons/io";

export default function SmallerDeviceFlightDetails({ flightDetails }: any) {
  const [isExpanded, setIsExpanded] = useState(false);
  const toggleExpanded = () => {
    setIsExpanded(!isExpanded);
  };
  return (
    <div className=" my-5 bg-[#F8F9FE] p-5 rounded-md">
      <div className=" flex items-center justify-between">
        <p className=" font-semibold ">Flight Details</p>
        <div>
          <IoIosArrowDown
            className={`${
              isExpanded ? " rotate-180" : " rotate-0"
            } transition-all duration-150 ease-linear text-xl cursor-pointer `}
            onClick={toggleExpanded}
          />
        </div>
      </div>
      {isExpanded &&
        flightDetails.slices.map((slice: any, index: number) => (
          <div className="" key={index}>
            {slice.segments.map((segment: any, ind: number) => (
              <div key={ind} className="">
                <div className={` flex items-center gap-2 my-5 `}>
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

                <div className={`flex justify-between`}>
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
  );
}
