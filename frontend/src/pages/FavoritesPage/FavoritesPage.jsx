import React, { useState } from "react";
import FavoritesList from "../../components/FavoritesList/FavoritesList";

const FavoritesPage = () => {
  const [userFavorites, setUserFavorites] = useState([]);

  return (
    <div className="container">
      Favorites Page
      <FavoritesList userFavorites={userFavorites} />
    </div>
  );
};

export default FavoritesPage;
