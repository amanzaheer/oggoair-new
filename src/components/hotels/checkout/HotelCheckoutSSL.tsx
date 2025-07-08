import Image from "next/image";
import React from "react";

export default function HotelCheckoutSSL() {
  return (
    <div className=" mt-5 rounded-xl bg-[#F8F9FE] flex items-center gap-5 p-5 ">
      <Image
        src="/New/hotel/checkout/ssl 1.png"
        width={500}
        height={500}
        alt="Picture of the hotel"
        className="w-[60px]"
      />
      <p className=" font-semibold text-center">
        All transaction are protected by 256-bit SSL encryption
      </p>
    </div>
  );
}
