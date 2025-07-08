"use client";

import React, { useRef, useState } from "react";
import { IoClose } from "react-icons/io5";
import { signIn } from "next-auth/react";
import toast from "react-hot-toast";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa6";

export default function EmailLogin({ setShowPopUp }: any) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const login = () => {
    if (!email || !password) {
      return toast.error("Fill all fields.");
    }
    signIn("credentials", {
      redirect: false,
      password,
      email,
    }).then((data: any) => {
      if (!data.error) {
        toast.success("Login Success");
        setEmail("");
        setPassword("");
        setShowPopUp("");
      } else {
        if (data.error.includes("400")) {
          toast.error("Email and Password flieds require");
        }
        if (data.error.includes("403")) {
          toast.error("Wrong Credential");
        }
        if (data.error.includes("404")) {
          toast.error("Email dose not exist.");
        }
        if (data.error.includes("500")) {
          toast.error("Server Error");
        }
      }
    });
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
    <div className="w-full h-screen bg-black bg-opacity-20 flex items-center justify-center fixed top-0 left-0 z-[3500] ">
      <div
        id="loginBox"
        ref={loginBoxRef}
        className="bg-white sm:rounded-3xl py-5 px-7 w-full sm:w-[420px] h-screen sm:h-[460px]"
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
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="text"
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
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className=" w-full border border-gray-300 rounded-md p-2 focus:outline-none"
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
          onClick={login}
          className=" bg-blue-600 hover:bg-blue-800 transition-all duration-300 ease-linear text-white w-full p-3 rounded-md mt-3"
        >
          Sign in
        </button>
        <p
          //   onClick={() => setShowPopUp("createPassword")}
          onClick={() => setShowPopUp("checkEmail")}
          className=" cursor-pointer text-center mt-3 font-semibold text-red-500"
        >
          Forgot Password?
        </p>
        <p className=" text-center text-gray-500 mt-3">
          {`Don't have an account?`}{" "}
          <span
            className=" text-blue-500 cursor-pointer"
            onClick={() => setShowPopUp("register")}
          >
            Sign up
          </span>
        </p>
      </div>
    </div>
  );
}
