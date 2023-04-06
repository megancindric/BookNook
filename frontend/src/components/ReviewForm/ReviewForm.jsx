import React from "react";
import useCustomForm from "../../hooks/useCustomForm";

const ReviewForm = ({ bookId }) => {
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
      let response = axios.post("http://127.0.0.1:5000/api/user_reviews");

      console.log(response);
    } catch (error) {
      console.log("Error in postReview", error);
    }
  }
  return (
    <form className="form">
      <p>Add Review!</p>
      <label>
        <input></input>
      </label>
      <label>
        <textarea></textarea>
      </label>
    </form>
  );
};

export default ReviewForm;
