"use client";

import HotelCheckooutUserDataConfirmation from "@/components/hotels/checkout/HotelCheckooutUserDataConfirmation";
import HotelCheckoutContactInfo from "@/components/hotels/checkout/HotelCheckoutContactInfo";
import HotelCheckoutHotelInfo from "@/components/hotels/checkout/HotelCheckoutHotelInfo";
import HotelCheckoutLoginConfirm from "@/components/hotels/checkout/HotelCheckoutLoginConfirm";
import HotelCheckoutPageInfo from "@/components/hotels/checkout/HotelCheckoutPageInfo";
import HotelCheckoutRoomRate from "@/components/hotels/checkout/HotelCheckoutRoomRate";
import HotelCheckoutSecoundQuest from "@/components/hotels/checkout/HotelCheckoutSecoundQuest";
import HotelCheckoutSSL from "@/components/hotels/checkout/HotelCheckoutSSL";
import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import { UserDataKeys } from "@/utils/types";
import axios from "axios";
import { useRouter, useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import { APILINK } from "../../../../data";
import toast, { Toaster } from "react-hot-toast";
import LoadingComponent from "@/components/layout/LoadingComponent";

export default function Page() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<any>(null);
  const [showUserDataConfirmation, setShowUserDataConfirmation] =
    useState(false);
  const searchParams = useSearchParams();
  const [hotelQueData, setHotelQueData] = useState<any>(null);

  const [userData, setUserData] = useState({
    name: "",
    surename: "",
    email: "",
    birthDay: "",
    phoneNumber: "",
    title: "",
    cityzenship: "",
    dialCode: "",
    gender: "",
  });
  const [guests, setGuests] = useState<any>([]);
  const [countries, setCountries] = useState([]);

  const changeValue = (value: string, option: UserDataKeys) => {
    const oldData = { ...userData };
    oldData[option] = value;
    setUserData(oldData);
  };

  useEffect(() => {
    getHotelData();
  }, [searchParams]);

  const getHotelData = async () => {
    try {
      setLoading(true);
      const id = searchParams.get("id");
      if (id) {
        const res = await axios.get(`${APILINK}/api/hotels/quote/${id}`);
        setHotelQueData(res.data.data.data);
        const createAbleGuests = [];
        if (res.data.data.data.guests.length > 1) {
          for (let i = 0; i < res.data.data.data.guests.length - 1; i++) {
            createAbleGuests.push({
              name: "",
              surename: "",
              cityzenship: "",
              gender: "",
              birthDay: "",
            });
          }
        }
        setGuests(createAbleGuests);
      }
      setLoading(false);
    } catch (error: any) {
      setLoading(false);
      //  setError(error.response.data.message[0].title);
      console.error("Error:", error);
    }
  };

  const goToBack = () => {
    router.back();
  };

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

  const toggleGender = (value: string) => {
    if (userData.gender === value) {
      setUserData({ ...userData, gender: "" });
    } else {
      setUserData({ ...userData, gender: value });
    }
  };

  const checkVarification = () => {
    let returnValue = true;

    if (
      !userData.name ||
      !userData.surename ||
      !userData.email ||
      !userData.dialCode ||
      !userData.phoneNumber ||
      !userData.cityzenship ||
      !userData.gender
    ) {
      returnValue = false;
    }

    guests.forEach((guest: any) => {
      if (
        !guest.name ||
        !guest.surename ||
        !guest.cityzenship ||
        !guest.gender
      ) {
        returnValue = false;
      }
    });

    return returnValue;
  };

  const toggleShowUserDataConfirmation = () => {
    const varivied: any = checkVarification();
    if (!varivied) {
      return toast.error("please fill all fields.");
    }
    setShowUserDataConfirmation(!showUserDataConfirmation);
  };

  const BooktheHotel = async () => {
    const bookingData = {
      quoteId: hotelQueData.id,
      phoneNumber: userData.dialCode + userData.phoneNumber,
      guests: [
        {
          given_name: userData.name,
          family_name: userData.surename,
          born_on: userData.birthDay,
        },
      ],
      email: userData.email,
      accommodationSpecialRequests: "2:00 PM early check-in required",
    };

    if (guests.length) {
      guests.forEach((guest: any) => {
        bookingData.guests.push({
          given_name: guest.name,
          family_name: guest.surename,
          born_on: guest.birthDay,
        });
      });
    }
    try {
      setLoading(true);
      const res = await axios.post(
        `${APILINK}/api/hotels/booking`,
        bookingData
      );
      router.push(
        `/hotel/payment?bookingId=${res.data.data.data.id}&baseAmount=${hotelQueData.accommodation.rooms[0].rates[0].base_amount}&textAmount=${hotelQueData.accommodation.rooms[0].rates[0].tax_amount}&totalAmount=${hotelQueData.accommodation.rooms[0].rates[0].total_amount}`
      );
      setLoading(false);
    } catch (error: any) {
      setLoading(false);
      setShowUserDataConfirmation(false);
      setError(error.response.data.message[0].title);
      console.error("Error:", error);
    }
  };

  if (loading) {
    return <LoadingComponent />;
  }
  if (error) {
    return (
      <div className=" w-full flex items-center justify-center">
        <div>
          <p className=" text-3xl text-red-400 font-semibold my-20">{error}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white w-full">
      <Header />
      {showUserDataConfirmation && (
        <HotelCheckooutUserDataConfirmation
          userData={userData}
          BooktheHotel={BooktheHotel}
          setShowUserDataConfirmation={setShowUserDataConfirmation}
          toggleShowUserDataConfirmation={toggleShowUserDataConfirmation}
        />
      )}
      <div className=" w-full flex justify-center px-3 pt-20">
        <div className=" w-full xl:w-[1220px] 2xl:w-[1420px] mt-5">
          <HotelCheckoutPageInfo />
          <div className=" w-full mt-5">
            <span
              className=" text-primary text-lg underline cursor-pointer"
              onClick={goToBack}
            >
              Back to search results
            </span>
            <div className=" w-full grid grid-cols-3 gap-8 mt-5">
              <div className=" col-span-3 lg:col-span-2">
                <div className=" bg-[#F8F9FE] p-5 rounded-2xl flex gap-3 w-full border border-blue-300">
                  <IoMdCheckmarkCircleOutline className=" text-blue-500 text-3xl mt-1" />
                  <div>
                    <p className=" font-semibold text-lg">Almost done!</p>
                    <p>
                      Complete your booking now to ensure your room is ready on
                      time.
                    </p>
                  </div>
                </div>
                {hotelQueData && (
                  <HotelCheckoutHotelInfo hotelQueData={hotelQueData} />
                )}

                <HotelCheckoutContactInfo
                  toggleGender={toggleGender}
                  countries={countries}
                  changeValue={changeValue}
                  userData={userData}
                  setCountry={setCountries}
                />

                {guests.map((guest: any, index: number) => {
                  return (
                    <HotelCheckoutSecoundQuest
                      key={index}
                      index={index}
                      countries={countries}
                      guests={guests}
                      setGuests={setGuests}
                    />
                  );
                })}
              </div>
              <div className=" col-span-3 lg:col-span-1">
                <HotelCheckoutLoginConfirm />
                {hotelQueData && (
                  <HotelCheckoutRoomRate hotelQueData={hotelQueData} />
                )}
                <HotelCheckoutSSL />
                <button
                  onClick={toggleShowUserDataConfirmation}
                  className=" w-full bg-primary text-white py-3 text-lg rounded-2xl mt-8"
                >
                  Continue
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Toaster />
      <Footer />
    </div>
  );
}
