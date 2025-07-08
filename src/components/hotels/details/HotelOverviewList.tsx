import { icons } from "@/utils/data";
import Image from "next/image";
import React from "react";
import {
  Link,
  Button,
  Element,
  Events,
  animateScroll as scroll,
  scrollSpy,
  scroller,
} from "react-scroll";

export default function HotelOverviewList({
  hotelDetailsData,
  narebyAttractions,
}: any) {
  console.log(narebyAttractions);

  function findLowestDistanceItem(group: any) {
    if (!group || group.length === 0) {
      return null; // Return null if the group is empty or undefined
    }

    return group.reduce((lowest: any, current: any) => {
      if (current.distance < lowest.distance) {
        return current;
      }
      return lowest;
    }, group[0]); // Initialize with the first item in the group
  }

  return (
    <div className=" mt-20">
      <div className=" w-full flex items-center gap-3 flex-wrap">
        <Link
          className=""
          to="Overview"
          activeClass="active"
          spy={true}
          smooth={true}
          offset={-10}
          duration={500}
        >
          <div className=" bg-primary text-white px-5 py-2 rounded-xl border border-transparent cursor-pointer">
            Overview
          </div>
        </Link>
        <Link
          className=""
          to="hotel-description"
          activeClass="active"
          spy={true}
          smooth={true}
          offset={-10}
          duration={500}
        >
          <div className=" px-5 py-2 rounded-xl border border-primary cursor-pointer">
            Details
          </div>
        </Link>
        <Link
          className=""
          to="Location"
          activeClass="active"
          spy={true}
          smooth={true}
          offset={-10}
          duration={500}
        >
          <div className=" px-5 py-2 rounded-xl border border-primary cursor-pointer">
            Location
          </div>
        </Link>
        <Link
          className=""
          to="available-accommodations"
          activeClass="active"
          spy={true}
          smooth={true}
          offset={-10}
          duration={500}
        >
          <div className=" px-5 py-2 rounded-xl border border-primary cursor-pointer">
            Rooms
          </div>
        </Link>
        <Link
          className=""
          to="Policies"
          activeClass="active"
          spy={true}
          smooth={true}
          offset={-10}
          duration={500}
        >
          <div className=" px-5 py-2 rounded-xl border border-primary cursor-pointer">
            Policies
          </div>
        </Link>
      </div>
      <div className=" mt-8 w-full grid grid-cols-2 gap-5">
        <div className=" bg-[#F8F9FE] rounded-xl p-5">
          <div className=" w-full flex items-center justify-between ">
            <p className=" font-semibold text-lg">Conveniences and Services</p>
            <Link
              className=""
              to="Amenities"
              activeClass="active"
              spy={true}
              smooth={true}
              offset={-10}
              duration={500}
            >
              <span className=" text-blue-500 cursor-pointer">Show all</span>
            </Link>
          </div>
          <div className=" mt-5 grid grid-cols-2 gap-2">
            {hotelDetailsData.accommodation.amenities
              .slice(0, 10)
              .map((amenity: any, index: number) => {
                return (
                  <div className=" flex items-center gap-2" key={index}>
                    {icons[amenity.type] ? (
                      <Image
                        src={icons[amenity.type]}
                        width={300}
                        height={300}
                        alt="Amenity Photo"
                        className=" h-[28px] w-[28px] object-cover"
                      />
                    ) : (
                      <Image
                        src=""
                        width={300}
                        height={300}
                        alt="Amenity Photo"
                        className=" h-[28px] w-[28px] object-cover"
                      />
                    )}
                    <p>{amenity.description}</p>
                  </div>
                );
              })}
          </div>
        </div>
        <div className=" bg-[#F8F9FE] rounded-xl p-5">
          <div className=" w-full flex items-center justify-between ">
            <p className=" font-semibold text-lg">Location</p>
            <Link
              className=""
              to="Location"
              activeClass="active"
              spy={true}
              smooth={true}
              offset={-10}
              duration={500}
            >
              <span className=" text-blue-500 cursor-pointer">
                Open the map
              </span>
            </Link>
          </div>
          <div className=" flex flex-col gap-3 mt-5">
            <div className=" flex items-center gap-2">
              <Image
                src={`/New/hotel/details/map/Main Attractions.png`}
                width={300}
                height={300}
                alt="Picture of the hotel"
                className=" h-[48px] w-[48px] object-cover"
              />
              <div>
                <p className="">
                  {
                    findLowestDistanceItem(
                      narebyAttractions["Main Attractions"]
                    )?.place_name
                  }
                </p>
                <p className=" font-medium text-sm mt-2">
                  Distance:{" "}
                  <span className=" font-semibold">
                    {findLowestDistanceItem(
                      narebyAttractions["Main Attractions"]
                    )?.distance.toFixed(2)}{" "}
                    km
                  </span>
                </p>
              </div>
            </div>
            <div className=" flex items-center gap-2">
              <Image
                src={`/New/hotel/details/map/Restaurants and Cafés.png`}
                width={300}
                height={300}
                alt="Picture of the hotel"
                className=" h-[48px] w-[48px] object-cover"
              />
              <div>
                <p className="">
                  {
                    findLowestDistanceItem(
                      narebyAttractions["Restaurants and Cafés"]
                    ).place_name
                  }
                </p>
                <p className=" font-medium text-sm mt-2">
                  Distance:{" "}
                  <span className=" font-semibold">
                    {findLowestDistanceItem(
                      narebyAttractions["Restaurants and Cafés"]
                    ).distance.toFixed(2)}{" "}
                    km
                  </span>
                </p>
              </div>
            </div>
            <div className=" flex items-center gap-2">
              <Image
                src={`/New/hotel/details/map/Public Transport.png`}
                width={300}
                height={300}
                alt="Picture of the hotel"
                className=" h-[48px] w-[48px] object-cover"
              />
              <div>
                <p className="">
                  {
                    findLowestDistanceItem(
                      narebyAttractions["Public Transport"]
                    ).place_name
                  }
                </p>
                <p className=" font-medium text-sm mt-2">
                  Distance:{" "}
                  <span className=" font-semibold">
                    {findLowestDistanceItem(
                      narebyAttractions["Public Transport"]
                    ).distance.toFixed(2)}{" "}
                    km
                  </span>
                </p>
              </div>
            </div>
            {/* <div className=" flex items-center gap-2">
                <Image
                  src={`/New/hotel/details/map/Nature.png`}
                  width={300}
                  height={300}
                  alt="Picture of the hotel"
                  className=" h-[48px] w-[48px] object-cover"
                />
                <div>
                  <p className="">
                    {
                      findLowestDistanceItem(narebyAttractions["Nature"])
                        .place_name
                    }
                  </p>
                  <p className=" font-medium text-sm mt-2">
                    Distance:{" "}
                    <span className=" font-semibold">
                      {findLowestDistanceItem(
                        narebyAttractions["Nature"]
                      ).distance.toFixed(2)}{" "}
                      km
                    </span>
                  </p>
                </div>
              </div> */}
            <div className=" flex items-center gap-2">
              <Image
                src={`/New/hotel/details/map/Nearby Beaches.png`}
                width={300}
                height={300}
                alt="Picture of the hotel"
                className=" h-[48px] w-[48px] object-cover"
              />
              <div>
                <p className="">
                  {
                    findLowestDistanceItem(narebyAttractions["Nearby Beaches"])
                      .place_name
                  }
                </p>
                <p className=" font-medium text-sm mt-2">
                  Distance:{" "}
                  <span className=" font-semibold">
                    {findLowestDistanceItem(
                      narebyAttractions["Nearby Beaches"]
                    ).distance.toFixed(2)}{" "}
                    km
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
