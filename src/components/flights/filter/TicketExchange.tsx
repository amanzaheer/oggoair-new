"use client";

import React, { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import SingleTicketExchangeSelectItem from "./SingleTicketExchangeSelectItem";

export default function TicketExchange({
  filterTypes,
  changeFilterTypesValue,
}: any) {
  const [colupsed, setColupsed] = useState(true);
  const [selectedType, setSelectedType] = useState("any");

  return (
    <div className=" py-5 px-3 bg-[#F8F9FE] rounded-xl mt-3">
      <div
        className=" flex items-center justify-between cursor-pointer"
        onClick={() => setColupsed(!colupsed)}
      >
        <p className=" font-semibold">Ticket Exchange</p>
        <IoIosArrowDown className=" text-gray-500" />
      </div>

      {colupsed ? (
        <div className="">
          <SingleTicketExchangeSelectItem
            title="Can be exchange"
            filterTypes={filterTypes}
            changeFilterTypesValue={changeFilterTypesValue}
          />
        </div>
      ) : null}
    </div>
  );
}
