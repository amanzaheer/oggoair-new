"use client";

import Telephone from "@/components/profile/Telephone";
import React, { useEffect, useState } from "react";
import { BsInfoCircleFill } from "react-icons/bs";

export default function UserInfo({
  changeValue,
  userData,
  setValidationError,
}: any) {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    // Fetch all countries and their flags
    async function fetchCountries() {
      try {
        const response = await fetch(
          "https://restcountries.com/v3.1/all?fields=name,flags,idd,cca2"
        );
        const data = await response.json();

        const formattedCountries = data
          .map((country: any) => ({
            name: country.name.common,
            flag: country.flags.svg,
            dialCode: country.idd.root
              ? `${country.idd.root}${
                  country.idd.suffixes ? country.idd.suffixes[0] : ""
                }`
              : "N/A",
            code: country.cca2, // Country code like "US", "BD", etc.
          }))
          .sort((a: any, b: any) => a.name.localeCompare(b.name));
        setCountries(formattedCountries);
      } catch (error) {
        console.error("Error fetching countries:", error);
      }
    }

    fetchCountries();
  }, []);

  return (
    <div className=" w-full rounded-xl p-5 bg-[#F8F9FE]">
      <p className=" font-semibold text-lg text-primary">Contact Information</p>

      <div className=" grid grid-cols-1 md:grid-cols-2 gap-5 mt-5">
        <div>
          <label htmlFor="" className=" font-medium block">
            Email
          </label>
          <input
            type="email"
            className="  p-2 px-3 placeholder:text-sm border border-gray-300 rounded-md focus:outline-none mt-1 w-full "
            placeholder="Email Address"
            value={userData.email}
            onChange={(e) => changeValue(e.target.value, "email")}
            onFocus={() => setValidationError(false)}
          />
        </div>
        <div>
          <label htmlFor="" className=" block font-medium ">
            Telephone
          </label>
          <Telephone
            countries={countries}
            changeValue={changeValue}
            userData={userData}
            setValidationError={setValidationError}
          />
        </div>
      </div>
      <div className=" mt-5 w-full flex items-center gap-3 bg-[#E5F2FE] rounded-md p-3 px-5">
        <div className=" w-10">
          <BsInfoCircleFill className=" text-lg" />
        </div>
        <p className=" font-medium text-sm sm:text-base">
          Once the purchase is completed, ticket details will be sent to your
          email address and mobile phone.
        </p>
      </div>
    </div>
  );
}
