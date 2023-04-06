import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import BookDetails from "../../components/BookDetails/BookDetails";
import ReviewList from "../../components/ReviewList/ReviewList";
const BookDetailsPage = () => {
  const { bookId } = useParams();
  const [googleBookDetails, setgoogleBookDetails] = useState();
  const [localBookDetails, setLocalBookDetails] = useState();
  useEffect(() => {
    fetchGoogleBookDetails(bookId);
    fetchLocalBookDetails(bookId);
  }, []);

  async function fetchGoogleBookDetails(bookId) {
    try {
      let response = await axios.get(
        `https://www.googleapis.com/books/v1/volumes/${bookId}`
      );
      setgoogleBookDetails(response.data);
    } catch (error) {
      console.log("Error in fetchBookDetails", error);
    }
  }

  async function fetchLocalBookDetails(bookId) {
    try {
      let response = await axios.get(
        `http://127.0.0.1:5000/api/books?book_id=${bookId}`
      );
      setLocalBookDetails(response.data);
    } catch (error) {
      console.log("Error in fetchBookDetails", error);
    }
  }

  return (
    <div className="container">
      <BookDetails googleBookDetails={googleBookDetails} />
      <ReviewList localBookDetails={localBookDetails} />
    </div>
  );
};

export default BookDetailsPage;
