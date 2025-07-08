import { cookies } from "next/headers";
import React from "react";
import { redirect } from "next/navigation";
import SuperAdminProfileBody from "@/components/SuperAdmin/Profile/SuperAdminProfileBody";
import Header from "@/components/layout/Header";
import SuperAdminHeader from "@/components/SuperAdmin/Layout/SuperAdminHeader";

export default function Profile() {
  const cookieStore = cookies();
  const cookie = cookieStore.get("superAdminToken");
  if (!cookie) {
    redirect("/super-admin/login");
  }
  if (cookie && cookie.name !== "superAdminToken") {
    redirect("/super-admin/login");
  }

  return (
    <div className="  bg-secoundery min-h-screen">
      <SuperAdminHeader />
      <div className=" w-full flex justify-center pb-10 px-5">
        <div className=" w-full xl:w-[1120px]">
          <div>
            <SuperAdminProfileBody />
          </div>
        </div>
      </div>
    </div>
  );
}
