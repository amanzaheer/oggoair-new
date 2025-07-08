"use client";

import React, { useEffect, useState } from "react";
import OggoAirTravelPaymentBody from "./OggoAirTravelPaymentBody";
import OggoairCORWPaymentBody from "./OggoairCORWPaymentBody";
import OggoairAfricaPaymentBody from "./OggoairAfricaPaymentBody";

export default function PaymentBody() {
  const [baseUrl, setBaseUrl] = useState("");
  useEffect(() => {
    if (window) {
      setBaseUrl(window.location.origin);
      // setBaseUrl("https://oggoair.travel");
    }
  }, []);

  return (
    <div className=" ">
      {(baseUrl === "https://oggoair.travel" ||
        baseUrl === "https://www.oggoair.travel") && (
        <OggoAirTravelPaymentBody />
      )}

      {(baseUrl === "https://oggoair.co.rw" ||
        baseUrl === "https://www.oggoair.co.rw") && <OggoairCORWPaymentBody />}

      {(baseUrl === "https://oggoair.africa" ||
        baseUrl === "https://www.oggoair.africa") && (
        <OggoairAfricaPaymentBody />
      )}
    </div>
  );
}
