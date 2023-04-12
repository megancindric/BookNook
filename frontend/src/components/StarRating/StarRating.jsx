import React from "react";
import { ReactComponent as Star } from "../../assets/star.svg";
const StarRating = ({ rating }) => {
  return (
    <div className="flex flex-row gap-2">
      {Array(rating)
        .fill()
        .map((_, index) => (
          <Star key={index} className=" h-[36px] w-[36px] text-yellow-400" />
        ))}
    </div>
  );
};

export default StarRating;
