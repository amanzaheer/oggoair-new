"use client";

import React from "react";
import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import HotelPaymentFailurePageInfo from "@/components/hotels/payment/HotelPaymentFailurePageInfo";
import { IoMdCloseCircleOutline } from "react-icons/io";
import Link from "next/link";

export default function Page() {
  return (
    <div className=" bg-white w-full">
      <Header />
      <div className=" w-full flex justify-center px-3 pt-20">
        <div className=" w-full xl:w-[1220px] 2xl:w-[1420px] mt-5">
          <HotelPaymentFailurePageInfo />
          <div className=" mt-10 mb-32 w-full border border-red-500 p-5 rounded-xl bg-red-50 ">
            <div className=" flex items-center gap-2">
              <IoMdCloseCircleOutline className=" text-red-500 text-2xl" />
              <p className=" font-semibold text-xl">
                Sorry, the payment was not completed
              </p>
            </div>
            <div className=" pl-8 mt-5 w-full">
              <div className=" flex items-center">
                <p className=" w-[200px]">Cause:</p>
                <p>
                  The sistem is temporarily unavailable. ( Error code: IPay_RS
                  34567 )
                </p>
              </div>
              <div className=" mt-2 flex items-center">
                <p className="w-[200px]">Recommendation:</p>
                <p>
                  Please try to pay again. If the problem persists, please
                  contact support.
                </p>
              </div>
            </div>
            <div className=" mt-10 flex items-center gap-3">
              <p className=" text-blue-400">Pay again </p>
              <span className=" text-blue-400">|</span>
              <Link href={"/"} className=" text-blue-400">
                Back to Oggoair{" "}
              </Link>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
