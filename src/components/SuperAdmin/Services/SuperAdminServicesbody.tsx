"use client";

import React, { useEffect, useId, useState } from "react";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
import LoadingComponent from "@/components/layout/LoadingComponent";
import { APILINK } from "../../../../data";
import CreateService from "./CreateService";
import UpdateService from "./UpdateService";

export default function SuperAdminServicesBody() {
  const [services, setServices] = useState<any[]>([]);
  const [createServiceMode, setCreateServiceMode] = useState(false);
  const [openUpdateMode, setOpenUpdateMode] = useState(false);
  const [currentService, setCurrentService] = useState<any>(null);
  const [loading, setLoading] = useState(false);
  const [confirmDeleteWorningShow, setConfirmDeleteWorningShow] =
    useState(false);
  const [serviceInfo, setServiceInfo] = useState<any>({
    name: "",
    details: "",
    charge: "",
    serviceFor: "",
    image: "",
  });

  const changeValue = (value: any, option: any) => {
    const newData = { ...serviceInfo };
    newData[option] = value;
    setServiceInfo(newData);
  };

  const changeCurrenUserValue = (value: any, option: any) => {
    const newData = { ...currentService };
    newData[option] = value;
    setCurrentService(newData);
  };

  const toggleCreateService = () => {
    setServiceInfo({
      name: "",
      details: "",
      charge: "",
      serviceFor: "",
      image: "",
    });

    setCreateServiceMode(!createServiceMode);
  };

  const toggleDeleteWorningShow = (id: string | null) => {
    console.log(id);
    setConfirmDeleteWorningShow(!confirmDeleteWorningShow);
    if (id) {
      setCurrentService(services.find((service) => service._id === id));
    }
  };

  const toggleUpdatedMode = (service: any) => {
    setOpenUpdateMode(!openUpdateMode);
    if (service) {
      setCurrentService(service);
    }
  };

  // scroll of when popup
  useEffect(() => {
    const toggleBodyOverflow = () => {
      document.body.style.overflow = createServiceMode ? "hidden" : "auto";
    };
    toggleBodyOverflow();
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [createServiceMode]);

  const addService = async () => {
    try {
      if (
        !serviceInfo.name ||
        !serviceInfo.details ||
        !serviceInfo.charge ||
        !serviceInfo.serviceFor ||
        !serviceInfo.image
      ) {
        return toast.error("Fill all fields");
      }
      const res = await axios.post(
        `${APILINK}/api/additional-services`,
        serviceInfo
      );
      const newServices = [...services];
      newServices.push(res.data.data);
      setServices(newServices);
      setServiceInfo({
        name: "",
        details: "",
        charge: "",
        serviceFor: "",
        image: "",
      });
      toast.success(res.data.mesage);
    } catch (error: any) {
      console.log(error);
      toast.error(error?.response?.data?.message || "Something went wrong.");
    }
    console.log(serviceInfo);
  };

  const deleteService = async (id: string) => {
    try {
      const res = await axios.delete(
        `${APILINK}/api/additional-services/${id}`,
        serviceInfo
      );
      const newServices = [...services].filter((service) => service._id !== id);
      setServices(newServices);
      setConfirmDeleteWorningShow(false);
      toast.success("Delete Success");
    } catch (error: any) {
      toast.error(error?.response?.data?.message || "something went wrong");
    }
  };
  const updateService = async () => {
    try {
      const res = await axios.put(
        `${APILINK}/api/additional-services/${currentService._id}`,
        currentService
      );
      const newServices = [...services].map((service) =>
        service._id === currentService._id ? res.data.data : service
      );
      setServices(newServices);
      setConfirmDeleteWorningShow(false);
      toast.success("Updated Success");
    } catch (error: any) {
      toast.error(error?.response?.data?.message || "something went wrong");
    }
  };

  const getAllServices = async () => {
    try {
      setLoading(true);
      const res = await axios.get(`${APILINK}/api/additional-services`);
      setServices(res.data.data);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };

  useEffect(() => {
    getAllServices();
  }, []);

  if (loading) {
    return <LoadingComponent />;
  }

  return (
    <div className=" w-full">
      {createServiceMode && (
        <CreateService
          toggleCreateService={toggleCreateService}
          serviceInfo={serviceInfo}
          changeValue={changeValue}
          addService={addService}
        />
      )}
      {openUpdateMode && (
        <UpdateService
          toggleUpdatedMode={toggleUpdatedMode}
          currentService={currentService}
          changeCurrenUserValue={changeCurrenUserValue}
          updateService={updateService}
        />
      )}

      {confirmDeleteWorningShow && currentService && (
        <div className=" w-full h-screen fixed top-0 left-0 bg-black bg-opacity-25 p-5 z-[1000]">
          <div className=" w-full h-full flex items-center justify-center">
            <div className=" w-[450px] bg-white rounded-md p-5 relative">
              <p className=" ">
                {`Are you sure you'd like to delete the`}
                <span className=" text-lg font-medium">
                  {" "}
                  {currentService.name}
                </span>
                ?
              </p>
              <div className=" grid grid-cols-2 gap-5 mt-5">
                <button
                  onClick={() => deleteService(currentService._id)}
                  className=" w-full bg-primary hover:bg-green-600 transition-all duration-150 ease-in-out rounded-md py-2 text-center text-white"
                >
                  Yes
                </button>
                <button
                  onClick={() => toggleDeleteWorningShow(null)}
                  className=" w-full bg-gray-400 hover:bg-gray-300 transition-all duration-150 ease-in-out rounded-md py-2 text-center text-white"
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
      {/* user add sidebar*/}
      <div className=" w-full flex justify-end items-center gap-5 flex-wrap mt-5">
        <div>
          <button
            onClick={toggleCreateService}
            className=" bg-primary rounded-md py-2 px-4 font-medium text-white"
          >
            + Add a Service
          </button>
        </div>
      </div>

      <div className="mt-5 bg-white shadow w-full overflow-x-scroll sm:overflow-hidden px-5 py-2 rounded-md">
        <table className=" w-full">
          <tbody>
            <tr className=" text-gray-900 font-medium">
              <td className=" p-2 text-left">Name</td>
              <td className=" p-2 text-center">Details</td>
              <td className=" p-2 text-center">Charge</td>
              <td className=" p-2 text-center">Service For</td>
              <td className=" p-2 text-right">Actions</td>
            </tr>
            {services.map((service, index) => {
              return (
                <tr key={index} className=" border-t">
                  <td className=" p-2 text-gray-700 text-left">
                    {service.name}
                  </td>
                  <td className=" p-2 text-gray-700 text-center">
                    {service.details}
                  </td>
                  <td className=" p-2 text-gray-700 text-center">
                    {service.charge}
                  </td>
                  <td className=" p-2 text-gray-700 text-center">
                    {service.serviceFor}
                  </td>
                  <td className=" p-2 text-gray-700">
                    <div className=" flex items-center justify-end gap-2">
                      <button
                        onClick={() => toggleUpdatedMode(service)}
                        className=" text-xs px-2 py-1 rounded  bg-green-500 hover:bg-green-800 transition-all duration-300 ease-linear text-white font-medium"
                      >
                        Edit
                      </button>
                      <button
                        onClick={() => toggleDeleteWorningShow(service._id)}
                        className=" text-xs px-2 py-1 rounded  bg-red-500 hover:bg-red-800 transition-all duration-300 ease-linear text-white font-medium"
                      >
                        Delete
                      </button>
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      <Toaster />
    </div>
  );
}
