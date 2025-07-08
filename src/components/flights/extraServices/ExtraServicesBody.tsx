"use client";

import React, { useEffect, useState } from "react";
import axios from "axios";
import { APILINK } from "../../../../data";
import { useRouter } from "next/navigation";
import OrderSummery from "./OderSummery";
import LoadingComponent from "@/components/layout/LoadingComponent";
import SingleExtraSearvice from "./SingleExtraSearvice";

export default function ExtraServicesBody() {
  const [selectedServices, setSelectedServices] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);
  const [bookingDetails, setBookingDetails] = useState<any>(null);
  const [additionalServices, setAdditionalServices] = useState<any[]>([]);
  const [bookingId, setBookingId] = useState("");
  const [searchParams, setSearchParams] = useState<URLSearchParams | null>(
    null
  );
  const router = useRouter();
  useEffect(() => {
    // This will only run on the client side
    const params = new URLSearchParams(window.location.search);
    setSearchParams(params);
  }, []);

  const toggleServices = (service: string) => {
    if (selectedServices.includes(service)) {
      const newData = [...selectedServices].filter((ser) => ser !== service);
      setSelectedServices(newData);
    } else {
      const newData = [...selectedServices];
      newData.push(service);
      setSelectedServices(newData);
    }
  };

  const getFlightAdditionalServices = async () => {
    try {
      // setLoading(true);
      const res = await axios.get(`${APILINK}/api/additional-services`);
      setAdditionalServices(res.data.data);
      // setLoading(false);
    } catch (error) {
      // setLoading(false);
      console.log(error);
    }
  };
  // console.log(additionalServices);
  const getFlightBookingDetails = async (id: string | null) => {
    if (!id) return;
    try {
      setLoading(true);
      const res = await axios.get(`${APILINK}/api/flights/booking/${id}`);
      setBookingDetails(res.data.data);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };

  const proceedToPayment = async (id: string) => {
    try {
      const ids = [];
      for (let i of selectedServices) {
        ids.push(i._id);
      }
      setLoading(true);
      const res = await axios.put(
        `${APILINK}/api/flights/booking/add-services/${id}`,
        { selectedServices: ids }
      );

      if (res) {
        router.push(`/flight/payment?booking_id=${bookingId}`);
      }
      console.log(res.data);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };

  useEffect(() => {
    if (searchParams) {
      const booking_id = searchParams.get("booking_id");
      if (booking_id) {
        setBookingId(booking_id);
      }
      getFlightBookingDetails(booking_id);
      getFlightAdditionalServices();
    }
  }, [searchParams]);

  // console.log("additionalServices", additionalServices);

  const additionalBaggage = {
    name: "Additional baggage",
    subtitle:
      "Pay for your baggage at once and save up to 50% than at the airport!",
    details: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga voluptatum nesciunt optio est sed, voluptas et possimus necessitatibus excepturi. Quam mollitia nesciunt ipsa voluptatum necessitatibus delectus numquam aliquam aut similique.Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga voluptatum nesciunt optio est sed, voluptas et possimus necessitatibus excepturi. Quam mollitia nesciunt ipsa voluptatum necessitatibus delectus numquam aliquam aut similique.
   
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga voluptatum nesciunt optio est sed, voluptas et possimus necessitatibus excepturi. Quam mollitia nesciunt ipsa voluptatum necessitatibus delectus numquam aliquam aut similique.Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga voluptatum nesciunt optio est sed, voluptas et possimus necessitatibus excepturi. Quam mollitia nesciunt ipsa voluptatum necessitatibus delectus numquam aliquam aut similique.
      `,
    charge: 20,
    image: "Additional baggage",
  };

  if (loading) {
    return <LoadingComponent />;
  }
  return (
    <div>
      <div className="w-full grid grid-cols-8 gap-5 mt-8">
        <div className=" order-2 sm:order-1 col-span-8 sm:col-span-6">
          <div className=" w-full">
            {/* <p className=" text-xl font-bold mb-5 ">Services on board</p> */}
            <SingleExtraSearvice
              index={0}
              service={additionalBaggage}
              selectedServices={selectedServices}
              toggleServices={toggleServices}
            />
          </div>
          <div className=" w-full">
            <p className=" px-5 text-xl font-bold mb-5 ">Additional services</p>
            {additionalServices.map((service: any, index: number) => {
              return (
                <SingleExtraSearvice
                  index={index}
                  key={index}
                  service={service}
                  selectedServices={selectedServices}
                  toggleServices={toggleServices}
                />
              );
            })}
            <div className=" w-full mt-5">
              <div className=" mt-5 p-5 rounded-2xl bg-[#F8F9FE] flex items-center justify-center">
                <p className=" font-semibold text-lg text-center">
                  Pay for your order, you are one step away from travel!
                </p>
              </div>
              <div className=" w-full flex items-center justify-center mt-5">
                <button
                  className=" bg-primary rounded-3xl px-14 py-3 text-white font-medium"
                  onClick={() => proceedToPayment(bookingId)}
                >
                  Procced to payment
                </button>
              </div>
            </div>
          </div>
        </div>
        {bookingDetails && (
          <div className=" order-1 sm:order-2 col-span-8 sm:col-span-2">
            <OrderSummery
              bookingDetails={bookingDetails}
              selectedServices={selectedServices}
            />
          </div>
        )}
      </div>
    </div>
  );
}
