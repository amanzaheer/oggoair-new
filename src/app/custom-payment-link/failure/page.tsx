"use client";

import axios from "axios";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { IoCloseSharp } from "react-icons/io5";
import { APILINK } from "../../../../data";

export default function Page() {
  const searchParams = useSearchParams();
  const transactionId = searchParams.get("transaction_id");
  const [bookingInfo, setBookingInfo] = useState<any>(null);

  useEffect(() => {
    if (transactionId) {
      getbookingInfo(transactionId);
    }
  }, [transactionId]);

  const getbookingInfo = async (transaction_id: any) => {
    try {
      const res = await axios.get(
        `${APILINK}/api/payment/custom/${transaction_id}`
      );
      setBookingInfo(res.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  console.log(bookingInfo);

  return (
    <div className=" bg-gray-100 w-full min-h-screen flex justify-center px-5">
      <div className=" w-full xl:max-w-[1120px]  flex items-center justify-center">
        {bookingInfo && (
          <div className=" w-full max-w-[1000px] bg-red-50 p-5 rounded-xl border border-red-500 flex flex-wrap gap-5">
            <div className=" w-[40px]">
              <div className=" w-[30px] h-[30px] flex items-center justify-center rounded-full border border-red-500">
                <IoCloseSharp className=" text-red-500 text-lg" />
              </div>
            </div>
            <div>
              <p className=" font-semibold text-xl">
                Sorry, the payment was not completed
              </p>
              <div className=" mt-5 flex flex-wrap sm:flex-nowrap items-center">
                <p className=" w-[160px] ">Case:</p>
                <p>The system is temporarily unavailable</p>
              </div>
              <div className=" mt-5 sm:mt-2 flex flex-wrap sm:flex-nowrap items-center">
                <p className=" w-[160px] ">Recommendation:</p>
                <p>
                  Please try to pay again. If the problem persists, please
                  contact support.
                </p>
              </div>

              <div className=" mt-5 flex items-center flex-wrap sm:flex-nowrap gap-2">
                {/* <Link
                  href={bookingInfo.paymentLink}
                  className=" text-blue-500 font-medium"
                >
                  Pay Again
                </Link>
                <span className=" text-blue-500 font-medium">|</span> */}
                <Link href={"/"} className=" text-blue-500 font-medium">
                  Back to oggoair
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
