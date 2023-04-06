import React, { useState } from "react";
import FavoriteCard from "../FavoriteCard/FavoriteCard";
const FavoritesList = ({ userFavorites }) => {
  console.log(userFavorites);
  return (
    <div>
      {userFavorites ? (
        userFavorites.map((book, index) => (
          <FavoriteCard book={book} key={index} />
        ))
      ) : (
        <div>LOADING</div>
      )}
    </div>
  );
};

export default FavoritesList;
