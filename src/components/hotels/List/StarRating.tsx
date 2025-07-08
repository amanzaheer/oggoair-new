import React from "react";
import { FaStar } from "react-icons/fa";

const StarRating = ({ rating }: any) => {
  return (
    <div className="flex items-center gap-1">
      {/* Loop through the rating value and render stars */}
      {Array.from({ length: rating }).map((_, index) => (
        <FaStar key={index} className="text-yellow-500 text-xs" />
      ))}
    </div>
  );
};

export default StarRating;
