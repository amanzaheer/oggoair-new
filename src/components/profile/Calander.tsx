"use client";

import React, { useEffect, useState } from "react";
import { FaRegCalendar } from "react-icons/fa6";

export default function Calendar({
  starYear,
  endYear,
  date,
  setDate,
  setValidationError,
}: any) {
  const [openCalendar, setOpenCalendar] = useState(false);
  const [openDatePicker, setOpenDatePicker] = useState(true);
  const [openMonthPicker, setOpenMonthPicker] = useState(false);
  const [openYearPicker, setOpenYearPicker] = useState(false);
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedMonth, setSelectedMonth] = useState("");
  const [selectedYear, setSelectedYear] = useState("");
  const [years, setYears] = useState<any>([]);

  useEffect(() => {
    function handleClickOutside(event: any) {
      const calendarComponent = document.getElementById("calendar");
      const calendarDateSelection = document.getElementsByClassName("close");

      for (let i = 0; i < calendarDateSelection.length; i++) {
        const element = calendarDateSelection[i];
        if (element.contains(event.target as Node)) {
          return;
        }
      }
      if (calendarComponent && !calendarComponent.contains(event.target)) {
        setOpenCalendar(false);
        setOpenDatePicker(true);
        setOpenMonthPicker(false);
        setOpenYearPicker(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    if (starYear) {
      const startYear = starYear;
      const currentYear = endYear ? endYear : new Date().getFullYear();
      const newYears = [];
      for (let year = startYear; year <= currentYear; year++) {
        newYears.push(year);
      }
      setYears(newYears);
    }
  }, [starYear, endYear]);

  useEffect(() => {
    if (selectedDate && selectedMonth && selectedYear) {
      const newDate = `${selectedYear}-${selectedMonth}-${selectedDate}`;
      if (newDate !== date) {
        setDate(newDate);
      }
    }
  }, [selectedDate, selectedMonth, selectedYear]);

  useEffect(() => {
    if (date) {
      const parts = date.split("-");
      if (parts.length === 3) {
        setSelectedYear(parts[0]);
        setSelectedMonth(parts[1]);
        setSelectedDate(parts[2]);
      }
    } else {
      setSelectedDate("");
      setSelectedMonth("");
      setSelectedYear("");
    }
  }, [date]);

  const renderWeekdays = () => {
    const weekdays = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"];
    return weekdays;
  };

  const YearSelection = (year: any) => {
    setSelectedYear(year.toString());
  };

  const openCalander = (e: any) => {
    if (setValidationError) {
      setValidationError(false);
    }
    const calendarComponent = document.getElementById("years");
    setOpenCalendar(true);
    if (calendarComponent?.contains(e.target)) {
      setOpenCalendar(false);
      setOpenDatePicker(true);
    }
  };

  return (
    <div
      onClick={openCalander}
      className="relative cursor-pointer flex items-center justify-between mt-1 border border-gray-300 rounded-md py-[10px] px-3 w-full bg-white"
    >
      {selectedDate && selectedMonth && selectedYear ? (
        <p className="pl-2">
          {selectedDate}.{selectedMonth}.{selectedYear}
        </p>
      ) : (
        <p className="text-gray-500 text-sm">Select Date</p>
      )}
      <FaRegCalendar className="text-lg" />

      {openCalendar && (
        <div
          id="calendar"
          className="w-full max-w-[330px] h-[330px] absolute top-0 right-0 bg-white shadow rounded-md z-[50]"
        >
          <div className="cursor-default flex items-center justify-between border-b px-5">
            <span
              className={`px-6 py-4 border-b ${
                openDatePicker ? "border-blue-500" : "border-transparent"
              }`}
            >
              Day
            </span>
            <span
              className={`px-6 py-4 border-b ${
                openMonthPicker ? "border-blue-500" : "border-transparent"
              }`}
            >
              Month
            </span>
            <span
              className={`px-6 py-4 border-b ${
                openYearPicker ? "border-blue-500" : "border-transparent"
              }`}
            >
              Year
            </span>
          </div>

          <div>
            {/* Date Picker */}
            {openDatePicker && (
              <div className="mt-2 p-3">
                <div className="grid grid-cols-7 gap-2 text-sm mb-2">
                  {renderWeekdays().map((day, index) => (
                    <span
                      key={index}
                      className="font-medium p-2 cursor-default text-center"
                    >
                      {day}
                    </span>
                  ))}
                </div>
                <div className="grid grid-cols-7 gap-2 text-sm">
                  {Array.from({ length: 31 }, (_, i) => {
                    const day = (i + 1).toString().padStart(2, "0");
                    return (
                      <span
                        key={day}
                        onClick={() => {
                          setSelectedDate(day);
                          setOpenDatePicker(false);
                          setOpenMonthPicker(true);
                        }}
                        className={`close p-[6px] text-gray-500 hover:bg-primary hover:text-white inline-flex items-center justify-center rounded-md ${
                          selectedDate === day && "bg-primary text-white"
                        }`}
                      >
                        {day}
                      </span>
                    );
                  })}
                </div>
              </div>
            )}

            {/* Month Picker */}
            {openMonthPicker && (
              <div className="mt-2 p-3 grid grid-cols-4 gap-1 text-sm">
                {Array.from({ length: 12 }, (_, i) => {
                  const month = (i + 1).toString().padStart(2, "0");
                  return (
                    <span
                      key={month}
                      onClick={() => {
                        setSelectedMonth(month);
                        setOpenMonthPicker(false);
                        setOpenYearPicker(true);
                      }}
                      className={`px-5 py-7 text-gray-500 hover:bg-primary hover:text-white inline-flex items-center justify-center rounded-md ${
                        selectedMonth === month && "bg-primary text-white"
                      }`}
                    >
                      {new Date(2023, i).toLocaleString("en-US", {
                        month: "short",
                      })}
                    </span>
                  );
                })}
              </div>
            )}

            {/* Year Picker */}
            {openYearPicker && (
              <div id="years" className="mt-2 h-[260px] overflow-y-scroll">
                {years.map((year: any, index: number) => (
                  <div
                    key={index}
                    onClick={() => {
                      YearSelection(year);
                    }}
                    className={`py-3 hover:bg-primary hover:text-white text-gray-500 w-full flex items-center justify-center mb-1 ${
                      selectedYear === year.toString() &&
                      "bg-primary text-white"
                    }`}
                  >
                    {year}
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
