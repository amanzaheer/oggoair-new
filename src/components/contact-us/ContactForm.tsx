import React from "react";

export default function ContactForm() {
  return (
    <div className=" py-5 sm:py-10">
      <div className=" w-full max-w-[500px] mx-auto ">
        <p className=" text-lg sm:text-5xl font-bold text-center">Let’s Talk</p>
        <p className=" text-gray-500  text-center sm:text-xl mt-5">
          We’d love to hear from you. Please fill out this form.
        </p>
        <div className=" mt-10 sm:mt-16 mb-0 sm:mb-10">
          <div className=" grid sm:grid-cols-2 gap-5">
            <div>
              <label htmlFor="" className=" font-bold text-sm text-gray-700">
                FIRST NAME
              </label>
              <input
                type="text"
                className=" border focus:outline-none px-3 py-2 mt-1 rounded-lg placeholder:text-sm w-full"
                placeholder="First Name"
              />
            </div>
            <div>
              <label htmlFor="" className=" font-bold text-sm text-gray-700">
                LAST NAME
              </label>
              <input
                type="text"
                className=" border focus:outline-none px-3 py-2 mt-1 rounded-lg placeholder:text-sm w-full"
                placeholder="Last Name"
              />
            </div>
          </div>
          <div className=" mt-5">
            <label htmlFor="" className=" font-bold text-sm text-gray-700">
              EMAIL
            </label>
            <input
              type="email"
              className=" border focus:outline-none px-3 py-2 mt-1 rounded-lg placeholder:text-sm w-full"
              placeholder="Email"
            />
          </div>
          <div className=" mt-5">
            <label htmlFor="" className=" font-bold text-sm text-gray-700">
              Message
            </label>
            <textarea
              name=""
              id=""
              className=" border focus:outline-none px-3 py-2 mt-1 rounded-lg placeholder:text-sm w-full h-40"
              placeholder="Message"
            ></textarea>
          </div>
          <button className=" w-full text-sm sm:text-base py-2 sm:py-3 rounded-3xl bg-primary text-white font-semibold mt-5 hover:bg-green-500 transition-all duration-300 ease-in-out ">
            Send Message
          </button>
        </div>
      </div>
    </div>
  );
}
