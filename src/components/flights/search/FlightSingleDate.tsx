"use client";

import React, { useEffect, useState } from "react";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";

const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const FlightSingleDate = ({
  flightSingleDate,
  setFlightSingleDate,
  setShowFlightSingleDate,
}: {
  flightSingleDate: Date;
  setFlightSingleDate: Function;
  setShowFlightSingleDate: Function;
}) => {
  const [date, setDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState<any>(null);

  useEffect(() => {
    setSelectedDate(new Date(flightSingleDate));
  }, [flightSingleDate]);
  console.log(selectedDate);

  const handlePrev = () => {
    const newDate = new Date(date);
    newDate.setMonth(newDate.getMonth() - 1);
    setDate(newDate);
  };

  const handleNext = () => {
    const newDate = new Date(date);
    newDate.setMonth(newDate.getMonth() + 1);
    setDate(newDate);
  };

  const handleDateClick = (day: any) => {
    const selected = new Date(date.getFullYear(), date.getMonth(), day);
    setSelectedDate(selected);
    setFlightSingleDate(selected);
    setShowFlightSingleDate(false);
  };

  const renderCalendar = () => {
    const monthDays = [];
    const currentDate = new Date();
    const currentDay = currentDate.getDate();
    const currentMonth = currentDate.getMonth();

    const lastDay = new Date(
      date.getFullYear(),
      date.getMonth() + 1,
      0
    ).getDate();
    const prevLastDay = new Date(
      date.getFullYear(),
      date.getMonth(),
      0
    ).getDate();
    const firstDayIndex = new Date(
      date.getFullYear(),
      date.getMonth(),
      1
    ).getDay();
    const lastDayIndex = new Date(
      date.getFullYear(),
      date.getMonth() + 1,
      0
    ).getDay();
    const nextDays = 7 - lastDayIndex - 1;

    for (let x = firstDayIndex; x > 0; x--) {
      const day = prevLastDay - x + 1;
      monthDays.push(
        <div key={`prev-${x}`}>
          <span className="text-gray-200 h-7 w-12 rounded-full font-medium text-center flex items-center justify-center text-[12px]">
            {/* {day} */}
          </span>
        </div>
      );
    }

    for (let i = 1; i <= lastDay; i++) {
      const currentDateObj = new Date(date.getFullYear(), date.getMonth(), i);
      const isPastDate =
        currentDateObj < new Date(currentDate.setHours(0, 0, 0, 0));

      const isSelectedDate =
        selectedDate &&
        i === selectedDate.getDate() &&
        date.getMonth() === selectedDate.getMonth() &&
        date.getFullYear() === selectedDate.getFullYear();

      const isCurrentDate =
        i === currentDay && date.getMonth() === currentMonth;

      let classNames =
        "h-7 w-12 rounded-full flex items-center justify-center text-[12px] ";

      if (isPastDate) {
        classNames += " text-gray-400";
        monthDays.push(
          <div
            className="flex items-center justify-center mb-2 text-[12px]"
            key={`day-${i}`}
          >
            <span className={classNames}>{i}</span>
          </div>
        );
      } else {
        if (isCurrentDate) {
          if (isSelectedDate) {
            classNames +=
              " bg-primary text-white cursor-pointer border border-transparent hover:border-primary";
          } else {
            classNames +=
              " border border-primary text-black cursor-pointer border border-transparent hover:border-primary";
          }
        } else if (isSelectedDate) {
          classNames +=
            " bg-primary text-white cursor-pointer border border-transparent hover:border-primary";
        } else {
          classNames +=
            " text-gray-700 cursor-pointer border border-transparent hover:border-primary";
        }

        monthDays.push(
          <div
            onClick={() => handleDateClick(i)}
            className="flex items-center justify-center mb-2 text-[12px]"
            key={`day-${i}`}
          >
            <span className={`${classNames} rounded-full`}>{i}</span>
          </div>
        );
      }
    }

    for (let j = 1; j <= nextDays; j++) {
      const day = j;
      monthDays.push(
        <div key={`next-${j}`}>
          <span className="text-gray-200 h-7 w-12 rounded-full font-medium text-center flex items-center justify-center text-[12px]">
            {/* {day} */}
          </span>
        </div>
      );
    }

    return monthDays;
  };

  return (
    <div
      id="flight-date"
      className="z-10 absolute top-full right-0 -bottom-2 w-full sm:w-[360px] min-h-[400px]"
    >
      <div className=" mt-1 p-5 w-full  bg-white shadow-lg rounded-lg">
        <div className=" w-full h-full">
          <div className=" w-full flex justify-between items-center py-3">
            <div
              className=" flex items-center justify-center cursor-pointer hover:bg-gray-100 rounded-full p-2 prev"
              onClick={handlePrev}
            >
              <MdKeyboardArrowLeft className=" text-xl" />
            </div>
            <div className="date font-medium">
              <p className=" text-sm sm:text-base">
                {months[date.getMonth()]} {new Date().getFullYear()}
              </p>
            </div>
            <div
              className=" flex items-center justify-center cursor-pointer hover:bg-gray-100 rounded-full p-2 next"
              onClick={handleNext}
            >
              <MdKeyboardArrowRight className=" text-xl" />
            </div>
          </div>
          <div className="weekdays grid grid-cols-7 mt-3 text-gray-500 text-[12px]">
            <div className=" flex items-center justify-center">Sun</div>
            <div className=" flex items-center justify-center">Mon</div>
            <div className=" flex items-center justify-center">Tue</div>
            <div className=" flex items-center justify-center">Wed</div>
            <div className=" flex items-center justify-center">Thu</div>
            <div className=" flex items-center justify-center">Fri</div>
            <div className=" flex items-center justify-center">Sat</div>
          </div>
          <div className="days grid grid-cols-7 mt-3">{renderCalendar()}</div>
        </div>
      </div>
    </div>
  );
};

export default FlightSingleDate;
