"use client";

import { useRouter } from "next/navigation";
import React from "react";
import { BiShare } from "react-icons/bi";
import { FaUserGroup } from "react-icons/fa6";
import { IoInformationCircleOutline } from "react-icons/io5";
import { LuBedDouble } from "react-icons/lu";
import { MdOutlinePayment, MdOutlinePets } from "react-icons/md";
import { RiRefund2Line } from "react-icons/ri";

export default function TableRow({ index, room, rate, hotelDetailsData }: any) {
  const router = useRouter();
  function formatToReadableDate(dateString: any) {
    const date = new Date(dateString);
    const options: any = { month: "long", day: "numeric" };
    let formattedDate = date.toLocaleDateString("en-US", options);

    // Add ordinal suffix
    const day = date.getDate();
    const suffix = (day: any) => {
      if (day > 3 && day < 21) return "th"; // Covers 4th-20th
      switch (day % 10) {
        case 1:
          return "st";
        case 2:
          return "nd";
        case 3:
          return "rd";
        default:
          return "th";
      }
    };

    return formattedDate.replace(/\d+/, day + suffix(day));
  }
  const goToCheckoutPage = (id: string) => {
    router.push(`/hotel/checkout?id=${id}`);
  };
  return (
    <tr className="" key={index}>
      <td className=" border border-l-0">
        <div className=" w-full relative h-[180px] p-3">
          {room.beds.map((bed: any, index: number) => {
            return (
              <div key={index} className=" flex gap-2">
                <LuBedDouble />
                <p className=" text-sm mb-2">
                  <span>{bed.count} </span>
                  <span className=" capitalize">{bed.type}</span> size bed
                </p>
              </div>
            );
          })}
          {rate.conditions.find(
            (condition: any) =>
              condition.title === "Hotel Pet Policy" &&
              condition.description.includes("allowed")
          ) ? (
            <div className=" flex gap-2 mb-2">
              <MdOutlinePets />
              <p className=" text-sm">Pets are allowed.</p>
            </div>
          ) : null}
          {rate.conditions.find(
            (condition: any) =>
              condition.title === "Refund Policy" &&
              condition.description.includes("Non-Refundable")
          ) ? (
            <div className=" flex gap-2 mb-2 text-red-500">
              <RiRefund2Line />
              <p className=" text-sm">Non-Refundable</p>
            </div>
          ) : (
            <div className=" flex gap-2 mb-2 text-green-500">
              <RiRefund2Line />
              <p className=" text-sm">Refundable</p>
            </div>
          )}
        </div>
      </td>
      <td className="border border-l-0">
        <div className=" w-full relative h-[180px] p-3">
          <div className=" flex items-center justify-center flex-col gap-2">
            <FaUserGroup className=" text-lg" />
            <p className="">
              {hotelDetailsData.guests.length}{" "}
              {hotelDetailsData.guests.length > 1 ? "guests" : "guest"}
            </p>
          </div>
        </div>
      </td>
      <td className="border border-l-0">
        <div className=" w-full relative h-[180px] p-3">
          {rate.cancellation_timeline.length ? (
            <div className=" flex gap-2 text-green-500 ">
              <BiShare className=" text-lg" />
              <p className=" text-sm">
                Free cancellation until{" "}
                {formatToReadableDate(rate.cancellation_timeline[0].before)}
                {"!"}
              </p>
            </div>
          ) : null}
          <div className=" flex items-center gap-2 mt-2 ">
            <MdOutlinePayment />
            <p className=" text-sm capitalize">{rate.payment_type}</p>
            <IoInformationCircleOutline className=" text-blue-300" />
          </div>
        </div>
      </td>
      <td className="border border-l-0">
        <div className=" w-full relative h-[180px]">
          {/* <div className=" w-full flex items-center justify-end gap-1">
                           <span className=" bg-[#5AD03D] px-5 py-2 rounded-bl-lg rounded-br-lg text-white text-sm">
                             Best price today!
                           </span>
                           <span className=" bg-[#58709D] px-5 py-2 rounded-bl-lg rounded-br-lg text-white text-sm">
                             -30%
                           </span>
                         </div> */}
          <div className=" p-5 w-full h-full flex flex-col justify-end ">
            <div className=" flex flex-col items-end justify-end gap-2">
              <p className=" text-2xl font-semibold">{rate.total_amount}$</p>
              <button
                onClick={() => goToCheckoutPage(rate.id)}
                className=" bg-primary text-white px-5 py-2 rounded-md"
              >
                Book Now
              </button>
            </div>
            {/* <p className=" text-right text-red-500 mt-2 font-semibold text-sm">
                             Only 2 rooms left!
                           </p> */}
          </div>
        </div>
      </td>
    </tr>
  );
}
