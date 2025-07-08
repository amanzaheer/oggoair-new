"use client";

import { usePathname } from "next/navigation";
import React from "react";

export default function SubHeader() {
  const pathName = usePathname();

  return (
    <div className=" shadow mt-2 sm:mt-5 w-full grid grid-cols-5 rounded-md border overflow-hidden">
      <div
        className={` ${
          pathName === "/flight/search" ? "bg-primary" : "bg-white"
        }  flex items-center gap-3 px-2 sm:px-3 py-1 sm:py-2 border-r`}
      >
        <div className="bottom-0order-2 border-y-amber-100 h-5 w-5 sm:h-7 sm:w-7 rounded-full bg-white flex items-center justify-center">
          <span className=" text-gray-500 text-xs sm:text-base ">1</span>
        </div>
        <p
          className={` ${
            pathName === "/flight/search" ? "text-white" : "text-gray-500"
          } text-xs sm:text-base`}
        >
          Search results
        </p>
      </div>
      <div
        className={` ${
          pathName === "/flight/checkout" ? "bg-primary" : "bg-white"
        }  flex items-center gap-3 px-2 sm:px-3 py-1 sm:py-2 border-r`}
      >
        <div className="bottom-0order-2 border-y-amber-100 h-5 w-5 sm:h-7 sm:w-7 rounded-full bg-white flex items-center justify-center">
          <span className=" text-gray-500 text-xs sm:text-base ">2</span>
        </div>
        <p
          className={` ${
            pathName === "/flight/checkout" ? "text-white" : "text-gray-500"
          } text-xs sm:text-base`}
        >
          Booking
        </p>
      </div>
      <div
        className={` ${
          pathName === "/flight/extra-services" ? "bg-primary" : "bg-white"
        }  flex items-center gap-3 px-2 sm:px-3 py-1 sm:py-2 border-r`}
      >
        <div className="bottom-0order-2 border-y-amber-100 h-5 w-5 sm:h-7 sm:w-7 rounded-full bg-white flex items-center justify-center">
          <span className=" text-gray-500 text-xs sm:text-base ">3</span>
        </div>
        <p
          className={` ${
            pathName === "/flight/extra-services"
              ? "text-white"
              : "text-gray-500"
          } text-xs sm:text-base`}
        >
          Additional services
        </p>
      </div>
      <div
        className={` ${
          pathName === "/flight/payment" ? "bg-primary" : "bg-white"
        }  flex items-center gap-3 px-2 sm:px-3 py-1 sm:py-2 border-r`}
      >
        <div className="bottom-0order-2 border-y-amber-100 h-5 w-5 sm:h-7 sm:w-7 rounded-full bg-white flex items-center justify-center">
          <span className=" text-gray-500 text-xs sm:text-base ">4</span>
        </div>
        <p
          className={` ${
            pathName === "/flight/payment" ? "text-white" : "text-gray-500"
          } text-xs sm:text-base`}
        >
          Payment
        </p>
      </div>
      <div
        className={` ${
          pathName === "/flight/payment/success" ? "bg-primary" : "bg-white"
        }  flex items-center gap-3 px-2 sm:px-3 py-1 sm:py-2`}
      >
        <div className="bottom-0order-2 border-y-amber-100 h-5 w-5 sm:h-7 sm:w-7 rounded-full bg-white flex items-center justify-center">
          <span className=" text-gray-500 text-xs sm:text-base ">5</span>
        </div>
        <p
          className={` ${
            pathName === "/flight/payment/success"
              ? "text-white"
              : "text-gray-500"
          } text-xs sm:text-base`}
        >
          Your flight
        </p>
      </div>
    </div>
  );
}
