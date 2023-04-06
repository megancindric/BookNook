import React from "react";

const FavoriteCard = ({ book }) => {
  return (
    <div>
      <img src={book.thumbnail_url ?? "/books.svg"} className=""></img>
      <p>{book.title}</p>
    </div>
  );
};

export default FavoriteCard;
