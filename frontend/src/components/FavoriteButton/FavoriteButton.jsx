import React from "react";
import LoadingSpinner from "../LoadingSpinner/LoadingSpinner";

const FavoriteButton = ({ localBookDetails, favoriteBook, unfavoriteBook }) => {
  return (
    <div>
      {localBookDetails ? (
        <div>
          {localBookDetails.is_favorite ? (
            <button onClick={() => unfavoriteBook()}>Favorited!</button>
          ) : (
            <button onClick={() => favoriteBook()}>Click to favorite!</button>
          )}
        </div>
      ) : (
        <LoadingSpinner />
      )}
    </div>
  );
};

export default FavoriteButton;
