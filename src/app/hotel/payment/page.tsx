"use client";

import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import LoadingComponent from "@/components/layout/LoadingComponent";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { APILINK } from "../../../../data";
import HotelPaymentPageInfo from "@/components/hotels/payment/HotelPaymentPageInfo";
import HotelCheckoutSSL from "@/components/hotels/checkout/HotelCheckoutSSL";
import HotelCheckoutRoomRate from "@/components/hotels/checkout/HotelCheckoutRoomRate";
import Image from "next/image";
import Link from "next/link";
import HotelPaymentRoomRate from "@/components/hotels/payment/HotelPaymentRoomRate";

export default function Page() {
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState("");
  const [saveTheCardInfo, setSaveTheCardInfo] = useState(false);
  const [selectedPaymentGetway, setSelectedPaymentGetway] =
    useState("mastercard");
  const [loading, setLoading] = useState(false);
  const [bookingDetails, setBookingDetails] = useState<any>(null);
  const [searchParams, setSearchParams] = useState<URLSearchParams | null>(
    null
  );
  const [paymentLink, setPaymentLink] = useState("");

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    setSearchParams(params);
  }, []);

  const goToMasterCardPaymentGetWay = async () => {
    window.location.href = paymentLink;
  };

  const getFlightBookingDetails = async (id: string | null) => {
    if (!id) return;
    try {
      setLoading(true);
      const res = await axios.get(`${APILINK}/api/flights/booking/${id}`);
      setBookingDetails(res.data.data);
      setPaymentLink(res.data.data.payment.paymentLink);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };

  useEffect(() => {
    if (searchParams) {
      const booking_id = searchParams.get("booking_id");
      getFlightBookingDetails(booking_id);
    }
  }, [searchParams]);

  if (loading) {
    return <LoadingComponent />;
  }

  return (
    <div className=" bg-white w-full">
      <Header />
      <div className=" w-full flex justify-center px-3 pt-20">
        <div className=" w-full xl:w-[1220px] 2xl:w-[1420px] mt-5">
          <HotelPaymentPageInfo />
          <div className=" w-full grid grid-cols-3 gap-8">
            <div className=" col-span-3 lg:col-span-2 mt-5">
              <div className=" bg-[#F8F9FE] p-5 rounded-2xl w-full">
                <div className=" w-full pb-3 border-b">
                  <p className=" text-xl font-semibold text-center">
                    How do you prefer to pay?
                  </p>
                </div>
                <div className=" mt-3">
                  <p className=" font-medium text-lg text-center">
                    Express checkout
                  </p>
                  <div className=" mt-5 flex justify-center items-center gap-5">
                    <div className=" rounded-lg bg-[#CCDEFF] h-[50px] w-[220px]  flex items-center justify-center">
                      <Image
                        src="/New/hotel/payment/paypal-pay.png"
                        width={500}
                        height={500}
                        alt="Picture of the payment"
                        className="w-[50px]"
                      />
                    </div>
                    <div className=" rounded-lg bg-[#E6E4FF] h-[50px] w-[220px]  flex items-center justify-center">
                      <Image
                        src="/New/hotel/payment/stripe-pay.png"
                        width={500}
                        height={500}
                        alt="Picture of the payment"
                        className="w-[40px]"
                      />
                    </div>
                    <div className=" rounded-lg bg-[#000000] h-[50px] w-[220px]  flex items-center justify-center">
                      <Image
                        src="/New/hotel/payment/apple-pay.png"
                        width={500}
                        height={500}
                        alt="Picture of the payment"
                        className="w-[45px]"
                      />
                    </div>
                  </div>
                  <div className=" w-full h-14 flex items-center gap-5">
                    <span className=" w-[48%] h-[1px] bg-gray-200"></span>
                    <span className="">or</span>
                    <span className=" w-[48%] h-[1px] bg-gray-200"></span>
                  </div>
                  <div className=" w-full flex items-center justify-center gap-5">
                    <div className=" px-2 py-1 flex items-center justify-center w-[60px] rounded-md border">
                      <Image
                        src="/New/footer/VISACard-min.png"
                        width={300}
                        height={300}
                        alt="Picture of the hotel"
                        className="w-[46px]"
                      />
                    </div>
                    <div className=" px-2 py-1 flex items-center justify-center w-[60px] rounded-md border">
                      <Image
                        src="/New/footer/MasterCard.png"
                        width={300}
                        height={300}
                        alt="Picture of the hotel"
                        className="w-[44px]"
                      />
                    </div>
                    <div className=" px-2 py-1 flex items-center justify-center w-[60px] rounded-md border">
                      <Image
                        src="/New/footer/JCB_logo.png"
                        width={300}
                        height={300}
                        alt="Picture of the hotel"
                        className=" w-[36px]"
                      />
                    </div>
                    <div className=" px-2 py-1 flex items-center justify-center w-[60px] rounded-md border">
                      <Image
                        src="/New/footer/unionpay.png"
                        width={300}
                        height={300}
                        alt="Picture of the hotel"
                        className=" w-[28px]"
                      />
                    </div>
                    <div className=" px-2 py-1 flex items-center justify-center w-[60px] rounded-md border">
                      <Image
                        src="/New/footer/american-express.png"
                        width={300}
                        height={300}
                        alt="Picture of the hotel"
                        className=" w-[28px]"
                      />
                    </div>
                  </div>
                  <div className=" mt-10">
                    <p className=" text-xl font-medium">
                      Choose a payment method
                    </p>
                    <p className=" mt-2">
                      You will not be charged until you review this order on the
                      next page.
                    </p>
                    <div className=" mt-10">
                      <div className=" flex items-center justify-between border-y py-3">
                        <div
                          className=" flex items-center gap-2 cursor-pointer"
                          onClick={() => setSelectedPaymentMethod("card")}
                        >
                          <div className=" w-[20px] h-[20px] rounded-full border flex items-center justify-center border-primary">
                            {selectedPaymentMethod === "card" && (
                              <div className=" h-[12px] w-[12px] bg-primary rounded-full"></div>
                            )}
                          </div>
                          <p className=" font-medium">Card</p>
                        </div>
                        <div className=" w-full flex items-center justify-end gap-5">
                          <div className=" px-2 py-1 flex items-center justify-center w-[40px] rounded-md border">
                            <Image
                              src="/New/footer/VISACard-min.png"
                              width={300}
                              height={300}
                              alt="Picture of the hotel"
                              className="w-[20px]"
                            />
                          </div>
                          <div className=" px-2 py-1 flex items-center justify-center w-[40px] rounded-md border">
                            <Image
                              src="/New/footer/MasterCard.png"
                              width={300}
                              height={300}
                              alt="Picture of the hotel"
                              className="w-[20px]"
                            />
                          </div>
                          <div className=" px-2 py-1 flex items-center justify-center w-[40px] rounded-md border">
                            <Image
                              src="/New/footer/JCB_logo.png"
                              width={300}
                              height={300}
                              alt="Picture of the hotel"
                              className=" w-[20px]"
                            />
                          </div>
                          <div className=" px-2 py-1 flex items-center justify-center w-[40px] rounded-md border">
                            <Image
                              src="/New/footer/unionpay.png"
                              width={300}
                              height={300}
                              alt="Picture of the hotel"
                              className=" w-[20px]"
                            />
                          </div>
                          <div className=" px-2 py-1 flex items-center justify-center w-[40px] rounded-md border">
                            <Image
                              src="/New/footer/american-express.png"
                              width={300}
                              height={300}
                              alt="Picture of the hotel"
                              className=" w-[20px]"
                            />
                          </div>
                        </div>
                      </div>
                      {selectedPaymentMethod === "card" && (
                        <div className=" w-full mt-5">
                          <div>
                            <label htmlFor="" className=" font-medium">
                              Card number*
                            </label>
                            <input
                              type="number"
                              className=" w-full p-2 rounded-md border focus:outline-none bg-transparent placeholder:text-sm"
                              placeholder="Card number"
                            />
                          </div>
                          <div className=" w-full grid grid-cols-2 gap-5 mt-2">
                            <div>
                              <label htmlFor="" className=" font-medium">
                                Validity*
                              </label>
                              <input
                                type="text"
                                className=" w-full p-2 rounded-md border focus:outline-none bg-transparent placeholder:text-sm"
                                placeholder="Card number"
                              />
                            </div>
                            <div>
                              <label htmlFor="" className=" font-medium">
                                CVC code*
                              </label>
                              <input
                                type="text"
                                className=" w-full p-2 rounded-md border focus:outline-none bg-transparent placeholder:text-sm"
                                placeholder="Card number"
                              />
                            </div>
                          </div>
                          <div className=" mt-2 ">
                            <label htmlFor="" className=" font-medium">
                              Cardholder name*
                            </label>
                            <input
                              type="text"
                              className=" w-full p-2 rounded-md border focus:outline-none bg-transparent placeholder:text-sm"
                              placeholder="Card holder name"
                            />
                          </div>
                          <div className=" mt-5 flex items-center gap-5 pb-5 border-b">
                            <div
                              onClick={() =>
                                setSaveTheCardInfo(!saveTheCardInfo)
                              }
                              className={`${
                                saveTheCardInfo ? " bg-blue-500" : " bg-white"
                              } h-[26px] w-[50px] border p-[3px] rounded-2xl cursor-pointer `}
                            >
                              <div
                                className={`h-[18px] w-[18px] rounded-full bg-white shadow shadow-gray-500 transition-all duration-300 ease-linear ${
                                  saveTheCardInfo && " translate-x-[25px]"
                                } `}
                              ></div>
                            </div>
                            <p>Save card for future payments</p>
                          </div>
                        </div>
                      )}
                      <div className=" flex items-center justify-between border-b py-3">
                        <div
                          className=" flex items-center gap-2 cursor-pointer"
                          onClick={() => setSelectedPaymentMethod("paypal")}
                        >
                          <div className=" w-[20px] h-[20px] rounded-full border flex items-center justify-center border-primary">
                            {selectedPaymentMethod === "paypal" && (
                              <div className=" h-[12px] w-[12px] bg-primary rounded-full"></div>
                            )}
                          </div>
                          <p className=" font-medium w-[160px]">
                            Pay with PayPal
                          </p>
                        </div>
                        <div className=" w-full flex items-center justify-end">
                          <Image
                            src="/New/hotel/payment/paypal-pay.png"
                            width={500}
                            height={500}
                            alt="Picture of the hotel"
                            className=" w-[100px]"
                          />
                        </div>
                      </div>
                      <div className=" flex items-center justify-between border-b py-3">
                        <div
                          className=" flex items-center gap-2 cursor-pointer"
                          onClick={() => setSelectedPaymentMethod("")}
                        >
                          <div className=" w-[20px] h-[20px] rounded-full border flex items-center justify-center border-primary">
                            {selectedPaymentMethod === "" && (
                              <div className=" h-[12px] w-[12px] bg-primary rounded-full"></div>
                            )}
                          </div>
                          <p className=" font-medium w-[160px]">No name</p>
                        </div>
                        <div className=" w-full flex items-center justify-end">
                          <Image
                            src="/New/hotel/payment/amazon.png"
                            width={500}
                            height={500}
                            alt="Picture of the hotel"
                            className=" w-[100px]"
                          />
                        </div>
                      </div>
                      <div className=" mt-5">
                        <p>{`Continuing will take you to your PayPal account. You'll be able to review and submit your order after you log in.`}</p>
                      </div>
                      <div className=" mt-14 mb-5 flex items-center justify-center">
                        <button className=" bg-primary text-white px-16 py-2 rounded-2xl">
                          Make a Payment
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className=" mt-10 w-full rounded-2xl bg-[#F8F9FE] border border-blue-500 p-5">
                <p className=" text-xl font-semibold">Terms and Conditions</p>
                <p className=" mt-5">
                  {`By clicking "Book Now" you confirm that you have read, understood and accepted our`}{" "}
                  <Link href={"/terms&conditions"} className=" text-blue-500">
                    Terms of Service
                  </Link>{" "}
                  and{" "}
                  <Link href={"/terms&conditions"} className=" text-blue-500">
                    {" "}
                    Oggoair Rental Conditions
                  </Link>
                </p>
              </div>
            </div>
            <div className=" col-span-3 lg:col-span-1">
              {/* <HotelCheckoutRoomRate /> */}
              <HotelPaymentRoomRate />
              <HotelCheckoutSSL />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
