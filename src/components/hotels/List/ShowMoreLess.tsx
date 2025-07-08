import { useState } from "react";

const ShowMoreLess = ({ content }: any) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const words = content.split(" ");
  const preview =
    words.slice(0, 18).join(" ") + (words.length > 18 ? "..." : "");

  return (
    <div className="text-gray-700">
      <p>{isExpanded ? content : preview}</p>
      {/* {words.length > 20 && (
        <button
          className="mt-2 text-blue-500 hover:underline focus:outline-none"
          onClick={() => setIsExpanded(!isExpanded)}
        >
          {isExpanded ? "Show Less" : "Show More"}
        </button>
      )} */}
    </div>
  );
};

export default ShowMoreLess;
