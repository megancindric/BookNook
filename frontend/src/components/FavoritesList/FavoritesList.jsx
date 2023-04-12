import React, { useState } from "react";
import FavoriteCard from "../FavoriteCard/FavoriteCard";
import LoadingSpinner from "../LoadingSpinner/LoadingSpinner";
import { Link } from "react-router-dom";
const FavoritesList = ({ userFavorites }) => {
  console.log(userFavorites);
  return (
    <div className="flex flex-row flex-wrap gap-24">
      {userFavorites ? (
        userFavorites.map((book, index) => (
          <Link key={index} to={`/bookdetails/${book.book_id}`}>
            <FavoriteCard book={book} />
          </Link>
        ))
      ) : (
        <LoadingSpinner />
      )}
    </div>
  );
};

export default FavoritesList;
