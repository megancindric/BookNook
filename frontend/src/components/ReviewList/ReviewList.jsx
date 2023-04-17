import React from "react";
import useAuth from "../../hooks/useAuth";
import StarRating from "../StarRating/StarRating";
const ReviewList = ({ localBookDetails, deleteReview, setShowModal }) => {
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
                <div className="flex flex-row gap-4">
                  <button onClick={() => deleteReview(review.id)}>
                    Delete
                  </button>
                  <button
                    onClick={() =>
                      setShowModal({ isOpen: true, value: review })
                    }
                  >
                    Edit
                  </button>
                </div>
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
