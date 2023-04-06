import React from "react";

const ReviewList = ({ localBookDetails }) => {
  console.log(localBookDetails?.reviews);
  return (
    <div>
      {localBookDetails?.reviews ? (
        localBookDetails.reviews.map((review, index) => (
          <div key={index}>
            <div>{review.rating} Test</div>
            <div>{review.text}</div>
          </div>
        ))
      ) : (
        <div>No Reviews Yet!</div>
      )}
    </div>
  );
};

export default ReviewList;
