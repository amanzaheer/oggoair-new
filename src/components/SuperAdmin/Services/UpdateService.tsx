import React from "react";
import { AiOutlineClose } from "react-icons/ai";

export default function UpdateService({
  toggleUpdatedMode,
  currentService,
  changeCurrenUserValue,
  updateService,
}: any) {
  return (
    <div className=" w-full h-screen fixed top-0 left-0 bg-black bg-opacity-25 sm:p-5 z-[2000]">
      <div className=" w-full h-full flex items-center justify-center">
        <div className=" w-full max-w-[500px] h-full sm:h-auto overflow-y-scroll sm:overflow-hidden bg-white rounded-md p-5 relative">
          <div
            onClick={() => toggleUpdatedMode(null)}
            className=" h-6 w-6 absolute top-3 sm:top-2 right-3 sm:right-2 cursor-pointer bg-red-500 text-white shadow flex justify-center items-center rounded-full"
          >
            <AiOutlineClose className=" font-bold" />
          </div>

          <p className=" text-xl text-center font-medium">Update Service</p>
          <div className=" mt-5 flex flex-col gap-3">
            <div className="">
              <label htmlFor="" className=" text-sm font-medium">
                Name
              </label>
              <input
                type="text"
                value={currentService.name}
                onChange={(e) => changeCurrenUserValue(e.target.value, "name")}
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
                value={currentService.details}
                onChange={(e) =>
                  changeCurrenUserValue(e.target.value, "details")
                }
                placeholder="Doe"
                className=" p-3 py-2 border rounded-md focus:outline-none w-full focus:border-primary hover:border-primary mt-1 placeholder:text-sm"
              />
            </div>
            <div className="">
              <label htmlFor="" className=" text-sm font-medium">
                Charge
              </label>
              <input
                type="text"
                placeholder="Service Charge"
                value={currentService.charge}
                onChange={(e) =>
                  changeCurrenUserValue(e.target.value, "charge")
                }
                className=" p-3 py-2 border rounded-md focus:outline-none w-full focus:border-primary hover:border-primary mt-1 placeholder:text-sm"
              />
            </div>
            <div className="">
              <label htmlFor="" className=" text-sm font-medium">
                Service For
              </label>

              <select
                name=""
                id=""
                value={currentService.serviceFor}
                onChange={(e) =>
                  changeCurrenUserValue(e.target.value, "serviceFor")
                }
                className=" p-3 py-2 border rounded-md focus:outline-none w-full focus:border-primary hover:border-primary mt-1 placeholder:text-sm"
              >
                <option value="">Select Servece For</option>
                <option value="hotel">Hotel</option>
                <option value="flight">Flight</option>
              </select>
            </div>
            <div className="">
              <label htmlFor="" className=" text-sm font-medium">
                Image Link
              </label>
              <input
                type="text"
                value={currentService.image}
                onChange={(e) => changeCurrenUserValue(e.target.value, "image")}
                placeholder="Image like"
                className=" p-3 py-2 border rounded-md focus:outline-none w-full focus:border-primary hover:border-primary mt-1 placeholder:text-sm"
              />
            </div>
          </div>
          <div className=" grid grid-cols-2 gap-5 mt-3">
            <button
              onClick={updateService}
              className=" w-full bg-primary hover:bg-green-600 transition-all duration-150 ease-in-out rounded-md py-2 text-center text-white"
            >
              Update
            </button>
            <button
              onClick={() => toggleUpdatedMode(null)}
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
