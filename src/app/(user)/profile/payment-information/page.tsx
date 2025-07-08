"use client";

import React, { use, useEffect, useState } from "react";
import ProfileSubmenu from "@/components/profile/ProfileSubmenu";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Image from "next/image";
import { MdOutlineAddCard } from "react-icons/md";
import { RiDeleteBinLine } from "react-icons/ri";
import { IoClose } from "react-icons/io5";
import { IoMdClose } from "react-icons/io";
import Cards from "react-credit-cards-2";
import "react-credit-cards-2/dist/es/styles-compiled.css";
import axios from "axios";
import { APILINK } from "../../../../../data";

import { useSession } from "next-auth/react";
import toast, { Toaster } from "react-hot-toast";

export default function PaymentLink() {
  const { data: session, status } = useSession();
  const [openAddMode, setOpenAddMode] = useState(false);
  const [openDeleteWarning, setOpenDeleteWorning] = useState(false);
  const [selectedCard, setSelectedCard] = useState<any>(null);
  const [cardNumber, setCardNumber] = useState<string>("");
  const [cardHolderName, setCardHolderName] = useState<string>("");
  const [expiryDate, setExpiryDate] = useState<string>("");
  const [cvc, setCvc] = useState<string>("");
  const [focus, setFocus] = useState<
    "name" | "number" | "expiry" | "cvc" | undefined
  >(undefined);

  // Format card number with spaces every 4 digits
  const formatCardNumber = (value: string) => {
    return value
      .replace(/\D/g, "") // Remove non-digit characters
      .replace(/(.{4})/g, "$1 ") // Add a space every 4 digits
      .trim(); // Remove trailing spaces
  };

  // Format expiry date as MM/YY
  const formatExpiryDate = (value: string) => {
    return value
      .replace(/\D/g, "") // Remove non-digit characters
      .replace(/^(\d{2})(\d{0,2})$/, (match, p1, p2) =>
        p2 ? `${p1}/${p2}` : p1
      ); // Add "/" after 2 digits
  };

  // Handle card number input
  const handleCardNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const formatted = formatCardNumber(e.target.value);
    setCardNumber(formatted);
  };

  // Handle expiry date input
  const handleExpiryDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const formatted = formatExpiryDate(e.target.value);
    setExpiryDate(formatted);
  };

  // Handle CVC input
  const handleCVCChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/\D/g, ""); // Remove non-digit characters
    setCvc(value.slice(0, 3)); // Limit to 3 digits
  };

  const [cards, setCards] = useState<any>([]);

  const closeAddMode = () => {
    setOpenAddMode(false);
  };

  const saveCardInfo = async () => {
    const trimmedCardNumber = cardNumber.replace(/\s/g, ""); // Remove spaces from the card number
    const cardInfo = {
      cardHolderName,
      cardNumber: trimmedCardNumber,
      expiryDate,
      cvc,
    };
    try {
      if (!session || !session.user || !session.user.accessToken) {
        console.error("Session or user or token is not available");
        return;
      }

      await axios.post(`${APILINK}/api/users/cards`, cardInfo, {
        headers: {
          Authorization: `Bearer ${session.user.accessToken}`,
        },
      });
      getCards();
      setCardHolderName("");
      setCardNumber("");
      setExpiryDate("");
      setCvc("");
      setFocus("name");
      setOpenAddMode(false);
    } catch (error: any) {
      toast.error(error.response.data.message || "something went wrong");
      console.log(error);
    }
  };

  const getCards = async () => {
    try {
      if (!session || !session.user || !session.user.accessToken) {
        console.error("Session or user or token is not available");
        return;
      }
      const res = await axios.get(`${APILINK}/api/users/cards`, {
        headers: {
          Authorization: `Bearer ${session.user.accessToken}`,
        },
      });

      console.log(res.data.data);
      setCards(res.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  const deleteCard = async () => {
    try {
      if (!session || !session.user || !session.user.accessToken) {
        console.error("Session or user or token is not available");
        return;
      }

      await axios.delete(`${APILINK}/api/users/cards/${selectedCard._id}`, {
        headers: {
          Authorization: `Bearer ${session.user.accessToken}`,
        },
      });
      const newCards = [...cards].filter(
        (card, index) => card.cardNumber !== selectedCard.cardNumber
      );
      setCards(newCards);
      setOpenDeleteWorning(false);
      toast.success("Card Deleted");
    } catch (error: any) {
      toast.error(error.response.data.message || "something went wrong");
      console.log(error);
    }
  };

  useEffect(() => {
    getCards();
  }, [session]);

  return (
    <div className=" w-full">
      <Header />
      <div className=" pt-20 w-full flex justify-center px-3 mb-10">
        <div className=" w-full xl:w-[1220px] 2xl:w-[1420px] grid gap-5 grid-cols-8 mt-5">
          <div className=" col-span-8 xl:col-span-2">
            <ProfileSubmenu />
          </div>
          <div className=" p-5 sm:p-10 rounded-md bg-[#F8F9FE] col-span-8 xl:col-span-6 relative">
            {openAddMode && (
              <IoMdClose
                className=" absolute top-5 sm:top-10 right-5 sm:right-10 text-gray-800 text-2xl cursor-pointer"
                onClick={closeAddMode}
              />
            )}
            <p className=" text-center font-semibold text-2xl">
              Payment metods
            </p>
            <p className=" text-center text-lg font-medium mt-3">
              Create or delete payment information securely
            </p>
            <div className=" flex items-center justify-center mt-5 gap-2">
              <div className=" bg-white rounded-md h-10 w-14 p-2 flex items-center justify-center">
                <Image
                  src="/New/footer/VISACard-min.png"
                  width={1000}
                  height={1000}
                  alt="Picture of the logo"
                  className=" w-full object-cover"
                />
              </div>
              <div className=" bg-white rounded-md h-10 w-14 p-2 flex items-center justify-center">
                <Image
                  src="/New/footer/MasterCard.png"
                  width={1000}
                  height={1000}
                  alt="Picture of the logo"
                  className=" w-full object-cover"
                />
              </div>
              <div className=" bg-white rounded-md h-10 w-14 p-2 flex items-center justify-center">
                <Image
                  src="/New/footer/JCB_logo.png"
                  width={1000}
                  height={1000}
                  alt="Picture of the logo"
                  className=" w-full object-cover"
                />
              </div>
              <div className=" bg-white rounded-md h-10 w-14 p-2 flex items-center justify-center">
                <Image
                  src="/New/footer/american-express.png"
                  width={1000}
                  height={1000}
                  alt="Picture of the logo"
                  className=" w-full object-cover"
                />
              </div>
              <div className=" bg-white rounded-md h-10 w-14 p-2 flex items-center justify-center">
                <Image
                  src="/New/footer/unionpay.png"
                  width={1000}
                  height={1000}
                  alt="Picture of the logo"
                  className=" w-full object-cover"
                />
              </div>
            </div>
            {!openAddMode && (
              <div className=" p-5 bg-white rounded-xl mt-10 flex sm:items-center sm:justify-between flex-col sm:flex-row gap-3">
                <p className=" font-semibold text-xl">Payment Cards</p>
                <p className=" text-lg">New Card</p>
                <div
                  className=" flex items-center gap-3 cursor-pointer"
                  onClick={() => setOpenAddMode(true)}
                >
                  <MdOutlineAddCard className=" text-xl text-primary" />
                  <p className=" text-primary font-semibold text-lg">
                    Add Card
                  </p>
                </div>
              </div>
            )}
            {openAddMode && (
              <div className="mt-10">
                {/* Card Preview */}
                <div className="flex justify-center mb-5">
                  <Cards
                    number={cardNumber.replace(/\s/g, "")} // Remove spaces for the card preview
                    name={cardHolderName}
                    expiry={expiryDate.replace("/", "")} // Remove "/" for the card preview
                    cvc={cvc}
                    focused={focus}
                  />
                </div>

                {/* Card Input Fields */}
                <div className="mt-5 w-full sm:w-[450px]">
                  <label htmlFor="" className="font-medium block w-full">
                    Credit card holder name
                  </label>
                  <input
                    type="text"
                    value={cardHolderName}
                    onChange={(e) => setCardHolderName(e.target.value)}
                    onFocus={() => setFocus("name")}
                    className="border p-2 placeholder:text-sm rounded-md focus:outline-none mt-1 bg-transparent w-full bg-white"
                    placeholder="John Doe"
                  />
                </div>
                <div className="mt-5 w-full sm:w-[450px] relative">
                  <label htmlFor="" className="font-medium block w-full">
                    Card number
                  </label>
                  <input
                    type="text"
                    value={cardNumber}
                    onChange={handleCardNumberChange}
                    onFocus={() => setFocus("number")}
                    className="border p-2 placeholder:text-sm rounded-md focus:outline-none mt-1 bg-transparent w-full bg-white"
                    placeholder="1234 5678 9012 3456"
                    maxLength={19} // 16 digits + 3 spaces
                  />
                </div>
                <div className="mt-5 w-full sm:w-[450px]">
                  <label htmlFor="" className="font-medium block w-full">
                    Expiry date
                  </label>
                  <input
                    type="text"
                    value={expiryDate}
                    onChange={handleExpiryDateChange}
                    onFocus={() => setFocus("expiry")}
                    className="border p-2 placeholder:text-sm rounded-md focus:outline-none mt-1 bg-transparent w-full bg-white"
                    placeholder="MM/YY"
                    maxLength={5} // 4 digits + 1 slash
                  />
                </div>
                <div className="mt-5 w-full sm:w-[450px]">
                  <label htmlFor="" className="font-medium block w-full">
                    CVC
                  </label>
                  <input
                    type="text"
                    value={cvc}
                    onChange={handleCVCChange}
                    onFocus={() => setFocus("cvc")}
                    className="border p-2 placeholder:text-sm rounded-md focus:outline-none mt-1 bg-transparent w-full bg-white"
                    placeholder="123"
                    maxLength={3} // Limit to 3 digits
                  />
                </div>
                <div className="w-full mt-5 sm:mt-10 flex items-center justify-center">
                  <button
                    onClick={saveCardInfo}
                    className="bg-primary px-10 py-3 rounded-lg text-white"
                  >
                    Save
                  </button>
                </div>
              </div>
            )}
            {!openAddMode && cards.length
              ? cards.map((card: any, index: number) => {
                  return (
                    <div
                      key={index}
                      className=" bg-white p-5 w-full rounded-lg flex items-center justify-between mt-5"
                    >
                      <p className=" font-semibold text-lg w-[25%]">
                        {card.cardHolderName}
                      </p>
                      <div className=" flex items-center font-semibold text-lg ">
                        <span>**********</span>
                        <span>{card.cardNumber}</span>
                      </div>
                      <p className=" "></p>
                      <RiDeleteBinLine
                        className=" cursor-pointer text-gray-500 text-xl"
                        onClick={() => {
                          setSelectedCard(card);
                          setOpenDeleteWorning(true);
                        }}
                      />
                    </div>
                  );
                })
              : null}
            {openDeleteWarning && (
              <div className=" fixed w-screen h-screen top-0 left-0 bg-black bg-opacity-25 p-10 flex items-center justify-center z-[10]">
                <div className=" bg-white rounded-md p-5 w-[300px] ">
                  <div className=" w-full flex items-center justify-end">
                    <IoClose
                      className=" text-gray-500 text-lg cursor-pointer"
                      onClick={() => setOpenDeleteWorning(false)}
                    />
                  </div>
                  <p className=" mt-3 font-semibold text-lg text-center">
                    Are you sure you want to delete the card data?
                  </p>
                  <div className=" mt-5 flex items-center justify-center gap-5">
                    <button
                      onClick={deleteCard}
                      className=" bg-blue-200 px-5 py-2 rounded-md"
                    >
                      Yes
                    </button>
                    <button
                      onClick={() => setOpenDeleteWorning(false)}
                      className=" bg-blue-200 px-5 py-2 rounded-md"
                    >
                      No
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
      <Footer />
      <Toaster />
    </div>
  );
}
