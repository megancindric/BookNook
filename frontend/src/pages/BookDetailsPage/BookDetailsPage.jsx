import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import BookDetails from "../../components/BookDetails/BookDetails";
import ReviewList from "../../components/ReviewList/ReviewList";
import ReviewForm from "../../components/ReviewForm/ReviewForm";
import useAuth from "../../hooks/useAuth";
import FavoriteButton from "../../components/FavoriteButton/FavoriteButton";
const BookDetailsPage = () => {
  const { bookId } = useParams();
  const [user, token] = useAuth();
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
        `http://127.0.0.1:5000/api/books?book_id=${bookId}`,
        {
          headers: {
            Authorization: "Bearer " + token,
          },
        }
      );
      setLocalBookDetails(response.data);
    } catch (error) {
      console.log("Error in fetchBookDetails", error);
    }
  }

  async function favoriteBook() {
    try {
      let bookFavorite = {
        book_id: bookId,
        title: googleBookDetails.volumeInfo.title,
        thumbnail_url:
          googleBookDetails.volumeInfo?.imageLinks?.thumbnail ?? null,
      };
      let response = await axios.post(
        "http://127.0.0.1:5000/api/user_favorites",
        bookFavorite,
        {
          headers: {
            Authorization: "Bearer " + token,
          },
        }
      );
      fetchLocalBookDetails(bookId);
    } catch (error) {
      console.log("Error in favoriteBook", error);
    }
  }

  async function unfavoriteBook() {
    try {
      let response = await axios.delete(
        `http://127.0.0.1:5000/api/user_favorites/${localBookDetails.favorite_id}`,
        {
          headers: {
            Authorization: "Bearer " + token,
          },
        }
      );
      fetchLocalBookDetails(bookId);
    } catch (error) {
      console.log("Error in favoriteBook", error);
    }
  }

  return (
    <div className="container">
      <BookDetails googleBookDetails={googleBookDetails} />
      <FavoriteButton
        localBookDetails={localBookDetails}
        favoriteBook={favoriteBook}
        unfavoriteBook={unfavoriteBook}
      />
      <ReviewForm
        bookId={bookId}
        fetchLocalBookDetails={fetchLocalBookDetails}
      />
      <ReviewList localBookDetails={localBookDetails} />
    </div>
  );
};

export default BookDetailsPage;
