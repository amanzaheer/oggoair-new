import Calander from "@/components/profile/Calander";
import Cityzenship from "@/components/profile/Cityzenship";
import Telephone from "@/components/profile/Telephone";
import Link from "next/link";
import React from "react";
import { FaCheck } from "react-icons/fa6";

export default function HotelCheckoutContactInfo({
  toggleGender,
  countries,
  changeValue,
  userData,
}: any) {
  const setCityzenship = (value: any) => {
    changeValue(value, "cityzenship");
  };

  const setBirthDay = (value: any) => {
    changeValue(value, "birthDay");
  };
  return (
    <div className=" mt-5 bg-[#F8F9FE] p-5 rounded-2xl w-full">
      <p className=" text-xl font-semibold">Contact information</p>
      <p className=" mt-3">
        The names and surnames of guests must match the details in the passport.
      </p>
      <div className=" mt-5 w-full lg:w-[420px]">
        <div>
          <label htmlFor="" className=" font-semibold block">
            Email address
          </label>
          <input
            type="email"
            value={userData.email}
            onChange={(e) => changeValue(e.target.value, "email")}
            name=""
            id=""
            className=" w-full border p-3 rounded-md mt-2 bg-transparent focus:outline-none placeholder:text-sm"
            placeholder="Email"
          />
          <p className=" text-sm mt-2 text-gray-400">
            So that we can send you confirmation and voucher
          </p>
        </div>
        <div className=" mt-5">
          <label htmlFor="" className=" font-semibold block">
            Name
          </label>
          <input
            type="text"
            name=""
            value={userData.name}
            onChange={(e) => changeValue(e.target.value, "name")}
            id=""
            className=" w-full border p-3 rounded-md mt-2 bg-transparent focus:outline-none placeholder:text-sm"
            placeholder="Name"
          />
        </div>
        <div className=" mt-5">
          <label htmlFor="" className=" font-semibold block">
            Surename
          </label>
          <input
            type="text"
            name=""
            value={userData.surename}
            onChange={(e) => changeValue(e.target.value, "surename")}
            id=""
            className=" w-full border p-3 rounded-md mt-2 bg-transparent focus:outline-none placeholder:text-sm"
            placeholder="Surename"
          />
        </div>

        <div className=" mt-5">
          <label htmlFor="" className=" font-semibold block">
            Date of Birth
          </label>
          <Calander
            starYear={1980}
            date={userData.birthDay}
            setDate={setBirthDay}
          />
        </div>
        <div className=" mt-5">
          <label htmlFor="" className=" font-semibold block">
            Telephone
          </label>
          <Telephone
            countries={countries}
            changeValue={changeValue}
            userData={userData}
          />
        </div>
        <div className=" mt-5">
          <label htmlFor="" className=" font-semibold block">
            Country of Residence
          </label>
          <Cityzenship
            countries={countries}
            cityzenship={userData.cityzenship}
            setCityzenship={setCityzenship}
          />
        </div>
        <div className=" mt-5">
          <label htmlFor="" className=" font-semibold block">
            {"Guest's gender"}
          </label>
          <div className=" mt-2 flex items-center gap-5">
            <div className=" flex items-center gap-1">
              <div
                onClick={() => toggleGender("m")}
                className={` h-5 w-5 border rounded-md flex items-center justify-center p-[1px] ${
                  userData.gender === "m" && "bg-primary"
                }`}
              >
                {userData.gender === "m" && (
                  <FaCheck className=" text-sm text-white" />
                )}
              </div>
              <span
                className=" cursor-pointer"
                onClick={() => toggleGender("m")}
              >
                Male
              </span>
            </div>
            <div className=" flex items-center gap-1">
              <div
                onClick={() => toggleGender("f")}
                className={` h-5 w-5 border rounded-md flex items-center justify-center p-[1px] ${
                  userData.gender === "f" && "bg-primary"
                }`}
              >
                {userData.gender === "f" && (
                  <FaCheck className=" text-sm text-white" />
                )}
              </div>
              <span
                className=" cursor-pointer"
                onClick={() => toggleGender("f")}
              >
                Female
              </span>
            </div>
          </div>
        </div>
      </div>
      <p className=" mt-8">
        In our{" "}
        <Link href={"/privacy&policy"} className=" text-primary">
          {" "}
          Privacy Policy{" "}
        </Link>
        we tell tou how we use and protect your data.
      </p>
    </div>
  );
}
