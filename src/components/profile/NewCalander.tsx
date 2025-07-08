"use client";

import React, { useEffect, useRef, useState } from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

export default function NewCalendar({
  starYear,
  endYear,
  date,
  setDate,
  setValidationError,
}: any) {
  const [openDatePicker, setOpenDatePicker] = useState(false);
  const [openMonthPicker, setOpenMonthPicker] = useState(false);
  const [openYearPicker, setOpenYearPicker] = useState(false);
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedMonth, setSelectedMonth] = useState("");
  const [selectedYear, setSelectedYear] = useState("");
  const [years, setYears] = useState<any>([]);
  const calendarRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        calendarRef.current &&
        !calendarRef.current.contains(event.target as Node)
      ) {
        setOpenDatePicker(false);
        setOpenMonthPicker(false);
        setOpenYearPicker(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
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

  const YearSelection = (year: any) => {
    setSelectedYear(year.toString());
  };

  return (
    <div
      ref={calendarRef}
      className="relative cursor-pointer grid grid-cols-3 mt-1 border border-gray-300 rounded-md w-full bg-white"
    >
      <div
        className=" border-r flex justify-between items-center px-3 py-2 relative "
        onClick={() => {
          setOpenDatePicker(!openDatePicker);
          setOpenMonthPicker(false);
          setOpenYearPicker(false);
          setValidationError(false);
        }}
      >
        {openDatePicker && (
          <div className=" w-full h-80 overflow-y-scroll scrollbar bg-white shadow p-1 absolute top-full left-0 translate-y-1 rounded-md z-50 ">
            {Array.from({ length: 31 }, (_, i) => {
              const day = (i + 1).toString().padStart(2, "0");
              return (
                <p
                  key={day}
                  onClick={() => {
                    setSelectedDate(day);
                    setOpenDatePicker(false);
                  }}
                  className={` hover:bg-primary px-3 py-[6px] mb-1 rounded-md hover:text-white cursor-pointer ${
                    selectedDate === day && "bg-primary text-white"
                  }`}
                >
                  {day}
                </p>
              );
            })}
          </div>
        )}
        {selectedDate ? (
          <p className="font-medium">{selectedDate}</p>
        ) : (
          <p className=" text-gray-500">Day</p>
        )}
        <div>
          <IoIosArrowUp className=" text-sm" />
          <IoIosArrowDown className=" text-sm" />
        </div>
      </div>
      <div
        className=" border-r flex justify-between items-center px-3 py-2 relative"
        onClick={() => {
          setOpenMonthPicker(!openMonthPicker);
          setOpenDatePicker(false);
          setOpenYearPicker(false);
          setValidationError(false);
        }}
      >
        {openMonthPicker && (
          <div className="w-full h-80 overflow-y-scroll scrollbar bg-white shadow p-1 absolute top-full left-0 translate-y-1 rounded-md z-50 ">
            {Array.from({ length: 12 }, (_, i) => {
              const month = (i + 1).toString().padStart(2, "0");
              return (
                <p
                  key={month}
                  onClick={() => {
                    setSelectedMonth(month);
                    setOpenMonthPicker(false);
                  }}
                  className={` hover:bg-primary px-3 py-[6px] mb-1 rounded-md hover:text-white cursor-pointer ${
                    selectedMonth === month && "bg-primary text-white"
                  }`}
                >
                  {new Date(2023, i).toLocaleString("en-US", {
                    month: "short",
                  })}
                  {/* {month} */}
                </p>
              );
            })}
          </div>
        )}
        {selectedMonth ? (
          <p className="font-medium">{selectedMonth}</p>
        ) : (
          <p className="text-gray-500">Month</p>
        )}
        <div>
          <IoIosArrowUp className=" text-sm" />
          <IoIosArrowDown className=" text-sm" />
        </div>
      </div>
      <div
        className="flex justify-between items-center px-3 py-2 relative "
        onClick={() => {
          setOpenYearPicker(!openYearPicker);
          setOpenDatePicker(false);
          setOpenMonthPicker(false);
        }}
      >
        {openYearPicker && (
          <div
            id="years"
            className="w-full h-80 overflow-y-scroll scrollbar bg-white shadow p-1 absolute top-full left-0 translate-y-1 rounded-md z-50"
          >
            {years.map((year: any, index: number) => (
              <div
                key={index}
                onClick={() => {
                  YearSelection(year);
                }}
                className={` hover:bg-primary px-3 py-[6px] mb-1 rounded-md hover:text-white cursor-pointer ${
                  selectedYear === year && "bg-primary text-white"
                }`}
              >
                {year}
              </div>
            ))}
          </div>
        )}
        {selectedYear ? (
          <p className="font-medium">{selectedYear}</p>
        ) : (
          <p className="text-gray-500">Year</p>
        )}

        <div>
          <IoIosArrowUp className=" text-sm" />
          <IoIosArrowDown className=" text-sm" />
        </div>
      </div>
    </div>
  );
}
