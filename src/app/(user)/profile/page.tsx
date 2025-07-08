"use client";

import React, { useEffect } from "react";
import { useState } from "react";
import ProfileSubmenu from "@/components/profile/ProfileSubmenu";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { signIn, useSession } from "next-auth/react";
import { UserDataKeys } from "@/utils/types";
import axios from "axios";
import { APILINK } from "../../../../data";
import LoadingComponent from "@/components/layout/LoadingComponent";
import { MdEdit } from "react-icons/md";
import UserData from "@/components/profile/UserData";
import { IoMdClose } from "react-icons/io";

export default function Profile() {
  const { data: session, status } = useSession();
  const [loading, setLoading] = useState(false);
  const [editAbleMode, setEditAbleMode] = useState(false);
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    birthDay: "",
    phoneNumber: "",
    title: "",
    cityzenship: "",
    dialCode: "",
    gender: "",
  });

  const [photo, setPhoto] = useState<any>(null);

  const toggleEditAbleMode = () => {
    setEditAbleMode(!editAbleMode);
  };

  const changeValue = (value: string, option: UserDataKeys) => {
    const oldData = { ...userData };
    oldData[option] = value;
    setUserData(oldData);
  };

  const UpdateUserData = async () => {
    try {
      if (!session || !session.user || !session.user.accessToken) {
        console.error("Session or user or token is not available");
        return;
      }
      const data = {
        name: userData.name,
        title: userData.title,
        birthDay: userData.birthDay,
        phoneNumber: userData.phoneNumber,
        cityzenship: userData.cityzenship,
        dialCode: userData.dialCode,
      };

      const res = await axios.put(`${APILINK}/api/users`, data, {
        headers: {
          Authorization: `Bearer ${session.user.accessToken}`,
        },
      });
      signIn("credentials", {
        redirect: false,
        userId: res.data.data._id,
        verified: true,
      }).then((data: any) => {
        if (!data.error) {
          console.log("Update successs");
        } else {
          if (data.error.includes("500")) {
            console.log("Server Error");
          }
        }
      });
    } catch (error) {
      console.log(error);
    }
  };

  const getUserData = async () => {
    try {
      if (!session || !session.user || !session.user.accessToken) {
        console.error("Session or user or token is not available");
        return;
      }
      setLoading(true);
      const res = await axios.get(`${APILINK}/api/users`, {
        headers: {
          Authorization: `Bearer ${session.user.accessToken}`,
        },
      });
      // console.log(res.data.data);
      setUserData({
        name: res.data.data.name,
        email: res.data.data.email,
        birthDay: res.data.data.birthDay,
        phoneNumber: res.data.data.phoneNumber,
        dialCode: res.data.data.dialCode,
        cityzenship: res.data.data.cityzenship,
        title: res.data.data.title,
        gender: res.data.data.gender,
      });
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };

  const closeEditMode = () => {
    setUserData({
      name: "",
      email: "",
      birthDay: "",
      phoneNumber: "",
      title: "",
      cityzenship: "",
      dialCode: "",
      gender: "",
    });
    setEditAbleMode(false);
  };

  useEffect(() => {
    getUserData();
  }, [session]);

  if (loading) {
    return <LoadingComponent />;
  }

  return (
    <div className=" w-full">
      <Header />

      <div className=" pt-20 w-full flex justify-center px-3 mb-10">
        <div className=" w-full xl:w-[1220px] 2xl:w-[1420px] grid gap-5 grid-cols-8 mt-5">
          <div className=" col-span-8 xl:col-span-2">
            <ProfileSubmenu />
          </div>
          <div className=" p-5 rounded-md bg-[#F8F9FE] col-span-8 xl:col-span-6">
            <p className=" text-center text-xl font-semibold">Account</p>
            <div className=" mt-8 w-full rounded-md bg-[#7BCAFF33] p-5 relative">
              <p className=" font-medium">General Information</p>
              {editAbleMode && (
                <IoMdClose
                  className=" absolute top-5 right-5 text-gray-800 text-2xl cursor-pointer"
                  onClick={closeEditMode}
                />
              )}
            </div>
            {editAbleMode ? (
              <UserData
                userData={userData}
                changeValue={changeValue}
                toggleEditAbleMode={toggleEditAbleMode}
                UpdateUserData={UpdateUserData}
              />
            ) : (
              <div className=" mt-8 w-full rounded-md bg-[#e3f0f8] p-5 flex items-center justify-between">
                <div>
                  <p className=" font-medium">{session?.user?.name}</p>
                  <p className=" mt-1">{session?.user?.email}</p>
                </div>
                <div>
                  <div
                    onClick={toggleEditAbleMode}
                    className=" cursor-pointer flex items-center gap-3"
                  >
                    <div className=" h-6 w-6 border-2 border-gray-300 rounded-full flex items-center justify-center">
                      <MdEdit className=" text-sm" />
                    </div>
                    <p className=" hidden sm:block font-semibold">
                      Edit Profile
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
