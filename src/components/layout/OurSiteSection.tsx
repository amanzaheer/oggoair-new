"use client";

import React from "react";
import Image from "next/image";
import { IoClose } from "react-icons/io5";
import Link from "next/link";
import { IoMdClose } from "react-icons/io";

export default function OurSiteSection({
  openOurSiteSection,
  setOpenOurSiteSection,
}: any) {
  return (
    <div
      id="OurSit-section"
      className=" fixed sm:absolute -top-4 sm:top-full translate-y-4 right-0  rounded-md  bg-white sm:rounded-md w-full sm:w-[240px] h-screen sm:h-[440px] z-20 custom-airline-boxshadow"
    >
      <div className=" sm:hidden">
        <p className="text-center text-lg font-semibold text-gray-700 py-5">
          Select Our Site
        </p>
        <div
          onClick={() => setOpenOurSiteSection(false)}
          className="cursor-pointer"
        >
          <IoMdClose className=" absolute top-5 right-5 text-xl font-bold text-gray-500" />
        </div>
      </div>
      <div className="">
        <div className=" flex items-center gap-3 px-5 py-3 hover:bg-blue-50 cursor-pointer text-gray-500">
          <Image
            src="/New/flags/german.png"
            width={1000}
            height={1000}
            alt="logo"
            className=" w-7 "
          />
          <Link href="https://www.oggoair.com" className="">
            www.oggoair.com
          </Link>
        </div>
        <div className=" flex items-center gap-3 px-5 py-3 hover:bg-blue-50 cursor-pointer text-gray-500 mt-2">
          <Image
            src="/New/flags/indonesia.png"
            width={1000}
            height={1000}
            alt="logo"
            className=" w-7 "
          />
          <Link href="https://www.oggoair.id" className="">
            www.oggoair.id
          </Link>
        </div>
        <div className=" flex items-center gap-3 px-5 py-3 hover:bg-blue-50 cursor-pointer text-gray-500 mt-2">
          <Image
            src="/New/flags/Flag_of_Jordan.svg"
            width={1000}
            height={1000}
            alt="logo"
            className=" w-7 "
          />
          <Link href="https://www.oggoair.jd" className="">
            www.oggoair.jd
          </Link>
        </div>
        <div className=" flex items-center gap-3 px-5 py-3 hover:bg-blue-50 cursor-pointer text-gray-500 mt-2">
          <Image
            src="/New/flags/Flag_of_Kazakhstan.png"
            width={1000}
            height={1000}
            alt="logo"
            className=" w-7 "
          />
          <Link href="https://www.oggoair.kz" className="">
            www.oggoair.kz
          </Link>
        </div>
        <div className="flex items-center gap-3 px-5 py-3 hover:bg-blue-50 cursor-pointer text-gray-500 mt-2">
          <Image
            src="/New/flags/Flag_of_Ghana.png"
            width={1000}
            height={1000}
            alt="logo"
            className=" w-7 "
          />
          <Link href="https://www.oggoair.travel" className="">
            www.oggoair.travel
          </Link>
        </div>
        <div className="flex items-center gap-3 px-5 py-3 hover:bg-blue-50 cursor-pointer text-gray-500 mt-2">
          <Image
            src="/New/flags/Flag_of_Kenya.png"
            width={1000}
            height={1000}
            alt="logo"
            className=" w-7 "
          />
          <Link href="https://www.oggoair.co.ke" className="">
            www.oggoair.co.ke
          </Link>
        </div>
        <div className="flex items-center gap-3 px-5 py-3 hover:bg-blue-50 cursor-pointer text-gray-500 mt-2">
          <Image
            src="/New/flags/Flag_of_Rwanda.png"
            width={1000}
            height={1000}
            alt="logo"
            className=" w-7"
          />
          <Link href="https://www.oggoair.co.rw" className="">
            www.oggoair.co.rw
          </Link>
        </div>
        <div className="flex items-center gap-3 px-5 py-3 hover:bg-blue-50 cursor-pointer text-gray-500 mt-2">
          <Image
            src="/New/flags/Flag_of_Uganda.svg.png"
            width={1000}
            height={1000}
            alt="logo"
            className=" w-7 "
          />
          <Link href="https://www.oggoair.africa" className="">
            www.oggoair.africa
          </Link>
        </div>
      </div>
    </div>
  );
}
