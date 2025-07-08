"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";
import { RiArrowRightSLine } from "react-icons/ri";

export default function HotelSubmenu() {
  const router = useRouter();
  const goBack = () => {
    router.back();
  };
  return (
    <div className=" w-full flex items-center gap-3">
      <Link href={`/hotel`} className=" text-blue-500">
        Home page
      </Link>
      <RiArrowRightSLine className=" text-gray-500 text-lg" />
      <p onClick={goBack} className=" text-blue-500 cursor-pointer">
        Hotel Section
      </p>
      <RiArrowRightSLine className=" text-gray-500 text-lg" />
      <p className="">Search by hotel name</p>
    </div>
  );
}
