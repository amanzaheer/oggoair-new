"use client";

import React, { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import LoadingComponent from "@/components/layout/LoadingComponent";
import axios from "axios";
import { APILINK } from "../../../../data";

export default function Page() {
  const search = useSearchParams();
  const transaction_id = search.get("orderid");
  const status = search.get("status");
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      getTransactionInfo();
    }, 1000);
  }, [status]);

  const getTransactionInfo = async () => {
    try {
      const res = await axios.get(
        `${APILINK}/api/payment/auto/${transaction_id}`
      );

      console.log(res.data.data);
      if (res.data.data.payment.status === "success") {
        router.push(`/flight/payment/success?transaction_id=${transaction_id}`);
      }
    } catch (error) {
      console.log(error);
      router.push(`/flight/payment/failure?transaction_id=${transaction_id}`);
    }
  };

  return <LoadingComponent />;
}
