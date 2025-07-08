import React, { useState } from "react";
import ParsentageType from "./ParsentageType";
import ToggleButton from "./ToggleButton";
import { useEffect } from "react";
import Image from "next/image";

export default function SettingsType({
  title,
  commitionData,
  setCommitionData,
}: any) {
  const [type, setType] = useState("in USD");
  const [isActive, setIsActive] = useState("inactive");
  const [commissionOn, setCommissionOn] = useState("per-flight");
  const [commitionValue, setCommitionValue] = useState("");

  const handleToggle = () => {
    setIsActive(isActive === "active" ? "inactive" : "active");
    changeValue(isActive === "active" ? "inactive" : "active", "status");
  };

  useEffect(() => {
    if (commitionData) {
      if (title === "air ticket" && commitionData.flight) {
        setIsActive(commitionData.flight.status);
        setCommissionOn(commitionData.flight.commissionOn);
        setCommitionValue(commitionData.flight.value);

        if (commitionData.flight.commissionBy === "money") {
          setType("in USD");
        } else {
          setType("in Percent");
        }
      }

      if (title === "hotel" && commitionData.hotel) {
        setIsActive(commitionData.hotel.status);
        setCommissionOn(commitionData.hotel.commissionOn);
        setCommitionValue(commitionData.hotel.value);

        if (commitionData.hotel.commissionBy === "money") {
          setType("in USD");
        } else {
          setType("in Percent");
        }
      }
    }
  }, [commitionData, title]);

  const changeValue = (value: any, option: any) => {
    if (option === "status") {
      const newData = { ...commitionData };
      if (title === "air ticket") {
        newData.flight.status = value;
      }
      if (title === "hotel") {
        newData.hotel.status = value;
      }
      setCommitionData(newData);
    }

    if (option === "value") {
      const newData = { ...commitionData };
      if (title === "air ticket") {
        newData.flight.value = value;
      }
      if (title === "hotel") {
        newData.hotel.value = value;
      }

      setCommitionData(newData);
    }

    if (option === "commissionOn") {
      const newData = { ...commitionData };
      if (title === "air ticket") {
        newData.flight.commissionOn = value;
      }
      if (title === "hotel") {
        newData.hotel.commissionOn = value;
      }

      setCommitionData(newData);
    }

    if (option === "commissionBy") {
      const newData = { ...commitionData };

      if (title === "air ticket") {
        newData.flight.commissionBy = value;
      }
      if (title === "hotel") {
        newData.hotel.commissionBy = value;
      }

      setCommitionData(newData);
    }
  };

  return (
    <div className=" bg-gray-200 shadow w-full grid grid-cols-3 rounded-lg mt-5 md:mt-10">
      <div className="bg-white rounded-l-lg p-5 col-span-3 lg:col-span-2 lg:pr-40">
        <p className=" font-semibold text-xl capitalize">{title}</p>
        <div className=" mt-5 flex items-center gap-3">
          <ToggleButton
            changeValue={changeValue}
            isActive={isActive}
            handleToggle={handleToggle}
          />
          <p className=" text-gray-500 text-sm">Enabled</p>
        </div>
        <p className=" text-gray-500 text-sm mt-7">
          Enter the commission amount that will be automatically added to the
          NET price during the calculation of the customer price when sharing
          the screen with the Shift+R feature enabled.
        </p>
        <div className=" sm:pl-5">
          <div className=" mt-5 grid grid-cols-2 items-center gap-3">
            <div className=" w-full h-10 grid grid-cols-12 items-center border rounded ">
              <div className=" col-span-10 h-full border-r">
                <input
                  type="text"
                  value={commitionValue}
                  onChange={(e) => {
                    setCommitionValue(e.target.value);
                    changeValue(e.target.value, "value");
                  }}
                  placeholder="Commission amoun"
                  className=" w-full h-full focus:outline-none px-3"
                />
              </div>
              <p className=" col-span-2 text-center">%</p>
            </div>
            <div>
              <ParsentageType
                changeValue={changeValue}
                title={title}
                type={type}
                setType={setType}
              />
            </div>
            <p className=" text-gray-500 text-xs">
              From 0.01 up to gg.99r up to two symbols after the comma
            </p>
          </div>
          {type === "in USD" && (
            <select
              className=" focus:outline-none mt-5 border px-3 py-2 rounded w-full"
              name=""
              id=""
              value={commissionOn}
              onChange={(e) => {
                setCommissionOn(e.target.value);
                changeValue(e.target.value, "commissionOn");
              }}
            >
              <option value="per-segment">
                For each segment and passenger
              </option>
              <option value="per-flight">For flight</option>
            </select>
          )}
        </div>
      </div>
      <div className=" lg:block hidden w-full h-full rounded-r-lg overflow-hidden">
        <Image
          src={title === "hotel" ? "/New/hotels.jpg" : "/New/flight.jpg"}
          height={1000}
          width={1000}
          alt="hotel image"
          className=" w-full h-full object-cover"
        />
      </div>
    </div>
  );
}
