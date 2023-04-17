import React from "react";
import axios from "axios";
import useCustomForm from "../../hooks/useCustomForm";
import useAuth from "../../hooks/useAuth";
const EditReview = ({ review, fetchLocalBookDetails, setShowModal }) => {
  const [user, token] = useAuth();
  const defaultValues = {
    rating: review.rating,
    text: review.text,
    book_id: review.book_id,
  };
  const [formData, handleInputChange, handleSubmit, reset] = useCustomForm(
    defaultValues,
    editReview
  );
  async function editReview() {
    try {
      let response = await axios.put(
        `http://127.0.0.1:5000/api/user_reviews/${review.id}`,
        formData,
        {
          headers: {
            Authorization: "Bearer " + token,
          },
        }
      );
      console.log(response);
      reset();
      fetchLocalBookDetails(formData.book_id);
      setShowModal({ isOpen: false, value: null });
    } catch (error) {
      console.log("Error in editReview", error);
    }
  }
  return (
    <div
      className="fixed w-full h-full bg-slate-100"
      onClick={() => setShowModal({ isOpen: false, value: null })}
    >
      <form
        className="form text-[#0f4c5c] rounded-lg border shadow-lg bg-slate-50 p-10 h-[400px]"
        onClick={(e) => e.stopPropagation()}
        onSubmit={handleSubmit}
      >
        <div>
          <p className="text-2xl">Edit Your Review</p>
          <label>
            Rating
            <input
              type="number"
              max={5}
              min={1}
              name="rating"
              className="border-2 p-2 rounded-lg"
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
            rows={4}
          ></textarea>
          <button>Submit</button>
        </div>
      </form>
    </div>
  );
};

export default EditReview;
