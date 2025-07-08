"use client";

import React, { useRef, useState } from "react";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa6";
import { IoClose } from "react-icons/io5";
import { APILINK } from "../../../data";
import axios from "axios";
import toast from "react-hot-toast";

export default function Register({ setShowPopUp, setSignupUserEmail }: any) {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const Register = async () => {
    try {
      if (!email || !password || !name) {
        return toast.error("Fill all fields.");
      }

      const res = await axios.post(`${APILINK}/api/users/register`, {
        email,
        password,
        name,
      });
      toast.success("Verification Require");
      setShowPopUp("emailVerification");
      console.log(res.data);
    } catch (error: any) {
      toast.error(error.response.data.message || "something went wrong");
      console.log(error);
    }
  };

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
        className="bg-white sm:rounded-3xl py-5 px-7 w-full sm:w-[420px] h-screen sm:h-[510px]"
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
          <label htmlFor="">Name</label>
          <input
            value={name}
            placeholder="Jhon Doe"
            onChange={(e) => setName(e.target.value)}
            type="text"
            className=" w-full border border-gray-300 rounded-md p-2 focus:outline-none"
          />
        </div>
        <div className=" mt-3">
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
        <div className=" mt-3">
          <label htmlFor="">Password</label>
          <div className=" relative">
            <input
              type={`${showPassword ? "text" : "password"}`}
              placeholder="********"
              className=" w-full border border-gray-300 rounded-md p-2 focus:outline-none"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
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
          className=" bg-blue-600 hover:bg-blue-800 transition-all duration-300 ease-linear text-white w-full p-3 rounded-md mt-3"
        >
          Sign up
        </button>

        <p className=" text-center text-gray-500 mt-3">
          {`Already have an account?`}{" "}
          <span
            className=" text-blue-500 cursor-pointer"
            onClick={() => setShowPopUp("emailLogin")}
          >
            Sign in
          </span>
        </p>
      </div>
    </div>
  );
}
