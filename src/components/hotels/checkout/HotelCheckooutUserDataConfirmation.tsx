import Image from "next/image";
import React from "react";
import { IoClose } from "react-icons/io5";

export default function HotelCheckooutUserDataConfirmation({
  toggleShowUserDataConfirmation,
  userData,
  BooktheHotel,
  setShowUserDataConfirmation,
}: any) {
  return (
    <div className=" fixed w-full h-screen top-0 left-0 bg-black bg-opacity-20 z-[3000] p-5 flex items-center justify-center">
      <div className=" h-[400px] w-[800px] bg-white rounded-2xl p-5 sm:p-10">
        <div className=" flex items-center justify-between">
          <p className=" font-semibold text-2xl">Confirm passenger details</p>
          <IoClose
            className=" text-2xl text-gray-500 cursor-pointer"
            onClick={() => setShowUserDataConfirmation(false)}
          />
        </div>
        <div className=" mt-7 grid grid-cols-5 gap-5">
          <div className=" col-span-5 sm:col-span-3">
            <div className=" w-full border border-blue-300 p-5 rounded-3xl">
              <p>
                <span className=" text-blue-600">Email:</span>{" "}
                <span className=" text-gray-600">{userData.email}</span>
              </p>
              <p className=" mt-2">
                <span className=" text-blue-600">Phone:</span>{" "}
                <span className=" text-gray-600">
                  {userData.dialCode}
                  {userData.phoneNumber}
                </span>
              </p>
            </div>
            <p className=" mt-7">
              Please take a moment to verify that all your details are correct
              before proceeding to payment.
            </p>
            <div className=" mt-7 flex items-center gap-5">
              <button
                onClick={BooktheHotel}
                className=" bg-primary text-white px-5 py-2 rounded-lg"
              >
                Continue to Payment
              </button>
              <button
                className=" font-semibold text-primary"
                onClick={() => setShowUserDataConfirmation(false)}
              >
                Edit
              </button>
            </div>
          </div>
          <div className=" col-span-5 sm:col-span-2">
            <div className=" w-full h-full flex justify-center">
              <Image
                src="/New/hotel/checkout/scan.gif"
                width={1000}
                height={1000}
                alt="Picture of the hotel"
                className="w-[300px] -translate-y-8"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
