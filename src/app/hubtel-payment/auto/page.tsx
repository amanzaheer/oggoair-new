"use client";

import React, { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import LoadingComponent from "@/components/layout/LoadingComponent";
import axios from "axios";
import { APILINK } from "../../../../data";

export default function Page() {
  const search = useSearchParams();
  const checkoutid = search.get("checkoutid");

  const status = search.get("status");
  const router = useRouter();

  const paymentStatusUpdate = async () => {
    try {
      const res = await axios.post(`${APILINK}/api/payment/hubtel`, {
        banckReferance: checkoutid,
      });

      if (res.data.data.payment.status === "success") {
        router.push(
          `/flight/payment/success?transaction_id=${res.data.data.payment.transaction_id}`
        );
      }
      console.log(res.data);
    } catch (error) {
      console.log(error);
      router.push(`/flight/payment/failure`);
    }
  };

  useEffect(() => {
    paymentStatusUpdate();
  }, [status]);

  return <LoadingComponent />;
}
