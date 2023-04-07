import React from "react";

const FavoriteButton = ({ localBookDetails, favoriteBook, unfavoriteBook }) => {
  return (
    <div>
      {localBookDetails ? (
        <div>
          {localBookDetails.is_favorite ? (
            <div onClick={() => unfavoriteBook()}>This is a favorite</div>
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
