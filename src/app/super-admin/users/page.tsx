import React from "react";
import Header from "@/components/layout/Header";
import SuperAdminHeader from "@/components/SuperAdmin/Layout/SuperAdminHeader";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export default async function page() {
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
      <div className=" w-full flex justify-center px-5 pb-10">
        <div className=" w-full xl:w-[1120px]">
          <p className="text-xl md:text-[30px] mt-4 sm:mt-10 font-medium">
            Office Stuff
          </p>
          <div></div>
        </div>
      </div>
    </div>
  );
}
