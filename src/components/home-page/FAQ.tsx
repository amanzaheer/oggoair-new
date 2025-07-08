"use client";

import React, { useState } from "react";
import SingleFaq from "./SingleFaq";

export default function FAQ() {
  const [selectedFaq, setSelectedFaq] = useState<any>({
    question: "Ticket Not Received",
    answer:
      "When purchasing an airline ticket, returns or exchanges are usually possible, but conditions vary by ticket type. Non-refundable tickets are typically cheaper. For returns or exchanges, promptly contact the airline to check conditions and fees. Most cases require a penalty fee. Please contact our support team, and we will assist you.",
  });
  const faqData = [
    {
      question: "Ticket Not Received",
      answer:
        "When purchasing an airline ticket, returns or exchanges are usually possible, but conditions vary by ticket type. Non-refundable tickets are typically cheaper. For returns or exchanges, promptly contact the airline to check conditions and fees. Most cases require a penalty fee. Please contact our support team, and we will assist you.",
    },
    {
      question: "Ticket Refund or Exchange",
      answer:
        "When purchasing an airline ticket, returns or exchanges are usually possible, but conditions vary by ticket type. Non-refundable tickets are typically cheaper. For returns or exchanges, promptly contact the airline to check conditions and fees. Most cases require a penalty fee. Please contact our support team, and we will assist you.",
    },
    {
      question: "About Baggage",
      answer:
        "When purchasing an airline ticket, returns or exchanges are usually possible, but conditions vary by ticket type. Non-refundable tickets are typically cheaper. For returns or exchanges, promptly contact the airline to check conditions and fees. Most cases require a penalty fee. Please contact our support team, and we will assist you.",
    },
    {
      question: "Flying with Children",
      answer:
        "When purchasing an airline ticket, returns or exchanges are usually possible, but conditions vary by ticket type. Non-refundable tickets are typically cheaper. For returns or exchanges, promptly contact the airline to check conditions and fees. Most cases require a penalty fee. Please contact our support team, and we will assist you.",
    },
  ];

  return (
    <div className=" w-full px-5 mt-20">
      <div className=" w-full xl:w-[1220px] 2xl:w-[1420px] mx-auto">
        <p className=" text-5xl font-semibold text-center ">FAQs</p>
        <div className=" mt-8"></div>
        {faqData.map((faq, index) => {
          return <SingleFaq key={index} faq={faq} />;
        })}
      </div>
    </div>
  );
}
