import Calander from "@/components/profile/Calander";
import Cityzenship from "@/components/profile/Cityzenship";
import React from "react";
import { FaCheck } from "react-icons/fa6";

export default function HotelCheckoutSecoundQuest({
  countries,
  guests,
  setGuests,
  index,
}: any) {
  const changeValue = (value: any, option: any) => {
    const newData = [...guests];
    newData[index][option] = value;
    setGuests(newData);
  };
  const setCityzenship = (value: any) => {
    const newData = [...guests];
    newData[index].cityzenship = value;
    setGuests(newData);
  };
  const setBirthDay = (value: any) => {
    const newData = [...guests];
    newData[index].birthDay = value;
    setGuests(newData);
  };
  return (
    <div className=" mt-5 bg-[#F8F9FE] p-5 rounded-2xl w-full">
      <p className=" text-xl font-semibold">Second guest</p>
      <p className=" mt-3">
        The names and surnames of guests must match the details in the passport.
      </p>
      <div className=" mt-5 w-full lg:w-[420px]">
        <div className=" mt-5">
          <label htmlFor="" className=" font-semibold block">
            Name
          </label>
          <input
            type="text"
            name=""
            id=""
            value={guests[index].name}
            onChange={(e) => changeValue(e.target.value, "name")}
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
            id=""
            value={guests[index].surename}
            onChange={(e) => changeValue(e.target.value, "surename")}
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
            date={guests[index].birthDay}
            setDate={setBirthDay}
          />
        </div>

        <div className=" mt-5">
          <label htmlFor="" className=" font-semibold block">
            Country of Residence
          </label>
          <Cityzenship
            countries={countries}
            cityzenship={guests[index].cityzenship}
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
                onClick={() => changeValue("m", "gender")}
                className={` h-5 w-5 border rounded-md flex items-center justify-center p-[1px] ${
                  guests[index].gender === "m" && "bg-primary"
                }`}
              >
                {guests[index].gender === "m" && (
                  <FaCheck className=" text-sm text-white" />
                )}
              </div>
              <span
                className=" cursor-pointer"
                onClick={() => changeValue("m", "gender")}
              >
                Male
              </span>
            </div>
            <div className=" flex items-center gap-1">
              <div
                onClick={() => changeValue("f", "gender")}
                className={` h-5 w-5 border rounded-md flex items-center justify-center p-[1px] ${
                  guests[index].gender === "f" && "bg-primary"
                }`}
              >
                {guests[index].gender === "f" && (
                  <FaCheck className=" text-sm text-white" />
                )}
              </div>
              <span
                className=" cursor-pointer"
                onClick={() => changeValue("f", "gender")}
              >
                Female
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
