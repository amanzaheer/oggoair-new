"use client";

import React, { useEffect, useState } from "react";
import BookingComponent from "./BookingComponent";
import { useSession } from "next-auth/react";
import { APILINK } from "../../../data";
import axios from "axios";
import LoadingComponent from "../layout/LoadingComponent";

export default function FlightBookingHistory() {
  const { data: session, status } = useSession();
  const [loading, setLoading] = useState(false);
  const [bookings, setBookings] = useState([]);

  const getUserBookings = async () => {
    try {
      if (!session || !session.user || !session.user.accessToken) {
        console.error("Session or user or token is not available");
        return;
      }
      setLoading(true);
      const res = await axios.get(
        `${APILINK}/api/users/bookings?bookingFor=flight`,
        {
          headers: {
            Authorization: `Bearer ${session.user.accessToken}`,
          },
        }
      );
      setBookings(res.data.data);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };

  useEffect(() => {
    getUserBookings();
  }, [session]);

  if (loading) {
    return <LoadingComponent />;
  }

  return (
    <div className=" w-full bg-white shadow-custom rounded-md mt-5">
      <p className=" text-center pt-5 font-semibold text-lg">
        Flight Booking History
      </p>
      {bookings.map((booking: any, index: number) => {
        return <BookingComponent key={index} booking={booking} />;
      })}
    </div>
  );
}
