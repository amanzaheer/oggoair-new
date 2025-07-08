"use client";

import axios from "axios";
import React, { useEffect, useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { APILINK } from "../../../../data";
import toast from "react-hot-toast";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { formatDate, formatDate2 } from "@/utils/dateFormate";
import jsPDF from "jspdf";
import commaNumber from "comma-number";

export default function WalletPaymentLinkTable({
  displayData,
  getWalletPayment,
}: any) {
  const [currentPayment, setCurrentPayment] = useState<any>("");
  const [SuperAdmin, setSuperAdmin] = useState<any>(null);
  const [showLink, setShowLink] = useState(false);
  const [currentLink, setCurrentLink] = useState("");
  const [showDeleteWorning, setShowDeleteWorning] = useState(false);

  useEffect(() => {
    setSuperAdmin(JSON.parse(localStorage.getItem("SuperAdminInfo") as string));
  }, []);

  const generatePDF = async (paymentInfo: any) => {
    if (paymentInfo) {
      console.log(paymentInfo);
      try {
        const marginLeft = 15;
        const headerSize = 20;
        const semiHeaderSize = 16;
        const normalFontSize = 12;
        const tableHeaderSize = 14;
        const fontStyle = "helvetica";

        const doc = new jsPDF();

        // Logo
        doc.addImage(
          "https://www.oggosistem.com/static/Logo.png",
          "PNG",
          marginLeft,
          10,
          56,
          24
        );

        // Title
        doc.setFontSize(headerSize);
        doc.setFont(fontStyle, "bold");
        doc.setTextColor(0, 0, 255); // Blue color for INVOICE
        doc.text("INVOICE", marginLeft + 140, 30);

        // Horizontal line
        doc.setLineWidth(0.5);
        doc.setDrawColor(0, 0, 0);
        doc.line(marginLeft, 40, 200, 40);

        // Reset font color to black
        doc.setTextColor(0, 0, 0);

        // Customer and Invoice details
        doc.setFontSize(normalFontSize);
        doc.setFont(fontStyle, "normal");

        // Left side (Customer details)
        const customerDetailsY = 50;
        if (paymentInfo.bank === "myghpay") {
          doc.text("Currency: GHS", marginLeft, customerDetailsY);
        } else {
          doc.text("Currency: USD", marginLeft, customerDetailsY);
        }
        doc.text(
          `Invoice No: ${paymentInfo.transaction_id}`,
          marginLeft,
          customerDetailsY + 8
        );
        doc.text(
          `Date: ${formatDate2(new Date(paymentInfo.timeOfPay))}`,
          marginLeft,
          customerDetailsY + 16
        );

        // Right side (Invoice to)
        const invoiceToY = 50;
        const rightColumnX = 130;
        doc.text("Invoice to:", rightColumnX, invoiceToY);
        doc.setFont(fontStyle, "bold");
        doc.text(
          paymentInfo.name.includes("_")
            ? paymentInfo.name.replace(/_/g, " ")
            : paymentInfo.name,
          rightColumnX,
          invoiceToY + 8
        );
        doc.setFont(fontStyle, "normal");
        doc.text(paymentInfo.email, rightColumnX, invoiceToY + 16);

        // Horizontal line under details
        doc.line(marginLeft, customerDetailsY + 50, 200, customerDetailsY + 50);

        // Table header
        doc.setFontSize(tableHeaderSize);
        doc.setFont(fontStyle, "bold");
        doc.setTextColor(0, 0, 255); // Blue color for table header
        doc.text("SERVICE", marginLeft, 110);
        doc.text("PRICE", marginLeft + 50, 110);
        doc.text("QTY", marginLeft + 110, 110);
        doc.text("TOTAL", marginLeft + 140, 110);

        // Horizontal line under table header
        doc.line(marginLeft, 116, 200, 116);

        // Table content
        doc.setFontSize(normalFontSize);
        doc.setFont(fontStyle, "normal");
        doc.setTextColor(0, 0, 0);
        doc.text(paymentInfo.description, marginLeft, 125);

        if (paymentInfo.bank === "myghpay") {
          doc.text(
            `GHS ${commaNumber(parseFloat(paymentInfo.GHS.amount).toFixed(2))}`,
            marginLeft + 50,
            125
          );
        } else {
          doc.text(
            `USD ${commaNumber(parseFloat(paymentInfo.amount).toFixed(2))}`,
            marginLeft + 50,
            125
          );
        }

        doc.text("1", marginLeft + 110, 125);

        if (paymentInfo.bank === "myghpay") {
          doc.text(
            `GHS ${commaNumber(parseFloat(paymentInfo.GHS.amount).toFixed(2))}`,
            marginLeft + 140,
            125
          );
        } else {
          doc.text(
            `USD ${commaNumber(parseFloat(paymentInfo.amount).toFixed(2))}`,
            marginLeft + 140,
            125
          );
        }

        // Horizontal line under details
        doc.line(
          marginLeft,
          customerDetailsY + 110,
          200,
          customerDetailsY + 110
        );

        // Total section
        doc.setFontSize(normalFontSize);
        // doc.setFont(fontStyle, "bold");
        doc.text("Sub-total:", marginLeft + 93, customerDetailsY + 120);

        if (paymentInfo.bank === "myghpay") {
          doc.text(
            `GHS ${commaNumber(parseFloat(paymentInfo.GHS.amount).toFixed(2))}`,
            marginLeft + 135,
            customerDetailsY + 120
          );
        } else {
          doc.text(
            `USD ${commaNumber(parseFloat(paymentInfo.amount).toFixed(2))}`,
            marginLeft + 135,
            customerDetailsY + 120
          );
        }

        // Horizontal line under details
        doc.line(110, customerDetailsY + 125, 200, customerDetailsY + 125);

        doc.setFontSize(normalFontSize);
        doc.setTextColor(255, 0, 0);
        doc.text("Total:", marginLeft + 100, customerDetailsY + 132);

        if (paymentInfo.bank === "myghpay") {
          doc.text(
            `GHS ${commaNumber(
              parseFloat(paymentInfo.GHS.amount).toFixed(2)
            )} (${commaNumber(parseFloat(paymentInfo.amount).toFixed(2))} USD)`,
            marginLeft + 135,
            customerDetailsY + 132
          );
        } else {
          doc.text(
            `USD ${commaNumber(parseFloat(paymentInfo.amount).toFixed(2))}`,
            marginLeft + 135,
            customerDetailsY + 132
          );
        }

        // Contact Us
        doc.setTextColor(128, 128, 128);
        doc.setFontSize(normalFontSize);
        doc.setFont(fontStyle, "bold");
        doc.text("Contact Us", marginLeft, 220);

        doc.setFont(fontStyle, "normal");
        doc.setFontSize(10);
        doc.setTextColor(0, 0, 0);
        if (paymentInfo.origin === "https://oggoair.travel") {
          doc.text("OGGOAIR is a trademark of a legal entity", marginLeft, 230);
          doc.text("TRAVIA OTA TEKNOLOJI", marginLeft, 235);
          doc.text("Reg No. BN903071121 ", marginLeft, 245);
          doc.text("TIN: P0024288632", marginLeft, 250);
          doc.text("Address: House No. 1, K. Oppong Close,", marginLeft, 260);
          doc.text("Community 25 Annex, Tema", marginLeft, 265);
          doc.text("Ghana", marginLeft, 270);
        } else {
          doc.text("OGGOAIR is a trademark of a legal entity", marginLeft, 230);
          doc.text("OGGO TRAVEL PLATFORM", marginLeft, 235);
          doc.text(
            "Operating license in a field of Travel industry",
            marginLeft,
            245
          );
          doc.text("Service: 80034494477937", marginLeft, 250);
          doc.text("Address: MEKERERE KAGUGUBE,", marginLeft, 260);
          doc.text("KAGUGUBE CENTRAL DIVISION KAMPALA", marginLeft, 265);
          doc.text("UGANDA", marginLeft, 270);
        }

        doc.save(`INVOICE_${paymentInfo.transaction_id}.pdf`);
      } catch (error) {
        console.error(error);
      }
    }
  };

  const deleteLink = async (id: string) => {
    try {
      // console.log(id);
      // return;
      await axios.delete(`${APILINK}/api/payment/custom/${id}`, {
        headers: {
          Authorization: `Bearer ${SuperAdmin.accessToken}`,
        },
      });
      getWalletPayment();
      setShowDeleteWorning(false);
    } catch (error) {
      console.log(error);
    }
  };

  //   console.log(displayData);

  return (
    <div className=" mt-5 w-full ">
      <div className=" bg-white shadow px-5 py-2 rounded-md w-full sm:overflow-hidden overflow-x-scroll ">
        {showLink && (
          <div className=" z-[2000] fixed top-0 left-0 w-full h-screen bg-black bg-opacity-20 flex items-center justify-center p-5">
            <div className=" w-full sm:w-[400px] bg-white p-5 rounded-md relative">
              <div
                onClick={() => setShowLink(false)}
                className=" h-6 w-6 absolute top-3 sm:top-2 right-3 sm:right-2 cursor-pointer bg-red-500 text-white shadow flex justify-center items-center rounded-full"
              >
                <AiOutlineClose className="font-bold" />
              </div>
              <p className=" text-center text-xl font-semibold py-2 border-b">
                Link
              </p>
              <div className="p-3 bg-gray-100">
                <p className=" text-sm text-gray-700 break-words">
                  {currentLink}
                </p>
              </div>
              <div className=" mt-3 w-full flex justify-center">
                <CopyToClipboard
                  text={currentLink}
                  onCopy={() => {
                    toast.success("Coppied.");
                    setShowLink(false);
                  }}
                >
                  <span className=" cursor-pointer font-medium bg-primary bg-opacity-80 hover:bg-opacity-100 text-white px-2 py-[2px] rounded-md">
                    Copy
                  </span>
                </CopyToClipboard>
              </div>
            </div>
          </div>
        )}

        {showDeleteWorning && (
          <div className=" w-full h-screen fixed top-0 left-0 bg-black bg-opacity-25 p-5 z-[1000]">
            <div className=" w-full h-full flex items-center justify-center">
              <div className=" w-[450px] bg-white rounded-md p-5 relative">
                <p className=" ">
                  {`Are you sure you'd like to delete the`}
                  <span className=" text-lg font-medium">
                    {" "}
                    Wallet Payment Link
                  </span>
                  ?
                </p>
                <div className=" grid grid-cols-2 gap-5 mt-5">
                  <button
                    onClick={() => deleteLink(currentPayment._id)}
                    className=" w-full bg-primary hover:bg-green-600 transition-all duration-150 ease-in-out rounded-md py-2 text-center text-white"
                  >
                    Yes
                  </button>
                  <button
                    onClick={() => setShowDeleteWorning(false)}
                    className=" w-full bg-gray-400 hover:bg-gray-300 transition-all duration-150 ease-in-out rounded-md py-2 text-center text-white"
                  >
                    Cancel
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        <table className=" w-full">
          <tbody>
            <tr className=" text-gray-900 font-medium">
              <td className=" p-2 text-left">Description</td>
              <td className=" p-2 text-center">Name</td>
              <td className=" p-2 text-center">Amount</td>
              <td className=" p-2 text-center">Status</td>
              <td className=" p-2 text-center">Time of Payment</td>
              <td className=" p-2 text-center">Transaction ID</td>
              <td className=" p-2 text-center">Bank</td>
              <td className=" p-2 text-right">Actions</td>
            </tr>
            {displayData.map((data: any, index: number) => {
              return (
                <tr key={index} className=" border-t">
                  <td className=" p-2 text-gray-700 text-left">
                    <p className=" text-sm">{data.description}</p>
                  </td>

                  <td className=" p-2 text-gray-700 text-center font-medium text-sm">
                    {data?.name}
                  </td>
                  <td className=" p-2 text-gray-700 text-center font-medium text-sm">
                    ${data.amount && commaNumber(data.amount)}
                  </td>

                  <td className=" p-2 text-gray-700 text-center">
                    {data?.status === "pending" && (
                      <button className=" rounded-md p-1 px-2 text-sm bg-yellow-100 text-yellow-500 font-medium">
                        Pending
                      </button>
                    )}
                    {data?.status === "success" && (
                      <button className=" rounded-md p-1 px-2 text-sm bg-green-100 text-green-500 font-medium">
                        Success
                      </button>
                    )}
                    {data?.status === "unsuccess" && (
                      <button className=" rounded-md p-1 px-2 text-sm bg-red-100 text-red-500 font-medium">
                        unsuccess
                      </button>
                    )}
                  </td>
                  <td className=" p-2 text-gray-700 text-center text-sm">
                    {data.timeOfPay && formatDate(data.timeOfPay)}
                  </td>
                  <td className=" p-2 text-gray-700 text-center text-sm">
                    {data?.transaction_id}
                  </td>
                  <td className=" p-2 text-gray-700 text-center text-sm">
                    {data?.bank ? data.bank : "canpay"}
                  </td>
                  <td className=" p-2 text-gray-700">
                    <div className=" flex items-center justify-end gap-2">
                      <button
                        onClick={() => {
                          setShowLink(true);
                          setCurrentLink(data?.paymentLink);
                        }}
                        className=" text-xs px-2 py-1 rounded  bg-green-500 hover:bg-green-800 transition-all duration-300 ease-linear text-white font-medium"
                      >
                        Link
                      </button>

                      {data?.status === "success" ? (
                        <button
                          onClick={() => {
                            generatePDF(data);
                          }}
                          className=" text-xs px-2 py-1 rounded  bg-blue-500 hover:bg-blue-800 transition-all duration-300 ease-linear text-white font-medium"
                        >
                          Invoice
                        </button>
                      ) : (
                        <>
                          <button className=" text-xs px-2 py-1 rounded  bg-blue-300 cursor-not-allowed  text-white font-medium">
                            Invoice
                          </button>
                        </>
                      )}
                      <button
                        onClick={() => {
                          setShowDeleteWorning(true);
                          setCurrentPayment(data);
                        }}
                        className=" text-xs px-2 py-1 rounded  bg-red-500 hover:bg-red-800 transition-all duration-300 ease-linear text-white font-medium"
                      >
                        Delete
                      </button>
                    </div>
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
