import { useEffect, useRef, useState } from "react";
import Cityzenship from "@/components/profile/Cityzenship";
import NewCalendar from "@/components/profile/NewCalander";

const ClientDataInput = ({
  index,
  passenger,
  passengersInfo,
  passengersInfoChange,
  setValidationError,
  countries,
}: any) => {
  const setCityzenship = (value: string) => {
    passengersInfoChange(value, "cityzenShip", index);
  };
  const [showGenderSelection, setShowGenderSelection] = useState(false);

  // Properly type the genderSectionRef
  const genderSectionRef = useRef<HTMLDivElement | null>(null); // Ref for a div element

  useEffect(() => {
    // Function to handle click outside the gender section
    const handleClickOutside = (event: MouseEvent) => {
      if (
        genderSectionRef.current &&
        !genderSectionRef.current.contains(event.target as Node)
      ) {
        setShowGenderSelection(false); // Close gender selection if clicked outside
      }
    };

    // Add event listener for clicks outside the gender section
    document.addEventListener("mousedown", handleClickOutside);

    // Cleanup the event listener when the component is unmounted
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleGenderClick = (gender: string) => {
    passengersInfoChange(gender, "gender", index);
    setValidationError ? setValidationError(false) : undefined;
    setShowGenderSelection(false); // Close the dropdown after selection
  };

  return (
    <div key={index} className=" mt-5">
      <div className=" w-full h-[1px] bg-gray-300 relative mt-10 mb-5 ">
        <div className=" absolute -top-4 left-1/2 -translate-x-1/2 w-[240px] px-2 py-1 rounded flex items-center justify-center bg-white ">
          <p className=" text-gray-600">
            Passenger {index + 1} ({passenger.type})
          </p>
        </div>
      </div>

      <div className=" grid md:grid-cols-1 lg:grid-cols-2 gap-5 mt-10">
        <div>
          <label htmlFor="" className=" font-medium block">
            First Name
          </label>
          <input
            type="text"
            className=" bg-white p-2 px-3 placeholder:text-sm border border-gray-300 rounded-md focus:outline-none mt-1 w-full "
            placeholder="First Name"
            value={passenger.firstName}
            onFocus={
              setValidationError ? () => setValidationError(false) : undefined
            }
            onChange={(e) =>
              passengersInfoChange(e.target.value, "firstName", index)
            }
          />
        </div>
        <div>
          <label htmlFor="" className=" font-medium block">
            Last Name
          </label>
          <input
            type="text"
            className=" bg-white p-2 px-3 placeholder:text-sm border border-gray-300 rounded-md focus:outline-none mt-1 w-full "
            placeholder="Last Name"
            value={passenger.lastName}
            onFocus={
              setValidationError ? () => setValidationError(false) : undefined
            }
            onChange={(e) =>
              passengersInfoChange(e.target.value, "lastName", index)
            }
          />
        </div>
        <div>
          <label htmlFor="" className=" font-medium block">
            Gender
          </label>
          <div
            id="genderSection"
            ref={genderSectionRef} // Attach the ref to the div
            className=" w-full bg-white p-3 border border-gray-300 rounded-md flex items-center justify-between mt-1 cursor-pointer relative"
            onClick={() => setShowGenderSelection(!showGenderSelection)} // Toggle on click inside
          >
            {passenger.gender ? (
              <p className=" text-sm capitalize font-medium">
                {passenger.gender}
              </p>
            ) : (
              <p className=" text-gray-500 text-sm">Gender</p>
            )}
            {showGenderSelection && (
              <div className=" bg-white shadow rounded-md absolute top-full translate-y-1 left-0 w-full z-10 px-1">
                <p
                  className={` font-medium ${
                    passengersInfo[index].gender === "male" &&
                    "bg-primary text-white"
                  } hover:bg-primary hover:text-white cursor-pointer px-5 py-3 rounded-md `}
                  onClick={() => handleGenderClick("male")}
                >
                  Male
                </p>
                <p
                  className={` font-medium ${
                    passengersInfo[index].gender === "female" &&
                    "bg-primary text-white"
                  } hover:bg-primary hover:text-white cursor-pointer px-5 py-3 rounded-md mt-1 `}
                  onClick={() => handleGenderClick("female")}
                >
                  Female
                </p>
              </div>
            )}
          </div>
        </div>
        <div>
          <label htmlFor="" className=" font-medium block">
            Date of Birth
          </label>
          <NewCalendar
            setValidationError={setValidationError}
            starYear={1980}
            date={passenger.dateOfBirth}
            setDate={(value: string) =>
              passengersInfoChange(value, "dateOfBirth", index)
            }
          />
        </div>

        <div className="">
          <label htmlFor="" className=" font-semibold block">
            Nationality
          </label>
          <Cityzenship
            countries={countries}
            cityzenship={passenger.cityzenShip}
            setCityzenship={setCityzenship}
          />
        </div>
        <div>
          <label htmlFor="" className=" font-medium block">
            Passport
          </label>
          <input
            type="text"
            className=" bg-white p-2 px-3 placeholder:text-sm border border-gray-300 rounded-md focus:outline-none mt-1 w-full "
            placeholder="Passport Number"
            value={passenger.passport}
            onFocus={
              setValidationError ? () => setValidationError(false) : undefined
            }
            onChange={(e) =>
              passengersInfoChange(e.target.value, "passport", index)
            }
          />
        </div>
        <div>
          <label htmlFor="" className=" font-medium block">
            Passport Expiry
          </label>
          <NewCalendar
            setValidationError={setValidationError}
            starYear={2025}
            endYear={2040}
            date={passenger.passportExpiryDate}
            setDate={(value: string) =>
              passengersInfoChange(value, "passportExpiryDate", index)
            }
          />
        </div>
      </div>
    </div>
  );
};

export default ClientDataInput;
