"use client";

import React, { useEffect, useState } from "react";
import ProfileSubmenu from "@/components/profile/ProfileSubmenu";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { useSession } from "next-auth/react";
import { APILINK } from "../../../../../data";
import axios from "axios";
import toast from "react-hot-toast";
import LoadingComponent from "@/components/layout/LoadingComponent";
import Image from "next/image";
import { MdKeyboardArrowDown } from "react-icons/md";
import Calander from "@/components/profile/Calander";
import Cityzenship from "@/components/profile/Cityzenship";
import {
  IoMdAddCircleOutline,
  IoMdArrowRoundBack,
  IoMdClose,
} from "react-icons/io";
import SingleTraveler from "@/components/profile/SingleTraveler";
import { RiDeleteBin6Line } from "react-icons/ri";
import NewCalendar from "@/components/profile/NewCalander";

export default function FNF() {
  const [userData, setUserData] = useState<any>(null);
  const { data: session } = useSession();
  const [loading, setLoading] = useState(false);
  const [showMemberDeleteWorning, setShowMemberDeleteWorning] = useState(false);
  const [selectedMember, setSelectedMember] = useState<any>(null);
  const [showAddMember, setShowAddMember] = useState(false);
  const [showTravelerType, setShowTravelerType] = useState(false);
  const [showEditMember, setShowEditMember] = useState(false);
  const [selectedTitle, setSelectedTitle] = useState("");
  const [selectedTravelerType, setSelectedTravelerType] = useState("adult");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState<any>("");
  const [dateOfExpery, setDateOfExpery] = useState<any>("");
  const [cityzenship, setCityzenship] = useState<any>();
  const [documentNumber, setDocumentNumber] = useState<any>();
  const [members, setMembers] = useState([]);
  const [countries, setCountries] = useState([]);

  const AddMember = async () => {
    try {
      if (!session || !session.user || !session.user.accessToken) {
        toast.error("User token is not available.");
        return;
      }
      if (
        !firstName ||
        !lastName ||
        !selectedTitle ||
        !dateOfBirth ||
        !cityzenship ||
        !dateOfExpery ||
        !selectedTravelerType ||
        !documentNumber
      ) {
        toast.error("Fill all fields");
        return;
      }
      const data = {
        name: firstName + " " + lastName,
        title: selectedTitle,
        birthDay: dateOfBirth,
        cityzenship,
        dateOfExpery,
        type: selectedTravelerType,
        documentNumber,
      };

      const res = await axios.post(`${APILINK}/api/users/members`, data, {
        headers: {
          Authorization: `Bearer ${session.user.accessToken}`,
        },
      });

      setFirstName("");
      setLastName("");
      setSelectedTitle("");
      setCityzenship("");
      setDateOfBirth("");
      setDateOfExpery("");
      setSelectedTravelerType("adult");
      setDocumentNumber("");
      setShowAddMember(false);
      getUserData();

      toast.success("Member Created.");
    } catch (error: any) {
      toast.error(error?.response?.data?.message || "something went wrong");
      console.log(error);
    }
  };

  const UpdateMember = async () => {
    try {
      if (!session || !session.user || !session.user.accessToken) {
        toast.error("User token is not available.");
        return;
      }
      if (
        !firstName ||
        !lastName ||
        !selectedTitle ||
        !dateOfBirth ||
        !cityzenship ||
        !dateOfExpery ||
        !selectedTravelerType ||
        !documentNumber
      ) {
        toast.error("Fill all fields");
        return;
      }
      const data = {
        name: firstName + " " + lastName,
        title: selectedTitle,
        birthDay: dateOfBirth,
        cityzenship,
        dateOfExpery,
        type: selectedTravelerType,
        documentNumber,
        memberId: selectedMember._id,
      };
      console.log(data);
      const res = await axios.put(`${APILINK}/api/users/members`, data, {
        headers: {
          Authorization: `Bearer ${session.user.accessToken}`,
        },
      });

      setUserData(res.data.data);
      setMembers(res.data.data.members);
      toast.success("Member Updated.");
    } catch (error: any) {
      toast.error(error?.response?.data?.message || "something went wrong");
      console.log(error);
    }
  };

  const DeleteMember = async () => {
    try {
      if (!session || !session.user || !session.user.accessToken) {
        console.error("Session or user or token is not available");
        return;
      }

      if (!selectedMember) {
        return;
      }

      const res = await axios.delete(
        `${APILINK}/api/users/members/${selectedMember._id}`,
        {
          headers: {
            Authorization: `Bearer ${session.user.accessToken}`,
          },
        }
      );
      console.log(res.data);
      setMembers(res.data.data.members);
      toast.success("Member deleted.");
      setShowMemberDeleteWorning(false);
    } catch (error: any) {
      toast.error(error?.response?.data?.message || "something went wrong");
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
      setUserData(res.data.data);
      setMembers(res.data.data.members);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };

  useEffect(() => {
    getUserData();
  }, [session]);

  useEffect(() => {
    // Fetch all countries and their flags
    async function fetchCountries() {
      try {
        const response = await fetch("https://restcountries.com/v3.1/all");
        const data = await response.json();
        // console.log(data);

        const formattedCountries = data
          .map((country: any) => ({
            name: country.name.common,
            flag: country.flags.svg,
            dialCode: country.idd.root
              ? `${country.idd.root}${
                  country.idd.suffixes ? country.idd.suffixes[0] : ""
                }`
              : "N/A",
            code: country.cca2, // Country code like "US", "BD", etc.
          }))
          .sort((a: any, b: any) => a.name.localeCompare(b.name));
        setCountries(formattedCountries);
      } catch (error) {
        console.error("Error fetching countries:", error);
      }
    }

    fetchCountries();
  }, []);

  useEffect(() => {
    function handleClickOutside(event: any) {
      const SelectedTravelerType = document.getElementById(
        "SelectedTravelerType"
      );
      const calenderYearSelection = document.getElementsByClassName("close");

      if (
        SelectedTravelerType &&
        !SelectedTravelerType.contains(event.target)
      ) {
        setShowTravelerType(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
  }, [showTravelerType]);

  const openEditMode = (member: any) => {
    setFirstName(member.name.split(" ")[0]);
    setLastName(member.name.split(" ")[1]);
    setSelectedTravelerType(member.type);
    setSelectedTitle(member.title);
    setDocumentNumber(member.documentNumber);
    setCityzenship(member.cityzenship);
    setDateOfBirth(member.birthDay);
    setDateOfExpery(member.dateOfExpery);
    setShowEditMember(true);
  };

  const closeEditMode = () => {
    setShowEditMember(false);
    setFirstName("");
    setLastName("");
    setSelectedTitle("");
    setCityzenship("");
    setDateOfBirth("");
    setDateOfExpery("");
    setSelectedTravelerType("adult");
    setDocumentNumber("");
  };

  if (loading) {
    return <LoadingComponent />;
  }

  return (
    <div className=" w-full">
      <Header />
      {showMemberDeleteWorning && (
        <div className=" z-[3000] w-full h-screen fixed top-0 left-0 bg-black bg-opacity-25 flex items-center justify-center p-5 ">
          <div className=" w-full sm:w-[600px] bg-white rounded-md p-10">
            <div className=" w-full flex justify-center">
              <div className=" h-[100px] w-[100px] bg-red-50 flex items-center justify-center rounded-full">
                <RiDeleteBin6Line className=" text-5xl text-red-500" />
              </div>
            </div>
            <p className=" text-xl font-bold text-center mt-10">
              Are you sure you want to delete?
            </p>
            <div className=" mt-5 flex justify-between">
              <button
                className="bg-primary text-white  px-5 py-2 rounded-md"
                onClick={() => setShowMemberDeleteWorning(false)}
              >
                No
              </button>
              <button
                onClick={DeleteMember}
                className="bg-red-500 text-white  px-5 py-2 rounded-md "
              >
                Yes
              </button>
            </div>
          </div>
        </div>
      )}
      {showEditMember && (
        <div className=" z-[3000] w-full h-screen fixed top-0 left-0 bg-black bg-opacity-25 flex items-center justify-center p-5 overflow-y-scroll scrollbar ">
          <div className=" w-full sm:w-[800px] bg-white rounded-md p-5 sm:p-10 relative">
            <p className=" text-center text-2xl font-semibold">Edit</p>
            <IoMdClose
              className=" absolute top-7 right-7 text-gray-800 text-2xl cursor-pointer"
              onClick={closeEditMode}
            />
            <div className=" grid sm:grid-cols-2 gap-5 mt-8">
              <div
                id="SelectedTravelerType"
                className=" col-span-1 cursor-pointer"
                onClick={() => setShowTravelerType(!showTravelerType)}
              >
                <label htmlFor="" className=" font-semibold">
                  Traveler
                </label>
                <div className=" border border-gray-300 p-2 mt-1 rounded-md flex items-center justify-between relative">
                  <p className=" capitalize">{selectedTravelerType}</p>
                  <MdKeyboardArrowDown className=" text-xl" />
                  {showTravelerType && (
                    <div className=" absolute top-full left-0 translate-y-1 w-full bg-white shadow rounded-md z-[20]">
                      <p
                        onClick={() => setSelectedTravelerType("adult")}
                        className={` p-3 hover:bg-gray-100 cursor-pointer mb-1 ${
                          selectedTravelerType === "adult" && " bg-gray-100"
                        }  `}
                      >
                        Adult
                      </p>
                      <p
                        onClick={() => setSelectedTravelerType("child")}
                        className={` p-3 hover:bg-gray-100 cursor-pointer mb-1 ${
                          selectedTravelerType === "child" && " bg-gray-100"
                        }  `}
                      >
                        Child
                      </p>
                      <p
                        onClick={() => setSelectedTravelerType("infant")}
                        className={` p-3 hover:bg-gray-100 cursor-pointer ${
                          selectedTravelerType === "infant" && " bg-gray-100"
                        }  `}
                      >
                        Infant
                      </p>
                    </div>
                  )}
                </div>
              </div>
              <div className=" col-span-1">
                <label htmlFor="" className="font-semibold">
                  Gender
                </label>
                <div className=" mt-1 w-full flex">
                  <div className=" flex border border-gray-300 rounded-md overflow-hidden">
                    <button
                      onClick={() => setSelectedTitle("Mr")}
                      className={` px-5 py-2 border-r border-gray-300 ${
                        selectedTitle === "Mr"
                          ? "  bg-primary text-white"
                          : "  text-gray-500"
                      }`}
                    >
                      Mr
                    </button>
                    <button
                      onClick={() => setSelectedTitle("Mrs")}
                      className={` px-5 py-2 ${
                        selectedTitle === "Mrs"
                          ? " text-white bg-primary "
                          : "  text-gray-500 "
                      }`}
                    >
                      Mrs
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className=" mt-5 grid sm:grid-cols-2 gap-5">
              <div>
                <label htmlFor="" className=" font-semibold">
                  First Name
                </label>
                <input
                  type="text"
                  placeholder="First Name "
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  className=" border p-2 rounded-md mt-1 w-full bg-transparent focus:outline-none placeholder:text-sm"
                />
              </div>
              <div>
                <label htmlFor="" className=" font-semibold">
                  Last Name
                </label>
                <input
                  type="text"
                  placeholder="Last Name "
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  className=" border p-2 rounded-md mt-1 w-full bg-transparent focus:outline-none placeholder:text-sm"
                />
              </div>
              <div>
                <label htmlFor="" className=" font-semibold">
                  Date of Birth
                </label>
                {/* <Calander
                  starYear={1980}
                  date={dateOfBirth}
                  setDate={setDateOfBirth}
                /> */}
                <NewCalendar
                  starYear={1980}
                  date={dateOfBirth}
                  setDate={setDateOfBirth}
                />
              </div>
              <div>
                <label htmlFor="" className=" font-semibold">
                  Citizenship
                </label>
                <Cityzenship
                  countries={countries}
                  cityzenship={cityzenship}
                  setCityzenship={setCityzenship}
                />
              </div>
              <div>
                <label htmlFor="" className=" font-semibold">
                  Document Number
                </label>
                <input
                  type="text"
                  value={documentNumber}
                  onChange={(e) => setDocumentNumber(e.target.value)}
                  placeholder="Document Number"
                  className=" border p-2 rounded-md mt-1 w-full bg-transparent focus:outline-none placeholder:text-sm"
                />
              </div>
              <div>
                <label htmlFor="" className=" font-semibold">
                  Date of expary
                </label>
                {/* <Calander
                  starYear={2024}
                  endYear={2084}
                  date={dateOfExpery}
                  setDate={setDateOfExpery}
                /> */}
                <NewCalendar
                  starYear={2024}
                  endYear={2084}
                  date={dateOfExpery}
                  setDate={setDateOfExpery}
                />
              </div>
            </div>
            <div className=" w-full flex items-center justify-center mt-5 sm:mt-10">
              <button
                onClick={UpdateMember}
                className=" bg-primary text-white px-12 py-3 rounded-md "
              >
                Save
              </button>
            </div>
          </div>
        </div>
      )}
      <div className=" pt-20 w-full flex justify-center px-3 mb-10">
        <div className=" w-full xl:w-[1220px] 2xl:w-[1420px] grid gap-5 grid-cols-8 mt-5">
          <div className=" col-span-8 xl:col-span-2">
            <ProfileSubmenu />
          </div>
          <div className=" col-span-8 xl:col-span-6 w-full p-5 sm:p-10 rounded-2xl bg-[#F8F9FE] relative">
            <p className=" text-center font-semibold text-xl sm:text-2xl">
              Add Traveler
            </p>
            {showAddMember && (
              <IoMdClose
                className=" absolute top-10 right-10 cursor-pointer text-2xl text-gray-700"
                onClick={() => setShowAddMember(false)}
              />
            )}
            {!showAddMember && !members.length ? (
              <div className=" h-full w-full flex justify-center">
                <div className=" mt-20 flex items-center flex-col">
                  <Image
                    src={"/New/profile/fnf/traveler plus sign.png"}
                    alt=""
                    height={500}
                    width={500}
                    className=" w-36"
                  />
                  <p className=" w-full sm:w-[450px] text-center mt-5">
                    Add or edit information about the people you are traveling
                    with. This will help speed up the process
                  </p>
                  <button
                    onClick={() => setShowAddMember(true)}
                    className=" bg-primary text-white px-5 py-2 rounded-3xl mt-8"
                  >
                    Add traveler
                  </button>
                </div>
              </div>
            ) : null}

            {showAddMember ? (
              <div className=" mt-10">
                <div className=" grid sm:grid-cols-3 gap-5">
                  <div
                    id="SelectedTravelerType"
                    className=" col-span-1 cursor-pointer"
                    onClick={() => setShowTravelerType(!showTravelerType)}
                  >
                    <label htmlFor="" className=" font-semibold">
                      Traveler
                    </label>
                    <div className=" bg-white border border-gray-300 p-2 mt-1 rounded-md flex items-center justify-between relative">
                      <p className=" capitalize">{selectedTravelerType}</p>
                      <MdKeyboardArrowDown className=" text-xl" />
                      {showTravelerType && (
                        <div className=" absolute top-full left-0 translate-y-1 w-full bg-white shadow rounded-md z-[20]">
                          <p
                            onClick={() => setSelectedTravelerType("adult")}
                            className={` p-3 hover:bg-gray-100 cursor-pointer mb-1 ${
                              selectedTravelerType === "adult" && " bg-gray-100"
                            }  `}
                          >
                            Adult
                          </p>
                          <p
                            onClick={() => setSelectedTravelerType("child")}
                            className={` p-3 hover:bg-gray-100 cursor-pointer mb-1 ${
                              selectedTravelerType === "child" && " bg-gray-100"
                            }  `}
                          >
                            Child
                          </p>
                          <p
                            onClick={() => setSelectedTravelerType("infant")}
                            className={` p-3 hover:bg-gray-100 cursor-pointer ${
                              selectedTravelerType === "infant" &&
                              " bg-gray-100"
                            }  `}
                          >
                            Infant
                          </p>
                        </div>
                      )}
                    </div>
                  </div>
                  <div className=" col-span-1">
                    <label htmlFor="" className=" font-semibold">
                      Gender
                    </label>
                    <div className="  mt-1 w-full flex">
                      <div className=" flex border border-gray-300 rounded-md overflow-hidden">
                        <button
                          onClick={() => setSelectedTitle("Mr")}
                          className={` px-5 py-2 border-r border-gray-300 ${
                            selectedTitle === "Mr"
                              ? "  bg-primary text-white"
                              : "  text-gray-500 bg-white"
                          }`}
                        >
                          Mr
                        </button>
                        <button
                          onClick={() => setSelectedTitle("Mrs")}
                          className={` px-5 py-2 ${
                            selectedTitle === "Mrs"
                              ? " text-white bg-primary "
                              : "  text-gray-500 bg-white"
                          }`}
                        >
                          Mrs
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className=" mt-5 grid sm:grid-cols-3 gap-5">
                  <div>
                    <label htmlFor="" className=" font-semibold">
                      First Name
                    </label>
                    <input
                      type="text"
                      placeholder="First Name "
                      value={firstName}
                      onChange={(e) => setFirstName(e.target.value)}
                      className=" border p-2 rounded-md mt-1 w-full bg-transparent focus:outline-none placeholder:text-sm bg-white"
                    />
                  </div>
                  <div>
                    <label htmlFor="" className=" font-semibold">
                      Last Name
                    </label>
                    <input
                      type="text"
                      placeholder="Last Name "
                      value={lastName}
                      onChange={(e) => setLastName(e.target.value)}
                      className=" border p-2 rounded-md mt-1 w-full bg-transparent focus:outline-none placeholder:text-sm bg-white"
                    />
                  </div>
                  <div>
                    <label htmlFor="" className=" font-semibold">
                      Date of Birth
                    </label>
                    {/* <Calander
                      starYear={1980}
                      date={dateOfBirth}
                      setDate={setDateOfBirth}
                    /> */}
                    <NewCalendar
                      starYear={1980}
                      date={dateOfBirth}
                      setDate={setDateOfBirth}
                    />
                  </div>
                </div>
                <div className=" mt-5 grid sm:grid-cols-3 gap-5">
                  <div>
                    <label htmlFor="" className=" font-semibold">
                      Citizenship
                    </label>
                    <Cityzenship
                      countries={countries}
                      cityzenship={cityzenship}
                      setCityzenship={setCityzenship}
                    />
                  </div>
                  <div>
                    <label htmlFor="" className=" font-semibold">
                      Document Number
                    </label>
                    <input
                      type="text"
                      value={documentNumber}
                      onChange={(e) => setDocumentNumber(e.target.value)}
                      placeholder="Document Number"
                      className=" border p-2 rounded-md mt-1 w-full bg-transparent focus:outline-none placeholder:text-sm bg-white"
                    />
                  </div>
                  <div>
                    <label htmlFor="" className=" font-semibold">
                      Date of expary
                    </label>
                    {/* <Calander
                      starYear={2024}
                      endYear={2084}
                      date={dateOfExpery}
                      setDate={setDateOfExpery}
                    /> */}
                    <NewCalendar
                      starYear={2024}
                      endYear={2084}
                      date={dateOfExpery}
                      setDate={setDateOfExpery}
                    />
                  </div>
                </div>

                <div className=" mt-5 sm:mt-10 w-full flex items-center justify-center">
                  <button
                    onClick={AddMember}
                    className=" bg-primary px-8 py-3 rounded-md text-white"
                  >
                    Save traveler
                  </button>
                </div>
              </div>
            ) : null}

            {!showAddMember && members.length ? (
              <div className=" mt-10">
                {members.map((member: any, index: number) => {
                  return (
                    <SingleTraveler
                      member={member}
                      key={index}
                      setShowEditMember={setShowEditMember}
                      openEditMode={openEditMode}
                      setShowMemberDeleteWorning={setShowMemberDeleteWorning}
                      setSelectedMember={setSelectedMember}
                    />
                  );
                })}
                <div className=" w-full flex justify-center mt-5">
                  <button
                    onClick={() => setShowAddMember(true)}
                    className=" flex items-center gap-3 bg-primary text-white px-5 py-2 rounded-3xl mt-8"
                  >
                    <IoMdAddCircleOutline className=" text-xl" />
                    Add traveler
                  </button>
                </div>
              </div>
            ) : null}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
