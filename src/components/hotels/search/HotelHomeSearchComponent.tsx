"use client";

import React, { Suspense, useEffect, useRef, useState } from "react";
import { IoMdSearch } from "react-icons/io";
import Travelers from "./Travelers";
import HotelBookDate from "./HotelBookDate";
import HotelFrom from "./HotelFrom";
import { usePathname, useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";
import { FaCheck, FaRegCalendar } from "react-icons/fa6";
import { searchDateFormateMaker, ShortDate } from "@/utils/dateFormate";
import toast from "react-hot-toast";
import axios from "axios";
import { mapboxAccessToken } from "../../../../data";

export default function HotelHomeSearchComponent() {
  const [initialData, setInitialData] = useState([]);

  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();
  const [hoteBookingCheckinDate, setHotelBookingCheckinDate] = useState<any>(
    new Date()
  );
  const [hoteBookingCheckoutDate, setHotelBookingCheckoutDate] = useState<any>(
    new Date()
  );
  const [hotelFromSearchData, setHotelFromSearchData] = useState<any>([]);
  const [searchFromString, setSearchFromString] = useState("");
  const [freeCancellationChecked, setFreeCancellationChecked] = useState(false);
  const [bestRatingChecked, setBestRatingChecked] = useState(false);

  const [travelers, setTravelers] = useState({
    adults: 1,
    child: 0,
    infant: 0,
    rooms: 1,
  });

  const [flightFrom, setFilghtFrom] = useState<any>(null);

  const [showHotelTravelersSelection, setShowHotelTravelersSelection] =
    useState(false);
  const [showHotelBookDate, setShowHotelBookDate] = useState(false);
  const [showHotelFrom, setShowHotelFrom] = useState(false);

  const toggleShowHotelTravelers = (e: any) => {
    if (!showHotelTravelersSelection) {
      setShowHotelTravelersSelection(true);
    }
  };

  const toggleShowHotelBookDate = (e: any) => {
    if (!showHotelBookDate) {
      setShowHotelBookDate(true);
    }
  };

  const toggleShowFlightFrom = (e: any) => {
    if (e.target.closest(".donottoggle")) {
      return;
    }
    if (!showHotelFrom) {
      setShowHotelFrom(true);
      const fromInput = document.getElementById("fromInput");
      fromInput?.focus();
    }
  };

  useEffect(() => {
    if (flightFrom) {
      setSearchFromString(`${flightFrom.place_name}`);
    }
  }, [flightFrom]);

  const debounceTimeoutRef = useRef<null | NodeJS.Timeout>(null);
  const apiCall = async (value: string) => {
    if (!value) {
      return;
    }
    if (value.length <= 2) {
      return;
    }
    try {
      // Simulating API response

      const response = await axios.get(
        `https://api.mapbox.com/geocoding/v5/mapbox.places/${value}.json`,
        {
          params: {
            access_token: mapboxAccessToken,
            autocomplete: true,
            limit: 10,
          },
        }
      );
      console.log(response.data.features);
      setHotelFromSearchData(response.data.features);
    } catch (error) {
      console.log(error);
    }
  };

  const changeSearchValue = (value: string) => {
    setSearchFromString(value);
    if (value) {
      if (debounceTimeoutRef.current) {
        clearTimeout(debounceTimeoutRef.current);
      }
      debounceTimeoutRef.current = setTimeout(() => {
        apiCall(value);
      }, 1000);
    } else {
      setHotelFromSearchData(initialData);
    }
  };

  useEffect(() => {
    setHotelFromSearchData(initialData);
  }, [initialData]);

  useEffect(() => {
    function handleClickOutside(event: any) {
      const Travelers = document.getElementById("travelers");
      const hotelBookDate = document.getElementById("hotel-date");
      const hotelFromElement = document.getElementById("hotel-from-container");

      if (
        hotelFromElement &&
        !hotelFromElement.contains(event.target) &&
        !event.target.closest(".hotel-from-container") &&
        !event.target.closest(".donottoggle")
      ) {
        setShowHotelFrom(false);
      }

      if (
        Travelers &&
        !Travelers.contains(event.target) &&
        !event.target.closest(".donotclose")
      ) {
        setShowHotelTravelersSelection(false);
      }
      if (
        hotelBookDate &&
        !hotelBookDate.contains(event.target) &&
        !event.target.closest(".donotclose")
      ) {
        setShowHotelBookDate(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
  }, [showHotelTravelersSelection, showHotelBookDate, showHotelFrom]);

  const handleSearch = () => {
    if (flightFrom === null) {
      return toast.error("Please select a city or hotel");
    }

    const params = new URLSearchParams(searchParams.toString());
    params.set("adults", `${travelers.adults}`);
    params.set("child", `${travelers.child}`);
    params.set("infant", `${travelers.infant}`);
    params.set("latitude", `${flightFrom.geometry.coordinates[1]}`);
    params.set("longitude", `${flightFrom.geometry.coordinates[0]}`);
    params.set("place_name", `${flightFrom.place_name}`);
    params.set("rooms", `${travelers.rooms}`);
    params.set("checkin", `${searchDateFormateMaker(hoteBookingCheckinDate)}`);
    params.set(
      "checkout",
      `${searchDateFormateMaker(hoteBookingCheckoutDate)}`
    );
    params.set("freeCancellation", `${freeCancellationChecked}`);
    params.set("bestRating", `${bestRatingChecked}`);

    replace(`/hotel/search?${params.toString()}`);
  };

  // console.log(hoteBookingCheckinDate);

  function formatBooking(booking: any) {
    let result = [];

    // Add adults to the result string
    if (booking.adults > 0) {
      result.push(`${booking.adults} adult${booking.adults > 1 ? "s" : ""}`);
    }

    // Add children to the result string
    if (booking.child > 0) {
      result.push(`${booking.child} child${booking.child > 1 ? "ren" : ""}`);
    }

    // Add infants to the result string
    if (booking.infant > 0) {
      result.push(`${booking.infant} infant${booking.infant > 1 ? "s" : ""}`);
    }

    // Add rooms to the result string
    if (booking.rooms > 0) {
      result.push(`${booking.rooms} room${booking.rooms > 1 ? "s" : ""}`);
    }

    return result.join(", ");
  }

  return (
    <div className={` w-full rounded-tl-none rounded-lg bg-[#F8F9FE]`}>
      <div className={`p-5 `}>
        <div className=" w-full rounded-lg">
          <div className=" grid grid-cols-5 gap-3 mt-5">
            <div
              id="hotel-from-container"
              onClick={(e) => toggleShowFlightFrom(e)}
              className=" col-span-5 lg:col-span-2  cursor-pointer relative"
            >
              {showHotelFrom && searchFromString.length > 2 && (
                <HotelFrom
                  initialData={hotelFromSearchData}
                  setFilghtFrom={setFilghtFrom}
                  setShowHotelFrom={setShowHotelFrom}
                />
              )}

              <input
                placeholder="City or hotel"
                type="text"
                value={searchFromString}
                onChange={(e) => changeSearchValue(e.target.value)}
                id="fromInput"
                className=" font-medium p-5 bg-white rounded-md placeholder:text-gray-500 placeholder:text-sm w-full focus:outline-none"
              />
            </div>
            <div
              onClick={toggleShowHotelBookDate}
              className=" col-span-5 lg:col-span-2 relative grid grid-cols-1 sm:grid-cols-2 gap-3 cursor-pointer"
            >
              {showHotelBookDate && (
                <HotelBookDate
                  setshowHotelBookDate={setShowHotelBookDate}
                  hoteBookingCheckinDate={hoteBookingCheckinDate}
                  setHotelBookingCheckinDate={setHotelBookingCheckinDate}
                  hoteBookingCheckoutDate={hoteBookingCheckoutDate}
                  setHotelBookingCheckoutDate={setHotelBookingCheckoutDate}
                />
              )}
              <div className="  border border-gray-300 rounded-lg p-5 bg-white cursor-pointer flex items-center justify-between">
                {hoteBookingCheckinDate ? (
                  <p className="text-gray-800 font-medium ">
                    {ShortDate(new Date(hoteBookingCheckinDate))}
                  </p>
                ) : (
                  <p className="text-gray-500 text-sm ">Check-in Date</p>
                )}
                <FaRegCalendar className=" text-lg" />
              </div>
              <div className="  border border-gray-300 rounded-lg p-5 bg-white cursor-pointer flex items-center justify-between">
                {hoteBookingCheckoutDate ? (
                  <p className="text-gray-800 font-medium">
                    {ShortDate(new Date(hoteBookingCheckoutDate))}
                  </p>
                ) : (
                  <p className="text-gray-500 text-sm">Check-out Date</p>
                )}
                <FaRegCalendar className=" text-lg" />
              </div>
            </div>
            <div
              onClick={toggleShowHotelTravelers}
              className=" col-span-5 lg:col-span-1 border border-gray-300 rounded-lg p-5 bg-white cursor-pointer flex items-center justify-between relative"
            >
              {showHotelTravelersSelection && (
                <Travelers
                  travelers={travelers}
                  setTravelers={setTravelers}
                  setShowHotelTravelersSelection={
                    setShowHotelTravelersSelection
                  }
                  option="hotel"
                />
              )}
              <p className=" font-medium">{formatBooking(travelers)}</p>
            </div>
          </div>
          <div className=" mt-5 flex items-center justify-between gap-5 flex-wrap">
            <div className=" flex items-center gap-5 flex-wrap">
              <div className=" flex items-center gap-2">
                <div
                  onClick={() =>
                    setFreeCancellationChecked(!freeCancellationChecked)
                  }
                  className={` h-5 w-5 cursor-pointer rounded flex items-center justify-center border ${
                    freeCancellationChecked
                      ? "bg-primary text-white"
                      : " border-gray-300"
                  }`}
                >
                  {freeCancellationChecked && <FaCheck />}
                </div>
                <p
                  onClick={() =>
                    setFreeCancellationChecked(!freeCancellationChecked)
                  }
                  className=" cursor-pointer font-medium"
                >
                  Free cancellation
                </p>
              </div>
              <div className=" flex items-center gap-2">
                <div
                  onClick={() => setBestRatingChecked(!bestRatingChecked)}
                  className={` h-5 w-5 cursor-pointer rounded flex items-center justify-center border ${
                    bestRatingChecked
                      ? "bg-primary text-white"
                      : " border-gray-300"
                  }`}
                >
                  {bestRatingChecked && <FaCheck />}
                </div>
                <p
                  onClick={() => setBestRatingChecked(!bestRatingChecked)}
                  className=" cursor-pointer font-medium"
                >
                  Best rating
                </p>
              </div>
            </div>
            <div
              onClick={handleSearch}
              className=" cursor-pointer bg-primary text-white w-[260px] py-4 rounded-md flex items-center justify-center"
            >
              <div className=" cursor-pointer flex items-center justify-center gap-1 w-full h-full">
                <IoMdSearch className=" text-xl" />
                <p className="">Search</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
