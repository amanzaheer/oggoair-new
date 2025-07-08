"use client";

import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import LoadingComponent from "@/components/layout/LoadingComponent";
import axios from "axios";
import React, { useEffect, useState } from "react";
import HotelPaymentPageInfo from "@/components/hotels/payment/HotelPaymentPageInfo";
import HotelCheckoutSSL from "@/components/hotels/checkout/HotelCheckoutSSL";
import HotelCheckoutRoomRate from "@/components/hotels/checkout/HotelCheckoutRoomRate";
import Image from "next/image";
import Link from "next/link";
import { APILINK } from "../../../../../data";
import HotelPaymentSuccessPageInfo from "@/components/hotels/payment/HotelPaymentSuccessPageInfo";
import { FaBanSmoking, FaRegCalendar } from "react-icons/fa6";
import { CiLocationOn } from "react-icons/ci";
import { FiPhone } from "react-icons/fi";
import { IoMdCheckmarkCircleOutline, IoMdClose } from "react-icons/io";
import { IoBedOutline } from "react-icons/io5";
import { BsDownload } from "react-icons/bs";

export default function Page() {
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState("");
  const [saveTheCardInfo, setSaveTheCardInfo] = useState(false);
  const [selectedPaymentGetway, setSelectedPaymentGetway] =
    useState("mastercard");
  const [loading, setLoading] = useState(false);
  const [bookingDetails, setBookingDetails] = useState<any>(null);
  const [searchParams, setSearchParams] = useState<URLSearchParams | null>(
    null
  );
  const [paymentLink, setPaymentLink] = useState("");

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    setSearchParams(params);
  }, []);

  const goToMasterCardPaymentGetWay = async () => {
    window.location.href = paymentLink;
  };

  const getFlightBookingDetails = async (id: string | null) => {
    if (!id) return;
    try {
      setLoading(true);
      const res = await axios.get(`${APILINK}/api/flights/booking/${id}`);
      setBookingDetails(res.data.data);
      setPaymentLink(res.data.data.payment.paymentLink);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };

  useEffect(() => {
    if (searchParams) {
      const booking_id = searchParams.get("booking_id");
      getFlightBookingDetails(booking_id);
    }
  }, [searchParams]);

  if (loading) {
    return <LoadingComponent />;
  }

  return (
    <div className=" bg-white w-full">
      <Header />
      <div className=" w-full flex justify-center px-3 pt-20">
        <div className=" w-full xl:w-[1220px] 2xl:w-[1420px] mt-5">
          <HotelPaymentSuccessPageInfo />
          <div className=" w-full grid grid-cols-2 gap-5 mt-10">
            <div className=" col-span-2 lg:col-span-1">
              <div className=" bg-[#51AE26] p-5 rounded-lg text-white text-center">
                <p>Booking Status</p>
                <p className=" font-semibold text-xl mt-3">Booking Confirmed</p>
              </div>
              <div className=" mt-8 border border-gray-300 p-5 rounded-lg">
                <p className=" font-semibold text-lg">Information about you</p>
                <div className=" mt-4 grid grid-cols-2">
                  <div>
                    <p>Booked by Guest</p>
                    <p className=" mt-1">Email Address</p>
                  </div>
                  <div>
                    <p>Madam Solntseva Darya</p>
                    <p className=" mt-1">DariaSolnseva@gmail.com</p>
                  </div>
                </div>
              </div>
              <div className=" mt-8 border border-gray-300 p-5 rounded-lg">
                <div className=" flex items-center justify-between">
                  <p className=" font-semibold text-lg">Your Booking</p>
                  <p>1 room, 2 guests, 4 nights</p>
                </div>
                <div className=" mt-8 flex items-center gap-20">
                  <div className=" flex gap-2 ">
                    <FaRegCalendar className=" text-lg mt-1" />
                    <div>
                      <p className=" font-medium">July 14, Sun </p>
                      <p className=" text-sm mt-1">Check-in from 14:00 PM</p>
                    </div>
                  </div>
                  <div className=" flex gap-2 ">
                    <FaRegCalendar className=" text-lg mt-1" />
                    <div>
                      <p className=" font-medium">July 18, Thu </p>
                      <p className=" text-sm mt-1">Check-out by 12:00 PM</p>
                    </div>
                  </div>
                </div>
                <div className=" mt-5">
                  <div className=" flex gap-2 ">
                    <CiLocationOn className=" mt-1 text-lg" />
                    <div>
                      <p>Papillon Zeugma Relaxury:</p>
                      <p>
                        İleribaşı Mevkii Belek Turizm Merkezi Antalya • Turkiye
                      </p>
                    </div>
                  </div>
                  <div className=" mt-5 h-[320px] rounded-lg overflow-hidden">
                    <Image
                      src={`/New/hotel/details/map-big.png`}
                      alt="line"
                      height={2000}
                      width={2000}
                      className=" w-full h-full object-cover"
                    />
                  </div>
                  <div className=" flex items-center gap-2 mt-5">
                    <FiPhone className=" text-lg" />
                    <p>+90 2427101010, +90 5498241454</p>
                  </div>
                </div>
              </div>
              <div className=" mt-5 bg-[#0090451A] p-3 px-5 rounded-lg border border-green-400">
                Full protection is included with this booking
              </div>
            </div>
            <div className=" col-span-2 lg:col-span-1">
              <div className=" bg-[#E5F2FE] p-5 rounded-lg  text-center">
                <p>Booking number</p>
                <p className=" font-semibold text-xl mt-3">854689746</p>
              </div>
              <div className=" mt-8 border border-gray-300 p-5 rounded-lg">
                <p className=" font-semibold text-lg">Standard double room</p>
                <div className=" flex items-center gap-3 mt-3">
                  <div className=" px-3 py-1 flex items-center gap-1 rounded-3xl bg-[#7BCAFF33]">
                    <Image
                      src="/New/hotel/checkout/room-size-icon (3) 1.png"
                      width={500}
                      height={500}
                      alt="Picture of the hotel"
                      className="w-[30px]"
                    />
                    <span>34 m</span>
                  </div>
                  <div className=" px-3 py-1 flex items-center gap-1 rounded-3xl bg-[#7BCAFF33]">
                    <Image
                      src="/New/hotel/checkout/shower-icon 1.png"
                      width={500}
                      height={500}
                      alt="Picture of the hotel"
                      className="w-[30px]"
                    />
                    <span>Private bathroom</span>
                  </div>
                  <div className=" px-3 py-1 flex items-center gap-1 rounded-3xl bg-[#7BCAFF33]">
                    <Image
                      src="/New/hotel/checkout/wifi-free-icon 1.png"
                      width={500}
                      height={500}
                      alt="Picture of the hotel"
                      className="w-[30px]"
                    />
                    <span>Free Wi-Fi</span>
                  </div>
                </div>
                <div className=" mt-5 grid grid-cols-2">
                  <div className=" col-span-1 flex flex-col gap-2">
                    <div className="flex items-center gap-2">
                      <IoBedOutline className=" text-lg" />
                      <p className=" text-gray-500 text-sm">1 King size bed</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <FaBanSmoking className=" text-lg" />
                      <p className=" text-gray-500 text-sm">Non-smoking room</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <IoMdClose className=" text-blue-400 text-xl" />
                      <p className=" text-gray-500 text-sm">Non-refundable</p>
                    </div>
                    <div className=" flex items-center gap-2">
                      <IoMdCheckmarkCircleOutline className=" text-blue-400 text-xl" />
                      <p className=" text-gray-500 text-sm">All-inclusive</p>
                    </div>
                    <div className=" flex items-center gap-2">
                      <IoMdCheckmarkCircleOutline className=" text-blue-400 text-xl" />
                      <p className=" text-gray-500 text-sm">Online payment</p>
                    </div>
                  </div>
                  <div className=" col-span-1 w-full flex items-center justify-end">
                    <div className=" w-[280px] h-[140px] rounded-3xl overflow-hidden">
                      <Image
                        src="/New/hotel/checkout/room.jpg"
                        width={1000}
                        height={1000}
                        alt="Picture of the hotel"
                        className=" w-full  object-cover"
                      />
                    </div>
                  </div>
                </div>
                <div className=" mt-8">
                  <div className=" font-semibold text-xl flex items-center justify-between">
                    <p>Online Payment</p>
                    <p>7657$</p>
                  </div>
                  <div className=" mt-3 flex items-center justify-between">
                    <p>1 room, 2 guests, 4 nights </p>
                    <p>6849 $</p>
                  </div>
                  <div className=" mt-3 flex items-center justify-between text-sm">
                    <p>Taxes and Fees </p>
                    <p>808 $</p>
                  </div>
                  <div className=" mt-3 flex items-center justify-between text-xs">
                    <p>Accommodation Tax </p>
                    <p>596 $</p>
                  </div>
                  <div className=" mt-3 flex items-center justify-between text-xs">
                    <p>VAT </p>
                    <p>212 $</p>
                  </div>
                  <p className=" mt-5">
                    Above balance is accurate if no extra services agreed
                    locally, apart from pre-booked items already included.
                  </p>
                </div>
              </div>
              <div className=" mt-8 border border-gray-300 p-5 rounded-lg">
                <p className=" font-semibold text-lg">Important</p>
                <ul className=" mt-3 pl-5 list-disc text-sm">
                  <li>
                    Please note: Additional services (e.g., extra bed) are not
                    included in the total amount.
                  </li>
                  <li className=" mt-1">
                    If payment was made using a credit card, it is mandatory to
                    present this card along with an ID (passport) at check-in.
                    Otherwise, the hotel may not recognize your booking or may
                    require payment through an alternative method.
                  </li>
                </ul>
                <p className=" text-blue-400 mt-5">
                  Plans changed? It happens.
                </p>
                <p className=" mt-2">
                  Visit the Your Reservations section to update your dates. You
                  can also reserve parking and select your preferred bed size
                  there.
                </p>
              </div>
            </div>
          </div>
          <div className=" mt-10">
            <p className=" font-semibold text-3xl">
              You’ll never travel alone with Oggo.air
            </p>
            <div className=" mt-8 flex gap-3">
              <div className=" w-[50px]">
                <Image
                  src={`/New/hotel/payment/-create-an-icon-representing--frequently-asked-que (2) 1.png`}
                  alt="line"
                  height={500}
                  width={500}
                  className=" w-full"
                />
              </div>
              <div>
                <p className=" text-xl font-semibold">
                  Frequently Asked Questions
                </p>
                <p className=" mt-2">
                  Got questions? Find all your answers{" "}
                  <Link href={"/faq/hotel"} className=" text-blue-400">
                    here
                  </Link>
                  .
                </p>
              </div>
            </div>
            <div className=" mt-5 flex gap-3">
              <div className=" w-[50px]">
                <Image
                  src={`/New/hotel/payment/draw-an-call-support-icon 1.png`}
                  alt="line"
                  height={500}
                  width={500}
                  className=" w-full"
                />
              </div>
              <div>
                <p className=" text-xl font-semibold">Support in approx. 30s</p>
                <p className=" mt-2">
                  Need{" "}
                  <Link href={"/help"} className=" text-blue-400">
                    help
                  </Link>{" "}
                  {`over the phone? We're all ears. We're here 24/7 and
                  will pick up your call in just a few seconds.`}
                  .
                </p>
              </div>
            </div>
            <div className=" mt-5 flex gap-3">
              <div className=" w-[50px]">
                <Image
                  src={`/New/hotel/payment/-create-an-icon-that-represents-the-concept-of--tr 1.png`}
                  alt="line"
                  height={500}
                  width={500}
                  className=" w-full"
                />
              </div>
              <div>
                <p className=" text-xl font-semibold">Worry-free Travel</p>
                <p className=" mt-2">
                  {`Explore the world at ease—you'll always be backed by our .`}
                  Need{" "}
                  <Link href={"/about-us"} className=" text-blue-400">
                    Service Guarantee
                  </Link>
                  .
                </p>
              </div>
            </div>
          </div>
          <div className=" mt-10 flex items-center justify-center">
            <div className=" bg-primary rounded-2xl px-20 py-5 flex items-center justify-center gap-3 text-white">
              <BsDownload className=" text-lg" />
              <p>Download voucher</p>
            </div>
          </div>
          <div className=" mt-10">
            <p className=" text-blue-600 text-xl font-semibold">
              Great deals with reliable service
            </p>
            <p className=" mt-3 text-gray-600 w-[360px]">
              Thank you for choosing Oggoair Customer Service Department
            </p>
            <p className=" mt-10 text-sm text-gray-600 w-[600px]">
              Do not forward this mail as it contains your personal information
              and booking details. Copyright @2024 oggoair all rights reserved{" "}
              <br />
              Using Oggoair website means that you agree with Oggoair{" "}
              <Link href={"/privacy&policy"} className=" text-blue-400">
                Privacy Policy
              </Link>
              .
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
