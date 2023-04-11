import React from "react";

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
        <div>LOADING</div>
      )}
    </div>
  );
};

export default FavoriteButton;
