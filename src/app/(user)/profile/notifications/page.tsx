"use client";

import React, { useEffect, useState } from "react";
import ProfileSubmenu from "@/components/profile/ProfileSubmenu";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Image from "next/image";
import SwitchButton from "@/components/common/SwitchButton";
import { useSession } from "next-auth/react";
import axios from "axios";
import { APILINK } from "../../../../../data";
import toast, { Toaster } from "react-hot-toast";

export default function PaymentLink() {
  const { data: session, status } = useSession();
  const [notificationPreferences, setNotificationPreferences] =
    useState<any>(null);

  const getNotificationPreference = async () => {
    try {
      if (!session || !session.user || !session.user.accessToken) {
        console.error("Session or user or token is not available");
        return;
      }

      const res = await axios.get(
        `${APILINK}/api/users/notification-preferences`,
        {
          headers: {
            Authorization: `Bearer ${session.user.accessToken}`,
          },
        }
      );
      setNotificationPreferences(res.data.data);
    } catch (error: any) {
      console.log(error);
    }
  };

  const toggleNewsLetter = async () => {
    try {
      if (!session || !session.user || !session.user.accessToken) {
        console.error("Session or user or token is not available");
        return;
      }

      const res = await axios.put(
        `${APILINK}/api/users/newsletter`,
        {},
        {
          headers: {
            Authorization: `Bearer ${session.user.accessToken}`,
          },
        }
      );
      console.log(res.data);
      setNotificationPreferences({
        ...notificationPreferences,
        newsLetter: res.data.data,
      });
      toast.success(res.data.message);
    } catch (error: any) {
      console.log(error);
      toast.error(error.response.data.message);
    }
  };
  const toggleInAppNotifications = async () => {
    try {
      if (!session || !session.user || !session.user.accessToken) {
        console.error("Session or user or token is not available");
        return;
      }

      const res = await axios.put(
        `${APILINK}/api/users/in-App-notifications`,
        {},
        {
          headers: {
            Authorization: `Bearer ${session.user.accessToken}`,
          },
        }
      );
      console.log(res.data);
      setNotificationPreferences({
        ...notificationPreferences,
        inAppNotifications: res.data.data,
      });
      toast.success(res.data.message);
    } catch (error: any) {
      console.log(error);
      toast.error(error.response.data.message);
    }
  };

  useEffect(() => {
    getNotificationPreference();
  }, [session]);
  return (
    <div className=" w-full">
      <Header />

      <div className=" pt-20 w-full flex justify-center px-3 mb-10">
        <div className=" w-full xl:w-[1220px] 2xl:w-[1420px] grid gap-5 grid-cols-8 mt-5">
          <div className=" col-span-8 xl:col-span-2">
            <ProfileSubmenu />
          </div>
          <div className="rounded-md bg-[#F8F9FE] col-span-8 xl:col-span-6 p-5 sm:p-10 ">
            <p className=" text-center font-semibold text-2xl">Notifications</p>
            <div className=" mt-5 bg-white rounded-xl p-5">
              <div className=" flex items-center gap-3 flex-wrap">
                <span className=" text-xl font-semibold">Newsletter</span>
                <span className=" text-xl font-semibold">.</span>
                <p className="">Articles, discounts, sales and hot offers</p>
              </div>
              <div className=" mt-5 sm:flex items-center justify-between">
                <p className=" font-medium text-lg">Letters to mail</p>
                {notificationPreferences && (
                  <div className="  mt-3 sm:mt-0">
                    <SwitchButton
                      isActive={notificationPreferences.newsLetter}
                      setIsActive={toggleNewsLetter}
                    />
                  </div>
                )}
              </div>
              <div className=" w-full h-[1px] bg-gray-300 my-5"></div>
              <div className=" sm:flex items-center justify-between">
                <div className="">
                  <p className=" text-xl font-semibold">
                    Notifications in the app
                  </p>
                  <p className=" mt-2">
                    Log in to your profile in the Oggoair app in the same way as
                    on the website
                  </p>
                </div>
                {notificationPreferences && (
                  <div className=" mt-3 sm:mt-0">
                    <SwitchButton
                      isActive={notificationPreferences.inAppNotifications}
                      setIsActive={toggleInAppNotifications}
                    />
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
      <Toaster />
    </div>
  );
}
