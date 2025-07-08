import Image from "next/image";
import React from "react";
import { FaRegClock } from "react-icons/fa6";
import { IoMdAirplane } from "react-icons/io";

export default function CardBaggageInfo() {
  return (
    <div className=" mt-5 bg-[#e2e2e2] rounded-md">
      <div className=" flex items-center gap-5 flex-wrap shadow-sm shadow-gray-300 p-5">
        <div className=" flex items-center gap-3">
          <IoMdAirplane className=" text-lg sm:text-2xl rotate-90" />
          <p className=" font-semibold sm:text-base text-sm">
            Jomo Kenyatta Intl to Heathrow
          </p>
        </div>
        <p className=" text-gray-500 sm:text-base text-sm">
          17th Aug 2023 | 36 hrs 5 min
        </p>
        <p className="sm:text-base text-sm">2 stops</p>
      </div>
      <div className=" w-full overflow-x-scroll scrollbar ">
        <table className=" w-full">
          <tbody>
            <tr className=" p-5 shadow-sm ">
              <td className=" p-5 font-semibold">Airline</td>
              <td className=" p-5 font-semibold text-center">Check In</td>
              <td className=" p-5 font-semibold text-right">Cabin Baggage</td>
            </tr>
            <tr>
              <td className=" p-5">
                <div className=" flex items-center gap-3">
                  <div className=" h-[72px] w-[72px]">
                    <Image
                      src="/saudi-airline.gif"
                      width={500}
                      height={500}
                      alt="Picture of the logo"
                      className=" h-full w-full object-cover"
                    />
                  </div>
                  <div>
                    <p className=" font-semibold">Indigo</p>
                    <p className=" font-medium text-sm mt-1">6E -1854</p>
                    <p className=" text-sm mt-1 text-primary">6h 15m</p>
                  </div>
                </div>
              </td>
              <td className=" p-5 text-center">
                <p>
                  Adult : <span className=" font-semibold">2 PCS</span>
                </p>
              </td>
              <td className=" p-5 text-right">
                <p>
                  Adult : <span className=" font-semibold">7 KGS</span>
                </p>
              </td>
            </tr>
            <tr>
              <td className=" p-5">
                <div className=" flex items-center gap-3">
                  <div className=" h-[72px] w-[72px]">
                    <Image
                      src="/saudi-airline.gif"
                      width={500}
                      height={500}
                      alt="Picture of the logo"
                      className=" h-full w-full object-cover"
                    />
                  </div>
                  <div>
                    <p className=" font-semibold">Indigo</p>
                    <p className=" font-medium text-sm mt-1">6E -1854</p>
                    <p className=" text-sm mt-1 text-primary">6h 15m</p>
                  </div>
                </div>
              </td>
              <td className=" p-5 text-center">
                <p>
                  Adult : <span className=" font-semibold">2 PCS</span>
                </p>
              </td>
              <td className=" p-5 text-right">
                <p>
                  Adult : <span className=" font-semibold">7 KGS</span>
                </p>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
