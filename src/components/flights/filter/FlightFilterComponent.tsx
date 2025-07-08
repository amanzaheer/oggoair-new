"use client";

import React, { useState } from "react";
import Stop from "./Stop";
import Baggage from "./Baggage";
import TicketRefund from "./TicketRefund";
import TicketExchange from "./TicketExchange";
import Airlines from "./Airlines";
import DepartureAndArivalTime from "./DepartureAndArivalTime";
import TravelTime from "./TravelTime";
import ReturnStop from "./ReturnStop";
import ReturnBaggage from "./ReturnBaggage";
import ReturnTravelTime from "./ReturnTravelTime";
import ReturnDepartureAndArivalTime from "./ReturnDepartureAndArivalTime";
import Price from "./Price";

export default function FlightFilterComponent({
  filterTypes,
  changeFilterTypesValue,
  filterAbleTypes,
  flightsDataList,
  smallerDevice,
}: any) {
  return (
    <div className="">
      {filterAbleTypes.travelTime.length && (
        <div className=" mt-5 sm:mt-0">
          <Price
            filterAbleTypes={filterAbleTypes}
            filterTypes={filterTypes}
            changeFilterTypesValue={changeFilterTypesValue}
          />
        </div>
      )}
      {flightsDataList && flightsDataList.offers.length ? (
        <div
          className={` bg-white rounded-md mt-3 ${
            smallerDevice && "rounded-t-none border-t"
          }`}
        >
          <Stop
            smallerDevice={smallerDevice}
            filterTypes={filterTypes}
            changeFilterTypesValue={changeFilterTypesValue}
          />
          {flightsDataList.offers[0]?.slices?.length === 2 && (
            <ReturnStop
              filterTypes={filterTypes}
              changeFilterTypesValue={changeFilterTypesValue}
            />
          )}
          <Baggage
            filterTypes={filterTypes}
            changeFilterTypesValue={changeFilterTypesValue}
          />
          {flightsDataList.offers[0]?.slices?.length === 2 && (
            <ReturnBaggage
              filterTypes={filterTypes}
              changeFilterTypesValue={changeFilterTypesValue}
            />
          )}

          {filterAbleTypes.departureRangeValues.length &&
            filterAbleTypes.arivalRangeValues.length && (
              <DepartureAndArivalTime
                filterAbleTypes={filterAbleTypes}
                filterTypes={filterTypes}
                changeFilterTypesValue={changeFilterTypesValue}
              />
            )}
          {flightsDataList.offers[0]?.slices?.length === 2 &&
            filterAbleTypes?.returnDepartureRangeValues?.length &&
            filterAbleTypes?.returnArivalRangeValues?.length && (
              <ReturnDepartureAndArivalTime
                filterAbleTypes={filterAbleTypes}
                filterTypes={filterTypes}
                changeFilterTypesValue={changeFilterTypesValue}
              />
            )}

          <Airlines
            filterAbleTypes={filterAbleTypes}
            filterTypes={filterTypes}
            changeFilterTypesValue={changeFilterTypesValue}
          />

          {filterAbleTypes.travelTime.length && (
            <TravelTime
              filterAbleTypes={filterAbleTypes}
              filterTypes={filterTypes}
              changeFilterTypesValue={changeFilterTypesValue}
            />
          )}
          {flightsDataList.offers[0]?.slices?.length === 2 &&
            filterAbleTypes?.returnTravelTime?.length && (
              <ReturnTravelTime
                filterAbleTypes={filterAbleTypes}
                filterTypes={filterTypes}
                changeFilterTypesValue={changeFilterTypesValue}
              />
            )}
          <TicketRefund
            filterTypes={filterTypes}
            changeFilterTypesValue={changeFilterTypesValue}
          />
          <TicketExchange
            filterTypes={filterTypes}
            changeFilterTypesValue={changeFilterTypesValue}
          />
        </div>
      ) : null}
    </div>
  );
}
