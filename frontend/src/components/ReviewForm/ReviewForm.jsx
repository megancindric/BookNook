import React from "react";
import useCustomForm from "../../hooks/useCustomForm";
import axios from "axios";
import useAuth from "../../hooks/useAuth";
const ReviewForm = ({ bookId }) => {
  const [user, token] = useAuth();
  const defaultValues = {
    rating: 0,
    text: "",
    book_id: bookId,
  };
  const [formData, handleInputChange, handleSubmit] = useCustomForm(
    defaultValues,
    postReview
  );
  async function postReview() {
    try {
      let response = axios.post(
        "http://127.0.0.1:5000/api/user_reviews",
        formData,
        {
          headers: {
            Authorization: "Bearer " + token,
          },
        }
      );

      console.log(response);
    } catch (error) {
      console.log("Error in postReview", error);
    }
  }
  return (
    <form className="form">
      <p>Add Review!</p>
      <label>
        Rating:
        <input type="number" max={5} min={1}></input>
      </label>
      <label>
        Text:
        <textarea></textarea>
      </label>
      <button>Submit</button>
    </form>
  );
};

export default ReviewForm;
