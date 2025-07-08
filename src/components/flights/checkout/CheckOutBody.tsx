"use client";

import React, { useEffect, useState } from "react";
import axios from "axios";
import { APILINK } from "../../../../data";
import { Toaster } from "react-hot-toast";
import { useRouter } from "next/navigation";
import LoadingComponent from "@/components/layout/LoadingComponent";
import FlightDetails from "./FlightDetails";
import ClientDataInput from "./ClientDataInput";
import { IoMdClose } from "react-icons/io";
import UserInfo from "./UserInfo";
import SelectPlan from "./SelectPlan";
import AirlinePartners from "@/components/home-page/AirlinePartners";
import CheckoutHeroSection from "./CheckoutHeroSection";
import Image from "next/image";
import SmallerDeviceFlightDetails from "./SmallerDeviceFlightDetails";
import SmallerDevicePriceDetails from "./SmallerDevicePriceDetails";

export default function CheckOutBody() {
  const [passengersInfo, setPassengersInfo] = useState<any>([]);
  const [flightDetails, setFlightDetails] = useState<any>(null);
  const [loading, setLoading] = useState(false);
  const [commissions, setCommissions] = useState<any>(null);
  const [selectedPlan, setSelectedPlan] = useState<any>("economic");

  const [userData, setUserData] = useState<any>({
    email: "",
    phoneNumber: "",
    dialCode: "",
  });

  const router = useRouter();
  const [searchParams, setSearchParams] = useState<URLSearchParams | null>(
    null
  );
  const [error, setError] = useState("");
  const [errorOfDataLoading, setErrorOfDataLoading] = useState(false);
  const [showError, setShowError] = useState(false);
  const [validationError, setValidationError] = useState(false);
  const [uniqueId, setUniqueId] = useState("");
  const [countries, setCountries] = useState<any>([]);

  useEffect(() => {
    // Fetch all countries and their flags
    async function fetchCountries() {
      try {
        // const response = await fetch("https://restcountries.com/v3.1/all");
        const response = await fetch(
          "https://restcountries.com/v3.1/all?fields=name,flags,idd,cca2"
        );
        const data = await response.json();

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

  // function generateUniqueId() {
  //   const prefix = "OGGOPAY-";
  //   const randomString = Math.random()
  //     .toString(36)
  //     .substring(2, 10)
  //     .toUpperCase();
  //   return prefix + randomString;
  // }

  // useEffect(() => {
  //   if (flightDetails) {
  //     const uniqueId = generateUniqueId();
  //     setUniqueId(uniqueId);
  //   }
  // }, [flightDetails]);

  useEffect(() => {
    // This will only run on the client side
    const params = new URLSearchParams(window.location.search);
    setSearchParams(params);
  }, []);

  const getFlightDetails = async (id: string | null) => {
    if (!id) return;
    try {
      setLoading(true);
      const res = await axios.get(`${APILINK}/api/flights/details/${id}`);
      // console.log(res.data.data);
      setFlightDetails(res.data.data);
      setLoading(false);
    } catch (error: any) {
      setLoading(false);
      console.log(error);
      setShowError(true);
      setErrorOfDataLoading(true);
      setError(error?.response?.data?.message || "Something went wrong");
    }
  };

  useEffect(() => {
    if (searchParams) {
      const adults = searchParams.get("adults");
      const child = searchParams.get("child");
      const infant = searchParams.get("infant");
      const tempTravelersInfo = [];

      if (adults && child && infant) {
        for (let i = 0; i < parseInt(adults); i++) {
          tempTravelersInfo.push({
            type: "adults",
            firstName: "",
            lastName: "",
            dateOfBirth: "",
            gender: "",
            cityzenShip: "",
            passport: "",
            passportExpiryDate: "",
          });
        }
        for (let i = 0; i < parseInt(child); i++) {
          tempTravelersInfo.push({
            type: "child",
            firstName: "",
            lastName: "",
            dateOfBirth: "",
            gender: "",
            cityzenShip: "",
            passport: "",
            passportExpiryDate: "",
          });
        }
        for (let i = 0; i < parseInt(infant); i++) {
          tempTravelersInfo.push({
            type: "infant",
            firstName: "",
            lastName: "",
            dateOfBirth: "",
            gender: "",
            cityzenShip: "",
            passport: "",
            passportExpiryDate: "",
          });
        }
      }
      setPassengersInfo(tempTravelersInfo);

      const id = searchParams.get("id");
      getFlightDetails(id);
    }
  }, [searchParams]);

  const getCommissions = async () => {
    try {
      const res = await axios.get(
        `${APILINK}/api/settings/commissions?companyName=oggoair`
      );

      if (
        res.data.data.commissions.flight.status === "active" &&
        flightDetails
      ) {
        // percentage
        if (res.data.data.commissions.flight.commissionBy === "percentage") {
          setCommissions(
            (parseFloat(flightDetails.total_amount) *
              parseFloat(res.data.data.commissions.flight.value)) /
              100
          );
        } else {
          // money
          // per-flight
          if (res.data.data.commissions.flight.commissionOn === "per-flight") {
            setCommissions(res.data.data.commissions.flight.value);
          } else {
            // per-segment and passenger
            const commissionRate = parseFloat(
              res.data.data.commissions.flight.value
            );
            let totalCommission = 0;
            flightDetails.slices.forEach((slice: any) => {
              totalCommission +=
                flightDetails.passengers.length *
                slice.segments.length *
                commissionRate;
            });
            setCommissions(totalCommission);
          }
        }
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getCommissions();
  }, [flightDetails]);

  const checkValidationFunction = () => {
    let isValid = true; // Flag to track overall validation status

    if (!userData.email) {
      isValid = false;
    }
    if (!userData.phoneNumber) {
      isValid = false;
    }
    if (!userData.dialCode) {
      isValid = false;
    }

    // Loop through passengers and validate each one
    passengersInfo.forEach((passenger: any) => {
      if (!passenger.firstName) {
        isValid = false;
      }
      if (!passenger.lastName) {
        isValid = false;
      }
      if (!passenger.dateOfBirth) {
        isValid = false;
      }
      if (!passenger.gender) {
        isValid = false;
      }
      if (!passenger.cityzenShip) {
        isValid = false;
      }
      if (!passenger.passport) {
        isValid = false;
      }
      if (!passenger.passportExpiryDate) {
        isValid = false;
      }
    });

    return isValid; // Return overall validation result
  };

  const bookTheFlight = async () => {
    try {
      if (passengersInfo && userData && flightDetails) {
        // check validation

        const checkValidation = checkValidationFunction();
        if (!checkValidation) {
          const validationErrorElement =
            document.getElementById("ValidationError");
          if (validationErrorElement) {
            validationErrorElement.scrollIntoView({
              behavior: "smooth",
              block: "start",
            });
          }
          setValidationError(true);
          return;
        }

        setLoading(true);

        // const paymentLinkRes = await axios.post(
        //   `${APILINK}/api/payment/create-auto-payment-link-for-cal-pay`,
        //   {
        //     description: "Flight Booking",
        //     amount:
        //       parseFloat(flightDetails.total_amount) + parseFloat(commissions),
        //     name: `${passengersInfo[0].firstName} ${passengersInfo[0].lastName}`.toUpperCase(),
        //     email: userData.email,
        //     mobileNumber: userData.dialCode + userData.phoneNumber,
        //     origin: "https://oggoair.travel",
        //   }
        // );

        // const myghpayres = await axios.post(
        //   `${APILINK}/api/payment/create-auto-payment-link-for-myghpay`,
        //   {
        //     description: "Flight Booking",
        //     amount:
        //       parseFloat(flightDetails.total_amount) + parseFloat(commissions),
        //     name: `${passengersInfo[0].firstName} ${passengersInfo[0].lastName}`.toUpperCase(),
        //     email: userData.email,
        //     mobileNumber: userData.dialCode + userData.phoneNumber,
        //     origin: "https://oggoair.travel",
        //   }
        // );

        // const paystackPaymentLinkresponse = await axios.post(
        //   `${APILINK}/api/payment/create-auto-payment-link-for-paystack`,
        //   {
        //     description: "Flight Booking",
        //     amount:
        //       parseFloat(flightDetails.total_amount) + parseFloat(commissions),
        //     name: `${passengersInfo[0].firstName} ${passengersInfo[0].lastName}`.toUpperCase(),
        //     email: userData.email,
        //     mobileNumber: userData.dialCode + userData.phoneNumber,
        //     origin: "https://oggoair.travel",
        //   }
        // );

        // const theTellerkPaymentLinkresponse = await axios.post(
        //   `${APILINK}/api/payment/create-custom-payment-link-for-theteller`,
        //   {
        //     description: "Flight Booking",
        //     amount:
        //       parseFloat(flightDetails.total_amount) + parseFloat(commissions),
        //     name: `${passengersInfo[0].firstName} ${passengersInfo[0].lastName}`.toUpperCase(),
        //     email: userData.email,
        //     mobileNumber: userData.dialCode + userData.phoneNumber,
        //     origin: "https://oggoair.travel",
        //   }
        // );

        const data: any = {
          selected_offers: [flightDetails.id],
          passengers: [],
          payments: [
            {
              type: "balance",
              currency: flightDetails.total_currency,
              amount: `${flightDetails.total_amount}`,
            },
          ],
          origin: window.location.origin,
          // origin: "https://oggoair.co.rw",
          bookingEmail: userData.email,
          leadPassenger: { ...userData, ...passengersInfo[0] },
          selectedPlan: selectedPlan,
        };

        const revarsedPassengered = [...flightDetails.passengers].reverse();

        for (let i = 0; i < passengersInfo.length; i++) {
          const obj: any = {
            phone_number: userData.dialCode + userData.phoneNumber,
            email: userData.email,
            born_on: passengersInfo[i].dateOfBirth
              .split(".")
              .reverse()
              .join("-"),
            title: passengersInfo[i].gender === "male" ? "mr" : "mrs",
            gender: passengersInfo[i].gender === "male" ? "m" : "f",
            family_name: passengersInfo[i].firstName,
            given_name: passengersInfo[i].lastName,
            id: revarsedPassengered[i].id,
          };

          const isInfantExist = passengersInfo.find(
            (passenger: any) => passenger.type === "infant"
          );
          const findInfant = flightDetails.passengers.find(
            (passenger: any) => passenger.type === "infant_without_seat"
          );

          if (
            passengersInfo.length > 1 &&
            i === 0 &&
            isInfantExist &&
            findInfant
          ) {
            obj["infant_passenger_id"] = findInfant.id;
          }

          data.passengers.push(obj);
        }
        // console.log(data);
        // return;
        const res = await axios.post(`${APILINK}/api/flights/booking`, data);
        setLoading(false);
        if (res) {
          router.push(
            `/flight/extra-services?id=${flightDetails.id}&booking_id=${res.data.data._id}`
          );
        }
      }
    } catch (error: any) {
      setLoading(false);
      setShowError(true);
      setError(error?.response?.data?.message || "Something went wrong");
      console.log(error);
    }
  };

  const passengersInfoChange = (
    value: string,
    option: string,
    index: number
  ) => {
    const oldData = [...passengersInfo];
    oldData[index][option] = value;
    setPassengersInfo(oldData);
  };

  const changeValue = (value: string, option: string) => {
    const oldData = { ...userData };
    oldData[option] = value;
    setUserData(oldData);
  };

  if (loading) {
    return <LoadingComponent />;
  }
  // console.log(flightDetails);
  return (
    <div className="w-full xl:w-[1220px] 2xl:w-[1420px] mx-auto flex justify-between items-center my-5 px-5">
      <div className=" w-full">
        {flightDetails && (
          <div className=" hidden sm:block mt-10 sm:mt-20">
            <CheckoutHeroSection />
          </div>
        )}
        {showError && (
          <div className=" z-[1000] w-full h-screen bg-black bg-opacity-50 flex items-center justify-center fixed top-0 left-0 p-5">
            <div className=" w-full lg:w-[800px] rounded-md bg-white p-10 py-8 relative">
              {!errorOfDataLoading && (
                <div
                  onClick={() => setShowError(false)}
                  className=" h-8 w-8 rounded-md cursor-pointer hover:bg-gray-100 flex items-center justify-center absolute top-3 right-3"
                >
                  <IoMdClose className=" text-gray-800 text-xl" />
                </div>
              )}
              <p className=" text-red-500 font-semibold text-lg">
                {error} Error Ocure
              </p>
              <p className=" mt-5 text-red-500 text-sm">
                {error === "User data invalid"
                  ? "Please make sure all the traveler info is correct and try again"
                  : error}
              </p>
              <div className=" flex items-center gap-5 mt-5">
                {errorOfDataLoading ? (
                  <button
                    onClick={() => router.back()}
                    className=" bg-red-500 hover:bg-red-600 text-white  rounded-md px-5 py-2  transition-all duration-300 ease-linear"
                  >
                    Back
                  </button>
                ) : (
                  <button
                    onClick={() => setShowError(false)}
                    className=" bg-red-500 hover:bg-red-600 text-white  rounded-md px-5 py-2  transition-all duration-300 ease-linear"
                  >
                    Ok
                  </button>
                )}
              </div>
            </div>
          </div>
        )}
        <div className=" w-full sm:flex justify-between bg-primary rounded-xl mt-16 sm:mt-5 ">
          <div className=" w-full sm:w-[76%] p-5 sm:p-10">
            <p className=" text-white font-medium text-xl sm:text-2xl">
              Buy this Flight Through Oggoair Mobile App and earn extra 3.00
              Oggoair points.
            </p>
            <p className=" mt-5 text-white text-sm sm:text-base">
              Easily download the oggoair app by scanning the QR Code.
            </p>
            <button className=" text-sm bg-white px-8 py-3 rounded-3xl font-medium text-primary text-center mt-5">
              Download Now
            </button>
          </div>
          <div className=" w-full sm:w-[20%] px-5 py-2 mt-5 sm:mt-0">
            <Image
              src="/New/flight-checkout/mobile.png"
              width={1000}
              height={1000}
              alt="Picture of the logo"
              className=" w-[150px] sm:w-full"
            />
          </div>
        </div>

        {flightDetails && (
          <div className=" ">
            <div className=" hidden w-full sm:grid grid-cols-8 gap-5 mt-5">
              <div className=" col-span-8 lg:col-span-6 w-full">
                <SelectPlan
                  selectedPlan={selectedPlan}
                  setSelectedPlan={setSelectedPlan}
                />
                <UserInfo
                  changeValue={changeValue}
                  userData={userData}
                  setValidationError={setValidationError}
                />
                <div className=" mt-5 w-full rounded-xl p-5 bg-[#F8F9FE]">
                  <p className="font-semibold text-lg text-primary">
                    Passenger Information
                  </p>

                  {passengersInfo.map((passenger: any, index: number) => {
                    return (
                      <ClientDataInput
                        key={index}
                        index={index}
                        passenger={passenger}
                        passengersInfo={passengersInfo}
                        passengersInfoChange={passengersInfoChange}
                        setValidationError={setValidationError}
                        countries={countries}
                      />
                    );
                  })}
                </div>
                <div className="">
                  <button
                    onClick={bookTheFlight}
                    className=" w-full bg-primary rounded-xl py-3 text-white mt-8"
                  >
                    Continue
                  </button>
                </div>
              </div>
              <div className="  col-span-8 lg:col-span-2">
                {flightDetails && commissions && (
                  <FlightDetails
                    flightDetails={flightDetails}
                    commissions={commissions}
                    bookTheFlight={bookTheFlight}
                    passengersInfo={passengersInfo}
                  />
                )}
              </div>
            </div>
            <div className="  w-full sm:hidden">
              {flightDetails && commissions && (
                <div>
                  {/* <FlightDetails
                    flightDetails={flightDetails}
                    commissions={commissions}
                    bookTheFlight={bookTheFlight}
                    passengersInfo={passengersInfo}
                  /> */}
                  <SmallerDeviceFlightDetails flightDetails={flightDetails} />
                  <SelectPlan
                    selectedPlan={selectedPlan}
                    setSelectedPlan={setSelectedPlan}
                  />
                  <SmallerDevicePriceDetails
                    flightDetails={flightDetails}
                    commissions={commissions}
                    passengersInfo={passengersInfo}
                  />
                </div>
              )}

              <UserInfo
                changeValue={changeValue}
                userData={userData}
                setValidationError={setValidationError}
              />
              <div className=" mt-5 w-full rounded-xl p-5 bg-[#F8F9FE]">
                <p className="font-semibold text-lg text-primary">
                  Passenger Information
                </p>

                {passengersInfo.map((passenger: any, index: number) => {
                  return (
                    <ClientDataInput
                      key={index}
                      index={index}
                      passenger={passenger}
                      passengersInfo={passengersInfo}
                      passengersInfoChange={passengersInfoChange}
                      setValidationError={setValidationError}
                      countries={countries}
                    />
                  );
                })}
              </div>
              <button
                onClick={bookTheFlight}
                className=" w-full bg-primary rounded-xl py-3 text-white mt-5"
              >
                Continue
              </button>
            </div>
          </div>
        )}

        <ul
          id="ValidationError"
          className={` ${
            validationError ? " max-h-80 opacity-100" : " max-h-0 opacity-0"
          } list-disc w-full p-5 sm:py-5 sm:px-20 border border-red-500 rounded-lg bg-[#F8F9FE] mt-10`}
        >
          <li className=" text-lg">
            Contact Information email cannot be blank.
          </li>
          <li className=" text-lg mt-2">
            Contact Information telephone cannot be empty.
          </li>
          <li className=" text-lg mt-2">Passenger gender must be selected.</li>
          <li className=" text-lg mt-2">
            Passenger first name and last fields cannot be blank.
          </li>
          <li className=" text-lg mt-2">
            Passenger date of birth field cannot be empty.
          </li>
        </ul>

        <div className=" hidden sm:block mt-5">
          <AirlinePartners />
        </div>
        <Toaster />
      </div>
    </div>
  );
}
