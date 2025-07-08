"use client";

import React, { useEffect, useRef, useState } from "react";
import { IoClose } from "react-icons/io5";
import axios from "axios";
import { APILINK } from "../../../data";
import toast from "react-hot-toast";
import { signIn } from "next-auth/react";
import VerificationInput from "react-verification-input";

export default function EmailVerification({
  setShowPopUp,
  signupUserEmail,
}: any) {
  const [verificationCode, setVerificationCode] = useState("");
  const [email, setEmail] = useState("");
  const [codeResentClicked, setCodeResentClicked] = useState(false);
  const [timer, setTimer] = useState(0);

  useEffect(() => {
    setEmail(signupUserEmail);
  }, [signupUserEmail]);

  const Verify = async () => {
    try {
      if (!verificationCode || !email) {
        return toast.error("Fill all fields");
      }
      //   setLoading(true);
      const res = await axios.post(`${APILINK}/api/users/verify`, {
        email,
        verificationCode,
      });
      console.log(res.data);
      //   setLoading(false);
      signIn("credentials", {
        redirect: false,
        email,
        verified: true,
      }).then((data: any) => {
        if (!data.error) {
          toast.success("Login Success");
          setVerificationCode("");
          setShowPopUp("");
        } else {
          if (data.error.includes("500")) {
            toast.error("Server Error");
          }
        }
      });
    } catch (error: any) {
      //   setLoading(false);
      toast.error(error?.response?.data?.message || "Something went wrong");
      console.log(error);
    }
  };

  const ReSentCode = async () => {
    if (!email) {
      return;
    }
    if (codeResentClicked) {
      return;
    }
    setCodeResentClicked(true);
    setTimer(59);
    try {
      const res = await axios.post(
        `${APILINK}/api/users/re-send-verification-code`,
        {
          email,
        }
      );
      console.log(res.data);
    } catch (error: any) {
      toast.error(error?.response?.data?.message || "Something went wrong");
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
        className="bg-white sm:rounded-3xl py-5 px-7 w-full sm:w-[420px] h-screen sm:h-[320px]"
      >
        <div className=" flex items-center justify-end">
          <IoClose
            className=" text-2xl cursor-pointer"
            onClick={() => setShowPopUp(false)}
          />
        </div>
        <p className=" text-center font-semibold mt-2 text-xl">Verifing Code</p>
        <div className=" mt-3">
          <VerificationInput
            length={6}
            value={verificationCode}
            onChange={(e) => setVerificationCode(e)}
            classNames={{
              container: "w-full",
              character: "rounded-lg",
              characterInactive: "bg-gray-100 border border-gray-300",
              characterSelected:
                "border-0 outline-2 outline-green-500 text-black",
              characterFilled:
                "border border-gray-300 text-xl font-semibold leading-[50px]",
            }}
          />
        </div>

        <button
          onClick={Verify}
          className=" w-full mt-5 text-sm bg-blue-600 rounded-md py-2 text-white font-medium hover:bg-blue-700"
        >
          Verify
        </button>
        <div className=" mt-3 flex items-center justify-center">
          <span
            onClick={ReSentCode}
            className={`text-sm ${
              codeResentClicked
                ? "cursor-not-allowed text-green-300"
                : "cursor-pointer text-primary"
            }`}
          >
            Resend {codeResentClicked && `(${timer}s)`}
          </span>
        </div>

        <p className=" text-center mt-5 text-gray-500">
          Please insert the code that is sent to your email.
        </p>
      </div>
    </div>
  );
}
