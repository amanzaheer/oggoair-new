"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";
import { MdKeyboardArrowDown } from "react-icons/md";

export default function Telephone({
  countries,
  changeValue,
  userData,
  setValidationError,
}: any) {
  const [openTelephone, setOpenTelephone] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCountry, setSelectedCountry] = useState<{
    flag: string;
    dialCode: string;
    name: string;
    code: string;
  } | null>(null);

  useEffect(() => {
    function handleClickOutside(event: any) {
      const telephoneComponent = document.getElementById("Telephone");
      if (telephoneComponent && !telephoneComponent.contains(event.target)) {
        setOpenTelephone(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    if (countries.length && userData.dialCode) {
      const currentCity = countries.find(
        (city: any) => city.dialCode === userData.dialCode
      );
      setSelectedCountry({
        dialCode: currentCity.dialCode,
        code: currentCity.code,
        name: currentCity.name,
        flag: currentCity.flag,
      });
    }
  }, [userData, countries]);

  // Filter countries based on search query
  const filteredCountries = countries.filter(
    (country: any) =>
      country.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      country.code.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const toggleCountrySelection = (country: any) => {
    setOpenTelephone(!openTelephone);
    setValidationError(false);
  };

  return (
    <div className="w-full grid items-center gap-3 grid-cols-10 mt-1">
      <div className="col-span-3 relative cursor-pointer flex items-center justify-between border border-gray-300 rounded-md px-3 py-[11px] bg-white">
        {setValidationError ? (
          <div
            onClick={toggleCountrySelection}
            className="flex items-center justify-between w-full"
          >
            {selectedCountry ? (
              <div className="flex items-center">
                <Image
                  src={selectedCountry.flag}
                  alt="flag"
                  width={20}
                  height={15}
                  className="mr-2"
                />
                <p className="text-gray-700 text-sm">
                  {selectedCountry.dialCode}
                </p>
              </div>
            ) : (
              <p className="text-gray-500 text-xs">Code</p>
            )}
            <MdKeyboardArrowDown className="text-gray-500 text-lg" />
          </div>
        ) : (
          <div
            onClick={() => setOpenTelephone(!openTelephone)}
            className="flex items-center justify-between w-full"
          >
            {selectedCountry ? (
              <div className="flex items-center">
                <Image
                  src={selectedCountry.flag}
                  alt="flag"
                  width={20}
                  height={15}
                  className="mr-2"
                />
                <p className="text-gray-700 text-sm">
                  {selectedCountry.dialCode}
                </p>
              </div>
            ) : (
              <p className="text-gray-500 text-xs">Code</p>
            )}
            <MdKeyboardArrowDown className="text-gray-500 text-lg" />
          </div>
        )}

        {openTelephone && (
          <div
            id="Telephone"
            className="w-full h-[330px] overflow-y-auto absolute top-10 left-0 bg-white shadow rounded-md z-[50]"
          >
            <div className="p-2">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search"
                className=" placeholder:text-sm w-full px-2 py-1 border rounded-md focus:outline-none"
              />
            </div>
            {filteredCountries.map((country: any, index: number) => (
              <div
                key={index}
                onClick={() => {
                  changeValue(country.dialCode, "dialCode");
                  setOpenTelephone(false);
                  setSearchQuery("");
                }}
                className={` mb-1 flex items-center justify-between px-3 py-2 hover:bg-primary hover:text-white cursor-pointer ${
                  selectedCountry &&
                  selectedCountry.name === country.name &&
                  "bg-primary text-white"
                }`}
              >
                <Image
                  src={country.flag}
                  alt={country.name}
                  width={20}
                  height={15}
                  className="mr-3"
                />

                <p className=" text-sm">{country.dialCode}</p>
              </div>
            ))}
          </div>
        )}
      </div>
      {setValidationError ? (
        <input
          type="number"
          value={userData.phoneNumber}
          onChange={(e) => changeValue(e.target.value, "phoneNumber")}
          onFocus={() => setValidationError(false)}
          className="col-span-7 placeholder:text-sm border border-gray-300 rounded-md px-3 py-2 focus:outline-none"
          placeholder="92438734978"
        />
      ) : (
        <input
          type="number"
          value={userData.phoneNumber}
          onChange={(e) => changeValue(e.target.value, "phoneNumber")}
          className="col-span-7 placeholder:text-sm border border-gray-300 rounded-md px-3 py-2 focus:outline-none"
          placeholder="92438734978"
        />
      )}
    </div>
  );
}
