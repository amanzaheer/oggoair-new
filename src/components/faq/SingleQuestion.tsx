"use client";

import React, { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { FAQItem } from "@/utils/types";

interface SingleQuestionProps {
  faq: FAQItem; // Define the type of the faq prop
  index: number;
  dataLength: number;
}

const SingleQuestion: React.FC<SingleQuestionProps> = ({
  faq,
  index,
  dataLength,
}) => {
  const [expanded, setExpanded] = useState(false); // Corrected spelling of 'expanded'
  const [expendedQuestion, setExpandedQuestion] = useState("");

  return (
    <div
      className={`transition-all duration-300 ease-linear w-full ${
        index < dataLength - 1 && "border-b"
      }  ${index > 0 && "pt-5"} ${expanded ? "pb-5" : " pb-0"}`}
    >
      <div
        className="flex items-center justify-between flex-wrap cursor-pointer"
        onClick={() => {
          setExpanded(!expanded);
          setExpandedQuestion(faq.question);
        }}
      >
        <p className="font-semibold  text-gray-700">{faq.question}</p>
        <IoIosArrowDown
          className={`transition-all duration-300 ease-linear ${
            expanded && "rotate-180"
          }`}
        />
      </div>
      <div
        className={`${
          expendedQuestion === faq.question && expanded
            ? "max-h-[1200px]"
            : "max-h-0"
        }  overflow-hidden mt-5`}
      >
        <p className="text-gray-500">{faq.answer}</p>
      </div>
    </div>
  );
};

export default SingleQuestion;
