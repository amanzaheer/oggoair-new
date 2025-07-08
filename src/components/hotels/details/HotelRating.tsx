import React from "react";
import { FaStar } from "react-icons/fa";

const HotelRating = ({ rating }: any) => {
  return (
    <div className="flex items-center gap-1">
      {/* Loop through the rating value and render stars */}
      {Array.from({ length: rating }).map((_, index) => (
        <FaStar key={index} className="text-2xl text-yellow-400" />
      ))}
    </div>
  );
};

export default HotelRating;
