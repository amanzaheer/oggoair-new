"use client";

import React, { useState } from "react";
import { IoClose } from "react-icons/io5";
import toast from "react-hot-toast";
import axios from "axios";
import { APILINK } from "../../../data";

export default function CheckEmail({ setShowPopUp, setSignupUserEmail }: any) {
  const [email, setEmail] = useState("");

  const ForgetPassword = async () => {
    if (!email) {
      return toast.error("Fill all fields");
    }
    try {
      const res = await axios.post(
        `${APILINK}/api/users/forget-password-email-verification-code`,
        {
          email,
        }
      );
      toast.success(res.data.message);
      setShowPopUp("verifyCode");
    } catch (error: any) {
      console.log(error);
      toast.error(error.response.data.message || "Something Went Wrong");
    }
  };

  return (
    <div className="w-full h-screen bg-black bg-opacity-20 flex items-center justify-center fixed top-0 left-0 z-[3500]">
      <div className="bg-white sm:rounded-3xl py-5 px-7 w-full sm:w-[420px] h-screen sm:h-[350px]">
        <div className=" flex items-center justify-end">
          <IoClose
            className=" text-2xl cursor-pointer"
            onClick={() => setShowPopUp(false)}
          />
        </div>
        <p className=" text-center font-semibold mt-2 text-xl">
          Verifing Email
        </p>
        <div className=" mt-7">
          <label htmlFor="">Email</label>
          <input
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              setSignupUserEmail(e.target.value);
            }}
            type="email"
            placeholder="example@gmail.com"
            className=" w-full border border-gray-300 rounded-md p-2 focus:outline-none"
          />
        </div>

        <button
          onClick={ForgetPassword}
          className=" bg-blue-600 hover:bg-blue-800 transition-all duration-300 ease-linear text-white w-full p-3 rounded-md mt-3"
        >
          Continue
        </button>

        <p className=" text-center mt-5 text-gray-500">
          We are sending a code in your email to verify the email.
        </p>
      </div>
    </div>
  );
}
