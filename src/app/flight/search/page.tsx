import FlightSearchBody from "@/components/flights/filter/FlightSearchBody";
import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import React from "react";
import FlightHeroSection from "@/components/flights/search/FlightHeroSection";

export default function Search() {
  return (
    <div className=" bg-white w-full">
      <Header />
      <FlightHeroSection />
      <FlightSearchBody />
      <Footer />
    </div>
  );
}
