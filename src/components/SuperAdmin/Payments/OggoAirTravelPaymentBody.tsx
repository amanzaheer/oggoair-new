"use client";

import React, { useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import axios from "axios";
import { APILINK } from "../../../../data";
import LoadingComponent from "@/components/layout/LoadingComponent";
import { IoMdSearch } from "react-icons/io";
import CreatePaymentLink from "./CreatePaymentLink";
import CustomPaymentLinkTable from "./CustomPaymentLinkTable";
import AutoPaymentLinkTable from "./AutoPaymentTable";
import WalletPaymentLinkTable from "./WalletPaymentLinkTable";

export default function OggoAirTravelPaymentBody() {
  const [loading, setLoading] = useState(false);
  const [SuperAdmin, setSuperAdmin] = useState<any>(null);
  const [showCreatePaymentLink, setShowCreatePaymentLink] = useState(false);
  const [showTable, setShowTable] = useState("custom");
  const [searchValue, setSearchValue] = useState("");
  const [contentPerPage, setContentPerPage] = useState("10");
  const [currentPage, setCurrentPage] = useState(1);
  const [pagination, setPagination] = useState<any>(null);
  const [displayData, setDisplayData] = useState([]);

  useEffect(() => {
    setSuperAdmin(JSON.parse(localStorage.getItem("SuperAdminInfo") as string));
  }, []);

  const toggleShowCreatePaymentLink = () => {
    setShowCreatePaymentLink(!showCreatePaymentLink);
  };

  const SearchTheResultCustom = async () => {
    try {
      setLoading(true);
      setCurrentPage(1);
      setContentPerPage("10");
      const res = await axios.get(
        `${APILINK}/api/payment/custom?page=1&limit=10&search=${searchValue}&origin=https://oggoair.travel`,
        {
          headers: {
            Authorization: `Bearer ${SuperAdmin.accessToken}`,
          },
        }
      );

      setDisplayData(res.data.data);
      setPagination(res.data.pagination);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };

  const SearchTheResultAuto = async () => {
    try {
      setLoading(true);
      setCurrentPage(1);
      setContentPerPage("10");
      const res = await axios.get(
        `${APILINK}/api/payment/auto?page=1&limit=10&search=${searchValue}&origin=https://oggoair.travel`,
        {
          headers: {
            Authorization: `Bearer ${SuperAdmin.accessToken}`,
          },
        }
      );

      setDisplayData(res.data.data);
      setPagination(res.data.pagination);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };

  const SearchTheResultWallet = async () => {
    try {
      setLoading(true);
      setCurrentPage(1);
      setContentPerPage("10");
      // console.log(searchValue);
      const res = await axios.get(
        `${APILINK}/api/payment/wallet?page=1&limit=10&search=${searchValue}&origin=https://oggoair.travel`,
        {
          headers: {
            Authorization: `Bearer ${SuperAdmin.accessToken}`,
          },
        }
      );

      // console.log(res.data);

      setDisplayData(res.data.data);
      setPagination(res.data.pagination);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };

  const getCustomPayment = async () => {
    try {
      setLoading(true);
      const res = await axios.get(
        `${APILINK}/api/payment/custom?page=${currentPage}&limit=${contentPerPage}&origin=https://oggoair.travel`,
        {
          headers: {
            Authorization: `Bearer ${SuperAdmin.accessToken}`,
          },
        }
      );
      setDisplayData(res.data.data);
      setPagination(res.data.pagination);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };

  const getAutoPayment = async () => {
    try {
      setLoading(true);
      const res = await axios.get(
        `${APILINK}/api/payment/auto?page=${currentPage}&limit=${contentPerPage}&origin=https://oggoair.travel`,
        {
          headers: {
            Authorization: `Bearer ${SuperAdmin.accessToken}`,
          },
        }
      );

      // console.log(res.data);
      setDisplayData(res.data.data);
      setPagination(res.data.pagination);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };

  const getWalletPayment = async () => {
    try {
      setLoading(true);
      const res = await axios.get(
        `${APILINK}/api/payment/wallet?page=${currentPage}&limit=${contentPerPage}&origin=https://oggoair.travel`,
        {
          headers: {
            Authorization: `Bearer ${SuperAdmin.accessToken}`,
          },
        }
      );

      // console.log(res.data);
      setDisplayData(res.data.data);
      setPagination(res.data.pagination);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };

  useEffect(() => {
    if (SuperAdmin) {
      if (showTable === "custom") {
        getCustomPayment();
      } else if (showTable === "auto") {
        getAutoPayment();
      } else if (showTable === "wallet") {
        getWalletPayment();
      }
    }
  }, [showTable, SuperAdmin, currentPage, contentPerPage]);

  useEffect(() => {
    setCurrentPage(1);
  }, [contentPerPage]);

  const goToNextPage = () => {
    if (pagination.next) {
      setCurrentPage(pagination.next);
    }
  };

  const goToPreviousPage = () => {
    if (pagination.prev) {
      setCurrentPage(pagination.prev);
    }
  };

  if (loading) {
    return <LoadingComponent />;
  }

  return (
    <div className=" ">
      {showCreatePaymentLink && (
        <CreatePaymentLink
          getCustomPayment={getCustomPayment}
          toggleShowCreatePaymentLink={toggleShowCreatePaymentLink}
        />
      )}
      {showTable === "custom" && (
        <div className=" w-full flex items-end justify-between gap-5 flex-wrap mt-5">
          <div className=" flex items-center gap-5">
            <div>
              <label htmlFor="" className=" font-semibold text-sm block">
                Per Page
              </label>
              <select
                name=""
                id=""
                value={contentPerPage}
                onChange={(e) => setContentPerPage(e.target.value)}
                className=" p-2 rounded-md focus:outline-none mt-1 "
              >
                <option value="10">10</option>
                <option value="20">20</option>
                <option value="30">30</option>
                <option value="40">40</option>
                <option value="50">50</option>
              </select>
            </div>
            <div>
              <label htmlFor="" className=" font-semibold text-sm block">
                Payment Type
              </label>
              <select
                name=""
                id=""
                className=" p-2 rounded-md focus:outline-none mt-1 "
                value={showTable}
                onChange={(e) => setShowTable(e.target.value)}
              >
                <option value="custom">Custom</option>
                <option value="auto">Auto</option>
                <option value="wallet">wallet</option>
              </select>
            </div>
            <div>
              <label htmlFor="" className=" font-semibold text-sm block">
                Search
              </label>
              <div className=" relative">
                <input
                  type="text"
                  className=" p-2 rounded-md focus:outline-none mt-1 pl-3 pr-10 placeholder:text-sm "
                  placeholder="email, name, transactionid, amount"
                  value={searchValue}
                  onChange={(e) => setSearchValue(e.target.value)}
                />
                <IoMdSearch
                  onClick={SearchTheResultCustom}
                  className=" absolute top-4 right-2 text-xl cursor-pointer"
                />
              </div>
            </div>
          </div>
          <div>
            <button
              onClick={toggleShowCreatePaymentLink}
              className=" bg-primary rounded-md py-2 px-4 font-medium text-white"
            >
              + Create a Payment Link
            </button>
          </div>
        </div>
      )}

      {showTable === "auto" && (
        <div className=" w-full flex items-end justify-between gap-5 flex-wrap mt-5">
          <div className=" flex items-center gap-5">
            <div>
              <label htmlFor="" className=" font-semibold text-sm block">
                Per Page
              </label>
              <select
                name=""
                id=""
                value={contentPerPage}
                onChange={(e) => setContentPerPage(e.target.value)}
                className=" p-2 rounded-md focus:outline-none mt-1 "
              >
                <option value="10">10</option>
                <option value="20">20</option>
                <option value="30">30</option>
                <option value="40">40</option>
                <option value="50">50</option>
              </select>
            </div>
            <div>
              <label htmlFor="" className=" font-semibold text-sm block">
                Payment Type
              </label>
              <select
                name=""
                id=""
                className=" p-2 rounded-md focus:outline-none mt-1 "
                value={showTable}
                onChange={(e) => setShowTable(e.target.value)}
              >
                <option value="custom">Custom</option>
                <option value="auto">Auto</option>
                <option value="wallet">wallet</option>
              </select>
            </div>
            <div>
              <label htmlFor="" className=" font-semibold text-sm block">
                Search
              </label>
              <div className=" relative">
                <input
                  type="text"
                  className=" p-2 rounded-md focus:outline-none mt-1 pl-3 pr-10 placeholder:text-sm "
                  placeholder="email, name, transactionid, amount"
                  value={searchValue}
                  onChange={(e) => setSearchValue(e.target.value)}
                />
                <IoMdSearch
                  onClick={SearchTheResultAuto}
                  className=" absolute top-4 right-2 text-xl cursor-pointer"
                />
              </div>
            </div>
          </div>
          <div>
            <button
              onClick={toggleShowCreatePaymentLink}
              className=" bg-primary rounded-md py-2 px-4 font-medium text-white"
            >
              + Create a Payment Link
            </button>
          </div>
        </div>
      )}

      {showTable === "wallet" && (
        <div className=" w-full flex items-end justify-between gap-5 flex-wrap mt-5">
          <div className=" flex items-center gap-5">
            <div>
              <label htmlFor="" className=" font-semibold text-sm block">
                Per Page
              </label>
              <select
                name=""
                id=""
                value={contentPerPage}
                onChange={(e) => setContentPerPage(e.target.value)}
                className=" p-2 rounded-md focus:outline-none mt-1 "
              >
                <option value="10">10</option>
                <option value="20">20</option>
                <option value="30">30</option>
                <option value="40">40</option>
                <option value="50">50</option>
              </select>
            </div>
            <div>
              <label htmlFor="" className=" font-semibold text-sm block">
                Payment Type
              </label>
              <select
                name=""
                id=""
                className=" p-2 rounded-md focus:outline-none mt-1 "
                value={showTable}
                onChange={(e) => setShowTable(e.target.value)}
              >
                <option value="custom">Custom</option>
                <option value="auto">Auto</option>
                <option value="wallet">wallet</option>
              </select>
            </div>
            <div>
              <label htmlFor="" className=" font-semibold text-sm block">
                Search
              </label>
              <div className=" relative">
                <input
                  type="text"
                  className=" p-2 rounded-md focus:outline-none mt-1 pl-3 pr-10 placeholder:text-sm "
                  placeholder="email, name, transactionid, amount"
                  value={searchValue}
                  onChange={(e) => setSearchValue(e.target.value)}
                />
                <IoMdSearch
                  onClick={SearchTheResultWallet}
                  className=" absolute top-4 right-2 text-xl cursor-pointer"
                />
              </div>
            </div>
          </div>
          <div>
            <button
              onClick={toggleShowCreatePaymentLink}
              className=" bg-primary rounded-md py-2 px-4 font-medium text-white"
            >
              + Create a Payment Link
            </button>
          </div>
        </div>
      )}

      {showTable === "custom" && (
        <CustomPaymentLinkTable
          getCustomPayment={getCustomPayment}
          displayData={displayData}
        />
      )}

      {showTable === "auto" && (
        <AutoPaymentLinkTable displayData={displayData} />
      )}

      {showTable === "wallet" && (
        <WalletPaymentLinkTable
          displayData={displayData}
          getWalletPayment={getWalletPayment}
        />
      )}
      {pagination && (
        <div className=" flex items-center gap-3 pt-5">
          <button
            onClick={
              pagination.prev
                ? goToPreviousPage
                : () => {
                    return;
                  }
            }
            className={` ${
              pagination.prev ? "bg-white" : "bg-gray-300 cursor-not-allowed"
            } text-sm py-2 px-3 rounded-md`}
          >
            Previous
          </button>
          <button
            onClick={
              pagination.next
                ? goToNextPage
                : () => {
                    return;
                  }
            }
            className={` ${
              pagination.next ? "bg-white" : "bg-gray-300 cursor-not-allowed"
            } text-sm py-2 px-3 rounded-md`}
          >
            Next
          </button>
        </div>
      )}
      <Toaster />
    </div>
  );
}
