"use client";

import React, { useState } from "react";
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";

export default function SingleFaq({ faq }: any) {
  const [isExpended, setIsExpended] = useState(false);
  return (
    <div className=" mt-5">
      <div
        onClick={() => setIsExpended(!isExpended)}
        className={` cursor-pointer border p-5 rounded-2xl flex items-center justify-between ${
          isExpended && "  text-white bg-primary"
        }`}
      >
        <p className={` text-xl font-semibold `}>{faq.question}</p>
        <div>
          {isExpended ? (
            <MdKeyboardArrowUp className="text-2xl" />
          ) : (
            <MdKeyboardArrowDown className="text-2xl" />
          )}
        </div>
      </div>
      {isExpended ? <div className=" text-lg p-5">{faq.answer}</div> : null}
    </div>
  );
}
