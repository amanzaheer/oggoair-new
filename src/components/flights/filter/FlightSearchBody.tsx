"use client";

import React, { useEffect, useState } from "react";
import FlightFilterComponent from "./FlightFilterComponent";
import PriceFilter from "./PriceFilter";
import FlightList from "../List/FlightList";
import LoadingComponent from "@/components/layout/LoadingComponent";
import axios from "axios";
import { APILINK } from "../../../../data";
import { ApiResponse, FlightSearchData } from "@/utils/types";
import { useSearchParams } from "next/navigation";
import { FaFilter } from "react-icons/fa6";
import PriceCalander from "./PriceCalander";
import Link from "next/link";
import { IoIosArrowForward } from "react-icons/io";

export default function FlightSearchBody() {
  const [loading, setLoading] = useState(false);
  const [loadingMessage, setLoadingMessage] = useState<any>(null);
  const searchParams = useSearchParams();
  const [flightsDataList, setFlightsDataList] = useState<any>(null);
  const [displayFlightsDataList, setDisplayFlightsDataList] = useState<any>([]);
  const [showFilterComponent, setShowFilterComponent] = useState(false);
  // filter veriables
  const [selectedPriceType, setSelectedPriceType] = useState("recommended");
  const [filterTypes, setFilterTypes] = useState<any>({
    airlines: [],
    ticketRefund: [],
    ticketExchange: [],
    flightNumber: "",
    stopSelectedType: [],
    baggageSelectedType: [],
    departureRangeValues: [],
    arivalRangeValues: [],
    durationOfStop: [],
    travelTime: [],
    returnStopSelectedType: [],
    returnBaggageSelectedType: [],
    returnDepartureRangeValues: [],
    returnArivalRangeValues: [],
    returnDurationOfStop: [],
    returnTravelTime: [],
    PriceCalander: "",
    flightPrice: [],
  });
  const [filterAbleTypes, setFilterAbleTypes] = useState<any>({
    departureRangeValues: [],
    arivalRangeValues: [],
    travelTime: [],
    airlines: [],
    airlinesLogo: [],
    returnDepartureRangeValues: [],
    returnArivalRangeValues: [],
    returnTravelTime: [],
    flightPrice: [],
  });

  useEffect(() => {
    if (flightsDataList) {
      setLoading(true);

      let airlines: any = [];
      let airlinesLogo: any = [];
      const flightDates: any = [];
      let flightPrice = {
        min: parseFloat(flightsDataList.offers[0].total_amount),
        max: parseFloat(flightsDataList.offers[0].total_amount),
      };
      let depertureTime = {
        min: new Date(
          flightsDataList.offers[0].slices[0].segments[0].departing_at
        ).getTime(),
        max: new Date(
          flightsDataList.offers[0].slices[0].segments[0].departing_at
        ).getTime(),
      };
      let returnDepertureTime: any = null;

      let arivalTime = {
        min: new Date(
          flightsDataList.offers[0].slices[0].segments[
            flightsDataList.offers[0].slices[0].segments.length - 1
          ].arriving_at
        ).getTime(),
        max: new Date(
          flightsDataList.offers[0].slices[0].segments[
            flightsDataList.offers[0].slices[0].segments.length - 1
          ].arriving_at
        ).getTime(),
      };
      let returnArivalTime: any = null;

      let durationofStop: any = {
        min: 0,
        max: 0,
      };
      let returnDurationofStop: any = {
        min: 0,
        max: 0,
      };

      let travelTime: any = {
        min:
          new Date(
            flightsDataList.offers[0].slices[0].segments[
              flightsDataList.offers[0].slices[0].segments.length - 1
            ].arriving_at
          ).getTime() -
          new Date(
            flightsDataList.offers[0].slices[0].segments[0].departing_at
          ).getTime(),
        max:
          new Date(
            flightsDataList.offers[0].slices[0].segments[
              flightsDataList.offers[0].slices[0].segments.length - 1
            ].arriving_at
          ).getTime() -
          new Date(
            flightsDataList.offers[0].slices[0].segments[0].departing_at
          ).getTime(),
      };
      let returnTravelTime: any = null;

      if (flightsDataList.offers[0].slices.length === 2) {
        returnDepertureTime = {
          min: new Date(
            flightsDataList.offers[0].slices[1].segments[0].departing_at
          ).getTime(),
          max: new Date(
            flightsDataList.offers[0].slices[1].segments[0].departing_at
          ).getTime(),
        };

        returnArivalTime = {
          min: new Date(
            flightsDataList.offers[0].slices[1].segments[
              flightsDataList.offers[0].slices[1].segments.length - 1
            ].arriving_at
          ).getTime(),
          max: new Date(
            flightsDataList.offers[0].slices[1].segments[
              flightsDataList.offers[0].slices[1].segments.length - 1
            ].arriving_at
          ).getTime(),
        };

        returnTravelTime = {
          min:
            new Date(
              flightsDataList.offers[0].slices[1].segments[
                flightsDataList.offers[0].slices[1].segments.length - 1
              ].arriving_at
            ).getTime() -
            new Date(
              flightsDataList.offers[0].slices[1].segments[0].departing_at
            ).getTime(),
          max:
            new Date(
              flightsDataList.offers[0].slices[1].segments[
                flightsDataList.offers[0].slices[1].segments.length - 1
              ].arriving_at
            ).getTime() -
            new Date(
              flightsDataList.offers[0].slices[1].segments[0].departing_at
            ).getTime(),
        };
      }

      for (let i of flightsDataList.offers) {
        // airlines
        if (!airlines.includes(i.owner.name)) {
          airlines.push(i.owner.name);
        }

        // airlines logo
        if (!airlinesLogo.some((logo: any) => logo.name === i.owner.name)) {
          airlinesLogo.push({
            name: i.owner.name,
            logo: i.owner.logo_symbol_url,
          });
        }

        // flight date
        if (
          !flightDates.includes(new Date(i.slices[0].segments[0].departing_at))
        ) {
          flightDates.push(new Date(i.slices[0].segments[0].departing_at));
        }

        // flight price
        if (flightPrice.min > parseFloat(i.total_amount)) {
          flightPrice.min = parseFloat(i.total_amount);
        }
        if (flightPrice.max < parseFloat(i.total_amount)) {
          flightPrice.max = parseFloat(i.total_amount);
        }

        if (
          depertureTime.min >
          new Date(i.slices[0].segments[0].departing_at).getTime()
        ) {
          // deperture of time
          depertureTime.min = new Date(
            i.slices[0].segments[0].departing_at
          ).getTime();
        }
        if (
          depertureTime.max <
          new Date(i.slices[0].segments[0].departing_at).getTime()
        ) {
          depertureTime.max = new Date(
            i.slices[0].segments[0].departing_at
          ).getTime();
        }

        // return deperture of time
        if (i.slices.length === 2) {
          if (
            returnDepertureTime.min >
            new Date(i.slices[1].segments[0].departing_at).getTime()
          ) {
            returnDepertureTime.min = new Date(
              i.slices[1].segments[0].departing_at
            ).getTime();
          }
          if (
            returnDepertureTime.max <
            new Date(i.slices[1].segments[0].departing_at).getTime()
          ) {
            returnDepertureTime.max = new Date(
              i.slices[1].segments[0].departing_at
            ).getTime();
          }
        }

        // arrival of time
        if (
          arivalTime.min >
          new Date(
            i.slices[0].segments[i.slices[0].segments.length - 1].arriving_at
          ).getTime()
        ) {
          arivalTime.min = new Date(
            i.slices[0].segments[i.slices[0].segments.length - 1].arriving_at
          ).getTime();
        }
        if (
          arivalTime.max <
          new Date(
            i.slices[0].segments[i.slices[0].segments.length - 1].arriving_at
          ).getTime()
        ) {
          arivalTime.max = new Date(
            i.slices[0].segments[i.slices[0].segments.length - 1].arriving_at
          ).getTime();
        }

        // return arrival of time
        if (i.slices.length === 2) {
          if (
            returnArivalTime.min >
            new Date(
              i.slices[1].segments[i.slices[1].segments.length - 1].arriving_at
            ).getTime()
          ) {
            returnArivalTime.min = new Date(
              i.slices[1].segments[i.slices[1].segments.length - 1].arriving_at
            ).getTime();
          }
          if (
            returnArivalTime.max <
            new Date(
              i.slices[1].segments[i.slices[1].segments.length - 1].arriving_at
            ).getTime()
          ) {
            returnArivalTime.max = new Date(
              i.slices[1].segments[i.slices[1].segments.length - 1].arriving_at
            ).getTime();
          }
        }

        // travel time
        let currentTravelTime =
          new Date(
            i.slices[0].segments[i.slices[0].segments.length - 1].arriving_at
          ).getTime() -
          new Date(i.slices[0].segments[0].departing_at).getTime();

        if (travelTime.min > currentTravelTime) {
          travelTime.min = currentTravelTime;
        }

        if (travelTime.max < currentTravelTime) {
          travelTime.max = currentTravelTime;
        }

        // return travel time
        if (i.slices.length === 2) {
          let currentTravelTime =
            new Date(
              i.slices[1].segments[i.slices[1].segments.length - 1].arriving_at
            ).getTime() -
            new Date(i.slices[1].segments[0].departing_at).getTime();

          if (returnTravelTime.min > currentTravelTime) {
            returnTravelTime.min = currentTravelTime;
          }

          if (returnTravelTime.max < currentTravelTime) {
            returnTravelTime.max = currentTravelTime;
          }
        }
      }

      const newFilterAbleTyples: any = {
        departureRangeValues: [depertureTime.min, depertureTime.max],
        arivalRangeValues: [arivalTime.min, arivalTime.max],
        airlines: airlines,
        airlinesLogo: airlinesLogo,
        durationOfStop: [durationofStop.min, durationofStop.max],
        travelTime: [travelTime.min, travelTime.max],
        flightPrice: [flightPrice.min, flightPrice.max],
      };

      if (flightsDataList.offers[0].slices.length === 2) {
        newFilterAbleTyples.returnDepartureRangeValues = [
          returnDepertureTime.min,
          returnDepertureTime.max,
        ];

        newFilterAbleTyples.returnArivalRangeValues = [
          returnArivalTime.min,
          returnArivalTime.max,
        ];
        newFilterAbleTyples.returnDurationOfStop = [
          returnDurationofStop.min,
          returnDurationofStop.max,
        ];
        newFilterAbleTyples.returnTravelTime = [
          returnTravelTime.min,
          returnTravelTime.max,
        ];
      }

      const newFilterTypes = {
        ...filterTypes,
        departureRangeValues: [depertureTime.min, depertureTime.max],
        arivalRangeValues: [arivalTime.min, arivalTime.max],
        durationOfStop: [durationofStop.min, durationofStop.max],
        travelTime: [travelTime.min, travelTime.max],
        PriceCalander: new Date(
          flightsDataList.offers[0].slices[0].segments[0].departing_at
        ).getDay(),
        flightPrice: [flightPrice.min, flightPrice.max],
      };

      if (flightsDataList.offers[0].slices.length === 2) {
        newFilterTypes.returnDepartureRangeValues = [
          returnDepertureTime.min,
          returnDepertureTime.max,
        ];
        newFilterTypes.returnArivalRangeValues = [
          returnArivalTime.min,
          returnArivalTime.max,
        ];
        newFilterTypes.returnDurationOfStop = [
          returnDurationofStop.min,
          returnDurationofStop.max,
        ];
        newFilterTypes.returnTravelTime = [
          returnTravelTime.min,
          returnTravelTime.max,
        ];
      }

      setFilterAbleTypes(newFilterAbleTyples);
      setFilterTypes(newFilterTypes);
      setLoading(false);
    }
  }, [flightsDataList]);

  // console.log({ filterAbleTypes, filterTypes });

  useEffect(() => {
    if (flightsDataList) {
      setLoading(true);
      let displayData = [...flightsDataList.offers];

      // stop filter
      // const stopTypes = ["Non-stop", "1 layover", "2 or more layovers"];

      if (!filterTypes.stopSelectedType.length) {
        displayData = [...flightsDataList.offers];
      }

      if (filterTypes.stopSelectedType.includes("Non-stop")) {
        displayData = displayData.filter(
          (flight) => flight.slices[0].segments.length === 1
        );
      }

      if (filterTypes.stopSelectedType.includes("1 layover")) {
        displayData = displayData.filter(
          (flight) => flight.slices[0].segments.length === 2
        );
      }

      if (filterTypes.stopSelectedType.includes("2 or more layovers")) {
        displayData = displayData.filter(
          (flight) => flight.slices[0].segments.length >= 3
        );
      }

      if (flightsDataList.offers[0].slices.length === 2) {
        // return stop filter

        if (!filterTypes.returnStopSelectedType.length) {
          displayData = [...flightsDataList.offers];
        }

        if (filterTypes.returnStopSelectedType.includes("Non-stop")) {
          displayData = displayData.filter(
            (flight) => flight.slices[1].segments.length === 1
          );
        }

        if (filterTypes.returnStopSelectedType.includes("1 layover")) {
          displayData = displayData.filter(
            (flight) => flight.slices[1].segments.length === 2
          );
        }

        if (filterTypes.returnStopSelectedType.includes("2 or more layovers")) {
          displayData = displayData.filter(
            (flight) => flight.slices[1].segments.length >= 3
          );
        }
      }

      // baggage filter
      // const baggageTypes = ["Included", "Cary-on-luggage"];
      if (!filterTypes.baggageSelectedType.length) {
        displayData = [...displayData];
      }
      if (filterTypes.baggageSelectedType.includes("Included")) {
        displayData = [...displayData].filter((flight) =>
          flight.slices[0].segments[0].passengers[0]?.baggages?.some(
            (baggage: any) => baggage?.type === "checked"
          )
        );
      }

      if (filterTypes.baggageSelectedType.includes("Carry-on-luggage")) {
        displayData = [...displayData].filter((flight) =>
          flight.slices[0].segments[0].passengers[0]?.baggages?.some(
            (baggage: any) => baggage?.type === "carry_on"
          )
        );
      }

      if (flightsDataList.offers[0].slices.length === 2) {
        // return baggage filter

        if (!filterTypes.returnBaggageSelectedType.length) {
          displayData = [...displayData];
        }
        if (filterTypes.returnBaggageSelectedType.includes("Included")) {
          displayData = [...displayData].filter((flight) =>
            flight.slices[1].segments[0].passengers[0]?.baggages?.some(
              (baggage: any) => baggage?.type === "checked"
            )
          );
        }

        if (
          filterTypes.returnBaggageSelectedType.includes("Carry-on-luggage")
        ) {
          displayData = [...displayData].filter((flight) =>
            flight.slices[1].segments[0].passengers[0]?.baggages?.some(
              (baggage: any) => baggage?.type === "carry_on"
            )
          );
        }
      }

      // departure range filter
      displayData = [...displayData].filter(
        (flight) =>
          new Date(flight.slices[0].segments[0].departing_at).getTime() >=
            filterTypes.departureRangeValues[0] &&
          new Date(flight.slices[0].segments[0].departing_at).getTime() <=
            filterTypes.departureRangeValues[1]
      );

      if (flightsDataList.offers[0].slices.length === 2) {
        // return departure range filter
        displayData = [...displayData].filter(
          (flight) =>
            new Date(flight.slices[1].segments[0].departing_at).getTime() >=
              filterTypes.returnDepartureRangeValues[0] &&
            new Date(flight.slices[1].segments[0].departing_at).getTime() <=
              filterTypes.returnDepartureRangeValues[1]
        );
      }

      // arival range filter
      displayData = [...displayData].filter(
        (flight) =>
          new Date(
            flight.slices[0].segments[
              flight.slices[0].segments.length - 1
            ].arriving_at
          ).getTime() >= filterTypes.arivalRangeValues[0] &&
          new Date(
            flight.slices[0].segments[
              flight.slices[0].segments.length - 1
            ].arriving_at
          ).getTime() <= filterTypes.arivalRangeValues[1]
      );

      if (flightsDataList.offers[0].slices.length === 2) {
        displayData = [...displayData].filter(
          (flight) =>
            new Date(
              flight.slices[1].segments[
                flight.slices[1].segments.length - 1
              ].arriving_at
            ).getTime() >= filterTypes.returnArivalRangeValues[0] &&
            new Date(
              flight.slices[1].segments[
                flight.slices[1].segments.length - 1
              ].arriving_at
            ).getTime() <= filterTypes.returnArivalRangeValues[1]
        );
      }

      // airlines filter
      if (filterTypes.airlines.length) {
        displayData = [...displayData].filter((flight) =>
          filterTypes.airlines.includes(flight.owner.name)
        );
      }

      // travel time range filter
      displayData = [...displayData].filter(
        (flight) =>
          new Date(
            flight.slices[0].segments[
              flight.slices[0].segments.length - 1
            ].arriving_at
          ).getTime() -
            new Date(flight.slices[0].segments[0].departing_at).getTime() >=
            filterTypes.travelTime[0] &&
          new Date(
            flight.slices[0].segments[
              flight.slices[0].segments.length - 1
            ].arriving_at
          ).getTime() -
            new Date(flight.slices[0].segments[0].departing_at).getTime() <=
            filterTypes.travelTime[1]
      );

      if (flightsDataList.offers[0].slices.length === 2) {
        // return travel time range filter
        displayData = [...displayData].filter(
          (flight) =>
            new Date(
              flight.slices[1].segments[
                flight.slices[1].segments.length - 1
              ].arriving_at
            ).getTime() -
              new Date(flight.slices[1].segments[0].departing_at).getTime() >=
              filterTypes.returnTravelTime[0] &&
            new Date(
              flight.slices[1].segments[
                flight.slices[1].segments.length - 1
              ].arriving_at
            ).getTime() -
              new Date(flight.slices[1].segments[0].departing_at).getTime() <=
              filterTypes.returnTravelTime[1]
        );
      }

      // refund filter

      if (!filterTypes.ticketRefund.length) {
        displayData = [...displayData];
      }
      if (filterTypes.ticketRefund.includes("Refund")) {
        displayData = [...displayData].filter(
          (flight) => flight.conditions?.refund_before_departure?.allowed
        );
      }

      // exchange filter

      if (!filterTypes.ticketExchange.length) {
        displayData = [...displayData];
      }
      if (filterTypes.ticketExchange.includes("Can be exchange")) {
        displayData = [...displayData].filter(
          (flight) => flight.conditions?.change_before_departure?.allowed
        );
      }

      // price filter

      if (selectedPriceType === "recommended") {
        displayData = [...displayData];
      }
      if (selectedPriceType === "highest-price") {
        displayData = [...displayData].sort(
          (a, b) => b.total_amount - a.total_amount
        ); // Sort by highest price
      }

      if (selectedPriceType === "lowest-price") {
        displayData = [...displayData].sort(
          (a, b) => a.total_amount - b.total_amount
        ); // Sort by lowest price
      }

      // price filter
      displayData = [...displayData].filter(
        (flight) =>
          parseInt(flight.total_amount) >=
            parseInt(filterTypes.flightPrice[0]) &&
          parseInt(flight.total_amount) <= parseInt(filterTypes.flightPrice[1])
      );

      setDisplayFlightsDataList(displayData);
      setLoading(false);
    }
  }, [filterTypes, selectedPriceType, flightsDataList]);

  const changeFilterTypesValue = (
    option: keyof typeof filterTypes,
    value: any
  ) => {
    // console.log(option, value);
    const newFilterTypes = { ...filterTypes };
    newFilterTypes[option] = value;
    setFilterTypes(newFilterTypes);
  };

  useEffect(() => {
    if (searchParams) {
      const flightType = searchParams.get("flightType");
      const flightClass = searchParams.get("flightClass");
      const adults = searchParams.get("adults");
      const child = searchParams.get("child");
      const infant = searchParams.get("infant");
      const depAirport = searchParams.get("depAirport");
      const arrAirport = searchParams.get("arrAirport");
      const depDate = searchParams.get("depDate");
      const returnDate = searchParams.get("returnDate");

      getFlightsData({
        flightType,
        adults,
        child,
        infant,
        depAirport,
        arrAirport,
        depDate,
        returnDate,
        flightClass,
      });
    }
  }, [searchParams]);

  const getFlightsData = async (data: FlightSearchData) => {
    try {
      setLoading(true);
      const {
        flightType,
        adults,
        child,
        infant,
        depAirport,
        arrAirport,
        depDate,
        returnDate,
        flightClass,
      } = data;

      // Constructing slices array
      const slices = [
        {
          origin: depAirport,
          destination: arrAirport,
          departure_date: depDate,
        },
      ];

      if (flightType === "round-trip" && returnDate) {
        slices.push({
          origin: arrAirport,
          destination: depAirport,
          departure_date: returnDate,
        });
      }

      // Constructing passengers array
      const passengers: Array<{ type?: string; age?: number }> = [];

      const adultCount = parseInt(adults || "0", 10);
      const childCount = parseInt(child || "0", 10);
      const infantCount = parseInt(infant || "0", 10);

      for (let i = 0; i < adultCount; i++) {
        passengers.push({ type: "adult" });
      }

      for (let i = 0; i < childCount; i++) {
        passengers.push({ type: "adult" });
      }

      for (let i = 0; i < infantCount; i++) {
        passengers.push({ age: 1 });
      }
      setLoadingMessage(slices);
      const res = await axios.post(`${APILINK}/api/flights/search-list`, {
        slices,
        passengers,
        cabin_class: flightClass,
      });
      setLoading(false);
      // console.log(res.data);
      setFlightsDataList(res.data.data);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };

  // console.log(flightsDataList);

  if (loading) {
    return <LoadingComponent option="search-page" message={loadingMessage} />;
  }

  return (
    <div className=" w-full flex justify-center px-5 pb-5">
      <div className=" w-full xl:w-[1220px] 2xl:w-[1420px] grid grid-cols-4 gap-5 mt-5">
        <div className=" col-span-4 lg:col-span-1 ">
          <div className=" flex">
            <div className=" bg-white rounded-md p-3 flex items-center gap-3 shadow mb-4">
              <Link href={"/"} className=" text-primary">
                Home page
              </Link>
              <IoIosArrowForward className=" text-gray-500" />
              <span>Ticket selection</span>
            </div>
          </div>
          <div className=" lg:hidden ">
            <div
              className={`flex items-center justify-between p-5 bg-white shadow rounded-md ${
                showFilterComponent ? " rounded-b-none" : ""
              }`}
            >
              <p className=" font-semibold text-lg">Filter</p>
              <FaFilter
                className=" text-lg cursor-pointer"
                onClick={() => setShowFilterComponent(!showFilterComponent)}
              />
            </div>
            {showFilterComponent && (
              <FlightFilterComponent
                smallerDevice={true}
                flightsDataList={flightsDataList}
                filterTypes={filterTypes}
                changeFilterTypesValue={changeFilterTypesValue}
                filterAbleTypes={filterAbleTypes}
              />
            )}
          </div>
          <div className=" hidden lg:block sticky top-1 h-[calc(100vh-.5rem)] scrollbar overflow-y-scroll pb-1">
            <FlightFilterComponent
              flightsDataList={flightsDataList}
              filterTypes={filterTypes}
              changeFilterTypesValue={changeFilterTypesValue}
              filterAbleTypes={filterAbleTypes}
            />
          </div>
        </div>
        <div className=" col-span-4 lg:col-span-3">
          <PriceFilter
            selectedPriceType={selectedPriceType}
            setSelectedPriceType={setSelectedPriceType}
          />
          <FlightList displayFlightsDataList={displayFlightsDataList} />
        </div>
      </div>
    </div>
  );
}
