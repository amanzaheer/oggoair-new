import React, { useState } from "react";
import { AiOutlineCheck } from "react-icons/ai";

const ToggleButtonWithSignature = ({ isActive, handleToggle }: any) => {
  return (
    <div
      className={` w-12 h-6 p-1 flex items-center rounded-3xl cursor-pointer ${
        isActive === "active" ? " bg-blue-500" : " bg-gray-200"
      }`}
      onClick={handleToggle}
    >
      <button
        className={` ${
          isActive === "active" ? "translate-x-5" : ""
        } transition-all duration-200 ease-in-out bg-white flex items-center justify-center w-5 h-5 rounded-full p-1`}
      >
        {isActive === "active" && <AiOutlineCheck className=" text-blue-500" />}
      </button>
    </div>
  );
};

export default ToggleButtonWithSignature;
