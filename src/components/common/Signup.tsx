"use client";

import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import React, { useState } from "react";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa6";
import { IoClose } from "react-icons/io5";

export default function SignUp({
  setOpenSignUp,
  setOpenSignin,
  setOpenVerification,
}: {
  setOpenSignUp: Function;
  setOpenSignin: Function;
  setOpenVerification: Function;
}) {
  const pathName = usePathname();
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const shitchToSignin = () => {
    setOpenSignUp(false);
    setOpenSignin(true);
  };

  const Register = async () => {
    try {
      if (!email || !password || !name) {
        return;
      }
      const res = await axios.post("/api/auth/register", {
        email,
        password,
        name,
      });
      setOpenSignUp(false);
      setOpenVerification(true);
      console.log(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  console.log(pathName);

  return (
    <div className=" z-[100] fixed w-screen h-screen top-0 left-0 bg-black bg-opacity-50 flex justify-center items-center px-5 pr-9">
      <div className=" my-10 w-full sm:w-[400px] h-[500px] bg-white shadow rounded-md p-7 relative">
        <div
          onClick={() => setOpenSignUp(false)}
          className=" absolute -top-2 -right-2 h-7 w-7 rounded-full bg-red-500 flex items-center justify-center"
        >
          <IoClose className="  text-xl cursor-pointer text-gray-100" />
        </div>
        <div className=" flex items-center justify-center">
          <Link href="/">
            <Image
              src="/header-logo.jpg"
              width={1000}
              height={1000}
              alt="Picture of the logo"
              className=" w-36 h-12"
            />
          </Link>
        </div>
        <p className=" font-semibold text-center text-xl mt-2">SignUp</p>
        <div className=" mt-3">
          <div>
            <label htmlFor="" className=" font-medium">
              Email
            </label>
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className=" w-full border p-2 rounded-md focus:outline-none mt-1"
            />
          </div>
          <div className=" mt-3">
            <label htmlFor="" className=" font-medium">
              Name
            </label>
            <input
              type="text"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className=" w-full border p-2 rounded-md focus:outline-none mt-1"
            />
          </div>
          <div className=" mt-3">
            <label htmlFor="" className=" font-medium">
              Password
            </label>
            <div className=" relative">
              <input
                type={`${showPassword ? "text" : "password"}`}
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className=" w-full border p-2 rounded-md focus:outline-none mt-1"
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
          <button
            onClick={Register}
            className=" w-full mt-5 bg-primary rounded-md py-2 text-white font-medium hover:bg-green-600"
          >
            Signup
          </button>

          <div className=" mt-5 flex items-center justify-center gap-3">
            <p className=" text-gray-500">Already have an account?</p>
            <p
              className=" text-blue-500 cursor-pointer"
              onClick={shitchToSignin}
            >
              Signin
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
