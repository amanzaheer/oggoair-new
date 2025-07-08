import React from "react";
import { AiOutlineClose } from "react-icons/ai";
import "react-phone-number-input/style.css";

export default function CreateService({
  toggleCreateService,
  serviceInfo,
  changeValue,
  addService,
}: any) {
  return (
    <div className=" w-full h-screen fixed top-0 left-0 bg-black bg-opacity-25 sm:p-5 z-[2000]">
      <div className=" w-full h-full flex items-center justify-center">
        <div className=" w-full max-w-[500px] h-full overflow-y-scroll sm:overflow-hidden sm:h-auto bg-white rounded-md p-5 relative">
          <div
            onClick={toggleCreateService}
            className=" h-6 w-6 absolute top-3 sm:top-2 right-3 sm:right-2 cursor-pointer bg-red-500 text-white shadow flex justify-center items-center rounded-full"
          >
            <AiOutlineClose className="font-bold" />
          </div>

          <p className=" text-xl text-center font-medium">Add a Service</p>
          <div className=" flex flex-col gap-2 mt-5">
            <div className="">
              <label htmlFor="" className=" text-sm font-medium">
                Name
              </label>
              <input
                type="text"
                value={serviceInfo.name}
                onChange={(e) => changeValue(e.target.value, "name")}
                placeholder="Service Name"
                className=" p-3 py-2 border rounded-md focus:outline-none w-full focus:border-primary hover:border-primary mt-1 placeholder:text-sm"
              />
            </div>
            <div className="">
              <label htmlFor="" className=" text-sm font-medium">
                Details
              </label>
              <input
                type="text"
                value={serviceInfo.details}
                onChange={(e) => changeValue(e.target.value, "details")}
                placeholder="Searvice Details"
                className=" p-3 py-2 border rounded-md focus:outline-none w-full focus:border-primary hover:border-primary mt-1 placeholder:text-sm"
              />
            </div>
            <div className="">
              <div>
                <label htmlFor="" className=" text-sm font-medium">
                  Charge
                </label>
                <input
                  type="number"
                  value={serviceInfo.charge}
                  onChange={(e) => changeValue(e.target.value, "charge")}
                  placeholder="Service Charge"
                  className=" p-3 py-2 border rounded-md focus:outline-none w-full focus:border-primary hover:border-primary mt-1 placeholder:text-sm"
                />
              </div>
            </div>
            <div className="">
              <label htmlFor="" className=" text-sm font-medium">
                Service For
              </label>
              <select
                name=""
                id=""
                value={serviceInfo.serviceFor}
                onChange={(e) => changeValue(e.target.value, "serviceFor")}
                className=" p-3 py-2 border rounded-md focus:outline-none w-full focus:border-primary hover:border-primary mt-1 placeholder:text-sm"
              >
                <option value="">Select Servece For</option>
                <option value="hotel">Hotel</option>
                <option value="flight">Flight</option>
              </select>
            </div>

            <div className="">
              <label htmlFor="" className=" text-sm font-medium">
                Image link
              </label>
              <input
                type="text"
                value={serviceInfo.image}
                onChange={(e) => changeValue(e.target.value, "image")}
                placeholder="Photo link"
                className=" p-3 py-2 border rounded-md focus:outline-none w-full focus:border-primary hover:border-primary mt-1 placeholder:text-sm"
              />
            </div>
          </div>
          <div className=" grid grid-cols-2 gap-5 mt-3">
            <button
              onClick={addService}
              className=" w-full bg-primary hover:bg-green-600 transition-all duration-150 ease-in-out rounded-md py-2 text-center text-white"
            >
              Add
            </button>
            <button
              onClick={toggleCreateService}
              className=" w-full bg-gray-400 hover:bg-gray-300 transition-all duration-150 ease-in-out rounded-md py-2 text-center text-white"
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
