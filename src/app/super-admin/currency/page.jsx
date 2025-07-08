import React from "react";
import SuperAdminHeader from "@/components/SuperAdmin/Layout/SuperAdminHeader";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import CurrencyBody from "@/components/SuperAdmin/Currency/CurrencyBody";

export default async function Permissions() {
  const cookieStore = cookies();
  const cookie = cookieStore.get("superAdminToken");
  if (!cookie) {
    redirect("/super-admin/login");
  }
  if (cookie && cookie.name !== "superAdminToken") {
    redirect("/super-admin/login");
  }
  return (
    <div className=" bg-secoundery min-h-screen">
      <SuperAdminHeader />
      <CurrencyBody />
    </div>
  );
}
