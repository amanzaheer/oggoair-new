"use client";

import React, { useState } from "react";
import ProfileSubmenu from "@/components/profile/ProfileSubmenu";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Link from "next/link";
import Image from "next/image";
import { MdKeyboardArrowDown } from "react-icons/md";
import { IoIosStar } from "react-icons/io";
import { GoInfo } from "react-icons/go";
export default function Booking() {
  const [reservations, setReservations] = useState([]);
  const [hovered, setHovered] = useState(false);

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
                <button className=" text-primary hover:bg-primary hover:text-white transition-all duration-150 ease-linear border border-primary w-full py-1 sm:py-2 rounded-2xl text-sm sm:text-base">
                  Air Tickets
                </button>
              </Link>
              <Link href={"/profile/booking/hotels"}>
                <button className=" text-white bg-primary w-full py-1 sm:py-2 rounded-2xl text-sm sm:text-base">
                  Hotels
                </button>
              </Link>

              <Link href={"/profile/booking/cars"}>
                <button className=" text-primary hover:bg-primary hover:text-white transition-all duration-150 ease-linear border border-primary w-full py-1 sm:py-2 rounded-2xl text-sm sm:text-base">
                  Rental Car
                </button>
              </Link>
            </div>
            {/*  */}
            {!reservations.length ? (
              <div>
                <div className=" w-full flex justify-end items-center gap-3 mt-5">
                  <p className=" font-medium">Sorting</p>
                  <div className=" flex items-center gap-1 bg-blue-100 rounded-3xl px-3 py-2 ">
                    <p className=" text-sm">Active</p>
                    <MdKeyboardArrowDown />
                  </div>
                </div>
                <div className=" mt-5 rounded-2xl bg-white shadow">
                  <div className=" grid items-start grid-cols-3 p-5">
                    <div className=" col-span-3 sm:col-span-2">
                      <div className=" flex items-center gap-3 text-2xl font-semibold">
                        <p className=" text-lg">Belek (Türkiye)</p>
                      </div>
                      <p className=" text-gray-700">
                        July 14 - July 18, 2 adults
                      </p>
                      <p className=" font-medium mt-5">Standard double room</p>
                      <div className=" mt-2 flex items-center flex-wrap gap-3 ">
                        <div className=" px-2 sm:px-3 py-1 text-sm sm:text-base sm:py-1 rounded-3xl bg-[#7BCAFF33] flex items-center gap-1">
                          <Image
                            src={"/New/profile/reservations/room-size-icon.png"}
                            alt=""
                            height={500}
                            width={500}
                            className=" w-6 sm:w-8"
                          />
                          <p>34 m</p>
                        </div>
                        <div className=" px-2 sm:px-3 py-1 text-sm sm:text-base sm:py-1 rounded-3xl bg-[#7BCAFF33] flex items-center gap-1">
                          <Image
                            src={"/New/profile/reservations/shower-icon.png"}
                            alt=""
                            height={500}
                            width={500}
                            className=" w-6 sm:w-8"
                          />
                          <p>Private bathroom</p>
                        </div>
                        <div className=" px-2 sm:px-3 py-1 text-sm sm:text-base sm:py-1 rounded-3xl bg-[#7BCAFF33] flex items-center gap-1">
                          <Image
                            src={"/New/profile/reservations/wifi-free-icon.png"}
                            alt=""
                            height={500}
                            width={500}
                            className=" w-6 sm:w-8"
                          />
                          <p>Free Wi-Fi</p>
                        </div>
                      </div>
                      <div className=" flex items-center flex-wrap gap-5 sm:gap-8 mt-5">
                        <div>
                          <p className=" font-semibold">July 14, Sun</p>
                          <p className="">Check-in from 14:00 PM</p>
                        </div>
                        <div>
                          <p className=" font-semibold">July 18, Thu </p>
                          <p className="">Check-out by 12:00 PM</p>
                        </div>
                      </div>
                      <div className=" mt-5 flex items-center flex-wrap gap-5 sm:gap-8">
                        <div className=" flex items-center gap-2 px-3 py-2 rounded-3xl bg-green-700  text-white cursor-pointer group relative">
                          <p>Free cancellation</p>
                          <GoInfo className=" text-xl" />

                          <div className=" hidden group-hover:block absolute top-full translate-y-3 left-6 w-72 bg-white rounded-2xl p-5 shadow text-gray-700">
                            <div className=" h-8 w-8 bg-white absolute -top-4 left-[120px] rotate-45"></div>
                            <p>
                              Free cancellation up to 22:00, 12 July. After that
                              there is a penalty for cancellation $20.
                            </p>
                          </div>
                        </div>
                        <div>
                          <p>Free cancellation up to</p>
                          <p className=" text-green-500">22:00 July 12, 2024</p>
                        </div>
                      </div>
                    </div>
                    <div className=" sm:mt-0 mt-5 col-span-3 sm:col-span-1">
                      <div className=" rounded-xl overflow-hidden w-full h-48">
                        <Image
                          src={"/New/profile/reservations/item-hotel.jpg"}
                          alt=""
                          height={500}
                          width={500}
                          className=" w-full h-full object-cover "
                        />
                      </div>
                      <p className=" font-semibold mt-5">
                        Papillon Zeugma Relaxury
                      </p>
                      <div className=" mt-1 w-full flex items-center gap-1">
                        <IoIosStar className=" text-yellow-500" />
                        <IoIosStar className=" text-yellow-500" />
                        <IoIosStar className=" text-yellow-500" />
                        <IoIosStar className=" text-yellow-500" />
                      </div>
                      <button className=" bg-primary text-white w-full py-2 rounded-3xl mt-7">
                        Cancel booking
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <div className=" w-full ">
                <div className=" flex flex-col items-center mt-28">
                  <div className=" bg-white h-[70px] w-[70px] rounded-full flex items-center justify-center p-3">
                    <Image
                      src={"/New/profile/reservations/hotel.png"}
                      alt=""
                      height={500}
                      width={500}
                      className=" w-full "
                    />
                  </div>
                  <p className=" mt-10 font-semibold text-2xl">
                    Your hotel history is empty
                  </p>
                  <p className=" mt-3 w-full sm:w-[450px] text-center ">
                    Once you start booking hotels, your reservation details will
                    appear here for easy access.
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
