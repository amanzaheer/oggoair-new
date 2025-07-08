"use client";

import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { FaSearchPlus } from "react-icons/fa";
import { IoSearch } from "react-icons/io5";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";

export default function Help() {
  const [openSelectRequest, setOpenSelectRequest] = useState(false);
  const [selectedRequest, setSelectedRequest] = useState("Payment");

  useEffect(() => {
    function handleClickOutside(event: any) {
      const openSelectedRequest = document.getElementById(
        "openSelectedRequest"
      );

      if (
        openSelectedRequest &&
        !openSelectedRequest.contains(event.target)
        // &&
        // !event.target.closest(".flight-from-container") &&
        // !event.target.closest(".donottoggle")
      ) {
        setOpenSelectRequest(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
  }, [openSelectRequest]);

  return (
    <div>
      <Header />

      <div className=" w-full p-5 flex justify-center pt-24">
        <div className="w-full xl:w-[1220px] 2xl:w-[1420px]">
          <p className=" font-semibold text-center text-2xl">
            Hi, how can we help you?
          </p>
          <div className=" mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-10">
            <div className=" p-3 flex flex-col justify-center items-center bg-white cursor-pointer transition-all duration-150 ease-linear hover:bg-[#EAF4FF] custom-airline-boxshadow rounded-2xl ">
              <div className="">
                <div className=" w-16">
                  <Image
                    src={"/New/help/draw-an-resend-icon (1) 2.png"}
                    alt="hero image"
                    height={500}
                    width={500}
                  />
                </div>
              </div>
              <div className=" mt-2 text-center ">
                <p className=" font-medium">Reschedule</p>
                <p className=" text-gray-600 text-sm mt-3">
                  Accidentally typing incorrect name, dob, or other personal
                  information? Request to change it here!
                </p>
              </div>
            </div>
            <div className=" p-3 flex flex-col justify-center items-center bg-white cursor-pointer transition-all duration-150 ease-linear hover:bg-[#EAF4FF] custom-airline-boxshadow rounded-2xl ">
              <div className="">
                <div className=" w-16">
                  <Image
                    src={"/New/help/draw-an-travel-data-correction-icon 2.png"}
                    alt="hero image"
                    height={500}
                    width={500}
                  />
                </div>
              </div>
              <div className="  mt-2 text-center">
                <p className=" font-medium">Travel Data Correction</p>
                <p className=" text-gray-600 text-sm mt-3">
                  Accidentally typing incorrect name, dob, or other personal
                  information? Request to change it here!
                </p>
              </div>
            </div>
            <div className=" p-3 flex flex-col justify-center items-center bg-white cursor-pointer transition-all duration-150 ease-linear hover:bg-[#EAF4FF] custom-airline-boxshadow rounded-2xl ">
              <div className="">
                <div className=" w-16">
                  <Image
                    src={"/New/help/draw-an-resend-icon 2.png"}
                    alt="hero image"
                    height={500}
                    width={500}
                  />
                </div>
              </div>
              <div className="  mt-2 text-center">
                <p className=" font-medium">Resend itenerary</p>
                <p className=" text-gray-600 text-sm mt-3">
                  Accidentally typing incorrect name, dob, or other personal
                  information? Request to change it here!
                </p>
              </div>
            </div>
            <div className=" p-3 flex flex-col justify-center items-center bg-white cursor-pointer transition-all duration-150 ease-linear hover:bg-[#EAF4FF] custom-airline-boxshadow rounded-2xl ">
              <div className="">
                <div className=" w-[70px]">
                  <Image
                    src={"/New/help/draw-an-refund-maney-icon 2.png"}
                    alt="hero image"
                    height={500}
                    width={500}
                  />
                </div>
              </div>
              <div className="  mt-2 text-center">
                <p className=" font-medium">Refund</p>
                <p className=" text-gray-600 text-sm mt-3">
                  Accidentally typing incorrect name, dob, or other personal
                  information? Request to change it here!
                </p>
              </div>
            </div>
            <div className=" p-3 flex flex-col justify-center items-center bg-white cursor-pointer transition-all duration-150 ease-linear hover:bg-[#EAF4FF] custom-airline-boxshadow rounded-2xl ">
              <div className="">
                <div className=" w-16">
                  <Image
                    src={"/New/help/draw-an-refund-icon 2.png"}
                    alt="hero image"
                    height={500}
                    width={500}
                  />
                </div>
              </div>
              <div className=" mt-2 text-center ">
                <p className=" font-medium">Online Check-in</p>
                <p className=" text-gray-600 text-sm mt-3">
                  Accidentally typing incorrect name, dob, or other personal
                  information? Request to change it here!
                </p>
              </div>
            </div>
            <div className=" p-3 flex flex-col justify-center items-center bg-white cursor-pointer transition-all duration-150 ease-linear hover:bg-[#EAF4FF] custom-airline-boxshadow rounded-2xl ">
              <div className="">
                <div className=" w-16">
                  <Image
                    src={"/New/help/draw-an-add-baggage-travel-icon 2.png"}
                    alt="hero image"
                    height={500}
                    width={500}
                  />
                </div>
              </div>
              <div className=" mt-2 text-center ">
                <p className=" font-medium">Add Baggage</p>
                <p className=" text-gray-600 text-sm mt-3">
                  Accidentally typing incorrect name, dob, or other personal
                  information? Request to change it here!
                </p>
              </div>
            </div>
          </div>
          <div className=" mt-10 bg-secoundery rounded-2xl p-5 flex justify-center">
            <div className=" w-full ">
              <p className=" font-semibold text-xl ">Search booking</p>
              <p className="  mt-3">
                In order to receive your booking code, please fill the form
                below. So, we can easily check your booking.
              </p>
              <div className=" grid grid-cols-11 gap-5 mt-5">
                <div className=" col-span-11 sm:col-span-4">
                  <label htmlFor="" className="block mb-2">
                    Email
                  </label>
                  <input
                    type="text"
                    className=" border border-primary p-3 focus:outline-none focus:ring-1 ring-primary rounded-md placeholder:text-sm placeholder:text-gray-600 w-full"
                    placeholder="example@gmail.com"
                  />
                </div>
                <div className=" col-span-11 sm:col-span-4">
                  <label htmlFor="" className="block mb-2">
                    OGGO Booking ID
                  </label>
                  <input
                    type="text"
                    className=" border border-primary p-3 focus:outline-none focus:ring-1 ring-primary rounded-md placeholder:text-sm placeholder:text-gray-600 w-full"
                    placeholder="Input YourOGGO Booking ID"
                  />
                </div>
                <div className=" flex items-end justify-end col-span-11 sm:col-span-3 ">
                  <div className=" cursor-pointer bg-primary text-white rounded-lg w-56 py-[10px] flex items-center justify-center gap-3">
                    <IoSearch />
                    <button className="">Search</button>
                  </div>
                </div>
              </div>
              <p className=" mt-5 text-sm font-medium">
                Forgot Your Oggo Code?{" "}
                <span className=" text-primary cursor-pointer">
                  Click here.
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className=" w-full flex justify-center mt-5 px-5">
        <div className=" w-full xl:w-[1220px] 2xl:w-[1420px]">
          <div className=" w-full lg:w-[1000px] bg-secoundery shadow rounded-2xl p-5 sm:p-8">
            <p className=" font-medium text-xl">Mail Us your Request</p>
            <div className=" w-full grid md:grid-cols-2 gap-5  ">
              <div className=" mt-5">
                <p className="font-medium">Select Your Request</p>
                <div
                  id="openSelectedRequest"
                  onClick={() => setOpenSelectRequest(!openSelectRequest)}
                  className=" relative cursor-pointer border rounded-md px-2 py-1 border-gray-300 flex items-center justify-between mt-1 bg-white"
                >
                  <p className=" text-sm text-gray-500 py-2">
                    {selectedRequest}
                  </p>
                  <MdOutlineKeyboardArrowDown className=" text-gray-500 text-xl" />
                  {openSelectRequest && (
                    <div className=" absolute top-full translate-y-2 left-0 w-full bg-white shadow-md rounded-md">
                      <p
                        className=" p-3 hover:bg-gray-100 cursor-pointer border-b"
                        onClick={() => setSelectedRequest("Payment")}
                      >
                        Payment
                      </p>
                      <p
                        className=" p-3 hover:bg-gray-100 cursor-pointer"
                        onClick={() => setSelectedRequest("Booking")}
                      >
                        Booking
                      </p>
                    </div>
                  )}
                </div>
              </div>

              <div className=" mt-5">
                <label htmlFor="" className=" font-medium block">
                  Full Name
                </label>
                <input
                  type="text"
                  placeholder="Jhone Doe"
                  className=" mt-1 border p-2 rounded-md w-full placeholder:text-gray-500 placeholder:text-sm focus:outline-none "
                />
              </div>
            </div>
            <div className=" w-full grid md:grid-cols-2 gap-5 mt-5 ">
              <div className=" ">
                <label htmlFor="" className=" font-medium block">
                  Email
                </label>
                <input
                  type="text"
                  placeholder="example@gmail.com"
                  className=" mt-1 border p-2 rounded-md w-full placeholder:text-gray-500 placeholder:text-sm py-2 focus:outline-none "
                />
              </div>

              <div className="">
                <label htmlFor="" className=" font-medium block">
                  Telephone
                </label>
                <input
                  type="text"
                  placeholder="+2344053680"
                  className=" mt-1 p-2 rounded-md border w-full placeholder:text-gray-500 placeholder:text-sm py-2 focus:outline-none "
                />
              </div>
            </div>
            <div className=" w-full grid md:grid-cols-2 gap-5 mt-5 ">
              <div className=" ">
                <label htmlFor="" className=" font-medium block">
                  Message
                </label>
                <textarea className=" mt-1 border p-2 rounded-md w-full placeholder:text-gray-500 placeholder:text-sm py-2 focus:outline-none  h-52" />
                <button className=" mt-5 bg-primary w-full py-3 rounded-md text-white">
                  Submit
                </button>
              </div>

              <div className=" flex items-center justify-center">
                <div className=" w-72 text-center">
                  <p className=" font-semibold text-lg">Need more help?</p>
                  <p className=" text-gray-500 mt-2 text-sm">
                    Call our customer support and provide your Oggo code to get
                    further assistance
                  </p>
                  <div className=" w-full flex justify-center">
                    <Image
                      src={"/New/help/question-mark-and-headphones-icon 1.png"}
                      alt="hero image"
                      height={500}
                      width={500}
                      className=" w-20"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
