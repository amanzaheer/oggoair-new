import { useEffect, useState } from "react";
import { BsCheckLg } from "react-icons/bs";

function CheckItem({ title, filterTypes, setFilterTypes, data, type }: any) {
  const [selected, setSelected] = useState(false);

  useEffect(() => {
    if (type === "rating") {
      if (filterTypes.rating.includes(data)) {
        setSelected(true);
      } else {
        setSelected(false);
      }
    } else if (type === "amenities") {
      if (filterTypes.amenities.includes(data)) {
        setSelected(true);
      } else {
        setSelected(false);
      }
    } else if (type === "reviewScore") {
      if (filterTypes.reviewScore.includes(data)) {
        setSelected(true);
      } else {
        setSelected(false);
      }
    }
  }, [filterTypes]);

  const toggleSelect = (item: any) => {
    // setSelected(!selected);
    if (type === "rating") {
      if (filterTypes.rating.includes(item)) {
        const newFilterTypes = { ...filterTypes };
        const newArray = [...newFilterTypes.rating].filter(
          (data: any) => data !== item
        );
        newFilterTypes.rating = newArray;
        setFilterTypes(newFilterTypes);
      } else {
        const newFilterTypes = { ...filterTypes };
        const newArray = [...newFilterTypes.rating];
        newArray.push(item);
        newFilterTypes.rating = newArray;
        setFilterTypes(newFilterTypes);
      }
    } else if (type === "amenities") {
      if (filterTypes.amenities.includes(item)) {
        const newFilterTypes = { ...filterTypes };
        const newArray = [...newFilterTypes.amenities].filter(
          (data: any) => data !== item
        );
        newFilterTypes.amenities = newArray;
        setFilterTypes(newFilterTypes);
      } else {
        const newFilterTypes = { ...filterTypes };
        const newArray = [...newFilterTypes.amenities];
        newArray.push(item);
        newFilterTypes.amenities = newArray;
        setFilterTypes(newFilterTypes);
      }
    } else if (type === "reviewScore") {
      if (filterTypes.reviewScore.includes(item)) {
        const newFilterTypes = { ...filterTypes };
        const newArray = [...newFilterTypes.reviewScore].filter(
          (data: any) => data !== item
        );
        newFilterTypes.reviewScore = newArray;
        setFilterTypes(newFilterTypes);
      } else {
        const newFilterTypes = { ...filterTypes };
        const newArray = [...newFilterTypes.reviewScore];
        newArray.push(item);
        newFilterTypes.reviewScore = newArray;
        setFilterTypes(newFilterTypes);
      }
    }
  };
  return (
    <div
      className=" flex items-center gap-1 cursor-pointer mt-3  "
      onClick={(e) => toggleSelect(data)}
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

export default CheckItem;
