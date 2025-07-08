"use client";

import React, { useEffect, useState } from "react";
import { MdKeyboardArrowDown } from "react-icons/md";

export default function Currency() {
  const [openCurrency, setOpenCurrency] = useState(false);
  const [selectedCurrency, setSelectedCurrency] = useState<{
    countryName: string;
    currencyCode: string;
  } | null>(null);

  const currencyList = [
    { countryName: "United States", currencyCode: "USD" },
    { countryName: "Eurozone", currencyCode: "EUR" },
    { countryName: "United Kingdom", currencyCode: "GBP" },
    { countryName: "Japan", currencyCode: "JPY" },
    { countryName: "Australia", currencyCode: "AUD" },
    { countryName: "Canada", currencyCode: "CAD" },
    { countryName: "Switzerland", currencyCode: "CHF" },
    { countryName: "China", currencyCode: "CNY" },
    { countryName: "India", currencyCode: "INR" },
    { countryName: "Russia", currencyCode: "RUB" },
    { countryName: "Brazil", currencyCode: "BRL" },
    { countryName: "South Africa", currencyCode: "ZAR" },
    { countryName: "South Korea", currencyCode: "KRW" },
    { countryName: "Singapore", currencyCode: "SGD" },
    { countryName: "New Zealand", currencyCode: "NZD" },
    { countryName: "Mexico", currencyCode: "MXN" },
    { countryName: "Turkey", currencyCode: "TRY" },
    { countryName: "Saudi Arabia", currencyCode: "SAR" },
    { countryName: "Indonesia", currencyCode: "IDR" },
    { countryName: "Nigeria", currencyCode: "NGN" },
  ];

  useEffect(() => {
    function handleClickOutside(event: any) {
      const languageComponent = document.getElementById("Language");
      if (languageComponent && !languageComponent.contains(event.target)) {
        setOpenCurrency(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="w-full mt-1">
      <div className="w-full relative cursor-pointer flex items-center justify-between border rounded-md p-2">
        <div
          onClick={() => setOpenCurrency(!openCurrency)}
          className="flex items-center justify-between w-full"
        >
          {selectedCurrency ? (
            <p className="text-gray-700 text-sm">
              {selectedCurrency.countryName}
            </p>
          ) : (
            <p className="text-gray-500 text-sm">Select Currency</p>
          )}
          <MdKeyboardArrowDown className="text-gray-500 text-lg" />
        </div>

        {openCurrency && (
          <div
            id="Language"
            className="w-full h-[330px] overflow-y-auto absolute top-10 left-0 bg-white shadow rounded-md z-[50]"
          >
            {currencyList.map((currency: any, index: number) => (
              <div
                key={index}
                onClick={() => {
                  setSelectedCurrency({
                    ...currency,
                  });
                  setOpenCurrency(false);
                }}
                className={`flex items-center justify-between p-3 mb-1 hover:bg-primary hover:text-white cursor-pointer ${
                  selectedCurrency &&
                  selectedCurrency.countryName === currency.countryName &&
                  " bg-primary text-white"
                }`}
              >
                <p className=" text-sm">{currency.countryName}</p>
                <p className=" text-xs">{currency.currencyCode}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
