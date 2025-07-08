"use client";

import { User } from "@/utils/types";
import axios from "axios";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { IoIosEyeOff, IoMdEye } from "react-icons/io";
import toast, { Toaster } from "react-hot-toast";
import { useRouter } from "next/navigation";
import { APILINK } from "../../../../data";

export default function SuperAdminProfileBody() {
  const [userInfo, setUserInfo] = useState<null | User>(null);
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const jsonData = localStorage.getItem("SuperAdminInfo");
    if (jsonData) {
      const userInfo = JSON.parse(jsonData);
      setUserInfo(userInfo);
    }
  }, []);

  const changeUserInfo = (value: string, name: string) => {
    if (userInfo) {
      const oldUserInfo = { ...userInfo };
      oldUserInfo[name as keyof User] = value; // Type assertion here
      setUserInfo(oldUserInfo);
    }
  };

  const updateInfo = async () => {
    try {
      if (password) {
        if (!confirmPassword) {
          return toast.error("Please insert confirm password.");
        }
        if (password !== confirmPassword) {
          return toast.error("Password and confirm password dose not match.");
        }
      }
      if (userInfo) {
        const data = {
          fullName: userInfo.fullName,
          email: userInfo.email,
          password,
        };

        await axios.put(`${APILINK}/api/super-admins`, data, {
          headers: {
            Authorization: `Bearer ${userInfo.accessToken}`,
          },
        });
        setPassword("");
        setConfirmPassword("");

        localStorage.setItem("SuperAdminInfo", JSON.stringify(userInfo));
        toast.success("update success");
      }
    } catch (error: any) {
      console.log(error);
      toast.error(error.response.data.message);
      // toast.error(error.response.data.message);
    }
  };

  const logOut = async () => {
    try {
      const res = await axios.get("/api/auth/super-admin/logout");
      toast.success(res.data.message);
      localStorage.removeItem("SuperAdminInfo");
      router.push("/super-admin/login");
    } catch (error: any) {
      console.log(error);
      toast.error(error.response.data.message || "Something went wrong");
    }
  };

  return (
    <div className="">
      <div className=" mx-auto bg-white w-full sm:w-[500px] p-5 py-5 sm:px-8 rounded-md mt-5">
        <div className=" w-full flex justify-center ">
          <div className=" h-[200px] w-[200px] rounded-full">
            <Image
              src={"/New/user.png"}
              alt="user"
              height={1000}
              width={1000}
              className=" w-full h-full object-cover"
            />
          </div>
        </div>
        {userInfo && (
          <div className=" mt-10">
            <div>
              <label htmlFor="" className=" font-semibold text-gray-800">
                Full Name
              </label>
              <input
                type="text"
                placeholder="Full Name"
                value={userInfo.fullName}
                onChange={(e) => changeUserInfo(e.target.value, "fullName")}
                className=" border p-2 rounded-md placeholder:text-sm placeholder:text-gray-500 focus:outline-none mt-1 w-full"
              />
            </div>
            <div className=" mt-5">
              <label htmlFor="" className=" font-semibold text-gray-800">
                Email
              </label>
              <input
                type="email"
                placeholder="Email"
                value={userInfo.email}
                onChange={(e) => changeUserInfo(e.target.value, "email")}
                className=" border p-2 rounded-md placeholder:text-sm placeholder:text-gray-500 focus:outline-none mt-1 w-full"
              />
            </div>
            <div className=" mt-5 relative">
              <label htmlFor="" className=" font-semibold text-gray-800">
                New Password
              </label>
              <input
                type={showPassword ? "text" : `password`}
                placeholder="**********"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className=" border p-2 rounded-md placeholder:text-sm placeholder:text-gray-500 focus:outline-none mt-1 w-full"
              />
              {showPassword ? (
                <IoIosEyeOff
                  onClick={() => setShowPassword(!showPassword)}
                  className=" text-gray-500 absolute top-10 text-lg right-2 cursor-pointer"
                />
              ) : (
                <IoMdEye
                  onClick={() => setShowPassword(!showPassword)}
                  className=" text-gray-500 absolute top-10 text-lg right-2 cursor-pointer"
                />
              )}
            </div>
            <div className=" mt-5 relative">
              <label htmlFor="" className=" font-semibold text-gray-800">
                Reconfirm Password
              </label>
              <input
                type={showConfirmPassword ? "text" : `password`}
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className=" border p-2 rounded-md placeholder:text-sm placeholder:text-gray-500 focus:outline-none mt-1 w-full"
                placeholder="**********"
              />
              {showConfirmPassword ? (
                <IoIosEyeOff
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  className=" text-gray-500 absolute top-10 text-lg right-2 cursor-pointer"
                />
              ) : (
                <IoMdEye
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  className=" text-gray-500 absolute top-10 text-lg right-2 cursor-pointer"
                />
              )}
            </div>
            <div className=" mt-5">
              <button
                onClick={updateInfo}
                className=" w-full bg-primary hover:bg-primary-hover duration-700 ease-linear transition-all text-white text-center py-2 rounded-md"
              >
                Update
              </button>
              <button
                onClick={logOut}
                className=" w-full bg-red-500 text-white font-semibold mt-5 rounded-md px-8 py-2"
              >
                Logout
              </button>
            </div>
          </div>
        )}
        <Toaster />
      </div>
    </div>
  );
}
