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
import { IoMdStar } from "react-icons/io";

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
                  <button className="  text-primary hover:bg-primary hover:text-white transition-all duration-150 ease-linear border border-primary w-full py-2 rounded-2xl ">
                    Air Tickets
                  </button>
                </Link>
                <Link href={"/profile/favorites/hotels"}>
                  <button className="text-white bg-primary w-full py-2 rounded-2xl">
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
                    <div className=" absolute top-5 left-5 bg-gray-200 rounded-full flex items-center justify-center px-2 py-1">
                      <span className=" text-primary text-sm font-light">
                        Belek,Türkiye
                      </span>
                    </div>
                    <div className=" absolute top-5 right-5 bg-white h-8 w-8 rounded-full flex items-center justify-center p-2">
                      <FaHeart className=" text-primary" />
                    </div>
                    <div className=" w-full h-full ">
                      <Image
                        src="/New/profile/favorites/hotel.png"
                        width={1000}
                        height={1000}
                        alt="Picture of the currency"
                        className=" w-full h-full object-cover"
                      />
                    </div>
                    <div className=" p-3 absolute w-full bottom-0 left-0  bg-white bg-opacity-10 backdrop-blur ">
                      <div>
                        <p className=" text-white font-medium">
                          Papillon Zeugma Relaxury
                        </p>
                        <div className=" flex items-center justify-between mt-2">
                          <div className=" flex items-center gap-3">
                            <span className=" bg-primary text-white py-[1px] px-[4px] rounded">
                              4,8
                            </span>
                            <p className=" text-white">Reviews: 2580</p>
                          </div>
                          <div className=" flex items-center">
                            <IoMdStar className=" text-yellow-500" />
                            <IoMdStar className=" text-yellow-500" />
                            <IoMdStar className=" text-yellow-500" />
                            <IoMdStar className=" text-yellow-500" />
                            <IoMdStar className=" text-yellow-500" />
                            <IoMdStar className=" text-yellow-500" />
                          </div>
                        </div>
                      </div>
                      <div className=" w-full h-[1px] bg-gray-500 my-3"></div>
                      <div className=" text-sm">
                        <p className=" font-light text-white">14 - 18 July</p>
                        <p className=" font-light text-white mt-1">
                          Adults: 2, Room: 1
                        </p>
                      </div>
                    </div>
                  </div>
                  {/* item */}
                  {/* item */}
                  <div className=" rounded-2xl overflow-hidden bg-white shadow-md h-[380px] relative">
                    <div className=" absolute top-5 left-5 bg-gray-200 rounded-full flex items-center justify-center px-2 py-1">
                      <span className=" text-primary text-sm font-light">
                        Belek,Türkiye
                      </span>
                    </div>
                    <div className=" absolute top-5 right-5 bg-white h-8 w-8 rounded-full flex items-center justify-center p-2">
                      <FaHeart className=" text-primary" />
                    </div>
                    <div className=" w-full h-full ">
                      <Image
                        src="/New/profile/favorites/hetel2.png"
                        width={1000}
                        height={1000}
                        alt="Picture of the currency"
                        className=" w-full h-full object-cover"
                      />
                    </div>
                    <div className=" p-3 absolute w-full bottom-0 left-0  bg-white bg-opacity-10 backdrop-blur ">
                      <div>
                        <p className=" text-white font-medium">
                          Papillon Zeugma Relaxury
                        </p>
                        <div className=" flex items-center justify-between mt-2">
                          <div className=" flex items-center gap-3">
                            <span className=" bg-primary text-white py-[1px] px-[4px] rounded">
                              4,8
                            </span>
                            <p className=" text-white">Reviews: 2580</p>
                          </div>
                          <div className=" flex items-center">
                            <IoMdStar className=" text-yellow-500" />
                            <IoMdStar className=" text-yellow-500" />
                            <IoMdStar className=" text-yellow-500" />
                            <IoMdStar className=" text-yellow-500" />
                            <IoMdStar className=" text-yellow-500" />
                            <IoMdStar className=" text-yellow-500" />
                          </div>
                        </div>
                      </div>
                      <div className=" w-full h-[1px] bg-gray-500 my-3"></div>
                      <div className=" text-sm">
                        <p className=" font-light text-white">14 - 18 July</p>
                        <p className=" font-light text-white mt-1">
                          Adults: 2, Room: 1
                        </p>
                      </div>
                    </div>
                  </div>
                  {/* item */}
                  {/* item */}
                  <div className=" rounded-2xl overflow-hidden bg-white shadow-md h-[380px] relative">
                    <div className=" absolute top-5 left-5 bg-gray-200 rounded-full flex items-center justify-center px-2 py-1">
                      <span className=" text-primary text-sm font-light">
                        Belek,Türkiye
                      </span>
                    </div>
                    <div className=" absolute top-5 right-5 bg-white h-8 w-8 rounded-full flex items-center justify-center p-2">
                      <FaHeart className=" text-primary" />
                    </div>
                    <div className=" w-full h-full ">
                      <Image
                        src="/New/profile/favorites/hotel3.png"
                        width={1000}
                        height={1000}
                        alt="Picture of the currency"
                        className=" w-full h-full object-cover"
                      />
                    </div>
                    <div className=" p-3 absolute w-full bottom-0 left-0  bg-white bg-opacity-10 backdrop-blur ">
                      <div>
                        <p className=" text-white font-medium">
                          Papillon Zeugma Relaxury
                        </p>
                        <div className=" flex items-center justify-between mt-2">
                          <div className=" flex items-center gap-3">
                            <span className=" bg-primary text-white py-[1px] px-[4px] rounded">
                              4,8
                            </span>
                            <p className=" text-white">Reviews: 2580</p>
                          </div>
                          <div className=" flex items-center">
                            <IoMdStar className=" text-yellow-500" />
                            <IoMdStar className=" text-yellow-500" />
                            <IoMdStar className=" text-yellow-500" />
                            <IoMdStar className=" text-yellow-500" />
                            <IoMdStar className=" text-yellow-500" />
                            <IoMdStar className=" text-yellow-500" />
                          </div>
                        </div>
                      </div>
                      <div className=" w-full h-[1px] bg-gray-500 my-3"></div>
                      <div className=" text-sm">
                        <p className=" font-light text-white">14 - 18 July</p>
                        <p className=" font-light text-white mt-1">
                          Adults: 2, Room: 1
                        </p>
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
                    Keep your hotels safe
                  </p>
                  <p className=" mt-3 w-full sm:w-[450px] text-center text-sm ">
                    Add hotels to your favorites to ensure they’re securely
                    stored and easy to find.
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
