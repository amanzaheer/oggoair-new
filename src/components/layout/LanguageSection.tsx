"use client";

import React from "react";
import Image from "next/image";
import { IoMdClose } from "react-icons/io";

export default function LanguageSection({
  selectedLanguage,
  setSelectedLanguage,
  imageData,
  openLanguageSection,
  setOpenLanguageSection,
}: any) {
  return (
    <div
      id="language-section"
      className="fixed sm:absolute -top-4 sm:top-full translate-y-4 right-0  rounded-md  bg-white sm:rounded-md w-full sm:w-[240px] h-screen sm:h-[204px] z-20 custom-airline-boxshadow"
    >
      <div className=" sm:hidden">
        <p className="text-center text-lg font-semibold text-gray-700 py-5">
          Select Language
        </p>
        <div
          onClick={() => setOpenLanguageSection(false)}
          className="cursor-pointer"
        >
          <IoMdClose className=" absolute top-5 right-5 text-xl font-bold text-gray-500" />
        </div>
      </div>
      {imageData.map((image: any, index: number) => {
        return (
          <div
            onClick={() => {
              setSelectedLanguage(image);
              setOpenLanguageSection(false);
            }}
            key={index}
            className={` flex items-center gap-3 px-5 py-3 hover:bg-blue-50 cursor-pointer text-gray-500 ${
              selectedLanguage.name === image.name && " bg-blue-50 "
            }`}
          >
            <div className="w-7">
              <Image
                src={image.src}
                alt="line"
                height={500}
                width={500}
                className=" h-full w-full object-cover"
              />
            </div>
            <p>{image.name}</p>
          </div>
        );
      })}
    </div>
  );
}
