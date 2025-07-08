import Image from "next/image";
import React, { Suspense } from "react";
import { Toaster } from "react-hot-toast";
import HotelListSearchComponent from "./HotelListSearchComponent";

export default function HotelListHeroSection() {
  return (
    <section className="  w-full">
      <HotelListSearchComponent />
      <Toaster />
    </section>
  );
}
