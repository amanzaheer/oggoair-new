"use client";

import React, { useEffect } from "react";
import axios from "axios";
import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { APILINK } from "../../../../data";
import LoadingComponent from "@/components/layout/LoadingComponent";
import SettingsType from "./SettingsType";

export default function SuperAdminGeneralSettings() {
  const [commitionData, setCommitionData] = useState<any>(null);
  const [loading, setLoading] = useState(false);

  const CommissionUpdete = async () => {
    try {
      setLoading(true);
      const res = await axios.put(
        `${APILINK}/api/settings/commissions/data-update?companyName=oggoair`,
        commitionData
      );
      setLoading(false);
      console.log(res.data);
      // toast.success(res.data.message);
    } catch (error: any) {
      setLoading(false);
      toast.error(error?.response?.data?.message || "something went wrong");
      console.log(error);
    }
  };
  const getCommition = async () => {
    try {
      const res = await axios.get(
        `${APILINK}/api/settings/commissions?companyName=oggoair`
      );
      if (res.data.data) {
        setCommitionData(res.data.data.commissions);
      } else {
        const commition = {
          flight: {
            status: "inactive",
            commissionBy: "money",
            value: "",
            commissionOn: "per-flight",
          },
          hotel: {
            status: "inactive",
            commissionBy: "money",
            value: "",
            commissionOn: "per-flight",
          },
        };

        setCommitionData(commition);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getCommition();
  }, []);

  if (loading) {
    return <LoadingComponent />;
  }

  return (
    <div>
      <SettingsType
        commitionData={commitionData}
        setCommitionData={setCommitionData}
        title="hotel"
      />
      <SettingsType
        commitionData={commitionData}
        setCommitionData={setCommitionData}
        title="air ticket"
      />

      <div className=" mt-10 flex items-center gap-3">
        <button
          onClick={() => {
            CommissionUpdete();
          }}
          className=" bg-primary rounded-md text-white text-sm border border-transparent px-5 py-2 hover:border-primary hover:bg-white hover:text-primary transition-all duration-150 ease-in-out"
        >
          Save changes
        </button>
        <button
          onClick={getCommition}
          className=" hover:bg-primary rounded-md hover:text-white text-sm border hover:border-transparent px-5 py-2 border-primary bg-white text-primary transition-all duration-150 ease-in-out"
        >
          Cencel changes
        </button>
      </div>
      <Toaster />
    </div>
  );
}
