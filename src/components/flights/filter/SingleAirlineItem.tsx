import Image from "next/image";
import { useState } from "react";
import { BsCheckLg } from "react-icons/bs";

function SingleAirlineItem({
  title,
  filterTypes,
  changeFilterTypesValue,
  logo,
}: any) {
  const [selected, setSelected] = useState(false);
  const changeValue = (value: any) => {
    setSelected(!selected);
    if (filterTypes.airlines.includes(value)) {
      const newAirlines = [...filterTypes.airlines].filter(
        (airline) => airline !== value
      );
      changeFilterTypesValue("airlines", newAirlines);
    } else {
      const newAirlines = [...filterTypes.airlines, value];
      changeFilterTypesValue("airlines", newAirlines);
    }
  };

  return (
    <div
      className=" flex items-center gap-1 cursor-pointer mt-3  "
      onClick={(e) => changeValue(title)}
    >
      <div className=" h-5 w-5 flex items-center justify-center mr-2">
        <Image
          src={logo}
          width={500}
          height={500}
          alt="Picture of the logo"
          className=" h-full w-full object-cover"
        />
      </div>
      <div
        className={` ${
          selected ? " bg-primary border-primary " : "bg-white"
        } mr-1 w-4 h-4 border-[2px] rounded filterItem flex justify-center items-center`}
      >
        {selected && (
          <BsCheckLg className=" text-[12px] text-white font-semibold" />
        )}
      </div>
      <div className=" flex justify-between items-center">
        <p className=" text-gray-500 filterItem text-sm" id="filterItem">
          {title}
        </p>
      </div>
    </div>
  );
}

export default SingleAirlineItem;
