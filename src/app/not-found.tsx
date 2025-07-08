import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Notfound() {
  return (
    <div>
      <Header />
      <div className=" w-full flex items-center justify-center">
        <div>
          <Image
            src="/New/404.gif"
            width={1000}
            height={1000}
            alt="Picture of the logo"
            className=" w-[600px]"
          />
          <p className=" text-2xl text-center">Oops! looks like you got lost</p>
          <div className=" flex items-center justify-center mt-5">
            <Link
              href={"/"}
              className=" text-white bg-primary rounded-xl px-5 py-2"
            >
              Back to Home
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
