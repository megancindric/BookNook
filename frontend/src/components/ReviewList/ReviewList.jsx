import React from "react";
import useAuth from "../../hooks/useAuth";
import StarRating from "../StarRating/StarRating";
const ReviewList = ({ localBookDetails, deleteReview }) => {
  const [user, token] = useAuth();
  return (
    <div className="flex flex-col gap-4 w-1/2">
      {localBookDetails?.reviews ? (
        localBookDetails.reviews.map((review, index) => (
          <div
            key={index}
            className="flex flex-col gap-2 border rounded-lg p-6 shadow-lg bg-slate-50"
          >
            <div className="flex flex-row justify-between">
              <StarRating rating={review.rating} />
              {user && user.id === review.user_id ? (
                <button onClick={() => deleteReview(review.id)}>Delete</button>
              ) : (
                <div></div>
              )}
            </div>
            <p>{review.text}</p>
            <p className="">~{review.user.username}</p>
          </div>
        ))
      ) : (
        <div>No Reviews Yet!</div>
      )}
    </div>
  );
};

export default ReviewList;
