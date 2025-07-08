"use client";

import React, { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import LoadingComponent from "@/components/layout/LoadingComponent";
import axios from "axios";
import { APILINK } from "../../../data";

export default function Page() {
  const search = useSearchParams();
  const transaction_id = search.get("reference");
  const router = useRouter();

  useEffect(() => {
    transaction_status();
  }, [transaction_id]);

  const transaction_status = async () => {
    try {
      const res = await axios.post(`${APILINK}/api/payment/paystack`, {
        reference: transaction_id,
      });

      if (res.data.data.payment.status === "success") {
        router.push(
          `/flight/payment/success?transaction_id=${res.data.data.payment.transaction_id}`
        );
      } else {
        router.push(`/flight/payment/failure`);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return <LoadingComponent />;
}
