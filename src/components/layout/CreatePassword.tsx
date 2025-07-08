"use client";

import React, { useState } from "react";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa6";
import { IoClose } from "react-icons/io5";
import Link from "next/link";
import toast from "react-hot-toast";
import { APILINK } from "../../../data";
import axios from "axios";
import { useSession } from "next-auth/react";

export default function CreatePassword({ setShowPopUp, signupUserEmail }: any) {
  const [confirmPassword, setconfirmPassword] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const { data: session, status } = useSession();

  const updatePassword = async () => {
    try {
      if (!session || !session.user || !session.user.accessToken) {
        console.error("Session or user or token is not available");
        return;
      }

      if (!confirmPassword || !password) {
        return toast.error("Fill all fields.");
      }
      if (confirmPassword !== password) {
        return toast.error("Password and confirm password do not match.");
      }

      const data = { newPassword: password };

      const res = await axios.put(`${APILINK}/api/users/password`, data, {
        headers: {
          Authorization: `Bearer ${session.user.accessToken}`,
        },
      });
      toast.success("Password Changed");
      setPassword("");
      setconfirmPassword("");
      setShowPopUp("");
      console.log(res.data);
    } catch (error: any) {
      toast.error(error?.response?.data?.message || "something went wrong");
      console.log(error);
    }
  };

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };
  const toggleShowConfirmPassword = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  return (
    <div className="w-full h-screen bg-black bg-opacity-20 flex items-center justify-center fixed top-0 left-0 z-[3500]">
      <div className="bg-white sm:rounded-3xl py-5 px-7 w-full sm:w-[420px] h-screen sm:h-[430px]">
        <div className=" flex items-center justify-end">
          <IoClose
            className=" text-2xl cursor-pointer"
            onClick={() => setShowPopUp(false)}
          />
        </div>

        <p className=" text-center font-semibold mt-2 text-xl">
          Create a new password
        </p>
        <div className=" mt-3">
          <label htmlFor="" className=" text-sm font-medium">
            Password
          </label>
          <div className=" relative">
            <input
              type={`${showPassword ? "text" : "password"}`}
              placeholder="********"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className=" w-full border p-2 rounded-md focus:outline-none mt-1 placeholder:text-sm"
            />
            {showPassword ? (
              <FaRegEyeSlash
                onClick={toggleShowPassword}
                className=" text-lg absolute top-4 right-3 cursor-pointer"
              />
            ) : (
              <FaRegEye
                onClick={toggleShowPassword}
                className=" text-lg absolute top-4 right-3 cursor-pointer"
              />
            )}
          </div>
        </div>
        <div className=" mt-3">
          <label htmlFor="" className=" text-sm font-medium">
            Confirm Password
          </label>
          <div className=" relative">
            <input
              type={`${showConfirmPassword ? "text" : "password"}`}
              placeholder="********"
              value={confirmPassword}
              onChange={(e) => setconfirmPassword(e.target.value)}
              className=" w-full border p-2 rounded-md focus:outline-none mt-1 placeholder:text-sm"
            />
            {showConfirmPassword ? (
              <FaRegEyeSlash
                onClick={toggleShowConfirmPassword}
                className=" text-lg absolute top-4 right-3 cursor-pointer"
              />
            ) : (
              <FaRegEye
                onClick={toggleShowConfirmPassword}
                className=" text-lg absolute top-4 right-3 cursor-pointer"
              />
            )}
          </div>
        </div>
        <button
          onClick={updatePassword}
          className=" w-full mt-5 bg-blue-600 rounded-md py-2 text-white font-medium hover:bg-blue-700"
        >
          Continue
        </button>

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
