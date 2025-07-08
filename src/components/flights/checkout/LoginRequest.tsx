"use client";

import CheckEmail from "@/components/layout/CheckEmail";
import CreatePassword from "@/components/layout/CreatePassword";
import EmailLogin from "@/components/layout/EmailLogin";
import EmailVerification from "@/components/layout/EmailVerification";
import Register from "@/components/layout/Register";
import VerifyCode from "@/components/layout/VerifyCode";
import React, { useState } from "react";

export default function LoginRequest() {
  const [showPopUp, setShowPopUp] = useState("");
  const [signupUserEmail, setSignupUserEmail] = useState("");
  const OpenSignin = () => {
    setShowPopUp("emailLogin");
  };
  return (
    <div className="w-full rounded-xl p-5 bg-[#F8F9FE] mb-5">
      {showPopUp === "emailLogin" && <EmailLogin setShowPopUp={setShowPopUp} />}
      {showPopUp === "register" && (
        <Register
          setShowPopUp={setShowPopUp}
          setSignupUserEmail={setSignupUserEmail}
        />
      )}
      {showPopUp === "checkEmail" && (
        <CheckEmail
          setShowPopUp={setShowPopUp}
          setSignupUserEmail={setSignupUserEmail}
        />
      )}
      {showPopUp === "verifyCode" && (
        <VerifyCode
          setShowPopUp={setShowPopUp}
          signupUserEmail={signupUserEmail}
        />
      )}
      {showPopUp === "emailVerification" && (
        <EmailVerification
          setShowPopUp={setShowPopUp}
          signupUserEmail={signupUserEmail}
        />
      )}
      {showPopUp === "createPassword" && (
        <CreatePassword
          setShowPopUp={setShowPopUp}
          signupUserEmail={signupUserEmail}
        />
      )}
      <p className=" font-semibold text-2xl">Already have an account?</p>
      <p className=" text-gray-500 mt-1">
        Log in to speed up the booking process.
      </p>
      <button
        onClick={OpenSignin}
        className=" mt-8 bg-primary px-16 py-3 rounded-md text-white"
      >
        Login
      </button>
    </div>
  );
}
