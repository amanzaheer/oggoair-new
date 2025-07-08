"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import Map, {
  GeolocateControl,
  Marker,
  NavigationControl,
  ScaleControl,
  FullscreenControl,
} from "react-map-gl/mapbox";
import "mapbox-gl/dist/mapbox-gl.css";
import { mapboxAccessToken } from "../../../../data";

export default function HotelDetailsMap({
  hotelDetailsData,
  narebyAttractions,
}: any) {
  const [viewport, setViewport] = useState<any>(null);
  const [openGroups, setOpenGroups] = useState<{
    [groupName: string]: boolean;
  }>({});

  const initialCenter = {
    latitude:
      hotelDetailsData.accommodation.location.geographic_coordinates.latitude,
    longitude:
      hotelDetailsData.accommodation.location.geographic_coordinates.longitude,
  };

  const handleBackToCenter = () => {
    setViewport({
      ...viewport,
      latitude: initialCenter.latitude,
      longitude: initialCenter.longitude,
      transitionDuration: 500, // Optional: Add a smooth transition
    });
  };

  useEffect(() => {
    if (hotelDetailsData) {
      const latitude =
        hotelDetailsData.accommodation.location.geographic_coordinates.latitude;
      const longitude =
        hotelDetailsData.accommodation.location.geographic_coordinates
          .longitude;
      setViewport({
        latitude: latitude,
        longitude: longitude,
        zoom: 12,
      });
    }
  }, [hotelDetailsData]);

  const toggleGroup = (groupName: string) => {
    setOpenGroups((prev) => ({
      ...prev,
      [groupName]: !prev[groupName],
    }));
  };

  return (
    <div className=" w-full mt-20" id="Location">
      <p className=" font-bold text-3xl">Nearby Attractions and Amenities</p>
      <div className=" flex items-center gap-2 mt-2">
        <Image
          src={`/New/hotel/details/location.png`}
          alt="line"
          height={100}
          width={100}
          className=" w-[20px] h-[20px]"
        />
        <p className=" text-blue-400">Ileribasi Mevki, Belek</p>
      </div>
      <div className=" w-full grid grid-cols-5 gap-5 mt-10">
        <div className=" col-span-4">
          <div className=" w-full h-[400px] rounded-2xl overflow-hidden relative">
            {viewport && (
              <Map
                mapboxAccessToken={mapboxAccessToken}
                {...viewport}
                onMove={(evt) => setViewport(evt.viewState)}
                style={{ width: "100%", height: "100%" }}
                mapStyle="mapbox://styles/mapbox/streets-v9"
                attributionControl={false}
              >
                <button
                  className=" absolute top-5 right-5 z-10 font-semibold text-lg"
                  onClick={handleBackToCenter}
                >
                  Center
                </button>
                <Marker
                  latitude={
                    hotelDetailsData.accommodation.location
                      .geographic_coordinates.latitude
                  }
                  longitude={
                    hotelDetailsData.accommodation.location
                      .geographic_coordinates.longitude
                  }
                ></Marker>
                <NavigationControl position="top-left" />
                <FullscreenControl position="bottom-right" />
              </Map>
            )}
          </div>
        </div>

        <div className=" col-span-1">
          {Object.keys(narebyAttractions).map((groupName: any) => (
            <div key={groupName}>
              <div
                className=" p-2 rounded-2xl w-full flex items-center justify-between bg-[#F8F9FE] mt-3"
                onClick={() => toggleGroup(groupName)}
                style={{ cursor: "pointer" }}
              >
                <div className=" flex items-center gap-2">
                  <Image
                    src={`/New/hotel/details/map/${groupName}.png`}
                    alt="icon"
                    height={500}
                    width={500}
                    className=" w-[32px]"
                  />
                  <p>{groupName}</p>
                </div>
                <MdOutlineKeyboardArrowDown
                  className={` text-xl ${
                    openGroups[groupName] ? "rotate-180" : ""
                  }`}
                />
              </div>
              {openGroups[groupName] &&
                narebyAttractions[groupName]
                  .slice(0, 2)
                  .map((attraction: any) => (
                    <div
                      key={attraction.id}
                      className="mt-2 p-2 bg-[#F8F9FE] rounded"
                    >
                      <p className="">{attraction.place_name}</p>
                      <p className=" font-medium text-sm mt-2">
                        Distance:{" "}
                        <span className=" font-semibold">
                          {attraction.distance.toFixed(2)} km
                        </span>
                      </p>
                    </div>
                  ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
