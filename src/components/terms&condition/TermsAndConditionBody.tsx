"use client";

import React, { useState } from "react";
import {
  Link,
  Button,
  Element,
  Events,
  animateScroll as scroll,
  scrollSpy,
  scroller,
} from "react-scroll";

export default function TermsAndConditionBody() {
  const [selectedTitle, setSelectedTitle] = useState("home");
  return (
    <div className=" px-5 pt-5 sm:pt-10 grid grid-cols-12 gap-5 sm:gap-10 pb-5 sm:pb-10">
      <div className=" col-span-12 lg:col-span-4">
        <div className=" w-full">
          <Link
            className=""
            to="About Terms and Conditions"
            activeClass="active"
            spy={true}
            smooth={true}
            offset={-10}
            duration={500}
          >
            <p
              className={` border border-primary rounded-xl hover:bg-primary hover:text-white transition-all duration-150 ease-in-out  mt-3 px-5 py-3 cursor-pointer font-medium text-gray-500 text-sm sm:text-base`}
            >
              About Terms and Conditions
            </p>
          </Link>
          <Link
            className=""
            to="Restriction Use of Our Service"
            activeClass="active"
            spy={true}
            smooth={true}
            offset={-10}
            duration={500}
          >
            <p
              className={` border border-primary rounded-xl hover:bg-primary hover:text-white transition-all duration-150 ease-in-out  mt-3 px-5 py-3 cursor-pointer font-medium text-gray-500 text-sm sm:text-base`}
            >
              Restriction Use of Our Service
            </p>
          </Link>
          <Link
            className=""
            to="Registration and Membership"
            activeClass="active"
            spy={true}
            smooth={true}
            offset={-10}
            duration={500}
          >
            <p
              className={`$ border border-primary rounded-xl hover:bg-primary hover:text-white transition-all duration-150 ease-in-out  mt-3 px-5 py-3 cursor-pointer font-medium text-gray-500 text-sm sm:text-base`}
            >
              Registration and Membership
            </p>
          </Link>
          <Link
            className=""
            to="Content on oggoair"
            activeClass="active"
            spy={true}
            smooth={true}
            offset={-10}
            duration={500}
          >
            <p
              className={`border border-primary rounded-xl hover:bg-primary hover:text-white transition-all duration-150 ease-in-out  mt-3 px-5 py-3 cursor-pointer font-medium text-gray-500 text-sm sm:text-base`}
            >
              Content on oggoair
            </p>
          </Link>
          <Link
            className=""
            to="Links to Other Site"
            activeClass="active"
            spy={true}
            smooth={true}
            offset={-10}
            duration={500}
          >
            <p
              className={` border border-primary rounded-xl hover:bg-primary hover:text-white transition-all duration-150 ease-in-out  mt-3 px-5 py-3 cursor-pointer font-medium text-gray-500 text-sm sm:text-base`}
            >
              Links to Other Site
            </p>
          </Link>
          <Link
            className=""
            to="Privacy Policy"
            activeClass="active"
            spy={true}
            smooth={true}
            offset={-10}
            duration={500}
          >
            <p
              className={` border border-primary rounded-xl hover:bg-primary hover:text-white transition-all duration-150 ease-in-out  mt-3 px-5 py-3 cursor-pointer font-medium text-gray-500 text-sm sm:text-base`}
            >
              Privacy Policy
            </p>
          </Link>
        </div>
      </div>
      <div className=" col-span-12 lg:col-span-8 ">
        <div id="About Terms and Conditions">
          <p className=" text-lg sm:text-2xl font-bold">
            About Terms and Conditions
          </p>
          <p className=" text-gray-600 mt-5 text-justify">
            oggoair, your ultimate travel companion, provides personalized
            flight and property information tailored to your preferences. Our
            platform sorts the options from lowest to highest cost, ensuring you
            find the best deals. We offer detailed information about flights and
            hotels, including names, descriptions, and prices per passenger or
            guest. With oggoair, you can even book mixed airlines within a
            single itinerary, ensuring flexibility and convenience. We aggregate
            data from various reliable sources and utilize our proprietary
            algorithm to rank the options. While we strive to maintain an
            up-to-date collection of flight tickets, we recommend consulting the
            relevant government agencies in your country of residence for
            comprehensive information before your departure. Travel with
            confidence and let oggoair take care of your travel needs.
          </p>
        </div>
        <div className=" mt-7" id="Restriction Use of Our Service">
          <p className=" text-lg sm:text-2xl font-bold">
            Restriction Use of Our Service
          </p>
          <p className=" text-gray-600 mt-5 text-justify">
            By accessing and using oggoair, you acknowledge that it is solely
            for private and personal use. Any other use requires explicit
            written consent. While using oggoair, you agree not to intentionally
            or negligently engage in activities that violate these terms.
          </p>
        </div>
        <div className=" mt-7" id="Registration and Membership">
          <p className=" text-lg sm:text-2xl font-bold">
            Registration and Membership
          </p>
          <p className=" text-gray-600 mt-5 text-justify">
            In the fast-paced travel industry, timely updates are crucial to
            meet buyer demands. oggoair offers a flight API that grants access
            to extensive data from multiple flight suppliers. Utilize our
            platform to distribute through various supplier channels, ensuring
            you can serve your customers in the most efficient and effective
            manner possible.
          </p>
        </div>
        <div className=" mt-7" id="Content on oggoair">
          <p className=" text-lg sm:text-2xl font-bold">Content on oggoair</p>
          <p className=" text-gray-600 mt-5 text-justify">
            oggoair is your go-to platform for comprehensive flight and property
            information tailored to your preferences. Our intuitive interface
            sorts options from lowest to highest cost, providing detailed
            information on Flight and Hotel names, along with pricing per
            passenger or guests. With oggoair, you can even book mixed airlines
            within a single itinerary, all conveniently displayed in an
            acceptable time table. We aggregate data from diverse sources and
            utilize our proprietary algorithm to rank the results. While we
            strive to maintain an up-to-date collection of flight tickets, it is
            advisable to consult relevant government agencies in your country of
            residence for complete information before your departure. Trust
            oggoair to enhance your travel experience with reliable and
            personalized information.
          </p>
        </div>
        <div className=" mt-7" id="Links to Other Site">
          <p className=" text-lg sm:text-2xl font-bold">Links to Other Site</p>
          <p className=" text-gray-600 mt-5 text-justify">
            At the core of a top-flight supplier is integrity, exceptional
            customer support, and comprehensive assistance. Our team focuses on
            delivering a seamless experience and compatibility across different
            locations, bridging time gaps effectively. Trust our powerful
            solution for your travel needs.
          </p>
        </div>
        <div className=" mt-7" id="Privacy Policy">
          <p className=" text-lg sm:text-2xl font-bold">Privacy Policy</p>
          <p className=" text-gray-600 mt-5 text-justify">
            {`oggoair API provides your organization with access to top Global
            Distribution Systems (GDS) as well as flight aggregators and
            Low-Cost Carriers (LCCs). Our goal is to offer a unified solution,
            granting clients access to global inventory at competitive prices.
            Our comprehensive solutions cover the entire travel journey, from
            search to final booking, with dedicated after-sales support. We
            prioritize seamless end-to-end solutions, ensuring a smooth and
            efficient experience for your customers. Partner with oggoair API
            for a robust travel platform that meets all your organization's
            needs.`}
          </p>
        </div>
      </div>
    </div>
  );
}
