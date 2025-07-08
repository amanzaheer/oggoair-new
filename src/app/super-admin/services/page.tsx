import React from "react";
import Header from "@/components/layout/Header";
import SuperAdminHeader from "@/components/SuperAdmin/Layout/SuperAdminHeader";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import SuperAdminServicesBody from "@/components/SuperAdmin/Services/SuperAdminServicesbody";

export default async function Services() {
  const cookieStore = cookies();
  const cookie = cookieStore.get("superAdminToken");
  if (!cookie) {
    redirect("/super-admin/login");
  }
  if (cookie && cookie.name !== "superAdminToken") {
    redirect("/super-admin/login");
  }
  return (
    <div className=" min-h-screen bg-secoundery">
      <SuperAdminHeader />
      <div className=" w-full flex justify-center pb-10 px-5">
        <div className=" w-full xl:w-[1120px]">
          <div>
            <SuperAdminServicesBody />
          </div>
        </div>
      </div>
    </div>
  );
}
