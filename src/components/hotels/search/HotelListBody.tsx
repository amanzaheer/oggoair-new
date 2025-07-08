"use client";

import React, { useEffect, useState } from "react";
import PopularHotelInSearchedCity from "@/components/hotels/List/PopularHotelInSearchedCity";
import BestTravelRating from "@/components/hotels/List/BestTravelRating";
import HotelSection from "@/components/hotels/List/HotelSection";
import FAQ from "@/components/home-page/FAQ";
import WhyBookWithOggo from "@/components/home-page/WhyBookWithOggo";
import HotelFilterComponent from "@/components/hotels/filter/HotelFilterComponent";
import HotelCardComponent from "@/components/hotels/List/HotelCardComponent";
import PriceFilter from "@/components/hotels/filter/PriceFilter";
import { useSearchParams } from "next/navigation";
import { APILINK } from "../../../../data";
import axios from "axios";
import LoadingComponent from "@/components/layout/LoadingComponent";
import { IoSearchOutline } from "react-icons/io5";

export default function HotelListBody() {
  const [hotels, setHotels] = useState([]);
  const [filteredHotels, setFilteredHotels] = useState([]);
  const [displayHotels, setDisplayHotels] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<any>(null);
  const searchParams = useSearchParams();
  const [hotelNameSearchValue, setHotelNameSearchValue] = useState("");

  const [filterTypes, setFilterTypes] = useState<any>({
    rating: [],
    amenities: [],
    dining: [],
    bookWithConfidence: [],
    reviewScore: [],
    sorting: "Recommended",
  });
  const [filterAbleTypes, setFilterAbleTypes] = useState<any>({
    rating: [],
    amenities: [],
    dining: [],
    bookWithConfidence: [],
    reviewScore: [],
    sorting: "Recommended",
  });

  useEffect(() => {
    if (searchParams) {
      const latitude = searchParams.get("latitude");
      const longitude = searchParams.get("longitude");
      const checkin = searchParams.get("checkin");
      const checkout = searchParams.get("checkout");
      const adults = searchParams.get("adults");
      const child = searchParams.get("child");
      const infant = searchParams.get("infant");
      const rooms = searchParams.get("rooms");
      const freeCancellation = searchParams.get("freeCancellation");
      const bestRating = searchParams.get("bestRating");

      getHotelData({
        latitude,
        longitude,
        checkin,
        checkout,
        adults,
        child,
        infant,
        rooms,
        freeCancellation,
        bestRating,
      });
    }
  }, [searchParams]);

  const getHotelData = async (data: any) => {
    try {
      setLoading(true);
      const res = await axios.post(`${APILINK}/api/hotels`, data);
      setHotels(res.data.data);
      setFilteredHotels(res.data.data);
      setLoading(false);
    } catch (error: any) {
      setLoading(false);
      setError(error.response.data.message);
      console.error("Error:", error);
    }
  };

  useEffect(() => {
    const filterAbleComponents: any = {
      rating: [],
      amenities: [],
      dining: [],
      bookWithConfidence: [],
      reviewScore: [],
      sorting: "Recommended",
    };

    // const types: any = [];
    hotels.forEach((hotel: any, index) => {
      // rating
      if (!filterAbleComponents.rating.includes(hotel.accommodation.rating)) {
        if (hotel.accommodation.rating !== null) {
          filterAbleComponents.rating.push(hotel.accommodation.rating);
        }
      }
      // amenites
      hotel.accommodation.amenities?.forEach((amenity: any) => {
        if (!filterAbleComponents.amenities.includes(amenity.description)) {
          filterAbleComponents.amenities.push(amenity.description);
        }
        // if (!types.includes(amenity.type)) {
        //   types.push(amenity.type);
        // }
      });

      // reviewScore
      if (
        !filterAbleComponents.reviewScore.includes(
          Math.floor(hotel.accommodation.review_score)
        )
      ) {
        if (Math.floor(hotel.accommodation.review_score) !== 0) {
          filterAbleComponents.reviewScore.push(
            Math.floor(hotel.accommodation.review_score)
          );
        }
      }
    });

    // console.log(types);
    // Sorting rating and reviewScore in descending order
    filterAbleComponents.rating.sort((a: number, b: number) => b - a);
    filterAbleComponents.reviewScore.sort((a: number, b: number) => b - a);

    setFilterAbleTypes(filterAbleComponents);
  }, [hotels]);

  useEffect(() => {
    let filteredHotels = [...hotels];

    // rating
    if (!filterTypes.rating.length) {
      filteredHotels = [...hotels];
    } else {
      filteredHotels = [...hotels].filter((hotel: any) =>
        filterTypes.rating.includes(hotel.accommodation.rating)
      );
    }
    // review score
    if (!filterTypes.reviewScore.length) {
      filteredHotels = [...filteredHotels];
    } else {
      filteredHotels = [...filteredHotels].filter((hotel: any) =>
        filterTypes.reviewScore.includes(
          Math.floor(hotel.accommodation.review_score)
        )
      );
    }
    // amenities
    if (!filterTypes.amenities?.length) {
      filteredHotels = [...filteredHotels];
    } else {
      const newHotels: any = [];

      filteredHotels.forEach((hotel: any) => {
        hotel.accommodation.amenities?.forEach((amenity: any) => {
          if (
            filterTypes.amenities.includes(amenity.description) &&
            !newHotels.includes(hotel)
          ) {
            newHotels.push(hotel);
          }
        });
      });

      filteredHotels = newHotels;
    }

    // shorting
    if (filterTypes.sorting === "Recommended") {
      filteredHotels = [...filteredHotels];
    } else if (filterTypes.sorting === "Low to High") {
      filteredHotels.sort(
        (a: any, b: any) =>
          a.cheapest_rate_total_amount - b.cheapest_rate_total_amount
      );
    } else if (filterTypes.sorting === "High to Low") {
      filteredHotels.sort(
        (a: any, b: any) =>
          b.cheapest_rate_total_amount - a.cheapest_rate_total_amount
      );
    }
    setFilteredHotels(filteredHotels);
  }, [filterTypes]);

  useEffect(() => {
    setDisplayHotels(filteredHotels.slice(0, 10));
    setCurrentIndex(10);
  }, [filteredHotels]);

  const increaseHotelData = () => {
    // Update the display hotels with the next set of 10 hotels
    const nextHotels = filteredHotels.slice(currentIndex, currentIndex + 10);
    setDisplayHotels((prev) => [...prev, ...nextHotels]); // Append to the existing list of hotels
    setCurrentIndex((prevIndex) => prevIndex + 10); // Update the index for the next batch
  };
  // console.log(filteredHotels);
  // console.log(displayHotels);
  // console.log(currentIndex);

  const searchHotelByName = () => {
    if (hotelNameSearchValue) {
      const hotel = hotels.find(
        (hotel: any) => hotel.accommodation.name === hotelNameSearchValue
      );
      if (hotel) {
        setFilteredHotels([hotel]);
      }
    } else {
      setFilteredHotels(hotels);
    }
  };

  if (loading) {
    return <LoadingComponent option="search-page" />;
  }

  return (
    <div className=" w-full flex justify-center px-3">
      <div className=" w-full xl:w-[1220px] 2xl:w-[1420px] mt-5">
        <div className="grid grid-cols-4 gap-5">
          <div className=" col-span-4 md:col-span-1">
            <HotelFilterComponent
              filterTypes={filterTypes}
              setFilterTypes={setFilterTypes}
              filterAbleTypes={filterAbleTypes}
              setFilterAbleTypes={setFilterAbleTypes}
            />
          </div>
          <div className=" col-span-4 md:col-span-3 pb-5">
            <div className=" w-full flex items-center justify-between">
              <div className="relative">
                <input
                  type="text"
                  name=""
                  id=""
                  placeholder="Search by hotel name"
                  value={hotelNameSearchValue}
                  onChange={(e) => setHotelNameSearchValue(e.target.value)}
                  className=" bg-[#F8F9FE] rounded-3xl px-5 py-2 w-full sm:w-[400px] focus:outline-none"
                />
                <IoSearchOutline
                  className=" text-gray-500 absolute top-3 right-5 cursor-pointer text-lg "
                  onClick={searchHotelByName}
                />
              </div>
              <PriceFilter
                filterTypes={filterTypes}
                setFilterTypes={setFilterTypes}
                filterAbleTypes={filterAbleTypes}
              />
            </div>
            {displayHotels.map((hotel, index) => {
              return <HotelCardComponent hotel={hotel} key={index} />;
            })}

            {filteredHotels.length - currentIndex > 0 && (
              <div className="w-full flex justify-center mt-10">
                <button
                  onClick={increaseHotelData}
                  className="bg-primary text-white px-5 py-2 rounded-md"
                >
                  Show 10 more hotels
                </button>
              </div>
            )}
          </div>
        </div>
        <PopularHotelInSearchedCity />
        <BestTravelRating />
        <HotelSection />
        <FAQ />
        <WhyBookWithOggo />
      </div>
    </div>
  );
}
