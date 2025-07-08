"use client";

import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { IoClose } from "react-icons/io5";

export default function Verification({
  setOpenVerification,
}: {
  setOpenVerification: Function;
}) {
  const [verificationCode, setVerificationCode] = useState("");

  const Verify = async () => {
    try {
      if (!verificationCode) {
        return;
      }
      const res = await axios.post("/api/auth/verify", {
        email: "",
        verificationCode,
      });
      console.log(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className=" z-[100] fixed w-screen h-screen top-0 left-0 bg-black bg-opacity-50 flex justify-center items-center px-5 pr-9">
      <div className=" my-10 w-full sm:w-[400px]  bg-white shadow rounded-md p-7 relative">
        <div
          onClick={() => setOpenVerification(false)}
          className=" absolute -top-2 -right-2 h-7 w-7 rounded-full bg-red-500 flex items-center justify-center"
        >
          <IoClose className="  text-xl cursor-pointer text-gray-100" />
        </div>
        <div className=" flex items-center justify-center">
          <Link href="/">
            <Image
              src="/header-logo.jpg"
              width={1000}
              height={1000}
              alt="Picture of the logo"
              className=" w-36 h-12"
            />
          </Link>
        </div>
        <p className=" font-semibold text-center text-xl mt-2">Verification</p>
        <div className=" mt-3">
          <div className=" mt-3">
            <label htmlFor="" className=" font-medium">
              Verification Code
            </label>
            <input
              type="text"
              placeholder="Verification Code"
              value={verificationCode}
              onChange={(e) => setVerificationCode(e.target.value)}
              className=" w-full border p-2 rounded-md focus:outline-none mt-1"
            />
          </div>

          <button
            onClick={Verify}
            className=" w-full mt-5 bg-primary rounded-md py-2 text-white font-medium hover:bg-green-600"
          >
            Verify
          </button>
        </div>
      </div>
    </div>
  );
}
