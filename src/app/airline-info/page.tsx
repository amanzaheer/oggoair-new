import DirectConect from "@/components/airlineInfo/DirectConect";
import TravelPort from "@/components/airlineInfo/TravelPort";
import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import PromoSuggetions from "@/components/promo/PromoSuggetions";
import Image from "next/image";
import React from "react";

export default function Page() {
  return (
    <div>
      <Header />

      <div className=" w-full flex items-center justify-center pt-24">
        <div className="w-full xl:w-[1220px] 2xl:w-[1420px]">
          <div className=" w-full rounded-3xl bg-[#7BCAFF1A] flex items-center justify-between flex-wrap gap-5 p-10">
            <div>
              <p className=" font-semibold text-3xl">Available Airlines</p>
              <p className=" font-medium mt-2">
                Find All Information About Our Airliners Here
              </p>
            </div>
            <div>
              <div className=" w-[300px]">
                <Image
                  src={"/New/airlines/hero-section-plane.png"}
                  alt=""
                  height={2000}
                  width={2000}
                  className=" w-full"
                />
              </div>
            </div>
          </div>
          <DirectConect />
          <TravelPort />
        </div>
      </div>
      <Footer />
    </div>
  );
}
