import commaNumber from "comma-number";
import React from "react";

export default function AutoPaymentLinkTableTravel({ displayData }: any) {
  return (
    <div className=" mt-5 w-full">
      <div className=" bg-white shadow w-full sm:overflow-hidden overflow-x-scroll px-5 py-2 rounded-md">
        <table className=" w-full">
          <tbody>
            <tr className=" text-gray-900 font-medium">
              <td className=" p-2 text-left">Email</td>
              <td className=" p-2 text-center">Amount</td>
              <td className=" p-2 text-center">Status</td>
              <td className=" p-2 text-right">Transaction ID</td>
            </tr>
            {displayData.map((data: any, index: number) => {
              return (
                <tr key={index} className=" border-t">
                  <td className=" p-2 text-gray-700 text-left font-medium text-sm">
                    {data?.bookingDetails?.passengers[0]?.email}
                  </td>

                  <td className=" p-2 text-gray-700 text-center font-medium text-sm">
                    $
                    {data?.payment?.totalAmount &&
                      commaNumber(
                        parseFloat(data.payment.totalAmount).toFixed(2)
                      )}
                  </td>

                  <td className=" p-2 text-gray-700 text-center">
                    {data.payment?.status === "pending" && (
                      <button className=" rounded-md p-1 px-2 text-sm bg-yellow-100 text-yellow-500 font-medium">
                        Pending
                      </button>
                    )}
                    {data.payment?.status === "success" && (
                      <button className=" rounded-md p-1 px-2 text-sm bg-green-100 text-green-500 font-medium">
                        Success
                      </button>
                    )}
                  </td>
                  <td className=" p-2 text-gray-700 text-right text-sm">
                    {data.payment?.transaction_id}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
