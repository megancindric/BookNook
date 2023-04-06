import React from "react";

const FavoriteButton = ({ localBookDetails }) => {
  return (
    <div>
      {localBookDetails ? (
        <div>
          {localBookDetails.is_favorite ? (
            <div>This is a favorite</div>
          ) : (
            <button>Click to favorite!</button>
          )}
        </div>
      ) : (
        <div>LOADING</div>
      )}
    </div>
  );
};

export default FavoriteButton;
