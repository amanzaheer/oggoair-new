"use client";

import React, { useEffect, useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import "react-phone-number-input/style.css";
import toast from "react-hot-toast";
import axios from "axios";
import { APILINK } from "../../../../data";

export default function CreatePaymentLinkCORW({
  toggleShowCreatePaymentLink,
  getCustomPayment,
}: any) {
  const [SuperAdmin, setSuperAdmin] = useState<any>(null);

  const [paymentLinkInfo, setPaymentLinkInfo] = useState<any>({
    description: "",
    amount: "",
    name: "",
    email: "",
    // city: "",
    mobileNumber: "",
  });

  const [
    selectedBankForCreatePaymentLink,
    setSelectedBankForCreatePaymentLink,
  ] = useState("dpo");

  useEffect(() => {
    setSuperAdmin(JSON.parse(localStorage.getItem("SuperAdminInfo") as string));
  }, []);

  const addPaymentLink = async () => {
    if (
      !paymentLinkInfo.description ||
      !paymentLinkInfo.amount ||
      !paymentLinkInfo.name ||
      !paymentLinkInfo.email ||
      // !paymentLinkInfo.city ||
      !paymentLinkInfo.mobileNumber
    ) {
      return toast.error("Please fill all fields");
    }
    try {
      if (selectedBankForCreatePaymentLink === "pesapal") {
        const res = await axios.post(
          `${APILINK}/api/payment/create-custom-payment-link-for-pesapal`,
          { ...paymentLinkInfo, origin: "https://oggoair.co.rw" }
        );
        console.log(res.data);
        setPaymentLinkInfo({
          description: "",
          amount: "",
          name: "",
          email: "",
          mobileNumber: "",
          walletPayment: true,
        });
        console.log(res.data);
        getCustomPayment();
        setPaymentLinkInfo({
          description: "",
          amount: "",
          name: "",
          email: "",
          mobileNumber: "",
        });
        toggleShowCreatePaymentLink();
      } else if (selectedBankForCreatePaymentLink === "dpo") {
        const res = await axios.post(
          `${APILINK}/api/payment/create-custom-payment-link-for-dpo`,
          { ...paymentLinkInfo, origin: "https://oggoair.co.rw" }
        );
        console.log(res.data);
        setPaymentLinkInfo({
          description: "",
          amount: "",
          name: "",
          email: "",
          mobileNumber: "",
          walletPayment: true,
        });
        console.log(res.data);
        getCustomPayment();
        setPaymentLinkInfo({
          description: "",
          amount: "",
          name: "",
          email: "",
          mobileNumber: "",
        });
        toggleShowCreatePaymentLink();
      }
    } catch (error) {
      console.log(error);
    }
  };

  const changeValue = (value: any, option: any) => {
    const newData = { ...paymentLinkInfo };
    newData[option] = value;
    setPaymentLinkInfo(newData);
  };

  return (
    <div className=" w-full h-screen fixed top-0 left-0 bg-black bg-opacity-25 sm:p-5 z-[2000]">
      <div className=" w-full h-full flex items-center justify-center">
        <div className=" w-full max-w-[500px] h-full overflow-y-scroll sm:overflow-hidden sm:h-auto bg-white rounded-md p-5 relative">
          <div
            onClick={toggleShowCreatePaymentLink}
            className=" h-6 w-6 absolute top-3 sm:top-2 right-3 sm:right-2 cursor-pointer bg-red-500 text-white shadow flex justify-center items-center rounded-full"
          >
            <AiOutlineClose className="font-bold" />
          </div>

          <p className=" text-xl text-center font-medium">
            Create A Payment Link
          </p>
          <div className=" flex flex-col gap-2 mt-5">
            <div className="">
              <label htmlFor="" className=" text-sm font-medium">
                Desctiption
              </label>
              <input
                type="text"
                value={paymentLinkInfo.description}
                onChange={(e) => changeValue(e.target.value, "description")}
                placeholder="description"
                className=" p-3 py-2 border rounded-md focus:outline-none w-full focus:border-primary hover:border-primary mt-1 placeholder:text-sm"
              />
            </div>
            <div className="">
              <label htmlFor="" className=" text-sm font-medium">
                Amount
              </label>
              <input
                type="number"
                // min="2017-06-01T08:30"
                value={paymentLinkInfo.amount}
                onChange={(e) => changeValue(e.target.value, "amount")}
                placeholder="amount"
                className=" p-3 py-2 border rounded-md focus:outline-none w-full focus:border-primary hover:border-primary mt-1 placeholder:text-sm"
              />
            </div>
            <div className="">
              <label htmlFor="" className=" text-sm font-medium">
                Full Name
              </label>
              <input
                type="text"
                value={paymentLinkInfo.name}
                onChange={(e) => changeValue(e.target.value, "name")}
                placeholder="name"
                className=" p-3 py-2 border rounded-md focus:outline-none w-full focus:border-primary hover:border-primary mt-1 placeholder:text-sm"
              />
            </div>
            <div className="">
              <label htmlFor="" className=" text-sm font-medium">
                Customer Email
              </label>
              <input
                type="email"
                value={paymentLinkInfo.email}
                onChange={(e) => changeValue(e.target.value, "email")}
                placeholder="email"
                className=" p-3 py-2 border rounded-md focus:outline-none w-full focus:border-primary hover:border-primary mt-1 placeholder:text-sm"
              />
            </div>
            {/* <div className="">
              <label htmlFor="" className=" text-sm font-medium">
                City
              </label>
              <input
                type="text"
                value={paymentLinkInfo.city}
                onChange={(e) => changeValue(e.target.value, "city")}
                placeholder="city"
                className=" p-3 py-2 border rounded-md focus:outline-none w-full focus:border-primary hover:border-primary mt-1 placeholder:text-sm"
              />
            </div> */}
            <div className="">
              <label htmlFor="" className=" text-sm font-medium">
                Mobile Number
              </label>
              <input
                type="number"
                value={paymentLinkInfo.mobileNumber}
                onChange={(e) => changeValue(e.target.value, "mobileNumber")}
                placeholder="mobile number"
                className=" p-3 py-2 border rounded-md focus:outline-none w-full focus:border-primary hover:border-primary mt-1 placeholder:text-sm"
              />
            </div>

            <div className="">
              <label htmlFor="" className=" text-sm font-medium">
                For Which Bank
              </label>
              <select
                name=""
                id=""
                className=" p-3 py-2 border rounded-md focus:outline-none w-full focus:border-primary hover:border-primary mt-1 text-sm"
                value={selectedBankForCreatePaymentLink}
                onChange={(e) =>
                  setSelectedBankForCreatePaymentLink(e.target.value)
                }
              >
                <option value="dpo">DPO</option>
                <option value="pesapal">Pesapal</option>
              </select>
            </div>
          </div>
          <div className=" grid grid-cols-2 gap-5 mt-3">
            <button
              onClick={addPaymentLink}
              className=" w-full bg-primary hover:bg-green-600 transition-all duration-150 ease-in-out rounded-md py-2 text-center text-white"
            >
              Add
            </button>
            <button
              onClick={toggleShowCreatePaymentLink}
              className=" w-full bg-gray-400 hover:bg-gray-300 transition-all duration-150 ease-in-out rounded-md py-2 text-center text-white"
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
