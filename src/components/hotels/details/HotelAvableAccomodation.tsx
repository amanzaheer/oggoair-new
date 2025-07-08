import React, { useEffect, useState } from "react";
import HotelAvableRooms from "./HotelAvableRooms";
// import FlightReturnDate from "@/components/flights/search/FlightReturnDate";
// import Travelers from "@/components/flights/search/Travelers";
// import { ShortDate } from "@/utils/dateFormate";
// import { set } from "mongoose";
// import Image from "next/image";
// import { FaRegCalendar } from "react-icons/fa6";
// import { IoIosArrowDown } from "react-icons/io";
// import { IoClose } from "react-icons/io5";

export default function HotelAvableAccomodation({
  showHotelReturnDate,
  setShowHotelReturnDate,
  hotelSingleDate,
  showHotelTravelers,
  setShowHotelTravelers,
  travelers,
  hotelReturnDate,
  hotelDetailsData,
}: any) {
  useEffect(() => {
    function handleClickOutside(event: any) {
      const hotelFromElement = document.getElementById("HotelDateSelector");
      const hotelTravelerElement = document.getElementById("travelers-section");

      if (hotelFromElement && !hotelFromElement.contains(event.target)) {
        setShowHotelReturnDate(false);
      }
      if (
        hotelTravelerElement &&
        !hotelTravelerElement.contains(event.target)
      ) {
        setShowHotelTravelers(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
  }, [showHotelReturnDate, showHotelTravelers]);

  return (
    <div className={`mt-20 `} id="available-accommodations">
      <HotelAvableRooms
        travelers={travelers}
        hotelSingleDate={hotelSingleDate}
        hotelReturnDate={hotelReturnDate}
        hotelDetailsData={hotelDetailsData}
      />
    </div>
  );
}
