import React from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import HotelDetailsBody from "@/components/hotels/details/HotelDetailsBody";

function Page() {
  return (
    <div className="bg-white w-full">
      <Header />
      <div className=" w-full flex justify-center px-3 pt-20">
        <div className=" w-full xl:w-[1220px] 2xl:w-[1420px] mt-5">
          <HotelDetailsBody />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Page;
