"use client";

import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import axios from "axios";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { FaCheck } from "react-icons/fa6";
import { APILINK } from "../../../data";
import toast, { Toaster } from "react-hot-toast";
import { useRouter } from "next/navigation";

export default function Page() {
  const router = useRouter();
  const [selectedPaymentGetway, setSelectedPaymentGetway] = useState<any>("");
  const [paymentLink, setPaymentLink] = useState<any>(null);
  const [paymentLinkInfo, setPaymentLinkInfo] = useState<any>({
    description: "",
    amount: "",
    name: "",
    email: "",
    mobileNumber: "",
    walletPayment: true,
  });
  const [origin, setOrigin] = useState<string>("");
  useEffect(() => {
    setOrigin(window.location.origin);
    // setOrigin("https://oggoair.travel");
  }, []);

  const changeValue = (value: any, option: any) => {
    const newData = { ...paymentLinkInfo };
    newData[option] = value;
    setPaymentLinkInfo(newData);
  };

  const addPaymentLink = async () => {
    if (
      !paymentLinkInfo.description ||
      !paymentLinkInfo.amount ||
      !paymentLinkInfo.name ||
      !paymentLinkInfo.email ||
      !paymentLinkInfo.mobileNumber ||
      !selectedPaymentGetway
    ) {
      return toast.error("Please fill all fields");
    }
    try {
      if (selectedPaymentGetway === "calpay") {
        const res = await axios.post(
          `${APILINK}/api/payment/create-custom-payment-link-for-cal-pay`,
          { ...paymentLinkInfo, origin: "https://oggoair.travel" }
        );
        setPaymentLinkInfo({
          description: "",
          amount: "",
          name: "",
          email: "",
          mobileNumber: "",
          walletPayment: true,
        });
        setSelectedPaymentGetway("");
        setPaymentLink(res.data.data);
        router.push(res.data.data.paymentLink);
      } else if (selectedPaymentGetway === "myghpay") {
        const res = await axios.post(
          `${APILINK}/api/payment/create-custom-payment-link-for-myghpay`,
          { ...paymentLinkInfo, origin: "https://oggoair.travel" }
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
        setSelectedPaymentGetway("");
        setPaymentLink(res.data.data);
        router.push(res.data.data.paymentLink);
      } else if (selectedPaymentGetway === "theteller") {
        const res = await axios.post(
          `${APILINK}/api/payment/create-custom-payment-link-for-theteller`,
          { ...paymentLinkInfo, origin: "https://oggoair.travel" }
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
        setSelectedPaymentGetway("");
        setPaymentLink(res.data.data);
        router.push(res.data.data.paymentLink);
      } else if (selectedPaymentGetway === "hubtel") {
        const res = await axios.post(
          `${APILINK}/api/payment/create-custom-payment-link-for-hubtel`,
          { ...paymentLinkInfo, origin: "https://oggoair.travel" }
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
        setSelectedPaymentGetway("");
        setPaymentLink(res.data.data);
        router.push(res.data.data.paymentLink);
      } else if (selectedPaymentGetway === "manilla") {
        const res = await axios.post(
          `${APILINK}/api/payment/create-custom-payment-link-for-manilla`,
          { ...paymentLinkInfo, origin: "https://oggoair.travel" }
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
        setSelectedPaymentGetway("");
        setPaymentLink(res.data.data);
        router.push(res.data.data.paymentLink);
      } else if (selectedPaymentGetway === "pesapal") {
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
        setSelectedPaymentGetway("");
        setPaymentLink(res.data.data);
        router.push(res.data.data.paymentLink);
      } else if (selectedPaymentGetway === "dpo") {
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
        setSelectedPaymentGetway("");
        setPaymentLink(res.data.data);
        router.push(res.data.data.paymentLink);
      } else if (selectedPaymentGetway === "gtpay") {
        const res = await axios.post(
          `${APILINK}/api/payment/create-custom-payment-link-for-gtpay`,
          { ...paymentLinkInfo, origin: "https://oggoair.africa" }
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
        // console.log(res.data);
        setSelectedPaymentGetway("");
        setPaymentLink(res.data.data);
        router.push(res.data.data.paymentLink);
      }
    } catch (error) {
      console.log(error);
      toast.error("An error occurred, please try again");
    }
  };

  // console.log(origin);

  return (
    <div>
      <Header />
      <div className=" w-full bg-white shadow px-5">
        <div className=" w-full xl:w-[1120px] mx-auto">
          <div className=" w-full flex justify-center">
            <div className=" mt-14 pb-20 w-full lg:w-[800px] ">
              <p className=" text-xl font-semibold">Customer Information</p>
              <div className=" mt-8">
                <label htmlFor="firstName" className=" text-gray-500 block">
                  Name
                </label>
                <input
                  value={paymentLinkInfo.name}
                  onChange={(e) => changeValue(e.target.value, "name")}
                  type="text"
                  id="firstName"
                  placeholder="Jhon Doe"
                  className=" w-full border border-gray-200 rounded-lg px-3 py-2 focus:outline-none mt-1 placeholder:text-sm"
                />
              </div>

              <div className=" mt-5">
                <label htmlFor="email" className=" text-gray-500 block">
                  Email Address
                </label>
                <input
                  value={paymentLinkInfo.email}
                  onChange={(e) => changeValue(e.target.value, "email")}
                  type="email"
                  id="email"
                  placeholder="example@gmail.com"
                  className=" w-full border border-gray-200 rounded-lg px-3 py-2 focus:outline-none mt-1 placeholder:text-sm"
                />
              </div>
              <div className=" mt-5">
                <label htmlFor="email" className=" text-gray-500 block">
                  Description
                </label>
                <select
                  name=""
                  id="description"
                  value={paymentLinkInfo.description}
                  onChange={(e) => changeValue(e.target.value, "description")}
                  // placeholder="Description"
                  className=" w-full border border-gray-200 rounded-lg px-3 py-2 focus:outline-none mt-1 placeholder:text-sm"
                >
                  <option value="">Select Option</option>
                  <option value="ETICKET">ETICKET</option>
                  <option value="HOTEL">HOTEL</option>
                </select>
              </div>
              <div className=" mt-5 grid sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="phone" className=" text-gray-500 block">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    value={paymentLinkInfo.mobileNumber}
                    onChange={(e) =>
                      changeValue(e.target.value, "mobileNumber")
                    }
                    placeholder="Phone Number"
                    className=" w-full border border-gray-200 rounded-lg px-3 py-2 focus:outline-none mt-1 placeholder:text-sm"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className=" text-gray-500 block">
                    Amount
                  </label>
                  <input
                    type="number"
                    id="amount"
                    value={paymentLinkInfo.amount}
                    onChange={(e) => changeValue(e.target.value, "amount")}
                    placeholder="Amount"
                    className=" w-full border border-gray-200 rounded-lg px-3 py-2 focus:outline-none mt-1 placeholder:text-sm"
                  />
                </div>
              </div>
              {(origin === "https://oggoair.co.rw" ||
                origin === "https://www.oggoair.co.rw") && (
                <div className=" mt-5 ">
                  <div>
                    <label htmlFor="phone" className=" text-gray-500 block">
                      Bank
                    </label>

                    <div
                      onClick={() => setSelectedPaymentGetway("pesapal")}
                      className={` cursor-pointer border mt-5 flex justify-between items-center flex-wrap gap-5 rounded-md relative ${
                        selectedPaymentGetway &&
                        selectedPaymentGetway === "pesapal"
                          ? " border-primary border-2"
                          : "border-gray-300"
                      } `}
                    >
                      {selectedPaymentGetway &&
                        selectedPaymentGetway === "pesapal" && (
                          <div className=" cursor-pointer absolute -top-3 -right-3 h-8 w-8 rounded-full bg-primary flex items-center justify-center text-white">
                            <FaCheck />
                          </div>
                        )}

                      <div className="  p-3 flex items-center">
                        <Image
                          src="/New/payment/pesapal.png"
                          width={500}
                          height={500}
                          alt="Picture of the mastercard"
                          className=" w-36"
                        />
                      </div>
                      <div className=" uppercase text-gray-600 p-3 flex items-center">
                        Pesapal
                      </div>
                    </div>
                    <div
                      onClick={() => setSelectedPaymentGetway("dpo")}
                      className={` cursor-pointer border mt-5 flex justify-between items-center flex-wrap gap-5 rounded-md relative ${
                        selectedPaymentGetway && selectedPaymentGetway === "dpo"
                          ? " border-primary border-2"
                          : "border-gray-300"
                      } `}
                    >
                      {selectedPaymentGetway &&
                        selectedPaymentGetway === "dpo" && (
                          <div className=" cursor-pointer absolute -top-3 -right-3 h-8 w-8 rounded-full bg-primary flex items-center justify-center text-white">
                            <FaCheck />
                          </div>
                        )}

                      <div className="  p-3 flex items-center">
                        <Image
                          src="/New/payment/dpo.jpg"
                          width={500}
                          height={500}
                          alt="Picture of the mastercard"
                          className=" w-32"
                        />
                      </div>
                      <div className=" uppercase text-gray-600 p-3 flex items-center">
                        Dpo
                      </div>
                    </div>
                  </div>
                </div>
              )}
              {(origin === "https://oggoair.travel" ||
                origin === "https://www.oggoair.travel") && (
                <div className=" mt-5 ">
                  <div>
                    <label htmlFor="phone" className=" text-gray-500 block">
                      Bank
                    </label>
                    <div
                      onClick={() => setSelectedPaymentGetway("myghpay")}
                      className={` cursor-pointer border mt-5 flex justify-between items-center flex-wrap gap-5 rounded-md relative ${
                        selectedPaymentGetway &&
                        selectedPaymentGetway === "myghpay"
                          ? " border-primary border-2"
                          : "border-gray-300"
                      } `}
                    >
                      {selectedPaymentGetway &&
                        selectedPaymentGetway === "myghpay" && (
                          <div className=" cursor-pointer absolute -top-3 -right-3 h-8 w-8 rounded-full bg-primary flex items-center justify-center text-white">
                            <FaCheck />
                          </div>
                        )}

                      <div className="  p-3 flex items-center">
                        <Image
                          src="/New/payment/myghpay.png"
                          width={500}
                          height={500}
                          alt="Picture of the mastercard"
                          className=" w-24"
                        />
                      </div>
                      <div className=" uppercase text-gray-600 p-3 flex items-center">
                        MyGhPay
                      </div>
                    </div>
                    <div
                      onClick={() => setSelectedPaymentGetway("calpay")}
                      className={` cursor-pointer border mt-5 flex justify-between items-center flex-wrap gap-5 rounded-md relative ${
                        selectedPaymentGetway &&
                        selectedPaymentGetway === "calpay"
                          ? " border-primary border-2"
                          : "border-gray-300"
                      } `}
                    >
                      {selectedPaymentGetway &&
                        selectedPaymentGetway === "calpay" && (
                          <div className=" cursor-pointer absolute -top-3 -right-3 h-8 w-8 rounded-full bg-primary flex items-center justify-center text-white">
                            <FaCheck />
                          </div>
                        )}

                      <div className="  p-3 flex items-center">
                        <Image
                          src="/New/payment/calpay.png"
                          width={500}
                          height={500}
                          alt="Picture of the mastercard"
                          className=" w-14"
                        />
                      </div>
                      <div className=" uppercase text-gray-600 p-3 flex items-center">
                        CalPay
                      </div>
                    </div>
                    <div
                      onClick={() => setSelectedPaymentGetway("theteller")}
                      className={` cursor-pointer border mt-5 flex justify-between items-center flex-wrap gap-5 rounded-md relative ${
                        selectedPaymentGetway &&
                        selectedPaymentGetway === "theteller"
                          ? " border-primary border-2"
                          : "border-gray-300"
                      } `}
                    >
                      {selectedPaymentGetway &&
                        selectedPaymentGetway === "theteller" && (
                          <div className=" cursor-pointer absolute -top-3 -right-3 h-8 w-8 rounded-full bg-primary flex items-center justify-center text-white">
                            <FaCheck />
                          </div>
                        )}

                      <div className="  p-3 flex items-center">
                        <Image
                          src="/New/payment/theteller.png"
                          width={500}
                          height={500}
                          alt="Picture of the mastercard"
                          className=" w-36"
                        />
                      </div>
                      <div className=" uppercase text-gray-600 p-3 flex items-center">
                        The Teller
                      </div>
                    </div>
                    <div
                      onClick={() => setSelectedPaymentGetway("hubtel")}
                      className={` cursor-pointer border mt-5 flex justify-between items-center flex-wrap gap-5 rounded-md relative ${
                        selectedPaymentGetway &&
                        selectedPaymentGetway === "hubtel"
                          ? " border-primary border-2"
                          : "border-gray-300"
                      } `}
                    >
                      {selectedPaymentGetway &&
                        selectedPaymentGetway === "hubtel" && (
                          <div className=" cursor-pointer absolute -top-3 -right-3 h-8 w-8 rounded-full bg-primary flex items-center justify-center text-white">
                            <FaCheck />
                          </div>
                        )}

                      <div className="  p-3 py-5 flex items-center">
                        <Image
                          src="/New/payment/hubtel.png"
                          width={500}
                          height={500}
                          alt="Picture of the mastercard"
                          className=" w-32"
                        />
                      </div>
                      <div className=" uppercase text-gray-600 p-3 flex items-center">
                        Hubtel
                      </div>
                    </div>
                    <div
                      onClick={() => setSelectedPaymentGetway("manilla")}
                      className={` cursor-pointer border mt-5 flex justify-between items-center flex-wrap gap-5 rounded-md relative ${
                        selectedPaymentGetway &&
                        selectedPaymentGetway === "manilla"
                          ? " border-primary border-2"
                          : "border-gray-300"
                      } `}
                    >
                      {selectedPaymentGetway &&
                        selectedPaymentGetway === "manilla" && (
                          <div className=" cursor-pointer absolute -top-3 -right-3 h-8 w-8 rounded-full bg-primary flex items-center justify-center text-white">
                            <FaCheck />
                          </div>
                        )}

                      <div className="  p-3 py-5 flex items-center">
                        <Image
                          src="/New/payment/manilla.jpg"
                          width={500}
                          height={500}
                          alt="Picture of the mastercard"
                          className=" w-28 h-12"
                        />
                      </div>
                      <div className=" uppercase text-gray-600 p-3 flex items-center">
                        Manilla
                      </div>
                    </div>
                  </div>
                </div>
              )}
              {(origin === "https://oggoair.africa" ||
                origin === "https://www.oggoair.africa") && (
                <div className=" mt-5 ">
                  <div>
                    <label htmlFor="phone" className=" text-gray-500 block">
                      Bank
                    </label>
                    <div
                      onClick={() => setSelectedPaymentGetway("gtpay")}
                      className={` cursor-pointer border mt-5 flex justify-between items-center flex-wrap gap-5 rounded-md relative ${
                        selectedPaymentGetway &&
                        selectedPaymentGetway === "gtpay"
                          ? " border-primary border-2"
                          : "border-gray-300"
                      } `}
                    >
                      {selectedPaymentGetway &&
                        selectedPaymentGetway === "gtpay" && (
                          <div className=" cursor-pointer absolute -top-3 -right-3 h-8 w-8 rounded-full bg-primary flex items-center justify-center text-white">
                            <FaCheck />
                          </div>
                        )}

                      <div className="  p-3 flex items-center">
                        <Image
                          src="/New/payment/myghpay.png"
                          width={500}
                          height={500}
                          alt="Picture of the mastercard"
                          className=" w-24"
                        />
                      </div>
                      <div className=" uppercase text-gray-600 p-3 flex items-center">
                        GTPay
                      </div>
                    </div>
                  </div>
                </div>
              )}

              <div className=" mt-10 w-full flex items-center justify-center">
                <button
                  onClick={addPaymentLink}
                  className=" bg-primary text-white px-10 py-3 rounded-md"
                >
                  Pay Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
      <Toaster />
    </div>
  );
}
