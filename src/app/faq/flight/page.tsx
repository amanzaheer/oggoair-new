import FlightToggle from "@/components/faq/FlightToggle";
import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Page() {
  return (
    <div>
      <Header />
      <div className="w-full flex items-center justify-center pt-24">
        <div className="w-full xl:w-[1220px] 2xl:w-[1420px]">
          <div className="rounded-3xl bg-[#7BCAFF1A] flex items-center justify-between flex-wrap gap-5 p-10">
            <div>
              <p className=" font-semibold text-3xl">Terms Conditions</p>
              <p className=" font-medium mt-2">
                Terms Conditions for this platform
              </p>
            </div>
            <div className="">
              <div className=" w-[300px]">
                <Image
                  src={"/New/faq/faq.png"}
                  alt=""
                  height={2000}
                  width={2000}
                  className=" w-full "
                />
              </div>
            </div>
          </div>
          <div className=" mt-5 flex items-center justify-center flex-wrap gap-5">
            <Link
              href="/faq/flight"
              className=" font-semibold text-white bg-primary px-8 py-2 rounded-3xl "
            >
              Flight
            </Link>
            <Link
              href="/faq/hotel"
              className=" font-semibold border border-gray-300 hover:bg-primary hover:text-white px-8 py-2 rounded-3xl"
            >
              Hotel
            </Link>
          </div>
          <FlightToggle />
        </div>
      </div>
      <Footer />
    </div>
  );
}
