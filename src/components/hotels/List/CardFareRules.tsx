import Image from "next/image";
import React, { useState } from "react";
import { FaRegClock } from "react-icons/fa6";
import { IoIosInformationCircleOutline, IoMdAirplane } from "react-icons/io";

export default function CardFareRules() {
  const [showRules, setShowRules] = useState("nbo");
  return (
    <div className=" mt-5 bg-[#e2e2e2] rounded-md">
      <div className=" flex items-center flex-wrap gap-5 sm:gap-10 shadow-sm shadow-gray-300 p-5">
        <div
          onClick={() => setShowRules("nbo")}
          className={` p-3 cursor-pointer flex items-center gap-3 border-2 ${
            showRules === "nbo"
              ? "border-primary text-primary"
              : "border-gray-700"
          }`}
        >
          <p className=" ">NBO</p>
          <IoMdAirplane className="  text-2xl rotate-90" />
          <p className=" ">FAR</p>
        </div>
        <div
          onClick={() => setShowRules("far")}
          className={` p-3 cursor-pointer flex items-center gap-3 border-2 ${
            showRules === "far"
              ? "border-primary text-primary"
              : "border-gray-700"
          }`}
        >
          <p className=" ">FAR</p>
          <IoMdAirplane className="  text-2xl rotate-90" />
          <p className=" ">NBO</p>
        </div>
      </div>
      <div className=" p-5">
        <div className=" flex items-center gap-3">
          <IoIosInformationCircleOutline className=" text-2xl" />
          <p>Fare rules:</p>
          <div className=" flex items-center gap-3">
            <p>NBO</p>
            <IoMdAirplane className="  text-2xl rotate-90" />
            <p>FRA</p>
          </div>
        </div>
        <div className=" w-full bg-gray-300 rounded py-2 px-4 mt-3">
          <p className=" font-semibold">Other Terms</p>
        </div>
        <div className=" mt-5">
          <p className=" text-sm">
            * The below Fare Rules are just a guideline for your convenience and
            is subject to changes by the Airline from time to time. Although we
            will try to keep this section updated regularly, Via undertakes no
            liability for loss that you may suffer due to incorrect
            information.*
          </p>
          <div className=" w-full overflow-x-scroll scrollbar">
            <table className=" w-full mt-5 text-sm">
              <tbody>
                <tr>
                  <td className=" font-semibold">Fare</td>
                  <td className=" font-semibold">Type</td>
                  <td className=" font-semibold">Cancelation</td>
                  <td className=" font-semibold">Reshedule</td>
                </tr>
                <tr>
                  <td className=" font-semibold">Before</td>
                  <td>Departure</td>
                  <td>USD 240</td>
                  <td>USD 120</td>
                </tr>
                <tr>
                  <td className=" font-semibold">After</td>
                  <td>Departure</td>
                  <td>Non refundable</td>
                  <td>USD 120</td>
                </tr>
                <tr>
                  <td className=" font-semibold">No Show</td>
                  <td></td>
                  <td className=" font-semibold">Non refundable</td>
                  <td className=" font-semibold">Non refundable</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className=" mt-5 text-sm">
            You are requested to consult consulate/airlines to check the visa
            requirement for your travel. Ogg.com will not be responsible for any
            visa related information/ issues. In addition to Airline Charges,
            Oggo.com charges a service fee of Rs. 100 per ticket/passenger for
            all cancellations, which will be reversed as reward points In
            addition to Airline Charges, Oggo.com charges a service fee of Rs.
            100 per ticket/passenger for all rescheduling.
          </p>
        </div>
      </div>
    </div>
  );
}
