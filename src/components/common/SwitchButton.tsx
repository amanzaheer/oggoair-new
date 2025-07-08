"use client";

import React, { useState } from "react";

const SwitchButton = ({ isActive, setIsActive }: any) => {
  // const [isActive, setIsActive] = useState(false);

  return (
    <div
      onClick={setIsActive}
      className={`w-[54px] h-7 flex items-center rounded-full pl-[1px] py-1 cursor-pointer ${
        isActive ? "bg-blue-500" : "bg-gray-200"
      }`}
    >
      <div
        className={`h-6 w-6 bg-white rounded-full shadow-md transform duration-300 ease-in-out ${
          isActive ? "translate-x-7" : "translate-x-0"
        }`}
      ></div>
    </div>
  );
};

export default SwitchButton;
