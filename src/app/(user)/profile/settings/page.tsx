"use client";

import React, { useEffect, useRef, useState } from "react";
import ProfileSubmenu from "@/components/profile/ProfileSubmenu";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Image from "next/image";
import { RiArrowDownSLine } from "react-icons/ri";
import { RxCheck } from "react-icons/rx";
import { IoIosArrowForward, IoMdClose } from "react-icons/io";
import { IoEye, IoEyeOff } from "react-icons/io5";
import { signOut, useSession } from "next-auth/react";
import toast, { Toaster } from "react-hot-toast";
import axios from "axios";
import { APILINK } from "../../../../../data";

export default function PaymentLink() {
  const { data: session, status } = useSession();
  const [openLanguageSelectSection, setOpenLanguageSelectSection] =
    useState(false);

  const [openCurrencySelectSection, setOpenCurrencySelectSection] =
    useState(false);

  const [openPasswordChange, setOpenPasswordChange] = useState(false);
  const [openDeleteWorning, setOpenDeleteWorning] = useState(false);
  const [showOldPassword, setShowOldPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [selectedLanguage, setSelectedLanguage] = useState({
    name: "English",
    src: "/New/flags/united-kingdom.png",
    code: "US",
  });
  const [selectedCurrency, setSelectedCurrency] = useState({
    name: "United States Dollar",
    code: "USD",
  });

  const languageRef = useRef<HTMLDivElement>(null);
  const currencyRef = useRef<HTMLDivElement>(null);

  const handleClickOutside = (event: MouseEvent) => {
    if (
      languageRef.current &&
      !languageRef.current.contains(event.target as Node)
    ) {
      setOpenLanguageSelectSection(false);
    }

    if (
      currencyRef.current &&
      !currencyRef.current.contains(event.target as Node)
    ) {
      setOpenCurrencySelectSection(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const languageData = [
    { name: "English", src: "/New/flags/united-kingdom.png", code: "US" },
    { name: "Français", src: "/New/flags/france.png", code: "FR" },
    { name: "Italiano", src: "/New/flags/italy.png", code: "IT" },
    { name: "বাংলা", src: "/New/flags/bangladesh.png", code: "BD" },
    { name: "Deutsch", src: "/New/flags/german.png", code: "DE" },
    { name: "Bahasa Melayu", src: "/New/flags/malaysia.png", code: "MY" },
    { name: "Português", src: "/New/flags/portugal.png", code: "PT" },
    { name: "Русский", src: "/New/flags/Russia .png", code: "RU" },
    { name: "Español", src: "/New/flags/spain.png", code: "ES" },
  ];

  const supportedCurrency = [
    { name: "United States Dollar", code: "US" },
    { name: "Euro", code: "FR" },
    { name: "Euro", code: "IT" },
    { name: "Bangladeshi Taka", code: "BD" },
    { name: "Euro", code: "DE" },
    { name: "Malaysian Ringgit", code: "MY" },
    { name: "Euro", code: "PT" },
    { name: "Russian Ruble", code: "RU" },
    { name: "Euro", code: "ES" },
  ];

  const deleteAccount = async () => {
    try {
      if (!session || !session.user || !session.user.accessToken) {
        console.error("Session or user or token is not available");
        return;
      }

      await axios.delete(`${APILINK}/api/users`, {
        headers: {
          Authorization: `Bearer ${session.user.accessToken}`,
        },
      });
      signOut({ callbackUrl: "/" });
    } catch (error: any) {
      toast.error(error.response.data.message || "something went wrong");
      console.log(error);
    }
  };

  const changePassword = async () => {
    try {
      if (!session || !session.user || !session.user.accessToken) {
        console.error("Session or user or token is not available");
        return;
      }
      if (newPassword !== confirmPassword) {
        toast.error("new password and confirm password dose not match");
        return;
      }

      const res = await axios.put(
        `${APILINK}/api/users/password`,
        { newPassword, oldPassword },
        {
          headers: {
            Authorization: `Bearer ${session.user.accessToken}`,
          },
        }
      );

      setOldPassword("");
      setNewPassword("");
      setConfirmPassword("");
      toast.success("Password Updated");
    } catch (error: any) {
      toast.error(error.response.data.message || "something went wrong");
      console.log(error);
    }
  };

  const getLanguage = async () => {
    try {
      if (!session || !session.user || !session.user.accessToken) {
        console.error("Session or user or token is not available");
        return;
      }

      const res = await axios.get(`${APILINK}/api/users/language`, {
        headers: {
          Authorization: `Bearer ${session.user.accessToken}`,
        },
      });
      const selectedLanguage = languageData.find(
        (language) => language.name === res.data.data
      );
      selectedLanguage && setSelectedLanguage(selectedLanguage);
      // console.log(res.data.data);
    } catch (error: any) {
      console.log(error);
    }
  };

  const updateLanguage = async (selectedLanguage: string) => {
    try {
      if (!session || !session.user || !session.user.accessToken) {
        console.error("Session or user or token is not available");
        return;
      }

      if (!selectedLanguage) {
        toast.error("Please provide a valid language");
        return;
      }

      const res = await axios.put(
        `${APILINK}/api/users/language`,
        { language: selectedLanguage },
        {
          headers: {
            Authorization: `Bearer ${session.user.accessToken}`,
          },
        }
      );
      console.log(res.data);
      toast.success("Language updated successfully");
    } catch (error: any) {
      toast.error(error.response?.data?.message || "Something went wrong");
      console.log(error);
    }
  };

  const updateCurrency = async (newCurrency: string) => {
    try {
      if (!session || !session.user || !session.user.accessToken) {
        console.error("Session or user or token is not available");
        return;
      }

      if (!newCurrency) {
        toast.error("Please provide a valid currency");
        return;
      }

      const res = await axios.put(
        `${APILINK}/api/users/currency`,
        { currency: newCurrency },
        {
          headers: {
            Authorization: `Bearer ${session.user.accessToken}`,
          },
        }
      );
      console.log(res.data);
      toast.success("Currency updated successfully");
    } catch (error: any) {
      toast.error(error.response?.data?.message || "Something went wrong");
      console.log(error);
    }
  };

  const getCurrency = async () => {
    try {
      if (!session || !session.user || !session.user.accessToken) {
        console.error("Session or user or token is not available");
        return;
      }

      const res = await axios.get(`${APILINK}/api/users/currency`, {
        headers: {
          Authorization: `Bearer ${session.user.accessToken}`,
        },
      });
      console.log(res.data.data);
      const selectedCurrency = supportedCurrency.find(
        (currency) => currency.code === res.data.data
      );
      selectedCurrency && setSelectedCurrency(selectedCurrency);
    } catch (error: any) {
      console.log(error);
    }
  };

  useEffect(() => {
    getCurrency();
    getLanguage();
  }, [session]);

  return (
    <div className=" w-full">
      <Header />

      <div className=" pt-20 w-full flex justify-center px-3 mb-10">
        <div className=" w-full xl:w-[1220px] 2xl:w-[1420px] grid gap-5 grid-cols-8 mt-5">
          <div className=" col-span-8 xl:col-span-2">
            <ProfileSubmenu />
          </div>
          <div className="p-5 sm:p-10 rounded-md bg-[#F8F9FE] col-span-8 xl:col-span-6">
            <p className=" text-center font-semibold text-2xl">Settings</p>
            <div className=" mt-10">
              <p className=" text-lg font-semibold">General Information</p>
              <div className=" bg-white rounded-md p-5 mt-5">
                <p className=" font-medium">Daria Solnseva</p>
                <p className=" mt-2 text-sm">DariaSolnseva@gmail.com</p>
              </div>
              <div className=" mt-5">
                <p className=" text-lg font-semibold">Reginal</p>
                <div className=" w-full grid sm:grid-cols-2 gap-5 mt-2">
                  <div
                    onClick={() => {
                      setOpenLanguageSelectSection(!openLanguageSelectSection);
                      setOpenCurrencySelectSection(false);
                    }}
                    className=" bg-white relative mt-1 border border-gray-300 p-2 rounded-md cursor-pointer flex items-center justify-between"
                    ref={languageRef}
                  >
                    <p className=" text-gray-700">
                      {selectedLanguage.name} ({selectedLanguage.code})
                    </p>
                    <RiArrowDownSLine className=" text-gray-400 text-lg" />
                    {openLanguageSelectSection && (
                      <div className=" z-[100] w-full h-[300px] sm:h-[400px] overflow-y-scroll absolute top-10 left-0 shadow bg-white rounded-md">
                        {languageData.map((language: any, index: number) => {
                          return (
                            <div
                              onClick={() => {
                                updateLanguage(language.name);
                                setSelectedLanguage(language);
                              }}
                              key={index}
                              className={` flex items-center gap-3 px-5 py-3 hover:bg-primary hover:text-white mb-1 ${
                                selectedLanguage.name === language.name
                                  ? " bg-primary text-white"
                                  : ""
                              }`}
                            >
                              <RxCheck
                                className={`${
                                  selectedLanguage.name === language.name
                                    ? " opacity-100 text-white text-xl"
                                    : "opacity-0"
                                } `}
                              />
                              <div className=" h-6 w-6 rounded-md overflow-hidden">
                                <Image
                                  src={language.src}
                                  alt="line"
                                  height={500}
                                  width={500}
                                  className=" h-full w-full object-cover"
                                />
                              </div>
                              <p>{language.name}</p>
                            </div>
                          );
                        })}
                      </div>
                    )}
                  </div>
                  <div
                    onClick={() => {
                      setOpenCurrencySelectSection(!openCurrencySelectSection);
                      setOpenLanguageSelectSection(false);
                    }}
                    className=" bg-white relative mt-1 border border-gray-300 p-2 rounded-md cursor-pointer flex items-center justify-between"
                    ref={currencyRef}
                  >
                    <p className=" text-gray-700">
                      {selectedCurrency.name} ({selectedCurrency.code})
                    </p>
                    <RiArrowDownSLine className=" text-gray-400 text-lg" />
                    {openCurrencySelectSection && (
                      <div className=" z-[100] w-full h-[300px] sm:h-[400px] overflow-y-scroll absolute top-10 left-0 shadow bg-white rounded-md">
                        {supportedCurrency.map(
                          (currency: any, index: number) => {
                            return (
                              <div
                                onClick={() => {
                                  setSelectedCurrency(currency);
                                  updateCurrency(currency.code);
                                }}
                                key={index}
                                className={` flex items-center gap-3 px-5 py-3 hover:bg-primary hover:text-white mb-1 ${
                                  selectedCurrency.code === currency.code
                                    ? " bg-primary text-white"
                                    : ""
                                }`}
                              >
                                <RxCheck
                                  className={`${
                                    selectedCurrency.code === currency.code
                                      ? " opacity-100 text-white text-xl"
                                      : "opacity-0"
                                  } `}
                                />

                                <p>
                                  {currency.name} ({currency.code})
                                </p>
                              </div>
                            );
                          }
                        )}
                      </div>
                    )}
                  </div>
                </div>
              </div>
              <div className=" mt-5">
                <p className=" text-lg font-semibold">Personal account</p>
                <div
                  onClick={() => setOpenPasswordChange(true)}
                  className=" cursor-pointer mt-5 w-full bg-white rounded-md p-5 flex items-center justify-between"
                >
                  <p>Change password</p>
                  <IoIosArrowForward className=" text-lg" />
                </div>
                <div
                  onClick={() => setOpenDeleteWorning(true)}
                  className=" cursor-pointer mt-5 w-full bg-white rounded-md p-5 flex items-center justify-between"
                >
                  <p>Delete personal account</p>
                  <IoIosArrowForward className=" text-lg" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
      {openPasswordChange && (
        <div className=" fixed top-0 left-0 w-full h-screen bg-black bg-opacity-15 p-5 sm:p-10 flex items-center justify-center">
          <div className=" bg-white w-[500px] rounded-md p-5 sm:p-8 ">
            <div className=" w-full flex items-center justify-end">
              <IoMdClose
                className=" text-xl text-gray-600 cursor-pointer"
                onClick={() => setOpenPasswordChange(false)}
              />
            </div>
            <p className=" my-5 text-center font-medium text-xl">
              Change Password
            </p>
            <div className=" relative mt-5">
              <label htmlFor="" className=" font-medium">
                Old Password
              </label>
              <input
                value={oldPassword}
                onChange={(e) => setOldPassword(e.target.value)}
                type={`${showOldPassword ? "text" : "password"}`}
                placeholder="Enter Password"
                className=" p-2 rounded-md w-full border mt-1 focus:outline-none"
              />
              {showOldPassword ? (
                <IoEyeOff
                  className=" text-gray-500 text-lg absolute top-10 right-3 cursor-pointer"
                  onClick={() => setShowOldPassword(false)}
                />
              ) : (
                <IoEye
                  className=" text-gray-500 text-lg absolute top-10 right-3 cursor-pointer"
                  onClick={() => setShowOldPassword(true)}
                />
              )}
            </div>
            <div className=" relative mt-5">
              <label htmlFor="" className=" font-medium">
                New Password
              </label>
              <input
                type={`${showNewPassword ? "text" : "password"}`}
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                placeholder="Enter Password"
                className=" p-2 rounded-md w-full border mt-1 focus:outline-none"
              />
              {showNewPassword ? (
                <IoEyeOff
                  className=" text-gray-500 text-lg absolute top-10 right-3 cursor-pointer"
                  onClick={() => setShowNewPassword(false)}
                />
              ) : (
                <IoEye
                  className=" text-gray-500 text-lg absolute top-10 right-3 cursor-pointer"
                  onClick={() => setShowNewPassword(true)}
                />
              )}
            </div>
            <div className=" relative mt-5">
              <label htmlFor="" className=" font-medium">
                Confirm Password
              </label>
              <input
                type={`${showConfirmPassword ? "text" : "password"}`}
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                placeholder="Enter Password"
                className=" p-2 rounded-md w-full border mt-1 focus:outline-none"
              />
              {showConfirmPassword ? (
                <IoEyeOff
                  className=" text-gray-500 text-lg absolute top-10 right-3 cursor-pointer"
                  onClick={() => setShowConfirmPassword(false)}
                />
              ) : (
                <IoEye
                  className=" text-gray-500 text-lg absolute top-10 right-3 cursor-pointer"
                  onClick={() => setShowConfirmPassword(true)}
                />
              )}
            </div>
            <div className=" w-full flex justify-center items-center mt-5">
              <button
                onClick={changePassword}
                className=" bg-primary text-white px-10 py-2 rounded-md"
              >
                Save
              </button>
            </div>
          </div>
        </div>
      )}
      {openDeleteWorning && (
        <div className=" fixed top-0 left-0 w-full h-screen bg-black bg-opacity-15 p-5 sm:p-10 flex items-center justify-center">
          <div className=" bg-white w-[500px] rounded-md p-5 sm:p-8 ">
            <div className=" w-full flex items-center justify-end">
              <IoMdClose
                className=" text-xl text-gray-600 cursor-pointer"
                onClick={() => setOpenDeleteWorning(false)}
              />
            </div>
            <p className=" my-5 text-center font-medium text-xl">
              Are you sure you want to delete your account?
            </p>
            <p className=" mt-5">
              Your account, along with all associated data such as traveler
              information, payment details, flight history, and notifications,
              will be permanently deleted. It will not be possible to recover
              this information.
            </p>
            <div className=" mt-8 flex items-center justify-center">
              <div className=" flex flex-col gap-5">
                <button
                  onClick={deleteAccount}
                  className=" bg-primary text-white px-10 py-2 rounded-md"
                >
                  Delete your personal account
                </button>
                <button
                  onClick={() => setOpenDeleteWorning(false)}
                  className=" text-primary"
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
