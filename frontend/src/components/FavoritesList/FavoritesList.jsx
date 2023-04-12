import React, { useState } from "react";
import FavoriteCard from "../FavoriteCard/FavoriteCard";
import LoadingSpinner from "../LoadingSpinner/LoadingSpinner";
const FavoritesList = ({ userFavorites }) => {
  console.log(userFavorites);
  return (
    <div className="flex flex-row flex-wrap gap-24">
      {userFavorites ? (
        userFavorites.map((book, index) => (
          <FavoriteCard book={book} key={index} />
        ))
      ) : (
        <LoadingSpinner />
      )}
    </div>
  );
};

export default FavoritesList;
