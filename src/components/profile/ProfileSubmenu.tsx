"use client";

import React from "react";
import { BiUser, BiUserCircle } from "react-icons/bi";
import { MdDelete, MdPayment } from "react-icons/md";
import { AiOutlineUserAdd, AiOutlineUsergroupAdd } from "react-icons/ai";
import { RiLockPasswordLine } from "react-icons/ri";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaRegListAlt } from "react-icons/fa";
import Image from "next/image";
import { signIn, signOut, useSession } from "next-auth/react";
import { IoNotificationsOutline, IoSettingsOutline } from "react-icons/io5";
import { FiHeart } from "react-icons/fi";

function ProfileSubmenu() {
  const pathname = usePathname();
  const { data: session, status } = useSession();
  return (
    <div>
      <div className=" w-full flex flex-col justify-center items-center">
        <div className=" w-32 h-32 rounded-full overflow-hidden">
          <Image
            src="/boy.jpg"
            width={500}
            height={500}
            alt="Picture of the logo"
            className=" h-full w-full object-cover"
          />
        </div>
        <p className=" mt-3 font-semibold">Hi</p>
        <p className=" mt-2 text-gray-600">{session?.user?.name}</p>
      </div>

      <div className=" mt-7 rounded-2xl bg-[#F8F9FE]">
        <Link
          href="/profile"
          className={`${
            pathname === "/profile"
              ? " text-white bg-primary rounded-t-2xl "
              : " "
          } flex items-center py-3 px-3 my-1 cursor-pointer`}
        >
          <BiUser className=" text-2xl mr-2" />
          <span className=" text-sm sm:text-base font-medium">
            Personal Area
          </span>
        </Link>
        <Link
          href="/profile/booking/flights"
          className={`${
            pathname.includes("/profile/booking")
              ? " text-white bg-primary "
              : " "
          } flex items-center py-3 px-3 my-1 cursor-pointer`}
        >
          {/* <CiViewList /> */}
          <FaRegListAlt className=" mr-3 text-xl" />
          <span className=" text-sm sm:text-base font-medium">
            Your reservations
          </span>
        </Link>
        <Link
          href="/profile/fnf"
          className={`${
            pathname === "/profile/fnf" ? " text-white bg-primary " : " "
          } flex items-center py-3 px-3 my-1 cursor-pointer`}
        >
          <AiOutlineUserAdd className=" text-2xl mr-2" />
          <span className=" text-sm sm:text-base font-medium">
            Add traveler
          </span>
        </Link>
        <Link
          href="/profile/notifications"
          className={`${
            pathname === "/profile/notifications"
              ? " text-white bg-primary "
              : " "
          } flex items-center py-3 px-3 my-1 cursor-pointer`}
        >
          <IoNotificationsOutline className=" text-2xl mr-2" />
          <span className=" text-sm sm:text-base font-medium">
            Notifications
          </span>
        </Link>
        <Link
          href="/profile/favorites/flights"
          className={`${
            pathname.includes("/profile/favorites")
              ? " text-white bg-primary "
              : " "
          } flex items-center py-3 px-3 my-1 cursor-pointer`}
        >
          <FiHeart className=" text-2xl mr-2" />
          <span className=" text-sm sm:text-base font-medium">Favorite</span>
        </Link>

        <Link
          href="/profile/payment-information"
          className={`${
            pathname === "/profile/payment-information"
              ? " text-white bg-primary "
              : " "
          } flex items-center py-3 px-3 my-1 cursor-pointer`}
        >
          <MdPayment className=" mr-2 text-2xl" />
          <span className=" text-sm sm:text-base font-medium">
            Payment information
          </span>
        </Link>

        <Link
          href="/profile/settings"
          className={`${
            pathname === "/profile/settings"
              ? " text-white bg-primary rounded-b-2xl "
              : " "
          } flex items-center py-3 px-3 my-1 cursor-pointer`}
        >
          <IoSettingsOutline className=" mr-2 text-2xl" />
          <span className=" text-sm sm:text-base font-medium">Settings</span>
        </Link>
      </div>

      <div
        onClick={() => signOut({ callbackUrl: "/" })}
        className=" w-full mt-8 flex items-center justify-center"
      >
        <button className=" bg-primary text-white px-8 sm:px-12 py-[6px] sm:py-[10px] rounded-3xl">
          Go out
        </button>
      </div>
    </div>
  );
}

export default ProfileSubmenu;
