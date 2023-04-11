import React from "react";
import useAuth from "../../hooks/useAuth";
const ReviewList = ({ localBookDetails, deleteReview }) => {
  const [user, token] = useAuth();
  return (
    <div>
      {localBookDetails?.reviews ? (
        localBookDetails.reviews.map((review, index) => (
          <div key={index}>
            <div>{review.rating} Test</div>
            <div>{review.text}</div>
            {user && user.id === review.user_id ? (
              <button onClick={() => deleteReview(review.id)}>
                Delete Review
              </button>
            ) : (
              <div></div>
            )}
          </div>
        ))
      ) : (
        <div>No Reviews Yet!</div>
      )}
    </div>
  );
};

export default ReviewList;
