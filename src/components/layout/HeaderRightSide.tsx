"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import Sidebar from "./Sidebar";
import { useSession } from "next-auth/react";
import { VscAccount } from "react-icons/vsc";
import { TfiMenu } from "react-icons/tfi";
import EmailLogin from "./EmailLogin";
import CreatePassword from "./CreatePassword";
import CheckEmail from "./CheckEmail";
import VerifyCode from "./VerifyCode";
import Register from "./Register";
import EmailVerification from "./EmailVerification";
import LanguageSection from "./LanguageSection";
import OurSiteSection from "./OurSiteSection";
import { CiGlobe } from "react-icons/ci";

export default function HeaderRightSide() {
  const { data: session, status } = useSession();
  const [openSidebar, setOpenSidebar] = useState(false);
  const [openLanguageSection, setOpenLanguageSection] = useState(false);
  const [openOurSiteSection, setOpenOurSiteSection] = useState(false);
  const [openSearchType, setOpenSearchType] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState({
    name: "English",
    src: "/New/flags/united-kingdom.png",
    code: "US",
  });
  const [selectedCountry, setSelectedCountry] = useState({
    name: "United States",
    flag: "https://flagcdn.com/us.svg",
    code: "US",
    dialCode: "+1201",
  });
  const [selectedCurrency, setSelectedCurrency] = useState({
    name: "United States Dollar",
    code: "USD",
  });
  const [showPopUp, setShowPopUp] = useState("");
  const [signupUserEmail, setSignupUserEmail] = useState("");
  const OpenSignin = () => {
    setShowPopUp("emailLogin");
  };

  const [countries, setCountries] = useState([]);

  useEffect(() => {
    function handleClickOutside(event: any) {
      const searchType = document.getElementById("search-type");
      const sidebarSection = document.getElementById("sidebar-section");
      const languageSection = document.getElementById("language-section");
      const ourSiteSection = document.getElementById("OurSit-section");

      if (
        searchType &&
        !searchType.contains(event.target) &&
        !event.target.closest(".close")
      ) {
        setOpenSearchType(false);
      }

      if (
        sidebarSection &&
        !sidebarSection.contains(event.target) &&
        !event.target.closest(".close")
      ) {
        setOpenSidebar(false);
      }

      if (
        languageSection &&
        !languageSection.contains(event.target) &&
        !event.target.closest(".close")
      ) {
        setOpenLanguageSection(false);
      }

      if (
        ourSiteSection &&
        !ourSiteSection.contains(event.target) &&
        !event.target.closest(".close")
      ) {
        setOpenOurSiteSection(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
  }, [openSearchType, openSidebar, openLanguageSection, openOurSiteSection]);

  // scrool off when popup open
  useEffect(() => {
    if (showPopUp) {
      document.body.classList.add("overflow-hidden", "h-screen");
    } else {
      document.body.classList.remove("overflow-hidden", "h-screen");
    }

    // Cleanup to ensure the body class is removed when component unmounts
    return () => document.body.classList.remove("overflow-hidden", "h-screen");
  }, [showPopUp]);

  const imageData = [
    { name: "English", src: "/New/flags/united-kingdom.png", code: "US" },
    { name: "Español", src: "/New/flags/spain.png", code: "ES" },
    { name: "Français", src: "/New/flags/france.png", code: "FR" },
    { name: "Arabic", src: "/New/flags/Flag_of_Saudi_Arabia.png", code: "SA" },
    // { name: "Italiano", src: "/New/flags/italy.png", code: "IT" },
    // { name: "বাংলা", src: "/New/flags/bangladesh.png", code: "BD" },
    // { name: "Deutsch", src: "/New/flags/german.png", code: "DE" },
    // { name: "Bahasa Melayu", src: "/New/flags/malaysia.png", code: "MY" },
    // { name: "Português", src: "/New/flags/portugal.png", code: "PT" },
    // { name: "Русский", src: "/New/flags/Russia .png", code: "RU" },
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

  useEffect(() => {
    // Fetch all countries and their flags
    async function fetchCountries() {
      try {
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

  return (
    <div className=" z-50">
      {showPopUp === "emailLogin" && <EmailLogin setShowPopUp={setShowPopUp} />}
      {showPopUp === "register" && (
        <Register
          setShowPopUp={setShowPopUp}
          setSignupUserEmail={setSignupUserEmail}
        />
      )}
      {showPopUp === "checkEmail" && (
        <CheckEmail
          setShowPopUp={setShowPopUp}
          setSignupUserEmail={setSignupUserEmail}
        />
      )}
      {showPopUp === "verifyCode" && (
        <VerifyCode
          setShowPopUp={setShowPopUp}
          signupUserEmail={signupUserEmail}
        />
      )}
      {showPopUp === "emailVerification" && (
        <EmailVerification
          setShowPopUp={setShowPopUp}
          signupUserEmail={signupUserEmail}
        />
      )}
      {showPopUp === "createPassword" && (
        <CreatePassword
          setShowPopUp={setShowPopUp}
          signupUserEmail={signupUserEmail}
        />
      )}

      <div className="flex items-center gap-5">
        {/* <Link className=" text-gray-700 font-medium " href={"/online-payment"}>
          Online Payment
        </Link> */}
        <div className=" sm:relative">
          <div
            onClick={() => {
              setOpenLanguageSection(!openLanguageSection);
              setOpenSidebar(false);
              setOpenOurSiteSection(false);
            }}
            className=" close cursor-pointer flex items-center gap-1"
          >
            <div className=" h-6 w-6 rounded-md overflow-hidden">
              <Image
                src={selectedLanguage.src}
                alt="line"
                height={500}
                width={500}
                className=" h-full w-full object-cover"
              />
            </div>
            <p>{selectedLanguage.name}</p>
          </div>
          {openLanguageSection && (
            <LanguageSection
              openLanguageSection={openLanguageSection}
              setOpenLanguageSection={setOpenLanguageSection}
              countries={countries}
              imageData={imageData}
              supportedCurrency={supportedCurrency}
              selectedLanguage={selectedLanguage}
              setSelectedLanguage={setSelectedLanguage}
              selectedCountry={selectedCountry}
              setSelectedCountry={setSelectedCountry}
              selectedCurrency={selectedCurrency}
              setSelectedCurrency={setSelectedCurrency}
              setShowPopUp={setShowPopUp}
            />
          )}
        </div>
        <div className=" sm:relative">
          <CiGlobe
            onClick={() => {
              setOpenOurSiteSection(!openOurSiteSection);
              setOpenSidebar(false);
              setOpenLanguageSection(false);
            }}
            className=" text-3xl cursor-pointer text-gray-900"
          />
          {openOurSiteSection && (
            <OurSiteSection
              openOurSiteSection={openOurSiteSection}
              setOpenOurSiteSection={setOpenOurSiteSection}
            />
          )}
        </div>

        {status === "authenticated" ? (
          <Link href={"/profile"} className=" flex items-center gap-1">
            {session?.user?.name && (
              <span className=" font-medium inline-block py-[2px] px-[6px] rounded-full border bg-primary text-white">
                {session.user.name.slice(0, 2).toUpperCase()}
              </span>
            )}
          </Link>
        ) : (
          <div
            onClick={OpenSignin}
            className="flex items-center gap-2 cursor-pointer"
          >
            <VscAccount className=" text-2xl" />
          </div>
        )}
        <div className=" relative">
          <TfiMenu
            onClick={() => {
              setOpenSidebar(!openSidebar);
              setOpenLanguageSection(false);
              setOpenOurSiteSection(false);
            }}
            className=" z-[10] close text-2xl cursor-pointer text-gray-900 "
          />
          {openSidebar && (
            <Sidebar
              openSidebar={openSidebar}
              setOpenSidebar={setOpenSidebar}
            />
          )}
        </div>
      </div>
    </div>
  );
}
