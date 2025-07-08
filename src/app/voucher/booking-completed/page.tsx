"use client";

import Image from "next/image";
import React from "react";
import { BiDownload } from "react-icons/bi";

export default function PaymentCompleted() {
  return (
    <div className=" bg-secoundery w-full min-h-screen flex flex-col justify-center items-center p-10">
      <div className=" flex items-center justify-center w-full">
        <div className=" w-40">
          <Image
            src={"/New/newLogo.png"}
            alt="flag"
            width={1000}
            height={1000}
            className=" w-full h-full object-cover"
          />
        </div>
      </div>
      <div className=" flex items-center justify-center mt-10">
        <div className="bg-white p-5 xl:p-10 rounded-md w-full xl:w-[1200px]">
          <div className=" grid grid-cols-2 gap-5">
            <div className=" bg-gray-300 p-3 rounded-md flex items-center justify-center flex-col">
              <p className=" text-sm">Booking Status</p>
              <p className=" text-lg font-semibold mt-1">Booking Completed</p>
            </div>
            <div className=" bg-[#E5F2FE]  p-3 rounded-md flex items-center justify-center flex-col">
              <p className=" text-sm">Booking number</p>
              <p className=" text-lg font-semibold mt-1">R586GH</p>
            </div>
          </div>

          <div className=" mt-8">
            <p className=" text-lg font-semibold">Passengers</p>
            <table className="w-full mt-5 rounded-md overflow-hidden shadow">
              <tbody>
                <tr className=" bg-primary text-white font-semibold">
                  <td className=" p-5 text-left w-[30%]">Surname, Name </td>
                  <td className=" p-5 text-left w-[25%]">Gender</td>
                  <td className=" p-5 text-left">Ticket</td>
                  <td className=" p-5 text-left w-[15%]">Passenger type</td>
                </tr>
                <tr className=" font-semibold">
                  <td className=" p-5 text-left">Solntseva Daria</td>
                  <td className=" p-5 text-left">Female</td>
                  <td className=" p-5 text-left">45663782879</td>
                  <td className=" p-5 text-left">Adult</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className=" mt-8">
            <p className=" text-lg font-semibold">Flight data</p>
            <table className="w-full mt-5 rounded-md overflow-hidden shadow">
              <tbody>
                <tr className=" bg-primary text-white font-semibold">
                  <td className=" p-5 text-left">Flight</td>
                  <td className=" p-5 text-left">Flight Details</td>
                  <td className=" p-5 text-left">Luggage Exchange Return</td>
                  <td className=" p-5 text-left">Status</td>
                </tr>
                <tr className=" font-semibold">
                  <td className=" p-5 text-left">
                    <p className=" font-medium">UH 320 </p>
                    <p className=" text-sm text-gray-500">Azur Air</p>
                  </td>
                  <td className=" p-5 text-left">
                    <div className=" flex items-center gap-3">
                      <div>
                        <p className=" font-medium">London Heathrow (LHR)</p>
                        <p className=" text-sm text-gray-500">
                          Thu, 25 July, 18:30
                        </p>
                      </div>
                      <div className=" bg-primary text-white px-2 py-1 rounded-2xl text-sm">
                        3h 40m
                      </div>
                      <div>
                        <p className=" font-medium">London Heathrow (LHR)</p>
                        <p className=" text-sm text-gray-500">
                          Thu, 25 July, 18:30
                        </p>
                      </div>
                    </div>
                  </td>
                  <td className=" p-5 text-left">
                    <p className=" font-medium">Economy Class</p>
                    <p className=" text-sm text-gray-500">
                      Luggage 1 place 20 kg per adult
                    </p>
                  </td>
                  <td className=" text-green-700 font-semibold">Confirmed</td>
                </tr>
                <tr className=" font-semibold mt-2">
                  <td className=" p-5 text-left">
                    <p className=" font-medium">UH 320 </p>
                    <p className=" text-sm text-gray-500">Azur Air</p>
                  </td>
                  <td className=" p-5 text-left">
                    <div className=" flex items-center gap-3">
                      <div>
                        <p className=" font-medium">London Heathrow (LHR)</p>
                        <p className=" text-sm text-gray-500">
                          Thu, 25 July, 18:30
                        </p>
                      </div>
                      <div className=" bg-primary text-white px-2 py-1 rounded-2xl text-sm">
                        3h 40m
                      </div>
                      <div>
                        <p className=" font-medium">London Heathrow (LHR)</p>
                        <p className=" text-sm text-gray-500">
                          Thu, 25 July, 18:30
                        </p>
                      </div>
                    </div>
                  </td>
                  <td className=" p-5 text-left">
                    <p className=" font-medium">Economy Class</p>
                    <p className=" text-sm text-gray-500">
                      Luggage 1 place 20 kg per adult
                    </p>
                  </td>
                  <td className=" text-green-700 font-semibold">Confirmed</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className=" mt-8">
            <p className=" text-lg font-semibold">Payment Information</p>
            <table className="w-full mt-5 rounded-md overflow-hidden shadow">
              <tbody>
                <tr className=" bg-primary text-white font-semibold">
                  <td className=" p-5 text-left w-[30%]">Adult ticket </td>
                  <td className=" p-5 text-left w-[25%]">Fare</td>
                  <td className=" p-5 text-left">Taxes&Fees</td>
                  <td className=" p-5 text-left w-[15%]">Total Price</td>
                </tr>
                <tr className=" font-semibold">
                  <td className=" p-5 text-left">US$ 500.90 ×1</td>
                  <td className=" p-5 text-left">US$ 23 ×1 </td>
                  <td className=" p-5 text-left">US$ 12 ×1</td>
                  <td className=" p-5 text-left">US$ 535,90</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className=" mt-8">
            <p className=" text-lg font-semibold">
              You’ll never travel alone with Oggo.air
            </p>
            <div className=" mt-5 flex items-center gap-3">
              <div className=" w-[60px]">
                <Image
                  src={
                    "/New/profile/reservations/frequently-asked-question-icon.png"
                  }
                  alt="flag"
                  width={500}
                  height={500}
                  className=" w-full h-full object-cover"
                />
              </div>
              <div>
                <p className=" font-medium">Frequently Asked Questions</p>
                <p className=" text-gray-500">
                  Got questions? Find all your answers here.
                </p>
              </div>
            </div>
            <div className=" mt-5 flex items-center gap-3">
              <div className=" w-[60px]">
                <Image
                  src={"/New/profile/reservations/call-support-icon.png"}
                  alt="flag"
                  width={500}
                  height={500}
                  className=" w-full h-full object-cover"
                />
              </div>
              <div>
                <p className=" font-medium">Support in approx. 30s</p>
                <p className=" text-gray-500">
                  {`Need help over the phone? We're all ears. We're here 24/7 and will pick up your call in just a few seconds.`}
                </p>
              </div>
            </div>
            <div className=" mt-5 flex items-center gap-3">
              <div className=" w-[60px]">
                <Image
                  src={"/New/profile/reservations/warryless-travel-icon.png"}
                  alt="flag"
                  width={500}
                  height={500}
                  className=" w-full h-full object-cover"
                />
              </div>
              <div>
                <p className=" font-medium">Worry-free Travel</p>
                <p className=" text-gray-500">
                  {`Explore the world at ease—you'll always be backed by our Service Guarantee.`}
                </p>
              </div>
            </div>
          </div>
          <div className=" mt-8 w-full flex items-center justify-center">
            <div className=" cursor-pointer inline-flex items-center gap-2 bg-primary text-white px-20 py-3 rounded-2xl">
              <BiDownload />
              Download voucher
            </div>
          </div>
          <div className=" mt-10">
            <p className=" text-blue-500 font-semibold text-xl">
              Great deals with reliable service
            </p>
            <p className=" mt-5 text-lg w-[300px]">
              Thank you for choosing Oggoair Customer Service Department
            </p>
          </div>
          <p className=" mt-10 w-[650px]">
            Do not forward this mail as it contains your personal information
            and booking details. Copyright @2024 oggoair all rights reserved{" "}
            <br />
            Using Oggoair website means that you agree with Oggoair Privacy
            Policy.
          </p>
        </div>
      </div>
    </div>
  );
}
