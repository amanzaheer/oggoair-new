"use client";

import axios from "axios";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { IoIosEyeOff, IoMdEye } from "react-icons/io";

export default function Login() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const sendData = async () => {
    try {
      const res = await axios.post("/api/auth/super-admin/login", {
        email,
        password,
      });
      toast.success(res.data.message);
      localStorage.setItem("SuperAdminInfo", JSON.stringify(res.data.data));
      router.push("/super-admin");
    } catch (error: any) {
      console.log(error);
      toast.error(error.response.data.message || "Something went wrong");
    }
  };

  return (
    <div className=" bg-secoundery w-full h-screen flex justify-center items-center p-5">
      <div className=" w-full max-w-[400px] bg-white p-5 sm:p-8 rounded-md shadow-custom-shadow">
        <p className=" text-center font-semibold">Super Admin</p>
        <p className=" text-center text-xl mt-2 font-semibold">Login</p>
        <div className=" mt-5">
          <label htmlFor="" className=" font-semibold text-gray-800">
            Email
          </label>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            className=" border p-2 rounded-md placeholder:text-sm placeholder:text-gray-500 focus:outline-none mt-1 w-full"
            placeholder="Email"
          />
        </div>
        <div className=" mt-5 relative">
          <label htmlFor="" className=" font-semibold text-gray-800">
            Password
          </label>
          <input
            type={showPassword ? "text" : "password"}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className=" border p-2 rounded-md placeholder:text-sm placeholder:text-gray-500 focus:outline-none mt-1 w-full"
            placeholder="**********"
          />
          {showPassword ? (
            <IoIosEyeOff
              onClick={() => setShowPassword(!showPassword)}
              className=" text-gray-500 absolute top-10 text-lg right-2 cursor-pointer"
            />
          ) : (
            <IoMdEye
              onClick={() => setShowPassword(!showPassword)}
              className=" text-gray-500 absolute top-10 text-lg right-2 cursor-pointer"
            />
          )}
        </div>
        <div className=" mt-5">
          <button
            onClick={sendData}
            className="  bg-primary hover:bg-primary-hover transition-all duration-700 ease-linear text-white text-center rounded-md w-full py-2"
          >
            Login
          </button>
        </div>
      </div>
      <Toaster />
    </div>
  );
}
