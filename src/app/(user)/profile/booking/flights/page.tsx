"use client";

import React, { useState } from "react";
import ProfileSubmenu from "@/components/profile/ProfileSubmenu";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Link from "next/link";
import Image from "next/image";
import { MdKeyboardArrowDown, MdKeyboardArrowRight } from "react-icons/md";
import { PiShareFat } from "react-icons/pi";
import { LuPrinter } from "react-icons/lu";

export default function Booking() {
  const [reservations, setReservations] = useState([]);

  const goToVucherPage = (option: string) => {
    if (typeof window !== "undefined") {
      const url = `${window.location.origin}/voucher/${option}-completed`;
      window.open(url, "_blank", "noopener noreferrer");
    }
  };

  return (
    <div className=" w-full">
      <Header />

      <div className=" pt-20 w-full flex justify-center px-3 mb-10">
        <div className=" w-full xl:w-[1220px] 2xl:w-[1420px] grid gap-5 grid-cols-8 mt-5">
          <div className=" col-span-8 xl:col-span-2">
            <ProfileSubmenu />
          </div>
          <div className="col-span-8 xl:col-span-6 p-5 sm:p-8 rounded-md bg-[#F8F9FE] w-full">
            <p className=" font-semibold text-xl text-center ">
              Your reservations
            </p>
            <div className=" w-full grid grid-cols-3 gap-2 sm:gap-5 items-center mt-8">
              <Link href={"/profile/booking/flights"}>
                <button className=" text-white bg-primary w-full py-1 sm:py-2 rounded-2xl text-sm sm:text-base">
                  Air Tickets
                </button>
              </Link>
              <Link href={"/profile/booking/hotels"}>
                <button className=" text-primary hover:bg-primary hover:text-white transition-all duration-150 ease-linear border border-primary w-full py-1 sm:py-2 rounded-2xl text-sm sm:text-base">
                  Hotel
                </button>
              </Link>
              <Link href={"/profile/booking/cars"}>
                <button className=" text-primary hover:bg-primary hover:text-white transition-all duration-150 ease-linear border border-primary w-full py-1 sm:py-2 rounded-2xl text-sm sm:text-base">
                  Rental Car
                </button>
              </Link>
            </div>
            {!reservations.length ? (
              <div>
                <div className=" w-full flex justify-end items-center gap-3 mt-5">
                  <p className=" font-medium">Sorting</p>
                  <div className=" flex items-center gap-1 bg-blue-100 rounded-3xl px-3 py-2 ">
                    <p className=" text-sm">Uncomming</p>
                    <MdKeyboardArrowDown />
                  </div>
                </div>
                <div className=" mt-5 rounded-md bg-white shadow">
                  <div className=" grid items-start grid-cols-2 p-5">
                    <div>
                      <div className=" flex items-center gap-3 font-medium">
                        <span>Heathrow</span>
                        <MdKeyboardArrowRight className=" text-xl" />
                        <span>Antalya</span>
                      </div>
                      <p className=" mt-2 text-sm text-gray-800">
                        Aug 5, Mo, 2024
                      </p>
                    </div>
                    <div className=" flex items-center justify-end gap-3">
                      <PiShareFat className=" text-xl" />
                      <p
                        onClick={() => goToVucherPage("payment")}
                        className=" cursor-pointer"
                      >
                        <LuPrinter className=" text-xl" />
                      </p>
                      <p className=" text-green-500">Active order</p>
                    </div>
                  </div>
                  <div className=" p-3 flex items-center justify-between bg-blue-100 text-primary text-sm">
                    <p>Air ticket</p>
                    <p>Order A12468769753</p>
                  </div>
                </div>
                <div className=" mt-5 rounded-md bg-white shadow">
                  <div className=" grid items-start grid-cols-2 p-5">
                    <div>
                      <div className=" flex items-center gap-3 font-medium">
                        <span>Heathrow</span>
                        <MdKeyboardArrowRight className=" text-xl" />
                        <span>Antalya</span>
                      </div>
                      <p className=" mt-2 text-sm text-gray-800">
                        Aug 5, Mo, 2024
                      </p>
                    </div>
                    <div className=" flex items-center justify-end gap-3">
                      <PiShareFat className=" text-xl" />
                      <p
                        onClick={() => goToVucherPage("booking")}
                        className=" cursor-pointer"
                      >
                        <LuPrinter className=" text-xl" />
                      </p>
                      <p className=" text-red-500">Completed</p>
                    </div>
                  </div>
                  <div className=" p-3 flex items-center justify-between bg-gray-100 text-primary text-sm">
                    <p>Air ticket</p>
                    <p>Order A12468769753</p>
                  </div>
                </div>
              </div>
            ) : (
              <div className=" w-full ">
                <div className=" flex flex-col items-center mt-28">
                  <div className=" bg-white h-[70px] w-[70px] rounded-full flex items-center justify-center p-4">
                    <Image
                      src={"/New/profile/reservations/flight.png"}
                      alt=""
                      height={500}
                      width={500}
                      className=" w-full "
                    />
                  </div>
                  <p className=" mt-10 font-semibold text-2xl">
                    Your flight history is empty
                  </p>
                  <p className=" mt-3 w-full sm:w-[450px] text-center ">
                    Once you start flying, your flight details will appear here
                    for easy access.
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
