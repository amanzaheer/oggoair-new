"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import HeaderRightSide from "./HeaderRightSide";
import { Toaster } from "react-hot-toast";

export default function Header() {
  return (
    <div
      className={` absolute top-0 left-0 w-full z-[2000] px-5 bg-transparent`}
    >
      <div className=" w-full xl:w-[1220px] 2xl:w-[1420px] h-16 mx-auto flex justify-between items-center">
        <div className=" flex items-center gap-10 ">
          <Link href="/">
            <Image
              src="/New/newlogo.png"
              width={1000}
              height={1000}
              alt="Picture of the logo"
              className=" w-24 sm:w-40 "
            />
          </Link>
        </div>
        <HeaderRightSide />
      </div>
      <Toaster />
    </div>
  );
}
