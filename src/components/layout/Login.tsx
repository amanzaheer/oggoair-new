"use client";

import React, { useEffect, useRef } from "react";
import { FaApple, FaFacebook } from "react-icons/fa6";
import { IoClose } from "react-icons/io5";
import { FcGoogle } from "react-icons/fc";
import Link from "next/link";

export default function Login({ setShowPopUp }: any) {
  const loginBoxRef = useRef<HTMLDivElement>(null);

  //   useEffect(() => {
  //     // Function to handle click outside of the login box
  //     function handleClickOutside(event: MouseEvent) {
  //       if (
  //         loginBoxRef.current &&
  //         !loginBoxRef.current.contains(event.target as Node)
  //       ) {
  //         setShowPopUp(""); // Close the popup
  //       }
  //     }

  //     // Add event listener when the component mounts
  //     document.addEventListener("mousedown", handleClickOutside);

  //     // Cleanup event listener on component unmount
  //     return () => {
  //       document.removeEventListener("mousedown", handleClickOutside);
  //     };
  //   }, [setShowPopUp]);

  return (
    <div className="w-full h-screen bg-black bg-opacity-20 flex items-center justify-center fixed top-0 left-0 z-[3500]">
      <div
        id="loginBox"
        ref={loginBoxRef}
        className="bg-white sm:rounded-3xl py-5 px-7 w-full sm:w-[420px] h-screen sm:h-[550px]"
      >
        <div className=" flex items-center justify-end">
          <IoClose
            className=" text-2xl cursor-pointer"
            onClick={() => setShowPopUp(false)}
          />
        </div>
        <p className="text-center font-semibold text-2xl mt-3">Oggoair</p>
        <p className=" text-center font-semibold mt-2 text-xl">
          Traveling is easy with Oggo.air
        </p>
        <div className=" mt-7">
          <label htmlFor="">Email</label>
          <input
            type="text"
            className=" w-full border border-gray-300 rounded-md p-2 focus:outline-none"
          />
        </div>
        <button
          onClick={() => setShowPopUp("emailLogin")}
          className=" bg-blue-600 hover:bg-blue-800 transition-all duration-300 ease-linear text-white w-full p-3 rounded-md mt-3"
        >
          Continue via email
        </button>
        <p className=" text-center my-2 font-semibold">or</p>
        <div className=" cursor-pointer w-full border border-gray-300 rounded-md p-2 flex items-center gap-2 px-10">
          <FaApple className=" text-xl" />
          <p className=" font-semibold">Continue with Apple</p>
        </div>
        <div className=" mt-2 cursor-pointer w-full border border-gray-300 rounded-md p-2 flex items-center gap-2 px-10">
          <FcGoogle className=" text-xl" />
          <p className=" font-semibold">Continue with Google</p>
        </div>
        <div className=" mt-2 cursor-pointer w-full border border-gray-300 rounded-md p-2 flex items-center gap-2 px-10">
          <FaFacebook className=" text-xl text-blue-500" />
          <p className=" font-semibold">Continue with Facebook</p>
        </div>
        <p className=" text-center mt-5 text-gray-500">
          By continuing, you agree to our{" "}
          <Link href={"/terms&conditions"} className=" text-blue-500">
            Terms of Service
          </Link>{" "}
          and{" "}
          <Link href={"/privacy&policy"} className=" text-blue-500">
            Privacy Policy
          </Link>
          .
        </p>
      </div>
    </div>
  );
}
