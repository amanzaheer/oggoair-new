import React from "react";

export default function ContactUs() {
  return (
    <div className=" p-5">
      {/* {openForm && ( */}
      <div className="  p-5 flex items-center justify-center">
        <div className=" bg-white custom-footer-boxshadow rounded-2xl p-5 w-[500px] relative">
          {/* <IoClose
              className=" absolute text-2xl top-5 right-5 cursor-pointer text-gray-500"
              onClick={toggleOpenForm}
            /> */}
          <p className=" text-xl font-medium text-center">Let’s Talk</p>
          <p className=" text-gray-500 mt-2 text-center">
            We’d love to hear from you. Please fill out this form.
          </p>
          <div className=" mt-5">
            <label htmlFor="" className=" font-medium">
              First name
            </label>
            <input
              type="text"
              className=" border p-2 placeholder:text-gray-500 placeholder:text-sm focus:outline-none w-full mt-1 rounded-md "
              placeholder="First name"
            />
          </div>
          <div className=" mt-2">
            <label htmlFor="" className=" font-medium">
              Last name
            </label>
            <input
              type="text"
              className=" border p-2 placeholder:text-gray-500 placeholder:text-sm focus:outline-none w-full mt-1 rounded-md "
              placeholder="Last name"
            />
          </div>
          <div className=" mt-2">
            <label htmlFor="" className=" font-medium">
              Email
            </label>
            <input
              type="text"
              className=" border p-2 placeholder:text-gray-500 placeholder:text-sm focus:outline-none w-full mt-1 rounded-md "
              placeholder="Email"
            />
          </div>
          <div className=" mt-2">
            <label htmlFor="" className=" font-medium">
              Message
            </label>
            <textarea
              className=" border p-2 placeholder:text-gray-500 placeholder:text-sm focus:outline-none w-full mt-1 rounded-md h-[150px] "
              placeholder="Message"
            />
          </div>
          <button className=" bg-primary px-8 py-3 rounded-3xl text-white w-full mt-2">
            Send Message
          </button>
        </div>
      </div>
      {/* )} */}
    </div>
  );
}
