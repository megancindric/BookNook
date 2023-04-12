import React from "react";
import LoadingSpinner from "../LoadingSpinner/LoadingSpinner";
import { ReactComponent as AddFavorite } from "../../assets/addfavorite.svg";
import { ReactComponent as RemoveFavorite } from "../../assets/removefavorite.svg";

const FavoriteButton = ({ localBookDetails, favoriteBook, unfavoriteBook }) => {
  return (
    <div>
      {localBookDetails ? (
        <div>
          {localBookDetails.is_favorite ? (
            <div className="flex flex-col text-xl font-bold text-[#0f4c5c] justify-center transition-all hover:scale-110">
              <RemoveFavorite
                onClick={() => unfavoriteBook()}
                className=" fill-red-700 h-[64px]"
              />
              <p>Favorited</p>
            </div>
          ) : (
            <div className="flex flex-col text-xl font-bold text-[#0f4c5c] justify-center transition-all hover:scale-110">
              <AddFavorite
                onClick={() => favoriteBook()}
                className=" fill-red-700 h-[64px]"
              />
              <p>Click to Favorite</p>
            </div>
          )}
        </div>
      ) : (
        <LoadingSpinner />
      )}
    </div>
  );
};

export default FavoriteButton;
