import React, { useEffect, useState } from "react";
import FavoritesList from "../../components/FavoritesList/FavoritesList";
import useAuth from "../../hooks/useAuth";
import axios from "axios";
const FavoritesPage = () => {
  const [user, token] = useAuth();
  const [userFavorites, setUserFavorites] = useState();

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
    <div className="m-auto text-center max-w-7xl flex flex-col gap-6 items-center">
      <h1 className=" text-5xl text-[#0f4c5c] font-bold drop-shadow-lg">
        {user.username}'s Favorites
      </h1>
      <hr className=" h-0.5 bg-[#0f4c5c] border-0 mb-4 w-1/3 m-auto" />
      <FavoritesList userFavorites={userFavorites} />
    </div>
  );
};

export default FavoritesPage;
