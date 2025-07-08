import { useState } from "react";
import { BsCheckLg } from "react-icons/bs";

function ReturnSingleLBaggageSelectItem({
  title,
  filterTypes,
  changeFilterTypesValue,
}: any) {
  const [selected, setSelected] = useState(false);
  const changeValue = (value: any) => {
    setSelected(!selected);
    if (filterTypes.returnBaggageSelectedType.includes(value)) {
      const newStops = [...filterTypes.returnBaggageSelectedType].filter(
        (stop) => stop !== value
      );
      changeFilterTypesValue("returnBaggageSelectedType", newStops);
    } else {
      const newStops = [...filterTypes.returnBaggageSelectedType, value];
      changeFilterTypesValue("returnBaggageSelectedType", newStops);
    }
  };

  return (
    <div
      className=" flex items-center gap-1 cursor-pointer mt-3  "
      onClick={(e) => changeValue(title)}
    >
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

export default ReturnSingleLBaggageSelectItem;
