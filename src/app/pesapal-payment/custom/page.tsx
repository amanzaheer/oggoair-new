"use client";

import React, { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import LoadingComponent from "@/components/layout/LoadingComponent";
import axios from "axios";
import { APILINK } from "../../../../data";

export default function Page() {
  const search = useSearchParams();
  const OrderMerchantReference = search.get("OrderMerchantReference");
  const OrderTrackingId = search.get("OrderTrackingId");

  const status = search.get("status");
  const router = useRouter();

  const paymentStatusUpdate = async () => {
    try {
      const res = await axios.post(`${APILINK}/api/payment/pesapal`, {
        OrderMerchantReference,
        OrderTrackingId,
      });

      console.log(res.data);

      if (res.data.data.payment.status === "success") {
        router.push(
          `/custom-payment-link/success?transaction_id=${res.data.data.transaction_id}`
        );
      }

      console.log(res.data);
    } catch (error: any) {
      console.log(error);
      router.push(
        `/custom-payment-link/failure?transaction_id=${OrderMerchantReference}`
      );
    }
  };

  useEffect(() => {
    paymentStatusUpdate();
  }, [status]);

  return <LoadingComponent />;
}
