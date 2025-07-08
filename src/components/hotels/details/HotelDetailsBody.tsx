"use client";

import React, { useEffect, useState } from "react";
import HotelSubmenu from "./HotelSubmenu";
import HotelDescriptionPhotosSection from "./HotelDescriptionPhotosSection";
import HotelOverviewList from "./HotelOverviewList";
import HotelAvableAccomodation from "./HotelAvableAccomodation";
import HotelDescription from "./HotelDescription";
import HotelAmenitiesAndSearvices from "./HotelFacilities";
import HotelPolicies from "./HotelPolicies";
import HotelReview from "./HotelReview";
import HotelDetailsMap from "./HotelDetailsMap";
import { useRouter, useSearchParams } from "next/navigation";
import { APILINK, mapboxAccessToken } from "../../../../data";
import axios from "axios";
import LoadingComponent from "@/components/layout/LoadingComponent";

export default function HotelDetailsBody() {
  const [hotelDetailsData, setHotelDetailsData] = useState<any>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<any>(null);
  const [hotelSingleDate, setHotelSingleDate] = useState(new Date());
  const [hotelReturnDate, setHotelReturnDate] = useState(new Date());
  const [showHotelReturnDate, setShowHotelReturnDate] = useState(false);
  const [showHotelTravelers, setShowHotelTravelers] = useState(false);
  const [flightClass, setFlightClass] = useState("economy");
  const [travelers, setTravelers] = useState({
    adults: 1,
    child: 0,
    infant: 0,
    rooms: 1,
  });

  const [showDateError, setShowDateError] = useState(false);
  const router = useRouter();
  const searchParams = useSearchParams();
  const [narebyAttractions, setNarebyAttractions] = useState<any>(null);

  useEffect(() => {
    if (hotelDetailsData) {
      const latitude =
        hotelDetailsData.accommodation.location.geographic_coordinates.latitude;
      const longitude =
        hotelDetailsData.accommodation.location.geographic_coordinates
          .longitude;

      searchCategories(latitude, longitude, mapboxAccessToken);
    }
  }, [hotelDetailsData]);

  function calculateDistance(lat1: any, lon1: any, lat2: any, lon2: any) {
    const R = 6371;
    const dLat = deg2rad(lat2 - lat1);
    const dLon = deg2rad(lon2 - lon1);
    const a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(deg2rad(lat1)) *
        Math.cos(deg2rad(lat2)) *
        Math.sin(dLon / 2) *
        Math.sin(dLon / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    const d = R * c;
    return d;
  }

  function deg2rad(deg: any) {
    return deg * (Math.PI / 180);
  }

  const searchCategories = async (
    latitude: any,
    longitude: any,
    mapboxAccessToken: any
  ) => {
    try {
      const categories: any = {
        "Restaurants and Cafés": ["restaurants", "cafe"],
        "Public Transport": ["public_transport"],
        "Main Attractions": ["attraction"],
        Nature: ["natural_feature"],
        "Nearby Beaches": ["beach"],
      };

      const results: any = {};
      for (const groupName in categories) {
        results[groupName] = [];
        for (const category of categories[groupName]) {
          const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${category}.json?proximity=${longitude},${latitude}&access_token=${mapboxAccessToken}`;
          const response = await axios.get(url);
          const calculatedResults = response.data.features.map(
            (feature: any) => {
              const placeLat = feature.center[1];
              const placeLon = feature.center[0];
              const distance = calculateDistance(
                latitude,
                longitude,
                placeLat,
                placeLon
              );
              return {
                ...feature,
                distance: distance,
              };
            }
          );
          results[groupName].push(...calculatedResults);
        }
      }
      setNarebyAttractions(results);
    } catch (error) {
      console.error("Error searching categories:", error);
    }
  };

  const gotoCheckoutPage = async () => {
    if (!hotelSingleDate || !hotelReturnDate) {
      const accommodations = document.getElementById(
        "available-accommodations"
      );
      if (accommodations) {
        accommodations.scrollIntoView({ behavior: "smooth" });
      }
      setShowDateError(true);
      return;
    }
    router.push("/hotel/checkout");
  };

  const getHotelData = async () => {
    try {
      const id = searchParams.get("id");
      // console.log(id);
      if (id) {
        setLoading(true);
        const res = await axios.get(`${APILINK}/api/hotels/rates/${id}`);
        setHotelDetailsData(res.data.data.data);
        setLoading(false);
      }
    } catch (error: any) {
      setLoading(false);
      setError(error.response.data.message[0].title);
      console.error("Error:", error);
    }
  };

  useEffect(() => {
    getHotelData();
  }, []);

  if (loading) {
    return <LoadingComponent />;
  }

  return (
    <div>
      {error && (
        <div className=" w-full flex items-center justify-center">
          <div>
            <p className=" text-3xl text-red-400 font-semibold my-20">
              {error}
            </p>
          </div>
        </div>
      )}
      {hotelDetailsData && <HotelSubmenu />}
      {hotelDetailsData && (
        <HotelDescriptionPhotosSection
          gotoCheckoutPage={gotoCheckoutPage}
          hotelDetailsData={hotelDetailsData}
        />
      )}
      {hotelDetailsData && narebyAttractions && (
        <HotelOverviewList
          hotelDetailsData={hotelDetailsData}
          narebyAttractions={narebyAttractions}
        />
      )}
      {hotelDetailsData && (
        <HotelAvableAccomodation
          hotelSingleDate={hotelSingleDate}
          setHotelSingleDate={setHotelSingleDate}
          hotelReturnDate={hotelReturnDate}
          setHotelReturnDate={setHotelReturnDate}
          showDateError={showDateError}
          setShowDateError={setShowDateError}
          showHotelReturnDate={showHotelReturnDate}
          setShowHotelReturnDate={setShowHotelReturnDate}
          showHotelTravelers={showHotelTravelers}
          setShowHotelTravelers={setShowHotelTravelers}
          flightClass={flightClass}
          setFlightClass={setFlightClass}
          travelers={travelers}
          setTravelers={setTravelers}
          hotelDetailsData={hotelDetailsData}
        />
      )}
      {hotelDetailsData && (
        <HotelDescription hotelDetailsData={hotelDetailsData} />
      )}
      {/* <HotelLanguage /> */}
      {hotelDetailsData && (
        <HotelAmenitiesAndSearvices hotelDetailsData={hotelDetailsData} />
      )}
      {hotelDetailsData && (
        <HotelPolicies hotelDetailsData={hotelDetailsData} />
      )}
      {hotelDetailsData && <HotelReview hotelDetailsData={hotelDetailsData} />}
      {hotelDetailsData && narebyAttractions && (
        <HotelDetailsMap
          hotelDetailsData={hotelDetailsData}
          narebyAttractions={narebyAttractions}
        />
      )}
    </div>
  );
}
