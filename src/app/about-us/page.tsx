"use client";

import AboutUs from "@/components/about-us/AboutUs";
import ContactUs from "@/components/about-us/ContactUs";
import ServiceProfile from "@/components/about-us/ServiceProfile";
import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import Image from "next/image";
import React, { useEffect, useState } from "react";

export default function Help() {
  const [selectedInfo, setSelectedInfo] = useState("About Us");

  return (
    <div>
      <Header />
      <div className="w-full flex items-center justify-center pt-24">
        <div className="w-full xl:w-[1220px] 2xl:w-[1420px] rounded-3xl bg-[#7BCAFF1A] flex items-center justify-between flex-wrap gap-5 p-10">
          <div>
            <p className=" font-semibold text-3xl">oggoair</p>
            <p className=" font-medium mt-2">
              Your trusted partner in every flight
            </p>
          </div>
          <div className="">
            <div className=" w-[350px]">
              <Image
                src={"/New/about-us/airport.png"}
                alt=""
                height={2000}
                width={2000}
                className=" w-full "
              />
            </div>
          </div>
        </div>
      </div>

      <div className=" w-full py-10 flex justify-center ">
        <div className=" w-full xl:w-[1220px] 2xl:w-[1420px]">
          <div className=" w-full flex justify-center">
            <div className=" flex items-center flex-wrap gap-2 px-5 lg:px-0">
              <div
                onClick={() => setSelectedInfo("About Us")}
                className={` py-2 px-8 cursor-pointer border border-blue-300 rounded-3xl flex items-center justify-center ${
                  selectedInfo === "About Us"
                    ? " text-white bg-primary"
                    : " text-gray-950"
                } `}
              >
                <span>About Us</span>
              </div>

              <div
                onClick={() => setSelectedInfo("Service profile")}
                className={` py-2 px-8 cursor-pointer border border-blue-300 rounded-3xl flex items-center justify-center ${
                  selectedInfo === "Service profile"
                    ? " text-white bg-primary"
                    : " text-gray-950"
                } `}
              >
                <span>Service profile</span>
              </div>
              <div
                onClick={() => setSelectedInfo("Contact us")}
                className={` py-2 px-8 cursor-pointer border border-blue-300 rounded-3xl flex items-center justify-center ${
                  selectedInfo === "Contact us"
                    ? " text-white bg-primary"
                    : " text-gray-950"
                } `}
              >
                <span>Contact us</span>
              </div>
            </div>
          </div>
          {selectedInfo === "About Us" && <AboutUs />}
          {selectedInfo === "Service profile" && <ServiceProfile />}
          {selectedInfo === "Contact us" && <ContactUs />}
        </div>
      </div>
      <Footer />
    </div>
  );
}
