"use client";

import React, { useState } from "react";
import ProfileSubmenu from "@/components/profile/ProfileSubmenu";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Image from "next/image";
import Link from "next/link";
import { IoAirplane } from "react-icons/io5";
import SwitchButton from "@/components/common/SwitchButton";
import { FaHeart } from "react-icons/fa6";

export default function Favorite() {
  const [favorite, setfavorite] = useState([]);
  return (
    <div className=" w-full">
      <Header />

      <div className=" pt-20 w-full flex justify-center px-3 mb-10">
        <div className=" w-full xl:w-[1220px] 2xl:w-[1420px] grid gap-5 grid-cols-8 mt-5">
          <div className=" col-span-8 xl:col-span-2">
            <ProfileSubmenu />
          </div>
          <div className="col-span-8 xl:col-span-6 p-5 sm:p-8 rounded-md bg-[#F8F9FE] w-full">
            <p className=" font-semibold text-xl text-center ">Favorites</p>
            <div className=" w-full flex justify-center">
              <div className=" w-[600px] grid grid-cols-2 gap-5 items-center mt-8">
                <Link href={"/profile/favorites/flights"}>
                  <button className=" text-white bg-primary w-full py-2 rounded-2xl">
                    Air Tickets
                  </button>
                </Link>
                <Link href={"/profile/favorites/hotels"}>
                  <button className=" text-primary hover:bg-primary hover:text-white transition-all duration-150 ease-linear border border-primary w-full py-2 rounded-2xl">
                    Hotel
                  </button>
                </Link>
              </div>
            </div>
            {!favorite.length ? (
              <div className=" mt-10">
                <div className=" w-full grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
                  {/* item */}
                  <div className=" rounded-2xl overflow-hidden bg-white shadow-md h-[380px] relative">
                    <div className=" absolute top-5 left-5 bg-white rounded-full flex items-center justify-center px-2 py-1">
                      <span className=" text-primary text-sm font-light">
                        Direct Flight
                      </span>
                    </div>
                    <div className=" absolute top-5 right-5 bg-white h-8 w-8 rounded-full flex items-center justify-center p-2">
                      <FaHeart className=" text-primary" />
                    </div>
                    <div className=" w-full h-full ">
                      <Image
                        src="/New/profile/favorites/airticket.png"
                        width={1000}
                        height={1000}
                        alt="Picture of the currency"
                        className=" w-full h-full object-cover"
                      />
                    </div>
                    <div className=" p-3 absolute w-full bottom-0 left-0  bg-white bg-opacity-10 backdrop-blur ">
                      <div>
                        <p className=" text-white font-medium">
                          Heathrow (LHR) - Antalya (AYT)
                        </p>
                        <div className=" t w-full flex items-center justify-between text-white mt-2 text-sm">
                          <p className=" font-light">Thu, 25 July, 18:30</p>
                          <div className=" flex items-center  gap-2">
                            <IoAirplane className=" text-white" />
                            <span className="font-light">(3 h 40m)</span>
                          </div>
                        </div>
                        <p className=" font-light text-white mt-2 text-sm">
                          Adults: 1, Econom
                        </p>
                      </div>
                      <div className=" w-full h-[1px] bg-gray-500 my-3"></div>
                      <div className=" flex items-center justify-between">
                        <p className=" font-light text-white">
                          Price notifications
                        </p>
                        <SwitchButton />
                      </div>
                    </div>
                  </div>
                  {/* item */}
                  {/* item */}
                  <div className=" rounded-2xl overflow-hidden bg-white shadow-md h-[380px] relative">
                    <div className=" absolute top-5 left-5 bg-white rounded-full flex items-center justify-center px-2 py-1">
                      <span className=" text-primary text-sm font-light">
                        Direct Flight
                      </span>
                    </div>
                    <div className=" absolute top-5 right-5 bg-white h-8 w-8 rounded-full flex items-center justify-center p-2">
                      <FaHeart className=" text-primary" />
                    </div>
                    <div className=" w-full h-full ">
                      <Image
                        src="/New/profile/favorites/airticket2.png"
                        width={1000}
                        height={1000}
                        alt="Picture of the currency"
                        className=" w-full h-full object-cover"
                      />
                    </div>
                    <div className=" p-3 absolute w-full bottom-0 left-0  bg-white bg-opacity-10 backdrop-blur ">
                      <div>
                        <p className=" text-white font-medium">
                          Heathrow (LHR) - Antalya (AYT)
                        </p>
                        <div className=" t w-full flex items-center justify-between text-white mt-2 text-sm">
                          <p className=" font-light">Thu, 25 July, 18:30</p>
                          <div className=" flex items-center  gap-2">
                            <IoAirplane className=" text-white" />
                            <span className="font-light">(3 h 40m)</span>
                          </div>
                        </div>
                        <p className=" font-light text-white mt-2 text-sm">
                          Adults: 1, Econom
                        </p>
                      </div>
                      <div className=" w-full h-[1px] bg-gray-500 my-3"></div>
                      <div className=" flex items-center justify-between">
                        <p className=" font-light text-white">
                          Price notifications
                        </p>
                        <SwitchButton />
                      </div>
                    </div>
                  </div>
                  {/* item */}
                  {/* item */}
                  <div className=" rounded-2xl overflow-hidden bg-white shadow-md h-[380px] relative">
                    <div className=" absolute top-5 left-5 bg-white rounded-full flex items-center justify-center px-2 py-1">
                      <span className=" text-primary text-sm font-light">
                        Direct Flight
                      </span>
                    </div>
                    <div className=" absolute top-5 right-5 bg-white h-8 w-8 rounded-full flex items-center justify-center p-2">
                      <FaHeart className=" text-primary" />
                    </div>
                    <div className=" w-full h-full ">
                      <Image
                        src="/New/profile/favorites/airticket3.png"
                        width={1000}
                        height={1000}
                        alt="Picture of the currency"
                        className=" w-full h-full object-cover"
                      />
                    </div>
                    <div className=" p-3 absolute w-full bottom-0 left-0  bg-white bg-opacity-10 backdrop-blur ">
                      <div>
                        <p className=" text-white font-medium">
                          Heathrow (LHR) - Antalya (AYT)
                        </p>
                        <div className=" t w-full flex items-center justify-between text-white mt-2 text-sm">
                          <p className=" font-light">Thu, 25 July, 18:30</p>
                          <div className=" flex items-center  gap-2">
                            <IoAirplane className=" text-white" />
                            <span className="font-light">(3 h 40m)</span>
                          </div>
                        </div>
                        <p className=" font-light text-white mt-2 text-sm">
                          Adults: 1, Econom
                        </p>
                      </div>
                      <div className=" w-full h-[1px] bg-gray-500 my-3"></div>
                      <div className=" flex items-center justify-between">
                        <p className=" font-light text-white">
                          Price notifications
                        </p>
                        <SwitchButton />
                      </div>
                    </div>
                  </div>
                  {/* item */}
                </div>
              </div>
            ) : (
              <div className=" w-full ">
                <div className=" flex flex-col items-center mt-28">
                  <div className=" bg-white h-[70px] w-[70px] rounded-full flex items-center justify-center p-4">
                    <Image
                      src={"/New/profile/favorites/Favorite.png"}
                      alt=""
                      height={500}
                      width={500}
                      className=" w-full "
                    />
                  </div>
                  <p className=" mt-10 font-semibold text-xl">
                    Easily save your tickets
                  </p>
                  <p className=" mt-3 w-full sm:w-[450px] text-center text-sm ">
                    Add tickets to your favorites to keep them easily
                    accessible.
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
