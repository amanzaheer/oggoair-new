import CheckEmail from "@/components/layout/CheckEmail";
import CreatePassword from "@/components/layout/CreatePassword";
import EmailLogin from "@/components/layout/EmailLogin";
import EmailVerification from "@/components/layout/EmailVerification";
import Register from "@/components/layout/Register";
import VerifyCode from "@/components/layout/VerifyCode";
import Image from "next/image";
import React, { useState } from "react";

export default function HotelCheckoutLoginConfirm() {
  const [showPopUp, setShowPopUp] = useState("");
  const [signupUserEmail, setSignupUserEmail] = useState("");
  const OpenSignin = () => {
    setShowPopUp("emailLogin");
  };
  return (
    <div className=" rounded-xl bg-[#F8F9FE] flex items-center gap-2 p-5 ">
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
      <Image
        src="/New/hotel/checkout/3-friends-go-on-a-trip-airlance-icon 2.png"
        width={500}
        height={500}
        alt="Picture of the hotel"
        className="w-[60px]"
      />
      <p>
        <span className=" text-blue-500 cursor-pointer" onClick={OpenSignin}>
          Log in
        </span>{" "}
        to select passengers from past orders
      </p>
    </div>
  );
}
