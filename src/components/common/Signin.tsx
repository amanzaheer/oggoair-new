"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { FaFacebookF, FaGoogle } from "react-icons/fa6";
import { IoClose } from "react-icons/io5";
import { signIn, useSession } from "next-auth/react";

export default function Signin({
  setOpenSignin,
  setOpenSignUp,
}: {
  setOpenSignin: Function;
  setOpenSignUp: Function;
}) {
  // const { data: session, status } = useSession();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const shitchToSighup = () => {
    setOpenSignUp(true);
    setOpenSignin(false);
  };
  const login = () => {
    if (!email && !password) {
      return;
    }
    signIn("credentials", {
      redirect: false,
      password,
      email,
    }).then((data: any) => {
      if (!data.error) {
        console.log(data);
      } else {
        console.log("error happens");
      }
    });
    // console.log({ session, status });
  };

  return (
    <div className=" z-[100] fixed w-screen h-screen top-0 left-0 bg-black bg-opacity-50 flex justify-center items-center px-5 pr-9 overflow-y-scroll">
      <div className="  my-10 w-full sm:w-[400px] h-[600px] bg-white shadow rounded-md p-7 relative">
        <div
          onClick={() => setOpenSignin(false)}
          className=" absolute -top-2 -right-2 h-7 w-7 rounded-full bg-red-500 flex items-center justify-center"
        >
          <IoClose className="  text-xl cursor-pointer text-gray-100" />
        </div>
        <div className=" flex items-center justify-center">
          <Link href="/">
            <Image
              src="/header-logo.jpg"
              width={500}
              height={500}
              alt="Picture of the logo"
              className=" w-36 h-12"
            />
          </Link>
        </div>
        <p className=" font-semibold text-center text-xl mt-2">Signin</p>
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
              Password
            </label>
            <input
              type="text"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className=" w-full border p-2 rounded-md focus:outline-none mt-1"
            />
          </div>
          <button
            onClick={login}
            className=" w-full mt-5 bg-primary rounded-md py-2 text-white font-medium hover:bg-green-600"
          >
            Signin
          </button>
          <p className=" text-red-500 mt-5 text-center cursor-pointer">
            Forgot Password?
          </p>
          <div className=" mt-7 h-2 w-full border-b border-gray-300 relative">
            <div className=" absolute -top-1/2 left-1/2 -translate-x-1/2 -translate-y-1 bg-white px-3">
              <p className=" text-gray-500">Or Signin with</p>
            </div>
          </div>
          <div className=" mt-7">
            <div
              onClick={() => signIn("google")}
              className=" cursor-pointer flex items-center justify-center mt-5 gap-1 bg-primary text-white p-2 rounded-md"
            >
              <FaGoogle className=" text-xl" />
              <p className=" text-sm">Continue with Google</p>
            </div>
          </div>
          <div className=" mt-5 flex items-center justify-center gap-3">
            <p className=" text-gray-500">{"Don't"} have an account?</p>
            <p
              className=" text-blue-500 cursor-pointer"
              onClick={shitchToSighup}
            >
              Signup
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
