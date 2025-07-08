"use client";

import { FaCheck } from "react-icons/fa6";

export default function CustomCheckbox({
  checked,
  setChecked,
}: {
  checked: boolean;
  setChecked: Function;
}) {
  return (
    <div
      onClick={() => setChecked(!checked)}
      className=" h-6 w-6 border rounded flex items-center justify-center"
    >
      {checked && <FaCheck className=" text-primary text-lg" />}
    </div>
  );
}
