"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useSearchParams } from "next/navigation";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { APILINK } from "../../../../data";
import { TravelDuration, fullDateTime } from "@/utils/dateFormate";
import PaymentSuccessHeroSection from "@/components/flights/payment/PaymentSuccessHeroSection";
import { BiDownload } from "react-icons/bi";

export default function Page() {
  const [bookingInfo, setBookingInfo] = useState<any>(null);
  const search = useSearchParams();
  const transaction_id = search.get("transaction_id");

  const download = () => {
    window.print();
  };

  useEffect(() => {
    const getbookingInfo = async () => {
      try {
        if (transaction_id) {
          const res = await axios.get(
            `${APILINK}/api/payment/custom/${transaction_id}`
          );
          setBookingInfo(res.data.data);
        }
      } catch (error) {
        console.log(error);
      }
    };
    getbookingInfo();
  }, [transaction_id]);

  return (
    <div>
      <div className=" print:hidden">
        <Header />
      </div>
      <div className=" print:px-0 px-5 w-full flex justify-center print:mt-0 mt-20">
        <div className=" w-full  xl:w-[1220px] 2xl:w-[1420px]">
          <div className=" w-full print:hidden">
            {/* <PaymentSuccessHeroSection /> */}
          </div>
          <div className=" w-full xl:w-[1220px] 2xl:w-[1420px] print:mt-0 mt-10">
            {bookingInfo && (
              <div className=" bg-white w-full">
                <div className=" grid grid-cols-2 gap-5">
                  <div className=" bg-[#51AE26] text-white p-2 sm:p-3 rounded-md flex items-center justify-center flex-col">
                    <p className=" text-sm">Payment Status</p>
                    <p className=" print:text-base text-sm sm:text-lg font-semibold mt-1 text-center">
                      Payment Successfull
                    </p>
                  </div>
                  <div className=" bg-[#E5F2FE]  p-2 sm:p-3 rounded-md flex items-center justify-center flex-col">
                    <p className=" text-sm">Reference number</p>
                    <p className=" print:text-base text-sm sm:text-lg font-semibold mt-1 text-center">
                      {bookingInfo.transaction_id}
                    </p>
                  </div>
                </div>

                <div className=" text-gray-600 mt-5 print:text-sm">
                  <p>Dear Customer,</p>
                  <p>
                    Thank you for choosing{" "}
                    <Link href={"/"} className=" font-medium text-blue-500">
                      oggoair
                    </Link>{" "}
                    payment. your payment has been received.
                  </p>
                </div>

                <div className=" mt-8 print:mt-5">
                  <p className=" print:textbase text-lg font-semibold">
                    Payment Information
                  </p>
                  <div className="overflow-x-auto w-full p-[2px] ">
                    <table className="w-full print:mt-3 mt-5 rounded-md overflow-hidden shadow">
                      <tbody>
                        <tr className=" bg-primary text-white font-semibold print:text-sm">
                          <td className=" p-3 text-left w-[15%] ">
                            Basic Amount
                          </td>

                          <td className=" p-3 text-center w-[20%]">
                            Bank charges
                          </td>

                          <td className=" p-3 text-right w-[20%]">
                            Total Paid
                          </td>
                        </tr>
                        <tr className=" font-semibold print:text-[12px]">
                          <td className=" p-3 text-left">
                            US$ {parseFloat(bookingInfo.amount).toFixed(2)}
                          </td>

                          <td className=" p-3 text-center">
                            US$ {parseFloat(bookingInfo.commission).toFixed(2)}
                          </td>

                          <td className=" p-3 text-right">
                            US${" "}
                            {parseFloat(
                              `${
                                parseFloat(bookingInfo.amount) +
                                parseFloat(bookingInfo.commission)
                              }`
                            ).toFixed(2)}
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
                <div className=" print:mt-5 mt-8">
                  <p className=" print:text-base text-lg font-semibold">
                    You’ll never travel alone with oggoair
                  </p>
                  <div className=" mt-5 sm:flex items-center gap-3 print:text-sm">
                    <div className=" w-[50px]">
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
                    <div className=" mt-2 sm:mt-0">
                      <p className=" font-medium">Frequently Asked Questions</p>
                      <p className=" text-gray-500 text-sm">
                        Got questions? Find all your answers{" "}
                        <Link
                          href={"/faq/flight"}
                          className=" font-medium text-blue-500"
                        >
                          here
                        </Link>
                        .
                      </p>
                    </div>
                  </div>
                  <div className=" mt-5 sm:flex items-center gap-3 print:mt-3 print:text-sm">
                    <div className=" w-[50px]">
                      <Image
                        src={"/New/profile/reservations/call-support-icon.png"}
                        alt="flag"
                        width={500}
                        height={500}
                        className=" w-full h-full object-cover"
                      />
                    </div>
                    <div className=" mt-2 sm:mt-0">
                      <p className=" font-medium">Support in approx. 30s</p>
                      <p className=" text-gray-500 text-sm">
                        {`Need help over the phone? We're all ears. We're here 24/7 and will pick up your call in just a few seconds.`}
                      </p>
                    </div>
                  </div>
                  <div className=" mt-5 sm:flex items-center gap-3  print:mt-3 print:text-sm">
                    <div className=" w-[50px]">
                      <Image
                        src={
                          "/New/profile/reservations/warryless-travel-icon.png"
                        }
                        alt="flag"
                        width={500}
                        height={500}
                        className=" w-full h-full object-cover"
                      />
                    </div>
                    <div className=" mt-2 sm:mt-0">
                      <p className=" font-medium">Worry-free Travel</p>
                      <p className=" text-gray-500 text-sm">
                        {`Explore the world at ease—you'll always be backed by our Service Guarantee.`}
                      </p>
                    </div>
                  </div>
                </div>
                <div className=" print:hidden mt-8 w-full flex items-center justify-center">
                  <div
                    onClick={download}
                    className=" cursor-pointer inline-flex items-center gap-2 bg-primary text-white px-5 sm:px-20 py-3 rounded-2xl"
                  >
                    <BiDownload className=" text-lg" />
                    Download Confirmation
                  </div>
                </div>
                <div className=" mt-10">
                  <p className=" text-blue-500 font-semibold print:text-base text-xl">
                    Great deals with reliable service
                  </p>
                  <p className=" mt-5 print:text-sm ">
                    Thank you for choosing Oggoair Customer Service Department
                  </p>
                </div>
                <p className=" mt-8 print:mt-5 w-full text-sm text-gray-500">
                  Do not forward this mail as it contains your personal
                  information and booking details.
                  <br />
                  Copyright @2024 oggoair all rights reserved.
                  <br />
                  Using{" "}
                  <Link href={"/"} className=" font-medium text-blue-500">
                    oggoair
                  </Link>{" "}
                  website means that you agree with oggoair{" "}
                  <Link
                    href={"/cancellation&refund-policy"}
                    className=" font-medium text-blue-500"
                  >
                    Cancellation or Refund Policy
                  </Link>{" "}
                  and{" "}
                  <Link
                    href={"/privacy&policy"}
                    className=" font-medium text-blue-500"
                  >
                    Privacy Policy
                  </Link>
                  .
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
      <div className=" print:hidden">
        <Footer />
      </div>
    </div>
  );
}
