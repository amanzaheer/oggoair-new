import React from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import HotelListHeroSection from "@/components/hotels/search/HotelListHeroSection";
import HotelListBody from "@/components/hotels/search/HotelListBody";

export default function Page() {
  return (
    <div className="bg-white w-full">
      <Header />
      <HotelListHeroSection />
      <HotelListBody />
      <Footer />
    </div>
  );
}
