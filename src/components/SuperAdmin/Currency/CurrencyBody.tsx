"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import axios from "axios";
import { APILINK } from "../../../../data";
import { Toaster } from "react-hot-toast";
import LoadingComponent from "@/components/layout/LoadingComponent";

export default function CurrencyBody() {
  const [currencyValue, setCurrencyValue] = useState("");
  const [loading, setLoading] = useState(false);

  const updateCurrency = async () => {
    try {
      console.log({ rate: currencyValue, currencyName: "GHS" });
      setLoading(true);
      const res = await axios.put(
        `${APILINK}/api/settings/currency?companyName=oggoair`,
        { rate: parseFloat(currencyValue).toFixed(2), currencyName: "GHS" }
      );
      setLoading(false);
      console.log(res.data);
    } catch (error: any) {
      setLoading(false);
      console.log(error);
    }
  };

  const getCurrency = async () => {
    try {
      setLoading(true);
      const res = await axios.get(
        `${APILINK}/api/settings/currency?companyName=oggoair`
      );
      setCurrencyValue(res.data.data.currency[0].rate);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };

  useEffect(() => {
    getCurrency();
  }, []);

  if (loading) {
    return <LoadingComponent />;
  }

  return (
    <div className=" w-full flex justify-center px-5 pb-10">
      <div className=" w-full xl:w-[1120px]">
        <p className=" text-xl md:text-[30px] mt-4 sm:mt-10 font-medium">
          Currency
        </p>
        <div>
          <div className=" bg-gray-200 shadow w-full grid grid-cols-3 rounded-lg mt-5 md:mt-10">
            <div className="bg-white rounded-l-lg p-5 col-span-3 lg:col-span-2 lg:pr-40">
              <p className=" font-semibold text-2xl capitalize">GHS</p>

              <p className=" text-gray-500 text-sm mt-7">
                Enter the currency amount that will be automatically convert to
                the total price during the payment.
              </p>
              <div className=" mt-5 p-1">
                <div className=" w-full h-10 ">
                  <input
                    type="number"
                    value={currencyValue}
                    onChange={(e) => setCurrencyValue(e.target.value)}
                    placeholder="Currency amoun"
                    className=" w-full h-full focus:outline-none px-3 border border-gray-300 rounded-md"
                  />
                </div>
              </div>
            </div>
            <div className=" lg:block hidden w-full h-full rounded-r-lg overflow-hidden">
              <Image
                src={"/New/pound-notes-1.jpg"}
                height={1000}
                width={1000}
                alt="hotel image"
                className=" w-full h-full object-cover"
              />
            </div>
          </div>

          <div className=" mt-10 flex items-center gap-3">
            <button
              onClick={updateCurrency}
              className=" bg-primary rounded-md text-white text-sm border border-transparent px-5 py-2 hover:border-primary hover:bg-white hover:text-primary transition-all duration-150 ease-in-out"
            >
              Save changes
            </button>
            <button
              onClick={getCurrency}
              className=" hover:bg-primary rounded-md hover:text-white text-sm border hover:border-transparent px-5 py-2 border-primary bg-white text-primary transition-all duration-150 ease-in-out"
            >
              Cencel changes
            </button>
          </div>
        </div>
      </div>
      <Toaster />
    </div>
  );
}
