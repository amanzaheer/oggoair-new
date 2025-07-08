import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import TermsAndConditionBody from "@/components/terms&condition/TermsAndConditionBody";
import Image from "next/image";
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
              <div className=" w-[200px]">
                <Image
                  src={"/New/terms-and-conditions/termslist.png"}
                  alt=""
                  height={2000}
                  width={2000}
                  className=" w-full "
                />
              </div>
            </div>
          </div>
          <TermsAndConditionBody />
        </div>
      </div>
      <Footer />
    </div>
  );
}
