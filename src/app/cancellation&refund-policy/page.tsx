import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Page() {
  return (
    <div>
      <Header />
      <div className=" w-full flex items-center justify-center pt-24">
        <div className="w-full xl:w-[1220px] 2xl:w-[1420px]">
          <div className="rounded-3xl bg-[#7BCAFF1A] flex items-center justify-between flex-wrap gap-5 p-10">
            <div>
              <p className=" font-semibold text-3xl">Terms Of Use</p>
              <p className=" font-medium mt-2">Cancellation & Refund Policy</p>
            </div>
            <div className="">
              <div className=" w-[200px]">
                <Image
                  src={"/New/cencle-and-refund/3918186.jpg"}
                  alt=""
                  height={2000}
                  width={2000}
                  className=" w-full rounded-lg "
                />
              </div>
            </div>
          </div>
          <div className=" w-full px-5">
            <div className=" mt-10">
              <p className=" text-lg sm:text-2xl font-semibold">
                Cancellation and Refund Policy
              </p>
              <p className=" mt-5 sm:text-lg">
                Last updated: 18.04.2025 <br /> At oggoair, we understand that
                plans can change. <br /> Our goal is to provide a smooth and
                fair cancellation process for all of our guests.
              </p>
            </div>
            <div>
              <p className=" mt-10 text-lg sm:text-2xl font-semibold">
                1. Cancellation by the Customer
              </p>
              <ul className="list-disc pl-5 text-gray-700 sm:text-lg space-y-2 mt-5">
                <li>
                  You may cancel your reservation up to 24 hours before
                  departure for a full refund.
                </li>
                <li>
                  If you cancel less than 24 hours before departure, the booking
                  is non-refundable.
                </li>
                <li>
                  However, if your booking was made within the past 1 hour, you
                  may still request a full refund—even if the cruise is
                  scheduled for the same day.
                </li>
                <li>
                  No-shows or late arrivals after the ship has departed are not
                  eligible for refunds.
                </li>
                <li>
                  To cancel or modify your reservation, please contact us at
                  <a
                    href="mailto:support@oggoair.com"
                    className=" text-blue-500 hover:underline ml-1"
                  >
                    support@oggoair.com
                  </a>{" "}
                  or
                  <a
                    href="mailto:reservations@oggoair.com"
                    className=" text-blue-500 hover:underline ml-1"
                  >
                    reservations@oggoair.com
                  </a>
                  with your name and booking details.
                </li>
              </ul>
            </div>
            <div>
              <p className=" mt-10 text-lg sm:text-2xl font-semibold">
                2. Booking Modifications
              </p>
              <ul className="list-disc pl-5 text-gray-700 sm:text-lg space-y-2 mt-5">
                <li>
                  You may request to change your reservation time, date, or
                  guest count up to 24 hours before departure, depending on
                  availability.
                </li>
                <li>
                  Changes requested within 24 hours are not guaranteed, but we
                  will do our best to accommodate you.
                </li>
                <li>
                  Same-day changes are not possible after the ship has departed.
                </li>
              </ul>
            </div>
            <div>
              <p className=" mt-10 text-lg sm:text-2xl font-semibold">
                3. Cancellation by oggoair
              </p>
              <p className=" mt-5 sm:text-lg">
                In very rare cases (e.g., severe weather or technical issues),
                oggoair may need to cancel a tour.
              </p>
              <p className=" sm:text-lg">
                If we cancel your cruise, you will receive:
              </p>
              <ul className="list-disc pl-5 text-gray-700 sm:text-lg space-y-2 mt-5">
                <li>A full refund, or</li>
                <li>The option to reschedule for another available date</li>
              </ul>
            </div>
            <div>
              <p className=" mt-10 text-lg sm:text-2xl font-semibold">
                4. Refund Process
              </p>
              <ul className="list-disc pl-5 text-gray-700 sm:text-lg space-y-2 mt-5">
                <li>
                  Refunds are issued to the original payment method within 5–10
                  business days.
                </li>
                <li>
                  Processing times may vary depending on your bank or payment
                  provider.
                </li>
                <li>
                  {`If your refund hasn't arrived after 10 business days, please
                contact us for assistance.`}
                </li>
              </ul>
            </div>
            <div className=" pb-5">
              <p className=" mt-10 text-lg sm:text-2xl font-semibold">
                5. Questions?
              </p>
              <p className=" mt-5 sm:text-lg">
                For cancellations, modifications, or questions, reach out
                anytime:
              </p>

              <Link
                href={"/contact-us"}
                className=" sm:text-lg text-blue-500 mt-2 hover:underline"
              >
                Contact Page
              </Link>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
