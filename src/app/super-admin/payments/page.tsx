import React from "react";
import Header from "@/components/layout/Header";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import SuperAdminHeader from "@/components/SuperAdmin/Layout/SuperAdminHeader";
import PaymentBody from "@/components/SuperAdmin/Payments/PaymentBody";

export default async function Payment() {
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
      <div className=" w-full flex justify-center pb-10 px-5">
        <div className=" w-full xl:w-[1120px]">
          {/* <p className=" text-xl md:text-[30px] mt-4 sm:mt-10 font-medium">
            Payments
          </p> */}
          <div>
            <PaymentBody />
          </div>
        </div>
      </div>
    </div>
  );
}
