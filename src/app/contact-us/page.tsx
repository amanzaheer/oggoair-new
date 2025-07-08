"use client";

import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import Image from "next/image";
import React, { useState } from "react";
import { IoClose } from "react-icons/io5";

export default function Help() {
  const [openForm, setOpenForm] = useState(false);
  const toggleOpenForm = () => {
    setOpenForm(!openForm);
  };
  return (
    <div>
      <Header />
      <div className="w-full flex items-center justify-center pt-24">
        <div className="w-full xl:w-[1220px] 2xl:w-[1420px] rounded-3xl bg-[#7BCAFF1A] flex items-center justify-between flex-wrap gap-5 p-10">
          <div>
            <p className=" font-semibold text-3xl">Contact Us</p>
            <p className=" font-medium mt-2">
              Exclusive travel deals and discounts
            </p>
            <button
              onClick={toggleOpenForm}
              className=" mt-10 bg-primary text-white px-8 py-3 rounded-3xl"
            >
              Fill out the form
            </button>
          </div>
          <div>
            <div className=" w-[300px]">
              <Image
                src={"/New/contact-us/connect.png"}
                alt=""
                height={2000}
                width={2000}
                className=" w-full"
              />
            </div>
          </div>
        </div>
      </div>

      <Footer />
      {openForm && (
        <div className=" w-full h-screen fixed top-0 left-0 bg-black bg-opacity-25 p-5 flex items-center justify-center">
          <div className=" bg-white rounded-2xl p-5 w-[500px] relative">
            <IoClose
              className=" absolute text-2xl top-5 right-5 cursor-pointer text-gray-500"
              onClick={toggleOpenForm}
            />
            <p className=" text-xl font-medium text-center">Let’s Talk</p>
            <p className=" text-gray-500 mt-2 text-center">
              We’d love to hear from you. Please fill out this form.
            </p>
            <div className=" mt-5">
              <label htmlFor="" className=" font-medium">
                First name
              </label>
              <input
                type="text"
                className=" border p-2 placeholder:text-gray-500 placeholder:text-sm focus:outline-none w-full mt-1 rounded-md "
                placeholder="First name"
              />
            </div>
            <div className=" mt-2">
              <label htmlFor="" className=" font-medium">
                Last name
              </label>
              <input
                type="text"
                className=" border p-2 placeholder:text-gray-500 placeholder:text-sm focus:outline-none w-full mt-1 rounded-md "
                placeholder="Last name"
              />
            </div>
            <div className=" mt-2">
              <label htmlFor="" className=" font-medium">
                Email
              </label>
              <input
                type="text"
                className=" border p-2 placeholder:text-gray-500 placeholder:text-sm focus:outline-none w-full mt-1 rounded-md "
                placeholder="Email"
              />
            </div>
            <div className=" mt-2">
              <label htmlFor="" className=" font-medium">
                Message
              </label>
              <textarea
                className=" border p-2 placeholder:text-gray-500 placeholder:text-sm focus:outline-none w-full mt-1 rounded-md h-[150px] "
                placeholder="Message"
              />
            </div>
            <button className=" bg-primary px-8 py-3 rounded-3xl text-white w-full mt-2">
              Send Message
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
