"use client";

import React, { useState } from "react";
import { MdKeyboardArrowDown, MdOutlineEdit } from "react-icons/md";
import { RiDeleteBin6Line, RiDeleteBin7Line } from "react-icons/ri";

export default function SingleTraveler({
  member,
  setShowMemberDeleteWorning,
  setShowEditMember,
  setSelectedMember,
  openEditMode,
}: any) {
  const [colupsed, setColupsed] = useState(false);

  return (
    <div className=" h-full w-full">
      <div className="  w-full mt-5 bg-white p-5 rounded-2xl">
        <div className="flex items-center justify-between">
          <p
            onClick={() => setColupsed(!colupsed)}
            className="cursor-pointer font-semibold capitalize"
          >
            {member.name}
          </p>
          {colupsed ? (
            <div className=" flex items-center gap-3 ">
              <MdOutlineEdit
                onClick={() => {
                  setSelectedMember(member);
                  openEditMode(member);
                }}
                className=" cursor-pointer text-lg"
              />
              <RiDeleteBin6Line
                className=" cursor-pointer"
                onClick={() => {
                  setSelectedMember(member);
                  setShowMemberDeleteWorning(true);
                }}
              />
              <MdKeyboardArrowDown
                onClick={() => setColupsed(!colupsed)}
                className={`text-2xl transition-all duration-150 ease-linear rotate-180 cursor-pointer`}
              />
            </div>
          ) : (
            <MdKeyboardArrowDown
              onClick={() => setColupsed(!colupsed)}
              className={`text-2xl transition-all duration-150 ease-linear cursor-pointer`}
            />
          )}
        </div>

        <div
          className={` ${
            colupsed ? " max-h-screen mt-5 visible" : " max-h-0 hidden"
          } transition-all duration-150 ease-linear sm:flex items-center font-medium justify-between bg-[#7BCAFF] bg-opacity-10 rounded-md p-5 border border-blue-400`}
        >
          <p>{member.title}</p>
          <p>{member.birthDay}</p>
          <p>{member.cityzenship}</p>
          <p>{member.documentNumber}</p>
          <p>{member.dateOfExpery}</p>
        </div>
      </div>
    </div>
  );
}
