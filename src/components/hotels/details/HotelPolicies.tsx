"use client";

import { getFormattedTimeWithAmPm } from "@/utils/dateFormate";
import Image from "next/image";
import React from "react";

export default function HotelPolicies({ hotelDetailsData }: any) {
  return (
    <div className=" w-full mt-20" id="Policies">
      <p className=" font-bold text-2xl">Property Policy</p>
      <div className=" w-full grid grid-cols-6 mt-10 items-center">
        <div className=" col-span-6 sm:col-span-2">
          <p className=" font-medium text-lg">Check-in Conditions</p>
        </div>
        <div className=" col-span-6 sm:col-span-4 flex items-center gap-3">
          <div className=" px-5 py-2 rounded-2xl flex items-center gap-2 border border-blue-300">
            <Image
              src="/New/hotel/details/clock-icon 1.png"
              width={300}
              height={300}
              alt="Picture of the hotel"
              className="w-[52px]"
            />
            <div>
              <p className=" font-semibold">Check-In Time</p>
              <p className=" text-sm text-gray-500">
                After{" "}
                {getFormattedTimeWithAmPm(
                  hotelDetailsData.accommodation.check_in_information
                    .check_in_after_time
                )}
              </p>
            </div>
          </div>
          <div className=" px-5 py-2 rounded-2xl flex items-center gap-2 border border-blue-300">
            <Image
              src="/New/hotel/details/clock-icon 1.png"
              width={300}
              height={300}
              alt="Picture of the hotel"
              className="w-[52px]"
            />
            <div>
              <p className=" font-semibold">Check-out Time</p>
              <p className=" text-sm text-gray-500">
                Until{" "}
                {getFormattedTimeWithAmPm(
                  hotelDetailsData.accommodation.check_in_information
                    .check_out_before_time
                )}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className=" w-full grid grid-cols-6 mt-5 items-center">
        <div className=" col-span-6 sm:col-span-2">
          <p className=" font-medium text-lg">Cancellation/prepayment</p>
        </div>
        <div className=" col-span-6 sm:col-span-4 flex items-center gap-3">
          <p>
            Cancellation and prepayment policies vary according to accommodation
            type. Please check the conditions that may apply to each option
            before making your selection.
          </p>
        </div>
      </div>
      <div className=" w-full grid grid-cols-6 mt-5 items-center">
        <div className=" col-span-6 sm:col-span-2">
          <p className=" font-medium text-lg">Children and extra beds</p>
        </div>
        <div className=" col-span-6 sm:col-span-4 flex items-center gap-3">
          <ul className=" list-disc pl-5">
            <li>Cribs for young children are provided free of charge.</li>
            <li>
              The maximum number of cribs depends on the room type. Please check
              the maximum capacity of your chosen room.
            </li>
            <li>All cribs and extra beds are subject to availability.</li>
          </ul>
        </div>
      </div>
      <div className=" w-full grid grid-cols-6 mt-5 items-center">
        <div className=" col-span-6 sm:col-span-2">
          <p className=" font-medium text-lg">Pets</p>
        </div>
        <div className=" col-span-6 sm:col-span-4 flex items-center gap-3">
          <p>Pets are allowed for an additional fee.</p>
        </div>
      </div>
      <div className=" w-full grid grid-cols-6 mt-5 items-center">
        <div className=" col-span-6 sm:col-span-2">
          <p className=" font-medium text-lg">No age restrictions</p>
        </div>
        <div className=" col-span-6 sm:col-span-4 flex items-center gap-3">
          <p>There are no age restrictions for check-in.</p>
        </div>
      </div>
      <div className=" w-full grid grid-cols-6 mt-5 items-center">
        <div className=" col-span-6 sm:col-span-2">
          <p className=" font-medium text-lg">Parties</p>
        </div>
        <div className=" col-span-6 sm:col-span-4 flex items-center gap-3">
          <p>Parties/events are not allowed.</p>
        </div>
      </div>
      <div className=" w-full grid grid-cols-6 mt-5 items-center">
        <div className=" col-span-6 sm:col-span-2">
          <p className=" font-medium text-lg">Payment</p>
        </div>
        <div className=" col-span-6 sm:col-span-4 flex items-center gap-3">
          <div className=" px-2 py-1 flex items-center justify-center w-[60px] rounded-md border">
            <Image
              src="/New/footer/VISACard-min.png"
              width={300}
              height={300}
              alt="Picture of the hotel"
              className="w-[46px]"
            />
          </div>
          <div className=" px-2 py-1 flex items-center justify-center w-[60px] rounded-md border">
            <Image
              src="/New/footer/MasterCard.png"
              width={300}
              height={300}
              alt="Picture of the hotel"
              className="w-[44px]"
            />
          </div>
          <div className=" px-2 py-1 flex items-center justify-center w-[60px] rounded-md border">
            <Image
              src="/New/footer/JCB_logo.png"
              width={300}
              height={300}
              alt="Picture of the hotel"
              className=" w-[36px]"
            />
          </div>
          <div className=" px-2 py-1 flex items-center justify-center w-[60px] rounded-md border">
            <Image
              src="/New/footer/unionpay.png"
              width={300}
              height={300}
              alt="Picture of the hotel"
              className=" w-[28px]"
            />
          </div>
          <div className=" px-2 py-1 flex items-center justify-center w-[60px] rounded-md border">
            <Image
              src="/New/footer/american-express.png"
              width={300}
              height={300}
              alt="Picture of the hotel"
              className=" w-[28px]"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
