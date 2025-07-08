"use client";

import CheckOutBody from "@/components/flights/checkout/CheckOutBody";
import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";

export default function Checkout() {
  return (
    <div className=" bg-white w-full">
      <Header />
      <CheckOutBody />
      <Footer />
    </div>
  );
}
