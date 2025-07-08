"use client";

import React, { useEffect } from "react";
import { useState } from "react";
import { DateRangePicker } from "react-date-range";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import { IoIosArrowBack } from "react-icons/io";

export default function FlightReturnDate({
  flightReturnDate,
  setFlightReturnDate,
  flightSingleDate,
  setFlightSingleDate,
  setShowFlightReturnDate,
}: {
  flightReturnDate: Date;
  setFlightReturnDate: Function;
  flightSingleDate: Date;
  setFlightSingleDate: Function;
  setShowFlightReturnDate: Function;
}) {
  const direction = window.innerWidth > 768 ? "horizontal" : "vertical";
  const [selectedDates, setSelectedDates] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);

  useEffect(() => {
    setSelectedDates([
      {
        startDate: new Date(flightSingleDate),
        endDate: new Date(flightReturnDate),
        key: "selection",
      },
    ]);
  }, [flightSingleDate, flightReturnDate]);

  const handleDateSelect = ({ selection }: any) => {
    const selected = new Date(
      selection.startDate.getFullYear(),
      selection.startDate.getMonth(),
      selection.startDate.getDate()
    );
    const selectedNext = new Date(
      selection.endDate.getFullYear(),
      selection.endDate.getMonth(),
      selection.endDate.getDate()
    );

    setFlightSingleDate(selected);
    setFlightReturnDate(selectedNext);
    setSelectedDates([selection]);
    if (new Date(selected) < new Date(selectedNext)) {
      setShowFlightReturnDate(false);
    }
  };

  const renderStaticRangeLabel = (ranges: any, index: number, state: any) => {
    return <span>{ranges.label}</span>;
  };

  const renderStaticRangeLabelWrapper = (ranges: any) => {
    return (
      <div className=" custom-static-range-label-wrapper">
        {ranges.map((range: any, index: number) => (
          <div key={index} className="custom-static-range-label">
            {renderStaticRangeLabel(range, index, selectedDates)}
          </div>
        ))}
      </div>
    );
  };

  const navigatorRenderer = (props: any) => {
    const handleClickPrevious = () => {
      const previousMonth = new Date(props.getFullYear(), props.getMonth() - 1);
      setSelectedDates([
        {
          startDate: previousMonth,
          endDate: previousMonth,
          key: "selection",
        },
      ]);
    };

    const handleClickNext = () => {
      const nextMonth = new Date(props.getFullYear(), props.getMonth() + 1);
      setSelectedDates([
        { startDate: nextMonth, endDate: nextMonth, key: "selection" },
      ]);
    };

    const currentMonth = props.toLocaleString("default", {
      year: "numeric",
      month: "long",
    });
    const nextMonth = new Date(
      props.getFullYear(),
      props.getMonth() + 1
    ).toLocaleString("default", { year: "numeric", month: "long" });

    return (
      <div className=" grid grid-cols-2 custom-shadow">
        <div className=" p-5 relative">
          <div
            className=" h-8 w-8 rounded-full flex items-center justify-center cursor-pointer absolute top-3 left-5 hover:bg-gray-100 transition-all duration-150 ease-in-out"
            onClick={handleClickPrevious}
          >
            <IoIosArrowBack className="text-base" />
          </div>
          <p className=" text-center font-semibold ">{currentMonth}</p>
        </div>
        <div className=" p-5 relative">
          <div
            className=" h-8 w-8 rounded-full flex items-center justify-center cursor-pointer absolute top-3 right-5 hover:bg-gray-100 transition-all duration-150 ease-in-out"
            onClick={handleClickNext}
          >
            <IoIosArrowBack className="text-base rotate-180" />
          </div>
          <p className=" text-center font-semibold ">{nextMonth}</p>
        </div>
      </div>
    );
  };

  return (
    <div
      id="flight-date"
      className="donotclose absolute top-full translate-y-2 -right-6 sm:right-0 z-50"
    >
      <DateRangePicker
        ranges={selectedDates}
        onChange={handleDateSelect}
        minDate={new Date()}
        // showSelectionPreview={true}
        months={2}
        moveRangeOnFirstSelection={false}
        editableDateInputs={true}
        retainEndDateOnFirstSelection={false}
        showMonthAndYearPickers={false}
        showDateDisplay={false}
        fixedHeight={false}
        direction={direction}
        rangeColors={["#2B64C8"]}
        renderStaticRangeLabel={renderStaticRangeLabelWrapper}
        navigatorRenderer={navigatorRenderer}
        className=" shadow-lg rounded-lg w-full sm:w-auto "
      />
    </div>
  );
}
