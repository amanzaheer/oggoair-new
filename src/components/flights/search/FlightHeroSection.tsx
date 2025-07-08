import Image from "next/image";
import React from "react";
import { Toaster } from "react-hot-toast";
import FlightSearchComponent from "./FlightSearchComponent";

export default function FlightHeroSection() {
  return (
    <section className=" px-5 w-full relative">
      <FlightSearchComponent />
      <Toaster />
    </section>
  );
}
