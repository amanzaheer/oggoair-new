import Image from "next/image";
import React, { useState } from "react";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";

export default function SingleExtraSearvice({
  index,
  service,
  selectedServices,
  toggleServices,
}: any) {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div
      key={index}
      className={`w-full flex flex-wrap sm:flex-nowrap gap-5 bg-[#F8F9FE] rounded-2xl p-5 mb-5 `}
    >
      <div className=" h-[102px] w-[100px] border border-blue-500 rounded-lg flex items-center justify-center bg-[#BCDAFF3D] p-5">
        <Image
          src={`/New/additional-searvices/${service.image}.png`}
          className=" w-full h-full object-cover"
          alt=""
          height={500}
          width={500}
        />
      </div>
      <div className=" w-full  ">
        <p className=" text-lg font-semibold">{service.name}</p>
        <div className=" w-full mt-1 flex justify-between ">
          <div className=" w-[85%] border-b border-gray-300 pb-3">
            {selectedServices.includes(service) && (
              <p className=" text-blue-700 my-1">Selected: 1</p>
            )}
            <p>{service.subtitle}</p>
          </div>
          <div className=" w-[15%]">
            <p className="text-2xl font-semibold">
              {service.charge} <span className="">$</span>
            </p>
          </div>
        </div>

        <div
          onClick={toggleExpand}
          className=" mt-2 flex items-center gap-3 text-blue-500 text-lg cursor-pointer"
        >
          {isExpanded ? (
            <p className=" text-sm sm:text-base font-medium">Read Less</p>
          ) : (
            <p className=" text-sm sm:text-base font-medium">Read More</p>
          )}
          <MdOutlineKeyboardArrowDown
            className={` ${
              isExpanded ? " rotate-180" : " rotate-0"
            } transition-all duration-150 ease-linear`}
          />
        </div>
        {isExpanded && (
          <div className=" w-full flex justify-between mt-2 mb-8 ">
            <div className=" w-[85%]">
              <p className=" text-justify">{service.details}</p>
            </div>
            <div className=" w-[10%]"></div>
          </div>
        )}

        <div className=" mt-3 sm:-mt-2 flex items-center justify-end gap-3">
          <div
            onClick={() => toggleServices(service)}
            className=" px-3 py-2 rounded-3xl border border-blue-500 flex items-center gap-2 cursor-pointer"
          >
            <div className=" rounded-full w-4 h-4 border border-blue-500 flex items-center justify-center shadow-custom">
              {!selectedServices.includes(service) ? (
                <div className=" w-2 h-2 bg-blue-600 rounded-full "></div>
              ) : (
                <div className=" w-2 h-2 bg-gray-400 rounded-full "></div>
              )}
            </div>
            <p className=" text-blue-700 text-sm">No, Thank you</p>
          </div>
          <div
            onClick={() => toggleServices(service)}
            className=" px-3 py-2 rounded-3xl border border-blue-500 flex items-center gap-2 cursor-pointer"
          >
            <div className=" rounded-full w-4 h-4 border border-blue-500 flex items-center justify-center shadow-custom">
              {selectedServices.includes(service) ? (
                <div className=" w-2 h-2 bg-blue-600 rounded-full "></div>
              ) : (
                <div className=" w-2 h-2 bg-gray-400 rounded-full "></div>
              )}
            </div>
            <p className=" text-blue-700 text-sm">Add to Cart</p>
          </div>
        </div>
      </div>
    </div>
  );
}
