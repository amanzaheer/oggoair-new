"use client";

import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import axios from "axios";
import { useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import { APILINK } from "../../../../../data";
import { TravelDuration, fullDateTime } from "@/utils/dateFormate";
import PaymentSuccessHeroSection from "@/components/flights/payment/PaymentSuccessHeroSection";
import { BiDownload } from "react-icons/bi";
import Image from "next/image";
import Link from "next/link";

export default function Page() {
  const [bookingInfo, setBookingInfo] = useState<any>(null);
  const search = useSearchParams();
  const transaction_id = search.get("transaction_id");

  const download = () => {
    window.print();
  };

  // const download = () => {
  //   const printWindow = window.open("", "_blank");

  //   if (!printWindow) {
  //     alert("Popup blocked! Please allow popups for this site.");
  //     return;
  //   }

  //   printWindow.document.write(`
  //   <html>
  //     <head>
  //       <title>Print</title>
  //       <style>
  //         /* Your styles go here */
  //         body { font-family: Arial, sans-serif; padding: 20px; }
  //       </style>
  //     </head>
  //     <body>
  //       <div>Printable content here</div>
  //       <script>
  //         window.onload = function () {
  //           window.print();
  //         };
  //       </script>
  //     </body>
  //   </html>
  // `);

  //   printWindow.document.close();
  // };

  useEffect(() => {
    const getbookingInfo = async () => {
      try {
        if (transaction_id) {
          const res = await axios.get(
            `${APILINK}/api/payment/auto/${transaction_id}`
          );
          setBookingInfo(res.data.data);
        }
      } catch (error) {
        console.log(error);
      }
    };
    getbookingInfo();
  }, [transaction_id]);

  console.log(bookingInfo);

  return (
    <div>
      <div className=" print:hidden">
        <Header />
      </div>
      <div className=" print:px-0 px-5 w-full flex justify-center print:mt-0 mt-20">
        <div className=" w-full  xl:w-[1220px] 2xl:w-[1420px]">
          <div className=" w-full print:hidden">
            <PaymentSuccessHeroSection />
          </div>
          <div className=" w-full xl:w-[1220px] 2xl:w-[1420px] print:mt-0 mt-10">
            {bookingInfo && (
              <div className=" bg-white w-full">
                <div className=" grid grid-cols-2 gap-5">
                  <div className=" bg-[#51AE26] text-white p-3 rounded-md flex items-center justify-center flex-col">
                    <p className=" text-sm">Transaction ID</p>
                    <p className=" print:text-base text-sm sm:text-lg font-semibold mt-1 text-center">
                      {bookingInfo.payment.transaction_id}
                    </p>
                  </div>
                  <div className=" bg-[#E5F2FE]  p-3 rounded-md flex items-center justify-center flex-col">
                    <p className=" text-sm">Booking Reference</p>
                    <p className=" print:text-base text-sm sm:text-lg font-semibold mt-1 text-center">
                      {bookingInfo.bookingDetails.booking_reference}
                    </p>
                  </div>
                </div>

                <div className=" text-gray-600 mt-8 print:mt-5 print:text-sm">
                  <p className=" font-semibold print:text-base text-xl text-green-500 ">
                    The transaction was successful. Thank you for booking with
                    oggoair
                  </p>
                </div>
                <div className=" mt-5">
                  <p className=" print:text-base text-lg font-semibold">
                    Ticket(s) will be issued within 45 mins.
                  </p>
                  <p className=" print:text-sm mt-3 text-gray-500">
                    We guarantee that your tickets will be issued. For details,
                    see the Oggoair Service Guarantee. Confirmation, an
                    itinerary, and e-receipt will be emailed to you once your
                    tickets have been issued.
                  </p>
                </div>
                <div className=" mt-5">
                  <p className=" print:text-base text-lg font-semibold">
                    Passengers
                  </p>
                  {bookingInfo.bookingDetails.passengers.map(
                    (passenger: any, index: number) => {
                      return (
                        <div
                          key={index}
                          className=" w-full overflow-x-auto p-[2px]"
                        >
                          <table className="w-full print:mt-3 mt-5 rounded-md overflow-hidden shadow">
                            <tbody>
                              <tr className=" bg-primary text-white font-semibold text-sm">
                                <td className=" p-3 text-left">
                                  Surname, Name{" "}
                                </td>
                                <td className=" p-3 text-center w-[20%]">
                                  Gender
                                </td>
                                <td className=" p-3 text-center w-[20%]">
                                  Ticket Number
                                </td>
                                <td className=" p-3 w-[25%] text-right">
                                  Passenger type
                                </td>
                              </tr>
                              <tr className=" font-semibold text-sm print:text-[12px]">
                                <td className=" p-3 text-left capitalize">
                                  {passenger.family_name.toLowerCase()}{" "}
                                  {passenger.given_name.toLowerCase()}
                                </td>
                                <td className=" p-3 text-center capitalize">
                                  {passenger.gender === "m" && "Male"}
                                  {passenger.gender === "f" && "Female"}
                                </td>
                                <td className=" p-3 text-center">
                                  <p className=" text-red-500">Pending</p>
                                </td>
                                <td className=" p-3 capitalize text-right">
                                  {passenger.type}
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      );
                    }
                  )}
                </div>
                <div className=" mt-8 print:mt-5">
                  <p className=" text-lg font-semibold">Flight data</p>
                  {bookingInfo.bookingDetails.slices.map(
                    (slice: any, index: number) => {
                      return (
                        <div
                          key={index}
                          className=" overflow-x-auto w-full p-[2px]"
                        >
                          {/* <table className="w-full print:mt-3 mt-5 rounded-md shadow"> */}
                          <table className="min-w-[1000px] w-full print:mt-3 mt-5 rounded-md overflow-hidden shadow">
                            <tbody className=" ">
                              <tr className=" bg-primary text-white font-semibold text-sm">
                                <td className=" p-3 text-left w-[20%] rounded-tl-md">
                                  Flight
                                </td>
                                <td className=" p-3 text-center">
                                  Flight Details
                                </td>
                                <td className=" p-3 text-center w-[25%]">
                                  Luggage
                                </td>
                                <td className=" p-3 text-right w-[10%] rounded-tr-md">
                                  Status
                                </td>
                              </tr>

                              {slice.segments.map(
                                (segment: any, segmentIndex: number) => {
                                  return (
                                    <tr
                                      key={segmentIndex}
                                      className=" font-semibold text-sm print:text-[12px]"
                                    >
                                      <td className=" p-3 text-left">
                                        <p className=" font-medium">
                                          <span className=" text-sm">
                                            Number:{" "}
                                          </span>
                                          {
                                            segment.marketing_carrier_flight_number
                                          }
                                        </p>
                                        <p className=" text-sm text-gray-500">
                                          {segment?.marketing_carrier?.name}
                                        </p>
                                      </td>
                                      <td className=" p-3 text-center">
                                        <div className=" print:block flex justify-center gap-3">
                                          <div>
                                            <p className=" font-medium">
                                              {segment.origin.city_name} (
                                              {segment.origin.iata_code})
                                              {/* London Heathrow (LHR) */}
                                            </p>
                                            <p className=" text-sm text-gray-500">
                                              {fullDateTime(
                                                new Date(segment.departing_at)
                                              )}
                                              {/* Thu, 25 July, 18:30 */}
                                            </p>
                                          </div>
                                          <div className=" print:flex print:items-center print:justify-center">
                                            <div className=" flex items-center print:my-3">
                                              <span className=" bg-primary text-white px-2 py-1 rounded-2xl text-sm">
                                                {TravelDuration(
                                                  segment.arriving_at,
                                                  segment.departing_at
                                                )}
                                                {/* 3h 40m */}
                                              </span>
                                            </div>
                                          </div>
                                          <div>
                                            <p className=" font-medium">
                                              {segment.destination.city_name} (
                                              {segment.destination.iata_code})
                                              {/* London Heathrow (LHR) */}
                                            </p>
                                            <p className=" text-sm text-gray-500">
                                              {fullDateTime(
                                                new Date(segment.arriving_at)
                                              )}
                                              {/* Thu, 25 July, 18:30 */}
                                            </p>
                                          </div>
                                        </div>
                                      </td>
                                      <td className=" p-3 text-center">
                                        <p className=" font-medium capitalize">
                                          {segment.passengers[0].cabin_class}{" "}
                                          Class
                                        </p>
                                        <p className=" text-sm text-gray-500">
                                          Luggage 1 place 20 kg per adult
                                        </p>
                                      </td>
                                      <td className=" p-3 text-green-700 font-semibold text-right">
                                        Confirmed
                                      </td>
                                    </tr>
                                  );
                                }
                              )}
                            </tbody>
                          </table>
                        </div>
                      );
                    }
                  )}
                </div>
                <div className=" mt-8 print:mt-5">
                  <p className=" print:textbase text-lg font-semibold">
                    Payment Information
                  </p>
                  <div className="overflow-x-auto w-full p-[2px] ">
                    <table className="w-full print:mt-3 mt-5 rounded-md overflow-hidden shadow">
                      <tbody>
                        <tr className=" bg-primary text-white font-semibold text-sm">
                          <td className=" p-3 text-left w-[15%] ">
                            Basic Fare
                          </td>
                          <td className=" p-3 text-center w-[20%]">
                            Airport Taxes
                          </td>
                          <td className=" p-3 text-center w-[20%]">
                            Service charges
                          </td>
                          <td className=" p-3 text-center w-[25%]">
                            Additional service
                          </td>
                          <td className=" p-3 text-right w-[20%]">
                            Total Fare
                          </td>
                        </tr>
                        <tr className=" font-semibold text-sm print:text-[12px]">
                          <td className=" p-3 text-left">
                            US${" "}
                            {parseFloat(
                              bookingInfo.bookingDetails.base_amount
                            ).toFixed(2)}
                          </td>
                          <td className=" p-3 text-center">
                            US${" "}
                            {parseFloat(
                              bookingInfo.bookingDetails.tax_amount
                            ).toFixed(2)}
                          </td>
                          <td className=" p-3 text-center">
                            US${" "}
                            {parseFloat(
                              bookingInfo.payment.comissionAmount
                            ).toFixed(2)}
                          </td>
                          <td className=" p-3 text-center">
                            US${" "}
                            {parseFloat(
                              bookingInfo.payment.additionslServicesAmount
                            ).toFixed(2)}
                          </td>
                          <td className=" p-3 text-right">
                            US${" "}
                            {parseFloat(
                              bookingInfo.payment.totalAmount
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
                <div className=" mt-5">
                  <p className=" text-blue-500 font-semibold print:text-base text-lg sm:text-xl">
                    Great deals with reliable service
                  </p>
                  <p className=" mt-5 print:text-sm text-sm sm:text-base ">
                    Thank you for choosing Oggoair Customer Service Department
                  </p>
                </div>
                <p className=" mt-8 print:mt-5 w-full text-sm text-gray-500 print:pb-0 pb-5">
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
