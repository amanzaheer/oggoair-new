import Link from "next/link";
import React from "react";
import { BiSolidPlaneAlt } from "react-icons/bi";
import { FaCar, FaHotel, FaQ } from "react-icons/fa6";
import { PiFire, PiHandshake } from "react-icons/pi";
import { IoHelpCircleOutline } from "react-icons/io5";
import { IoMdClose } from "react-icons/io";

export default function Sidebar({ openSidebar, setOpenSidebar }: any) {
  return (
    <div
      id="sidebar-section"
      // className="absolute top-full translate-y-4 right-0 w-[250px] shadow bg-white rounded-md overflow-hidden"
      className="fixed sm:absolute -top-4 sm:top-full translate-y-4 right-0  rounded-md  bg-white sm:rounded-md w-full sm:w-[240px] h-screen sm:h-[336px] z-20 custom-airline-boxshadow"
    >
      <div className=" sm:hidden">
        <p className="text-center text-lg font-semibold text-gray-700 py-5">
          Select Our Site
        </p>
        <div onClick={() => setOpenSidebar(false)} className="cursor-pointer">
          <IoMdClose className=" absolute top-5 right-5 text-xl font-bold text-gray-500" />
        </div>
      </div>
      <Link onClick={() => setOpenSidebar(false)} href={"/"}>
        <div className=" flex items-center gap-3 px-5 py-3 hover:bg-blue-50 cursor-pointer">
          <BiSolidPlaneAlt className="text-gray-500 text-2xl -translate-x-1" />
          <p className="text-gray-500">Airplane</p>
        </div>
      </Link>
      <Link onClick={() => setOpenSidebar(false)} href={"/hotel"}>
        <div className=" flex items-center gap-3 px-5 py-3 hover:bg-blue-50 cursor-pointer">
          <FaHotel className="text-gray-500 text-lg mr-2" />
          <p className="text-gray-500">Hotel</p>
        </div>
      </Link>
      <Link onClick={() => setOpenSidebar(false)} href={"/car"}>
        <div className=" flex items-center gap-3 px-5 py-3 hover:bg-blue-50 cursor-pointer">
          <FaCar className="text-gray-500 text-lg mr-2" />
          <p className="text-gray-500">Car</p>
        </div>
      </Link>
      <Link onClick={() => setOpenSidebar(false)} href={"/airline-info"}>
        <div className=" flex items-center gap-3 px-5 py-3 hover:bg-blue-50 cursor-pointer">
          <PiHandshake className=" text-xl mr-1" />
          <p className=" text-gray-500">Partners</p>
        </div>
      </Link>
      <Link onClick={() => setOpenSidebar(false)} href={"/promo/flight"}>
        <div className=" flex items-center gap-3 px-5 py-3 hover:bg-blue-50 cursor-pointer">
          <PiFire className=" text-xl mr-1" />
          <p className=" text-gray-500">Hot deals</p>
        </div>
      </Link>
      <Link onClick={() => setOpenSidebar(false)} href={"/faq/flight"}>
        <div className=" flex items-center gap-3 px-5 py-3 hover:bg-blue-50 cursor-pointer">
          <FaQ className="text-gray-500 text-lg mr-1" />
          <p className=" text-gray-500">FAQ</p>
        </div>
      </Link>
      <Link onClick={() => setOpenSidebar(false)} href={"/help"}>
        <div className=" flex items-center gap-3 px-5 py-3 hover:bg-blue-50 cursor-pointer">
          <IoHelpCircleOutline className=" text-xl mr-1" />
          <p className=" text-gray-500">Help</p>
        </div>
      </Link>
    </div>
  );
}
