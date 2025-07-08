"use client";

import React, { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import LoadingComponent from "@/components/layout/LoadingComponent";
import axios from "axios";
import { APILINK } from "../../../../data";

export default function Page() {
  const search = useSearchParams();
  const TransactionToken = search.get("TransactionToken");
  const CompanyRef = search.get("CompanyRef");

  const status = search.get("status");
  const router = useRouter();

  const paymentStatusUpdate = async () => {
    try {
      const res = await axios.post(`${APILINK}/api/payment/dpo`, {
        TransactionToken,
        CompanyRef,
      });

      if (res.data.data.status === "success") {
        router.push(
          `/custom-payment-link/success?transaction_id=${res.data.data.transaction_id}`
        );
      }
      console.log(res.data);
    } catch (error) {
      console.log(error);
      router.push(`/custom-payment-link/failure?transaction_id=${CompanyRef}`);
    }
  };

  useEffect(() => {
    paymentStatusUpdate();
  }, [status]);

  return <LoadingComponent />;
}
