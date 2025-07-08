"use client";

import React, { useEffect, useState } from "react";
import Calander from "./Calander";
import Cityzenship from "./Cityzenship";
import Telephone from "./Telephone";
import { useSession } from "next-auth/react";

export default function UserData({
  userData,
  changeValue,
  UpdateUserData,
}: any) {
  const [countries, setCountries] = useState([]);
  const { data: session, status } = useSession();

  useEffect(() => {
    // Fetch all countries and their flags
    async function fetchCountries() {
      try {
        const response = await fetch("https://restcountries.com/v3.1/all");
        const data = await response.json();
        // console.log(data);

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

  // const birthDay;
  const setBirthDay = (value: string) => {
    changeValue(value, "birthDay");
  };
  const setCountry = (value: string) => {
    changeValue(value, "cityzenship");
  };

  return (
    <div className=" mt-10">
      <div className=" grid sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="" className=" block font-medium ">
            Name
          </label>
          <input
            type="text"
            value={userData.name}
            onChange={(e) => changeValue(e.target.value, "name")}
            placeholder="Jhone Doe"
            className=" bg-white mt-1 placeholder:text-sm w-full border border-gray-300 py-2 px-3 rounded-md focus:outline-none"
          />
        </div>
        <div>
          <label htmlFor="" className=" opacity-0 block font-medium w-full ">
            name
          </label>
          <div className=" -mt-3 sm:mt-1 w-full flex">
            <div className=" bg-white flex border border-gray-300 rounded-md overflow-hidden">
              <button
                onClick={(e) => changeValue("Mr", "title")}
                className={` px-5 py-2 border-r border-gray-300 ${
                  userData.title === "Mr"
                    ? "  bg-primary text-white"
                    : "  text-gray-500"
                }`}
              >
                Mr
              </button>
              <button
                onClick={(e) => changeValue("Mrs", "title")}
                className={` px-5 py-2 ${
                  userData.title === "Mrs"
                    ? " text-white bg-primary "
                    : "  text-gray-500 "
                }`}
              >
                Mrs
              </button>
            </div>
          </div>
        </div>
        <div>
          <label htmlFor="" className=" block font-medium ">
            Email
          </label>

          <p className="bg-white mt-1 w-full border border-gray-300 py-2 px-3 rounded-md">
            {session?.user?.email}
          </p>
        </div>
        <div>
          <label htmlFor="" className=" block font-medium ">
            Date of Birth
          </label>
          <Calander
            starYear={1980}
            date={userData.birthDay}
            setDate={setBirthDay}
          />
        </div>
        <div>
          <label htmlFor="" className=" block font-medium ">
            Citizenship
          </label>
          <Cityzenship
            countries={countries}
            cityzenship={userData.cityzenship}
            setCityzenship={setCountry}
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
          />
        </div>
      </div>

      <div className=" mt-10 w-full flex items-center justify-center">
        <button
          onClick={UpdateUserData}
          className=" bg-primary px-8 py-2 rounded-md text-white"
        >
          Save Data
        </button>
      </div>
    </div>
  );
}
