"use client";

import axios from "axios";
import { useState } from "react";
import toast from "react-hot-toast";
import { IoClose } from "react-icons/io5";
import { APILINK } from "../../../data";
import { signIn } from "next-auth/react";
export default function VerifyCode({ setShowPopUp, signupUserEmail }: any) {
  const [code, setCode] = useState("");

  const ForgetPassword = async () => {
    if (!code) {
      return toast.error("Fill all fields");
    }
    try {
      const res = await axios.post(
        `${APILINK}/api/users/forget-password-email-verify`,
        {
          email: signupUserEmail,
          userToken: code,
        }
      );
      if (res) {
        signIn("credentials", {
          redirect: false,
          email: signupUserEmail,
          verified: true,
        }).then((data: any) => {
          if (!data.error) {
            toast.success(res.data.message);
            setShowPopUp("createPassword");
          } else {
            if (data.error.includes("500")) {
              toast.error("Server Error");
            }
          }
        });
      }
    } catch (error: any) {
      console.log(error);
      toast.error(error.response.data.message || "Something Went Wrong");
    }
  };

  return (
    <div className="w-full h-screen bg-black bg-opacity-20 flex items-center justify-center fixed top-0 left-0 z-[3500]">
      <div className="bg-white sm:rounded-3xl py-5 px-7 w-full sm:w-[420px] h-screen sm:h-[340px]">
        <div className=" flex items-center justify-end">
          <IoClose
            className=" text-2xl cursor-pointer"
            onClick={() => setShowPopUp(false)}
          />
        </div>

        <p className=" text-center font-semibold mt-2 text-xl">Verifing Code</p>
        <div className=" mt-7">
          <label htmlFor="">Code</label>
          <input
            type="text"
            placeholder="******"
            value={code}
            onChange={(e) => setCode(e.target.value)}
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
          Please ensart the code that are sent to your email.
        </p>
      </div>
    </div>
  );
}
