"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import Login from "./Login";
import EmailLogin from "./EmailLogin";
import CreatePassword from "./CreatePassword";
import CheckEmail from "./CheckEmail";
import VerifyCode from "./VerifyCode";
import Register from "./Register";
import EmailVerification from "./EmailVerification";
import {
  MdOutlineKeyboardArrowDown,
  MdOutlineKeyboardArrowUp,
} from "react-icons/md";
import { FaFacebook } from "react-icons/fa6";
import { AiFillInstagram } from "react-icons/ai";

export default function Footer({ page }: any) {
  const [origin, setOrigin] = useState("");
  const [openAddress, setOpenAddress] = useState(false);
  const [showPopUp, setShowPopUp] = useState("");
  const [signupUserEmail, setSignupUserEmail] = useState("");
  const OpenSignin = () => {
    setShowPopUp("emailLogin");
  };
  const OpenSignUp = () => {
    setShowPopUp("register");
  };
  const OpenForgetPassword = () => {
    setShowPopUp("checkEmail");
  };

  useEffect(() => {
    setOrigin(window.location.origin);
  }, []);

  return (
    <div className={`${page !== "home" && " hidden sm:block"} relative pt-32`}>
      {/*{showPopUp === "login" && <Login setShowPopUp={setShowPopUp} />}*/}
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

      <div className=" w-full xl:w-[1220px] 2xl:w-[1420px] absolute top-12 left-1/2 -translate-x-1/2">
        <div className=" w-full bg-white custom-footer-boxshadow rounded-2xl p-5 xl:p-10 grid md:grid-cols-2 gap-5 xl:gap-20 relative">
          <div className=" w-[95%] h-[95%] hidden xl:block absolute top-1 left-5">
            <Image
              src={"/New/footer/line.png"}
              alt="line"
              height={1000}
              width={2000}
              className="w-full h-full"
            />
            <Image
              src={"/New/footer/plan.png"}
              alt="line"
              height={1000}
              width={2000}
              className=" w-5 absolute bottom-3 left-40 -rotate-45"
            />
            <Image
              src={"/New/footer/plan.png"}
              alt="line"
              height={1000}
              width={2000}
              className=" w-5 absolute top-10 left-[430px] -rotate-45"
            />
            <Image
              src={"/New/footer/plan.png"}
              alt="line"
              height={1000}
              width={2000}
              className=" w-5 absolute bottom-1 right-[520px] -rotate-90"
            />
            <Image
              src={"/New/footer/plan.png"}
              alt="line"
              height={1000}
              width={2000}
              className=" w-5 absolute top-4 right-[24px] -rotate-90"
            />
          </div>
          <div>
            <p className=" font-semibold text-xl">
              <span>We know how to save on vacations</span>
              <br />
              <span>
                {`and find discounts, and we'll
              show`}
              </span>
              <br />
              <span>you how.</span>
            </p>
          </div>
          <div className=" flex items-center sm:justify-end z-10">
            <div className=" flex items-center flex-wrap gap-5">
              <input
                type="text"
                className=" focus:outline-none p-3 rounded-md border border-gray-300 w-full sm:w-[300px]"
                placeholder="Where to send letters?"
              />
              <button className=" px-10 py-3 rounded-md bg-gray-300 hover:bg-gray-400 transition-all duration-300 ease-linear font-semibold">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className=" pt-56 sm:pt-28 w-full ] bg-[#F8F9FE]">
        <div className=" w-full px-5 flex justify-center ">
          <div className=" w-full xl:w-[1220px] 2xl:w-[1420px]">
            <div className=" pt-10 grid grid-cols-10 gap-5">
              <div className=" col-span-10 lg:col-span-3">
                <div className=" w-[200px]">
                  <Image
                    src="/New/newlogo.png"
                    width={1000}
                    height={1000}
                    alt="Picture of the logo"
                    className=" "
                  />
                </div>
              </div>
              <div className=" col-span-10 lg:col-span-7">
                <div className=" grid grid-cols-2 sm:grid-cols-5 gap-5">
                  <div>
                    <p className=" font-semibold text-lg text-blue-600">
                      About
                    </p>
                    <Link href="/">
                      <p className=" text-gray-800 text-sm mt-3">Home</p>
                    </Link>
                    <Link href="/about-us">
                      <p className="  text-gray-800 text-sm mt-3">About Us</p>
                    </Link>
                    <Link href="/promo/flight">
                      <p className="  text-gray-800 text-sm mt-3">Promo</p>
                    </Link>
                    <Link href="/airline-info">
                      <p className="  text-gray-800 text-sm mt-3">
                        Airline Information
                      </p>
                    </Link>
                  </div>
                  <div>
                    <p className=" font-semibold text-lg text-blue-600">
                      Account
                    </p>
                    <p
                      onClick={OpenSignUp}
                      className=" cursor-pointer  text-gray-800 text-sm mt-3"
                    >
                      Sign Up
                    </p>
                    <p
                      onClick={OpenSignin}
                      className=" cursor-pointer  text-gray-800 text-sm mt-3"
                    >
                      Sign In
                    </p>
                    <p
                      onClick={OpenForgetPassword}
                      className=" cursor-pointer  text-gray-800 text-sm mt-3"
                    >
                      Forgot Password
                    </p>
                  </div>
                  <div>
                    <p className=" font-semibold text-lg text-blue-600">
                      Support
                    </p>
                    <Link href="/faq/flight">
                      <p className="  text-gray-800 text-sm mt-3">FAQ</p>
                    </Link>

                    <Link href="/privacy&policy">
                      <p className="  text-gray-800 text-sm mt-3">
                        Privacy Policy
                      </p>
                    </Link>

                    <Link href="/terms&conditions">
                      <p className="  text-gray-800 text-sm mt-3">
                        Terms & Conditions
                      </p>
                    </Link>
                    <Link href="/cancellation&refund-policy">
                      <p className="  text-gray-800 text-sm mt-3">
                        Cancellation or Refund Policy
                      </p>
                    </Link>
                  </div>

                  <div>
                    <p className=" font-semibold text-lg text-blue-600">
                      Get in Touch
                    </p>

                    <Link href="/contact-us">
                      <p className="  text-gray-800 text-sm mt-3">Contact Us</p>
                    </Link>
                    <Link href="/help">
                      <p className="  text-gray-800 text-sm mt-3">
                        Help Center
                      </p>
                    </Link>
                    <p className="text-gray-800 text-sm mt-3">
                      help@oggoair.com
                    </p>
                  </div>

                  <div>
                    <p className=" font-semibold text-lg text-blue-600">
                      Follow Us
                    </p>
                    <div className=" flex gap-3 items-center  mt-3">
                      <a
                        href="https://www.facebook.com/share/16BumV69zX/?mibextid=wwXIfr"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <FaFacebook className="hover:text-blue-600 transition-all duration-300 ease-linear mt-1 text-2xl cursor-pointer" />
                      </a>
                      <a
                        href="https://www.instagram.com/oggoair?igsh=ZGUzMzM3NWJiOQ=="
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <AiFillInstagram className=" hover:text-pink-500 transition-all duration-300 ease-linear mt-1 text-3xl cursor-pointer" />
                      </a>
                    </div>
                  </div>
                </div>
                <div className=" grid grid-cols-3 sm:grid-cols-7 gap-5 sm:gap-2 mt-10">
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
                      src="/New/footer/unionpay.png"
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
                      src="/New/footer/american-express.png"
                      width={1000}
                      height={1000}
                      alt="Picture of the logo"
                      className=" w-full object-cover"
                    />
                  </div>
                  {/* <div className="w-14">
                    <Image
                      src="/New/footer/iata.png"
                      width={1000}
                      height={1000}
                      alt="Picture of the logo"
                      className=""
                    />
                  </div> */}

                  <div className=" bg-white rounded-md h-10 w-14 p-2 flex items-center justify-center">
                    <Image
                      src="/New/footer/JCB_logo.png"
                      width={1000}
                      height={1000}
                      alt="Picture of the logo"
                      className=" w-full object-cover"
                    />
                  </div>
                  <div className="w-20 ">
                    <Image
                      src="/New/footer/secure-ssl.png"
                      width={1000}
                      height={1000}
                      alt="Picture of the logo"
                      className=""
                    />
                  </div>
                </div>
              </div>
            </div>
            <hr className=" w-full h-[1px] bg-gray-100 mt-10" />
            {/* office around the world */}
            <div className=" w-full mt-5 ">
              <p className=" text-2xl font-medium text-center">
                oggoair around the world
              </p>

              <div className=" mt-8 grid grid-cols-2 sm:grid-cols-5 gap-5">
                {/* office */}
                <div>
                  <div className=" flex items-center gap-3">
                    <Image
                      src="/New/flags/Flag_of_Ghana.png"
                      width={500}
                      height={500}
                      alt="Picture of the logo"
                      className=" w-7"
                    />
                    <span className=" font-semibold">Ghana</span>
                  </div>
                  <p className=" mt-2 text-gray-700 text-[12px] capitalize">
                    comp. add: k. oppong close, hse no.1 | community 25 annex
                    accra
                  </p>
                  <p className="mt-2 text-gray-700 text-[12px]">
                    <a
                      href="mailto:support@oggoair.travel"
                      className=" text-blue-500"
                    >
                      support@oggoair.travel
                    </a>
                  </p>
                  <p className="mt-2 text-blue-500 text-[12px]">
                    <a href="tel:+233201234567" className="">
                      +233 55 548 6865
                    </a>
                  </p>
                </div>
                {/* office */}
                <div>
                  <div className=" flex items-center gap-3">
                    <Image
                      src="/New/flags/Flag_of_Kenya.png"
                      width={500}
                      height={500}
                      alt="Picture of the logo"
                      className=" w-7"
                    />
                    <span className=" font-semibold">Kenya</span>
                  </div>
                  <p className=" mt-2 text-gray-700 text-[12px] capitalize">
                    jahazi building, 154 james gichuru road, nairobi, kenya p.o.
                    box 22494-00505
                  </p>
                  <p className="mt-2 text-gray-700 text-[12px]">
                    <a
                      href="mailto:support@oggoair.ke"
                      className=" text-blue-500"
                    >
                      support@oggoair.ke
                    </a>
                  </p>
                  <p className="mt-2 text-blue-500 text-[12px]">
                    <a href="tel:+233201234567" className="">
                      +254 787 300 000
                    </a>
                  </p>
                </div>
                {/* office */}
                <div>
                  <div className=" flex items-center gap-3">
                    <Image
                      src="/New/flags/Flag_of_Rwanda.png"
                      width={500}
                      height={500}
                      alt="Picture of the logo"
                      className=" w-7"
                    />
                    <span className=" font-semibold">Rwanda</span>
                  </div>
                  <p className=" mt-2 text-gray-700 text-[12px] capitalize">
                    Jesus Is Able House, Gasabo, Remera, Rukiri Il, Kigali,
                    Rwanda
                  </p>
                  <p className="mt-2 text-gray-700 text-[12px]">
                    <a
                      href="mailto:support@oggoair.co.rw"
                      className=" text-blue-500"
                    >
                      support@oggoair.co.rw
                    </a>
                  </p>
                  <p className="mt-2 text-blue-500 text-[12px]">
                    <a href="tel:+233201234567" className="">
                      +250 790 300 000
                    </a>
                  </p>
                </div>

                {/* office */}
                <div>
                  <div className=" flex items-center gap-3">
                    <Image
                      src="/New/flags/Flag_of_Uganda.svg.png"
                      width={500}
                      height={500}
                      alt="Picture of the logo"
                      className=" w-7"
                    />
                    <span className=" font-semibold">Uganda</span>
                  </div>
                  <p className=" mt-2 text-gray-700 text-[12px] capitalize">
                    Uganda, Kampala Central division, Kagugube, Makerere
                    Kagugube
                  </p>
                  <p className="mt-2 text-gray-700 text-[12px]">
                    <a
                      href="mailto:support@oggoair.africa"
                      className=" text-blue-500"
                    >
                      support@oggoair.africa
                    </a>
                  </p>
                </div>
                {/* office */}
                {/* office */}
                <div>
                  <div className=" flex items-center gap-3">
                    <Image
                      src="/New/flags/Flag_of_Turkey.svg"
                      width={500}
                      height={500}
                      alt="Picture of the logo"
                      className=" w-7"
                    />
                    <span className=" font-semibold">Turkiye</span>
                  </div>
                  <p className=" mt-2 text-gray-700 text-[12px] capitalize">
                    veliefendi mah.şehit onbaşı yüksel kutlu sk.no:2/19
                    zeytinburnu, istanbul
                  </p>
                  <p className="mt-2 text-gray-700 text-[12px]">
                    <a
                      href="mailto:support@oggoair.com.tr"
                      className=" text-blue-500"
                    >
                      support@oggoair.com.tr
                    </a>
                  </p>
                </div>
                {/* office */}
              </div>
            </div>
            {/* office around the world */}
          </div>
        </div>
        <div className=" mt-5 w-full flex items-center justify-center bg-white px-5">
          <div className=" w-full xl:w-[1220px] 2xl:w-[1420px] flex items-center justify-between gap-5 py-5">
            <div className=" w-[80px]">
              <Image
                src="/New/footer/partners/IMG_0533.png"
                width={1000}
                height={1000}
                alt="Picture of the logo"
                className=" w-full object-cover"
              />
            </div>

            <div className="w-[120px]">
              <Image
                src="/New/footer/partners/IMG_0562.jpeg"
                width={1000}
                height={1000}
                alt="Picture of the logo"
                className=" w-full object-cover"
              />
            </div>

            <div className="w-[110px]">
              <Image
                src="/New/footer/partners/IMG_0563.png"
                width={1000}
                height={1000}
                alt="Picture of the logo"
                className=" w-full object-cover"
              />
            </div>

            <div className="w-[80px]">
              <Image
                src="/New/footer/partners/IMG_0577.jpg"
                width={1000}
                height={1000}
                alt="Picture of the logo"
                className=" w-full object-cover"
              />
            </div>
            <div className="w-[60px]">
              <Image
                src="/New/footer/partners/IMG_0576.png"
                width={1000}
                height={1000}
                alt="Picture of the logo"
                className=" w-full object-cover"
              />
            </div>
          </div>
        </div>
        {/* <div className=" w-full bg-white grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5 py-5 px-5 sm:px-10 rounded-t-3xl mt-10">
          <div className=" flex items-center gap-5">
            <div className=" w-[200px]">
              <Image
                src="/New/footer/partners/IMG_0533.png"
                width={1000}
                height={1000}
                alt="Picture of the logo"
                className=" w-full object-cover"
              />
            </div>
            <p className=" text-xs">
              TRIPENIA INFORMATION TOURISM TRAVEL AGENCY AND TRADE JOINT STOCK
              COMPANY TURSAB 10357
            </p>
          </div>
          <div className=" flex items-center flew-wrap gap-5">
            <div className="w-[180px]">
              <Image
                src="/New/footer/partners/IMG_0562.jpeg"
                width={1000}
                height={1000}
                alt="Picture of the logo"
                className=" w-full object-cover"
              />
            </div>
            <p className=" text-xs">
              oggoair.COM TOURISM TRAVEL AGENCY ISTANBUL, TURKEY IATA: 88227226
            </p>
          </div>
          <div className=" flex items-center flew-wrap gap-5">
            <div className="w-[180px]">
              <Image
                src="/New/footer/partners/IMG_0563.png"
                width={1000}
                height={1000}
                alt="Picture of the logo"
                className=" w-full object-cover"
              />
            </div>
            <p className=" text-xs">
              oggoair.com TOURISM TRAVEL AGENCY ISTANBUL, TURKEY TCH: 88900126
            </p>
          </div>
          <div className=" flex items-center flew-wrap gap-5">
            <div className="w-[240px]">
              <Image
                src="/New/footer/partners/IMG_0577.jpg"
                width={1000}
                height={1000}
                alt="Picture of the logo"
                className=" w-full object-cover"
              />
            </div>
            <p className=" text-xs">
              TRIPENIA INFORMATION TOURISM TRAVEL AGENCY AND TRADE JOINT STOCK
              COMPANY TURSAB 10357
            </p>
          </div>
          <div className=" flex items-center flew-wrap gap-5">
            <div className="w-[100px]">
              <Image
                src="/New/footer/partners/IMG_0576.png"
                width={1000}
                height={1000}
                alt="Picture of the logo"
                className=" w-full object-cover"
              />
            </div>
            <p className=" text-xs">
              oggoair.COM TOURISM TRAVEL AGENCY ISTANBUL, TURKEY IATA: 88227226
            </p>
          </div>
        </div> */}
        <div className=" w-full bg-primary py-4 relative">
          <p className="  text-white text-center text-sm sm:text-base">
            oggoAir is the official website of OGGO Travel Platform Ltd. @2025
            oggoair. “All Rights Reserved” oggoair.com
          </p>
        </div>
      </div>
    </div>
  );
}
