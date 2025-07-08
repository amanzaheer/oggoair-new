"use client";

import React, { use, useEffect, useRef, useState } from "react";
import { FaUserFriends } from "react-icons/fa";
import { IoIosArrowDown, IoMdSearch } from "react-icons/io";
import { PiArrowsLeftRightFill, PiSuitcaseRolling } from "react-icons/pi";
import FlightFrom from "./FlightFrom";
import { Airport, TravelersType } from "@/utils/types";
import FlightTo from "./FlightTo";
import FlightType from "./FlightType";
import FlightReturnDate from "./FlightReturnDate";
import FlightSingleDate from "./FlightSingleDate";
import Travelers from "./Travelers";
import { useSearchParams, usePathname, useRouter } from "next/navigation";
import axios from "axios";
import toast from "react-hot-toast";
import { Toaster } from "react-hot-toast";
import { searchDateFormateMaker, ShortDate } from "@/utils/dateFormate";
import { MdFlightTakeoff, MdOutlineClass } from "react-icons/md";
import FlightClass from "./FlightClass";
import Baggages from "./Baggages";
import { APILINK } from "../../../../data";

export default function HomeSearchComponent({ page }: any) {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();
  const [flightType, setFlightType] = useState("one-way");
  const [showFlightTypeSelection, setShowFlightTypeSelection] = useState(false);
  const [flightClass, setFlightClass] = useState("economy");
  const [travelers, setTravelers] = useState({
    adults: 1,
    child: 0,
    infant: 0,
    rooms: 1,
  });
  const [baggageTypes, setBaggageTypes] = useState("");
  const [showFlightClassSection, setShowFlightClassSelection] = useState(false);
  const [showBaggagesTypesSection, setShowBaggagesTypesSelection] =
    useState(false);
  const [showFlightTravelersSelection, setShowFlightTravelersSelection] =
    useState(false);
  const [showFlightFrom, setShowFlightFrom] = useState(false);
  const [showFlightTo, setShowFlightTo] = useState(false);
  const [showFlightReturnDate, setShowFlightReturnDate] = useState(false);
  const [showFlightSingleDate, setShowFlightSingleDate] = useState(false);
  const [searchFromString, setSearchFromString] = useState("");
  const [searchToString, setSearchToString] = useState("");
  const [flightFrom, setFilghtFrom] = useState<null | Airport>(null);
  const [flightTo, setFlightTo] = useState<null | Airport>(null);
  const [flightSingleDate, setFlightSingleDate] = useState(new Date());
  const [flightReturnDate, setFlightReturnDate] = useState<any>(new Date());

  const [flightFromSearchData, setFlightFromSearchData] = useState<Airport[]>(
    []
  );
  const [flightToSearchData, setFlightToSearchData] = useState<Airport[]>([]);

  const toggleShowFlightFrom = (e: any) => {
    if (e.target.closest(".donottoggle")) {
      return;
    }
    if (!showFlightFrom) {
      setShowFlightFrom(true);
      const fromInput = document.getElementById("fromInput");
      fromInput?.focus();
    }
  };

  const toggleShowFlightTo = (e: any) => {
    if (!showFlightTo) {
      setShowFlightTo(true);
      const fromInput = document.getElementById("fromInput2");
      fromInput?.focus();
    }
  };
  const toggleShowFlightTravelers = (e: any) => {
    if (!showFlightTravelersSelection) {
      setShowFlightTravelersSelection(true);
    }
  };
  const toggleShowFlightClass = (e: any) => {
    if (!showFlightClassSection) {
      setShowFlightClassSelection(true);
    }
  };
  const toggleShowBaggageTypes = (e: any) => {
    if (!showBaggagesTypesSection) {
      setShowBaggagesTypesSelection(true);
    }
  };
  const toggleShowFlightReturnDate = (e: any) => {
    if (!showFlightReturnDate) {
      setShowFlightReturnDate(true);
    }
  };
  const toggleShowFlightSingleDate = (e: any) => {
    if (!showFlightSingleDate) {
      setShowFlightSingleDate(true);
    }
  };

  const formatString = (str: string) => {
    return str
      .split(/(\s|,)/) // split and keep spaces and commas as separate tokens
      .map(
        (token) =>
          /^[a-zA-Z]+$/.test(token)
            ? token.charAt(0).toUpperCase() + token.slice(1).toLowerCase()
            : token // keep punctuation/space unchanged
      )
      .join("");
  };

  useEffect(() => {
    function handleClickOutside(event: any) {
      const flightFromElement = document.getElementById(
        "flight-from-container"
      );
      const flightToElement = document.getElementById("flight-to-container");
      const flightType = document.getElementById("flight-type");
      const flightTravelers = document.getElementById("travelers");
      const flightDate = document.getElementById("flight-date");
      const flightSingleDate = document.getElementById("flight-date");
      const flightClass = document.getElementById("flightClass");
      const baggageTypes = document.getElementById("baggageTypes");

      if (
        flightFromElement &&
        !flightFromElement.contains(event.target) &&
        !event.target.closest(".flight-from-container") &&
        !event.target.closest(".donottoggle")
      ) {
        setShowFlightFrom(false);
      }
      if (
        flightToElement &&
        !flightToElement.contains(event.target) &&
        !event.target.closest(".flight-to-container")
      ) {
        setShowFlightTo(false);
      }
      if (flightType && !flightType.contains(event.target)) {
        setShowFlightTypeSelection(false);
      }
      if (
        flightTravelers &&
        !flightTravelers.contains(event.target) &&
        !event.target.closest(".donotclose")
      ) {
        setShowFlightTravelersSelection(false);
      }
      if (
        flightClass &&
        !flightClass.contains(event.target) &&
        !event.target.closest(".donotclose")
      ) {
        setShowFlightClassSelection(false);
      }
      if (
        baggageTypes &&
        !baggageTypes.contains(event.target) &&
        !event.target.closest(".donotclose")
      ) {
        setShowBaggagesTypesSelection(false);
      }
      if (
        flightDate &&
        !flightDate.contains(event.target) &&
        !event.target.closest(".donotclose")
      ) {
        setShowFlightReturnDate(false);
      }
      if (
        flightSingleDate &&
        !flightSingleDate.contains(event.target) &&
        !event.target.closest(".donotclose")
      ) {
        setShowFlightSingleDate(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
  }, [
    showFlightFrom,
    showFlightTo,
    showFlightTypeSelection,
    showFlightTravelersSelection,
    showFlightReturnDate,
    showFlightSingleDate,
    showFlightClassSection,
    showBaggagesTypesSection,
  ]);

  useEffect(() => {
    if (flightFrom) {
      setSearchFromString(
        formatString(
          `${flightFrom.address.cityName}, ${flightFrom.address.countryName}`
        )
      );
    }
  }, [flightFrom]);

  useEffect(() => {
    if (flightTo) {
      setSearchToString(
        formatString(
          `${flightTo.address.cityName}, ${flightTo.address.countryName}`
        )
      );
    }
  }, [flightTo]);

  const debounceTimeoutRef = useRef<null | NodeJS.Timeout>(null);
  const apiCall = async (value: string, option: string) => {
    if (!value) {
      return;
    }
    try {
      const res = await axios.get(
        `${APILINK}/api/flights/airports?search=${value}`
      );

      if (option === "from") {
        setFlightFromSearchData(res.data.data);
      } else {
        setFlightToSearchData(res.data.data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const changeSearchValue = (value: string, option: string) => {
    if (option === "from") {
      setSearchFromString(value);
      if (debounceTimeoutRef.current) {
        clearTimeout(debounceTimeoutRef.current);
      }
      debounceTimeoutRef.current = setTimeout(() => {
        apiCall(value, option);
      }, 1000);
    } else {
      setSearchToString(value);
      if (debounceTimeoutRef.current) {
        clearTimeout(debounceTimeoutRef.current);
      }
      debounceTimeoutRef.current = setTimeout(() => {
        apiCall(value, option);
      }, 1000);
    }
  };

  const switchTravelData = () => {
    if (flightFrom && flightTo) {
      const from = { ...flightTo };
      const to = { ...flightFrom };
      setFilghtFrom(from);
      setFlightTo(to);
      setSearchFromString(
        formatString(`${from.address.cityName}, ${from.address.countryName}`)
      );
      setSearchToString(
        formatString(`${to.address.cityName} ${to.address.countryName}`)
      );
    }
  };

  const handleSearch = () => {
    if (!flightFrom || !flightTo || !flightSingleDate || !flightReturnDate) {
      return toast.error("Please fill all fields.");
    }

    const params = new URLSearchParams(searchParams.toString());
    params.set("flightType", flightType);
    params.set("flightClass", flightClass);
    params.set("adults", `${travelers.adults}`);
    params.set("child", `${travelers.child}`);
    params.set("infant", `${travelers.infant}`);
    params.set("depAirport", `${flightFrom.iataCode}`);
    params.set("arrAirport", `${flightTo.iataCode}`);
    params.set("depDate", `${searchDateFormateMaker(flightSingleDate)}`);
    flightType === "round-trip" &&
      params.set("returnDate", `${searchDateFormateMaker(flightReturnDate)}`);

    if (pathname === "/") {
      replace(`/flight/search?${params.toString()}`);
    } else if (pathname === "/flight") {
      replace(`${pathname}/search?${params.toString()}`);
    } else if (pathname === "/flight/search") {
      replace(`${pathname}?${params.toString()}`);
    }
  };

  // useEffect(() => {
  //   if (pathname === "/flight/search") {
  //     const flightType = searchParams.get("flightType");
  //     const flightClass = searchParams.get("flightClass");
  //     const adults = searchParams.get("adults");
  //     const child = searchParams.get("child");
  //     const infant = searchParams.get("infant");
  //     const depAirport = searchParams.get("depAirport");
  //     const arrAirport = searchParams.get("arrAirport");
  //     const depDate = searchParams.get("depDate");
  //     const returnDate = searchParams.get("returnDate");

  //     // assinging data
  //     flightType && setFlightType(flightType);
  //     flightClass && setFlightClass(flightClass);

  //     depDate && setFlightSingleDate(new Date(depDate));

  //     returnDate &&
  //       flightType === "round-trip" &&
  //       setFlightReturnDate(new Date(returnDate));

  //     adults &&
  //       child &&
  //       infant &&
  //       setTravelers({
  //         adults: parseInt(adults),
  //         child: parseInt(child) || 0,
  //         infant: parseInt(infant) || 0,
  //       });

  //     searchDateUpdate(`${depAirport},${arrAirport}`);
  //   }
  // }, [searchParams]);

  // const searchDateUpdate = async (iataCodes: string) => {
  //   try {
  //     const res = await axios.get(
  //       `${APILINK}/api/flights/airports?iataCodes=${iataCodes}`
  //     );
  //     const depAirport = searchParams.get("depAirport");

  //     res.data.data.forEach((airport: Airport) => {
  //       if (airport.iataCode === depAirport) {
  //         setFilghtFrom(airport);
  //       } else {
  //         setFlightTo(airport);
  //       }
  //     });
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  return (
    <div className={` w-full rounded-tl-none rounded-lg  bg-[#F8F9FE]`}>
      <>
        <div className={`p-5 `}>
          <div className=" flex items-center flex-wrap gap-3 sm:gap-5">
            <div
              onClick={() =>
                setShowFlightTypeSelection(!showFlightTypeSelection)
              }
              className=" cursor-pointer flex items-center gap-1 relative"
            >
              {showFlightTypeSelection && (
                <FlightType
                  flightType={flightType}
                  setFlightType={setFlightType}
                />
              )}
              <MdFlightTakeoff className=" mr-1 text-lg" />
              <p>{flightType === "one-way" ? "One Way" : "Round Trip"}</p>
              <IoIosArrowDown className="text-gray-700" />
            </div>
            <div
              onClick={toggleShowFlightTravelers}
              className="cursor-pointer flex items-center gap-1 relative"
            >
              {showFlightTravelersSelection && (
                <Travelers
                  flightClass={flightClass}
                  setFlightClass={setFlightClass}
                  travelers={travelers}
                  setTravelers={setTravelers}
                  setShowTravelersSelection={setShowFlightTravelersSelection}
                  option="flight"
                />
              )}
              <FaUserFriends className=" text-gray-700" />
              <p>Travelers</p>
              <IoIosArrowDown className="text-gray-700" />
            </div>
            <div
              onClick={toggleShowFlightClass}
              className="cursor-pointer flex items-center gap-1 relative"
            >
              {showFlightClassSection && (
                <FlightClass
                  flightClass={flightClass}
                  setFlightClass={setFlightClass}
                  setShowFlightClassSelection={setShowFlightClassSelection}
                />
              )}

              <MdOutlineClass />
              <p className=" capitalize">
                {flightClass === "premium_economy"
                  ? "Premium Economy"
                  : flightClass}
              </p>
              <IoIosArrowDown className="text-gray-700" />
            </div>
            {/* <div
              onClick={toggleShowBaggageTypes}
              className="cursor-pointer flex items-center gap-1 relative"
            >
              {showBaggagesTypesSection && (
                <Baggages
                  baggageTypes={baggageTypes}
                  setBaggageTypes={setBaggageTypes}
                  setShowBaggagesTypesSelection={setShowBaggagesTypesSelection}
                />
              )}

              <PiSuitcaseRolling className=" text-lg" />
              <p className=" capitalize">
                {baggageTypes ? baggageTypes : "Baggage"}
              </p>
              <IoIosArrowDown className="text-gray-700" />
            </div> */}
          </div>
          <div className=" grid grid-cols-1 lg:grid-cols-2 gap-3 mt-5">
            <div className=" grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div
                id="flight-from-container"
                onClick={(e) => toggleShowFlightFrom(e)}
                className=" cursor-pointer relative"
              >
                <div
                  onClick={switchTravelData}
                  className="donottoggle absolute top-1/2 -translate-y-1/2  -right-5 bg-primary h-8 w-8 rounded-full flex items-center justify-center cursor-pointer shadow z-40"
                >
                  <PiArrowsLeftRightFill className=" text-white font-semibold text-lg" />
                </div>
                <input
                  placeholder="Select Departure.."
                  type="text"
                  value={searchFromString}
                  onChange={(e) => changeSearchValue(e.target.value, "from")}
                  id="fromInput"
                  className=" bg-white p-5 rounded-md placeholder:text-gray-500 placeholder:text-sm w-full focus:outline-none"
                />
                {showFlightFrom && searchFromString.length > 1 && (
                  <FlightFrom
                    setShowFlightFrom={setShowFlightFrom}
                    initialData={flightFromSearchData}
                    setFilghtFrom={setFilghtFrom}
                  />
                )}
                {flightFrom && (
                  <p className=" text-gray-500 text-xs absolute top-1/2 -translate-y-1/2 right-5">
                    {flightFrom.iataCode}
                  </p>
                )}
              </div>
              <div
                id="flight-to-container"
                onClick={(e) => toggleShowFlightTo(e)}
                className=" cursor-pointer relative"
              >
                <input
                  placeholder="Select Destination.."
                  type="text"
                  id="fromInput2"
                  value={searchToString}
                  onChange={(e) => changeSearchValue(e.target.value, "to")}
                  className="bg-white p-5 rounded-md placeholder:text-gray-500 placeholder:text-sm w-full focus:outline-none"
                />
                {showFlightTo && searchToString.length > 1 && (
                  <FlightTo
                    setShowFlightTo={setShowFlightTo}
                    initialData={flightToSearchData}
                    setFlightTo={setFlightTo}
                  />
                )}
                {flightTo && (
                  <p className=" text-gray-500 text-xs absolute top-1/2 -translate-y-1/2 right-3">
                    {flightTo.iataCode}
                  </p>
                )}
              </div>
            </div>
            <div className=" grid grid-cols-8 gap-3">
              <div
                onClick={
                  flightType === "one-way"
                    ? toggleShowFlightSingleDate
                    : toggleShowFlightReturnDate
                }
                className=" col-span-8 sm:col-span-6 relative grid grid-cols-2 gap-3"
                id="flight-date"
              >
                {showFlightReturnDate && (
                  <FlightReturnDate
                    setShowFlightReturnDate={setShowFlightReturnDate}
                    flightSingleDate={flightSingleDate}
                    setFlightSingleDate={setFlightSingleDate}
                    flightReturnDate={flightReturnDate}
                    setFlightReturnDate={setFlightReturnDate}
                  />
                )}
                {showFlightSingleDate && (
                  <FlightSingleDate
                    setShowFlightSingleDate={setShowFlightSingleDate}
                    flightSingleDate={flightSingleDate}
                    setFlightSingleDate={setFlightSingleDate}
                  />
                )}
                <div
                  className={`${
                    flightType === "one-way" ? "col-span-2" : "col-span-1"
                  } bg-white rounded-md cursor-pointer p-5 flex items-center`}
                >
                  {flightSingleDate ? (
                    <p className="text-gray-800 text-sm font-semibold">
                      {ShortDate(new Date(flightSingleDate))}
                      {/* {flightSingleDate.toDateString()} */}
                    </p>
                  ) : (
                    <p className=" text-gray-500 text-sm">Departure Date</p>
                  )}
                </div>
                {flightType === "round-trip" && (
                  <div className=" col-span-1 bg-white rounded-md cursor-pointer p-5 flex items-center">
                    {flightReturnDate ? (
                      <p className="text-gray-800 text-sm font-semibold">
                        {ShortDate(new Date(flightReturnDate))}
                        {/* {flightReturnDate?.toDateString()} */}
                      </p>
                    ) : (
                      <p className=" text-gray-500 text-sm">Return</p>
                    )}
                  </div>
                )}
              </div>
              <div
                onClick={handleSearch}
                className=" col-span-8 sm:col-span-2 cursor-pointer bg-primary text-white w-full h-full rounded-md flex items-center justify-center py-3 sm:py-0 "
              >
                <div className=" flex items-center justify-center gap-1 w-full h-full">
                  {pathname.includes("/flight/search") ? (
                    <p>Update</p>
                  ) : (
                    <>
                      <IoMdSearch className=" text-xl" />
                      <p className="">Search</p>
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
      {pathname.includes("flight") && <Toaster />}
    </div>
  );
}
