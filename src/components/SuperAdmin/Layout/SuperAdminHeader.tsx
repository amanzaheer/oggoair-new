"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";

export default function SuperAdminHeader() {
  const pathname = usePathname();
  const [SuperAdmin, setSuperAdmin] = useState<any>(null);

  useEffect(() => {
    setSuperAdmin(JSON.parse(localStorage.getItem("SuperAdminInfo") as string));
  }, []);

  return (
    <div className={`sticky top-0 left-0 w-full z-[2000] px-5 bg-white shadow`}>
      <div className=" w-full xl:w-[1120px] py-3 mx-auto flex items-center justify-between gap-5 flex-wrap">
        <div className=" flex items-center">
          <Link href="/super-admin">
            <Image
              src="/New/newlogo.png"
              width={1000}
              height={1000}
              alt="Picture of the logo"
              className=" w-24 sm:w-40 "
            />
          </Link>
        </div>
        <div className="flex items-center flex-wrap gap-5">
          <Link
            href="/super-admin"
            className=" transition-all duration-300 ease-linear border-b-2 border-transparent hover:border-primary"
          >
            <p
              className={`font-medium text-center ${
                pathname === "/super-admin" && " text-primary"
              }`}
            >
              General
            </p>
          </Link>
          <Link
            href="/super-admin/users"
            className=" transition-all duration-300 ease-linear border-b-2 border-transparent hover:border-primary"
          >
            <p
              className={`font-medium text-center ${
                pathname === "/super-admin/users" && " text-primary"
              }`}
            >
              Users
            </p>
          </Link>
          <Link
            href="/super-admin/currency"
            className="transition-all duration-300 ease-linear border-b-2 border-transparent hover:border-primary"
          >
            <p
              className={`font-medium text-center ${
                pathname === "/super-admin/currency" && " text-primary"
              }`}
            >
              Currency
            </p>
          </Link>
          <Link
            href="/super-admin/services"
            className="transition-all duration-300 ease-linear border-b-2 border-transparent hover:border-primary"
          >
            <p
              className={`font-medium text-center ${
                pathname === "/super-admin/services" && " text-primary"
              }`}
            >
              Services
            </p>
          </Link>

          <Link
            href="/super-admin/payments"
            className="transition-all duration-300 ease-linear border-b-2 border-transparent hover:border-primary"
          >
            <p
              className={`font-medium text-center ${
                pathname === "/super-admin/payments" && " text-primary"
              }`}
            >
              Payments
            </p>
          </Link>
          <div className="transition-all duration-300 ease-linear border-b-2 border-transparent hover:border-primary">
            <div
              className={`font-medium text-center ${
                pathname === "/super-admin/profile" && " text-primary"
              }`}
            >
              {SuperAdmin && (
                <Link
                  href={"/super-admin/profile"}
                  className=" flex items-center gap-2 cursor-pointer"
                >
                  <Image
                    src="/locked.png"
                    width={500}
                    height={500}
                    alt="Picture of the currency"
                    className="close h-5 w-5 "
                  />
                  <p className=" font-semibold">{SuperAdmin.fullName}</p>
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
