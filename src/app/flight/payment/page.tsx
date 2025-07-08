"use client";

import toast, { Toaster } from "react-hot-toast";
import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import LoadingComponent from "@/components/layout/LoadingComponent";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { APILINK } from "../../../../data";
import Image from "next/image";
import OrderSummery from "@/components/flights/payment/OrderSummery";
import PaymentInfoHeroSection from "@/components/flights/payment/PaymentInfoHeroSection";
import { FaCheck } from "react-icons/fa6";

export default function Page() {
  const [checkTheCondition, setCheckTheCondition] = useState(false);
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState("");
  const [saveTheCardInfo, setSaveTheCardInfo] = useState(false);
  const [selectedPaymentGetway, setSelectedPaymentGetway] = useState<any>(null);
  const [loading, setLoading] = useState(false);
  const [bookingDetails, setBookingDetails] = useState<any>(null);
  const [searchParams, setSearchParams] = useState<URLSearchParams | null>(
    null
  );
  const [origin, setOrigin] = useState("");
  const [paymentLinks, setPaymentLinks] = useState([]);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    setOrigin(window.location.origin);
    setSearchParams(params);
  }, []);

  const goToMasterCardPaymentGetWay = async () => {
    if (!selectedPaymentGetway) {
      return toast.error("please select one payment getway");
    }
    if (!checkTheCondition) {
      return toast.error("please check the conditions");
    }
    window.location.href = selectedPaymentGetway.link;
  };

  const getFlightBookingDetails = async (id: string | null) => {
    if (!id) return;
    try {
      setLoading(true);
      const res = await axios.get(`${APILINK}/api/flights/booking/${id}`);
      setBookingDetails(res.data.data);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };
  const getFlightBookingPaymentLink = async (id: string | null) => {
    if (!id) return;
    try {
      setLoading(true);
      const res = await axios.post(
        `${APILINK}/api/flights/booking/get-payment-links/${id}`,
        {
          origin: window.location.origin,
          // origin: "https://oggoair.travel",
        }
      );

      setPaymentLinks(res.data.data);
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
      getFlightBookingPaymentLink(booking_id);
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
          <PaymentInfoHeroSection />
          <div className=" w-full grid grid-cols-8 gap-8 mt-8">
            <div className=" order-2 sm:order-1 col-span-8 lg:col-span-6">
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
                      {paymentLinks.map((payment: any, index: number) => {
                        return (
                          <div
                            key={index}
                            className=" flex items-center justify-between border-y py-3"
                          >
                            <div
                              className=" flex items-center gap-2 cursor-pointer"
                              onClick={() => setSelectedPaymentGetway(payment)}
                            >
                              <div className=" w-[20px] h-[20px] rounded-full border flex items-center justify-center border-primary">
                                {selectedPaymentGetway &&
                                  selectedPaymentGetway.bank ===
                                    payment.bank && (
                                    <div className=" h-[12px] w-[12px] bg-primary rounded-full"></div>
                                  )}
                              </div>
                              <p className=" font-medium capitalize">
                                {payment.bank}
                              </p>
                            </div>
                            <div className=" w-full flex items-center justify-end gap-2">
                              <div className=" px-1 py-1 flex items-center justify-center w-[52px] h-[38px] bg-white rounded-md border">
                                <Image
                                  src="/New/footer/VISACard-min.png"
                                  width={500}
                                  height={500}
                                  alt="Picture of the hotel"
                                  className=" w-full h-full object-contain"
                                />
                              </div>
                              <div className=" px-1 py-1 flex items-center justify-center w-[52px] h-[38px] bg-white rounded-md border">
                                <Image
                                  src="/New/footer/MasterCard.png"
                                  width={500}
                                  height={500}
                                  alt="Picture of the hotel"
                                  className=" w-full h-full object-contain"
                                />
                              </div>
                              {payment.bank === "gtpay" && (
                                <div className=" px-1 py-1 flex items-center justify-center w-[52px] h-[38px] bg-white rounded-md border">
                                  <Image
                                    src="/New/payment/gtpay.png"
                                    width={500}
                                    height={500}
                                    alt="Picture of the mastercard"
                                    className="  w-full h-full object-contain"
                                  />
                                </div>
                              )}
                              {payment.bank === "calpay" && (
                                <div className=" px-1 py-1 flex items-center justify-center w-[52px] h-[38px] bg-white rounded-md border">
                                  <Image
                                    src="/New/payment/calpay.png"
                                    width={500}
                                    height={500}
                                    alt="Picture of the mastercard"
                                    className="  w-full h-full object-contain"
                                  />
                                </div>
                              )}
                              {payment.bank === "myghpay" && (
                                <div className=" px-1 py-1 flex items-center justify-center w-[52px] h-[38px] bg-white rounded-md border">
                                  <Image
                                    src="/New/payment/myghpay.png"
                                    width={500}
                                    height={500}
                                    alt="Picture of the mastercard"
                                    className=" w-full h-full object-contain"
                                  />
                                </div>
                              )}
                              {payment.bank === "paystack" && (
                                <div className=" px-1 py-1 flex items-center justify-center w-[52px] h-[38px] bg-white rounded-md border">
                                  <Image
                                    src="/New/payment/paystack.png"
                                    width={500}
                                    height={500}
                                    alt="Picture of the mastercard"
                                    className=" w-full h-full object-contain"
                                  />
                                </div>
                              )}
                              {payment.bank === "theteller" && (
                                <div className=" px-1 py-1 flex items-center justify-center w-[52px] h-[38px] bg-white rounded-md border">
                                  <Image
                                    src="/New/payment/theteller.png"
                                    width={500}
                                    height={500}
                                    alt="Picture of the mastercard"
                                    className=" w-full h-full object-contain"
                                  />
                                </div>
                              )}
                              {payment.bank === "hubtel" && (
                                <div className=" px-1 py-1 flex items-center justify-center w-[52px] h-[38px] bg-white rounded-md border">
                                  <Image
                                    src="/New/payment/hubtel.png"
                                    width={500}
                                    height={500}
                                    alt="Picture of the mastercard"
                                    className=" w-full h-full object-contain"
                                  />
                                </div>
                              )}
                              {payment.bank === "pesapal" && (
                                <div className=" px-1 py-1 flex items-center justify-center w-[52px] h-[38px] bg-white rounded-md border">
                                  <Image
                                    src="/New/payment/pesapal.png"
                                    width={500}
                                    height={500}
                                    alt="Picture of the mastercard"
                                    className=" w-full h-full object-contain"
                                  />
                                </div>
                              )}
                              {payment.bank === "dpo" && (
                                <div className=" px-1 py-1 flex items-center justify-center w-[52px] h-[38px] bg-white rounded-md border">
                                  <Image
                                    src="/New/payment/dpo.jpg"
                                    width={500}
                                    height={500}
                                    alt="Picture of the mastercard"
                                    className=" w-full h-full object-contain"
                                  />
                                </div>
                              )}
                              {payment.bank === "manilla" && (
                                <div className=" px-1 py-1 flex items-center justify-center w-[52px] h-[38px] bg-white rounded-md border">
                                  <Image
                                    src="/New/payment/manilla.jpg"
                                    width={500}
                                    height={500}
                                    alt="Picture of the mastercard"
                                    className=" w-full h-full object-contain"
                                  />
                                </div>
                              )}
                            </div>
                          </div>
                        );
                      })}

                      {/* <div className=" flex items-center justify-between border-b py-3">
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
                      </div> */}
                      <div className=" mt-5 flex gap-3">
                        <div className=" w-10">
                          <div
                            onClick={() =>
                              setCheckTheCondition(!checkTheCondition)
                            }
                            className={` mt-1 h-6 w-6 rounded-md border border-gray-300 cursor-pointer p-[2px] flex items-center justify-center ${
                              checkTheCondition ? " bg-primary" : ""
                            }`}
                          >
                            {checkTheCondition && (
                              <FaCheck className=" text-white" />
                            )}
                          </div>
                        </div>
                        <div>
                          <p className=" text-justify">
                            I have read and accept the travel conditions of
                            oggoair Travel Platform Ltd, including the Fare
                            Rules and the {`airline's`} general{" "}
                            <a
                              href={`${origin}/terms&conditions`}
                              target="_blank"
                              rel="noopener noreferrer"
                              className=" font-semibold text-blue-500"
                            >
                              terms and conditions
                            </a>{" "}
                            . I confirm that I have entered my booking
                            information accurately. If I have purchased SMS
                            update services, I agree to receive SMS messages for
                            informational purposes only. I understand that no
                            personal information will be shared with or sold to
                            third parties for marketing or promotional purposes.
                          </p>

                          <p className=" mt-5">
                            You can read our{" "}
                            <a
                              href={`${origin}/privacy&policy`}
                              target="_blank"
                              rel="noopener noreferrer"
                              className=" font-semibold text-blue-500"
                            >
                              {" "}
                              Privacy Policy
                            </a>{" "}
                            here. We do not share your payment details
                            with the airline.
                          </p>
                        </div>
                      </div>
                      <div className=" mt-14 mb-5 flex items-center justify-center">
                        <button
                          onClick={goToMasterCardPaymentGetWay}
                          className=" bg-primary text-white px-16 py-2 rounded-2xl"
                        >
                          Make a Payment
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className=" order-1 sm:order-2 col-span-8 lg:col-span-2">
              {bookingDetails && (
                <OrderSummery bookingDetails={bookingDetails} />
              )}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
