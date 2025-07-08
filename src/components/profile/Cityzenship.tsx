"use client";

import { currencies } from "country-data";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { MdKeyboardArrowDown } from "react-icons/md";

export default function Cityzenship({
  countries,
  cityzenship,
  setCityzenship,
}: any) {
  const [openCityzenship, setOpenCityzenship] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCountry, setSelectedCountry] = useState<{
    name: string;
    flag: string;
  } | null>(null);

  useEffect(() => {
    function handleClickOutside(event: any) {
      const cityzenshipComponent = document.getElementById("Cityzenship");
      if (
        cityzenshipComponent &&
        !cityzenshipComponent.contains(event.target)
      ) {
        setOpenCityzenship(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Filter countries based on search query
  const filteredCountries = countries.filter(
    (country: any) =>
      country.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      country.code.toLowerCase().includes(searchQuery.toLowerCase())
  );

  useEffect(() => {
    if (cityzenship && countries.length) {
      const currentCity = countries.find(
        (city: any) => city.name === cityzenship
      );
      setSelectedCountry({ name: currentCity.name, flag: currentCity.flag });
    }
  }, [cityzenship, countries]);

  return (
    <div className="relative cursor-pointer flex items-center justify-between mt-1 border border-gray-300 rounded-md px-3 py-[10px] w-full bg-white">
      <div
        onClick={() => setOpenCityzenship(!openCityzenship)}
        className="flex items-center justify-between w-full"
      >
        {selectedCountry ? (
          <div className="flex items-center">
            <Image
              src={selectedCountry.flag}
              alt={selectedCountry.name}
              className="w-5 h-4 mr-2"
              width={500}
              height={500}
            />
            <p className="text-gray-700 text-sm">{selectedCountry.name}</p>
          </div>
        ) : (
          <p className="text-gray-500 text-sm">Nationality</p>
        )}
        <MdKeyboardArrowDown className="text-gray-500 text-lg" />
      </div>

      {openCityzenship && (
        <div
          id="Cityzenship"
          className="w-full h-[330px] overflow-y-auto absolute top-10 left-0 bg-white shadow rounded-md z-[50] px-2"
        >
          <div className="p-2">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search Country"
              className=" placeholder:text-sm w-full p-2 border rounded-md focus:outline-none"
            />
          </div>
          {filteredCountries.map((country: any, index: number) => (
            <div
              key={index}
              onClick={() => {
                setCityzenship(country.name);
                setOpenCityzenship(false);
                setSearchQuery("");
              }}
              className={`flex items-center px-5 py-3 rounded-md mb-1 text-gray-700 hover:bg-primary hover:text-white cursor-pointer ${
                selectedCountry &&
                selectedCountry.name === country.name &&
                "bg-primary text-white"
              } `}
            >
              <Image
                src={country.flag}
                alt={country.name}
                className="w-6 h-5 mr-3 rounded-md"
                width={500}
                height={500}
              />
              <p className=" ">{country.name}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
