import React from "react";
import useCustomForm from "../../hooks/useCustomForm";
import axios from "axios";
import useAuth from "../../hooks/useAuth";
const ReviewForm = ({ bookId, fetchLocalBookDetails }) => {
  const [user, token] = useAuth();
  const defaultValues = {
    rating: 0,
    text: "",
    book_id: bookId,
  };
  const [formData, handleInputChange, handleSubmit, reset] = useCustomForm(
    defaultValues,
    postReview
  );
  async function postReview() {
    try {
      let response = await axios.post(
        "http://127.0.0.1:5000/api/user_reviews",
        formData,
        {
          headers: {
            Authorization: "Bearer " + token,
          },
        }
      );
      reset();
      fetchLocalBookDetails(bookId);
    } catch (error) {
      console.log("Error in postReview", error);
    }
  }
  return (
    <form
      className="form text-[#0f4c5c] rounded-lg drop-shadow-lg bg-slate-50 p-8"
      onSubmit={handleSubmit}
    >
      <p className=" text-2xl">Leave a Review...</p>
      <label>
        Rating
        <input
          type="number"
          max={5}
          min={1}
          name="rating"
          value={formData.rating}
          onChange={handleInputChange}
        ></input>
      </label>
      <textarea
        name="text"
        value={formData.text}
        onChange={handleInputChange}
        placeholder="I thought this book was..."
        className="rounded-lg border-2 p-2"
      ></textarea>
      <button>Submit</button>
    </form>
  );
};

export default ReviewForm;
