import React, { useEffect, useState } from "react";
import FavoritesList from "../../components/FavoritesList/FavoritesList";
import useAuth from "../../hooks/useAuth";
import axios from "axios";
const FavoritesPage = () => {
  const [user, token] = useAuth();
  const [userFavorites, setUserFavorites] = useState([]);

  useEffect(() => {
    fetchUserFavorites();
  }, []);

  async function fetchUserFavorites() {
    try {
      let response = await axios.get(
        "http://127.0.0.1:5000/api/user_favorites",
        {
          headers: {
            Authorization: "Bearer " + token,
          },
        }
      );
      setUserFavorites(response.data);
    } catch (error) {
      console.log("Error in fetchUserFavorites", error);
    }
  }
  return (
    <div className="container">
      Favorites Page
      <FavoritesList userFavorites={userFavorites} />
    </div>
  );
};

export default FavoritesPage;
