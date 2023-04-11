import React from "react";

const FavoriteCard = ({ book }) => {
  return (
    <div
      key={book.id}
      className=" w-42 relative  transition-all hover:scale-110 flex items-center justify-center "
    >
      <img
        src={book.thumbnail_url ?? "/books.svg"}
        className="transition-all duration-100 "
      ></img>
      <div className="absolute flex justify-center items-center top-0 left-0 w-full h-full transition-all opacity-0 hover:opacity-100">
        <div className="bg-black opacity-0 hover:opacity-50 absolute top-0 left-0 w-full h-full z-10"></div>
        <p className="text-white text-xl z-20 pointer-events-none">
          {book.title}
        </p>
      </div>
    </div>
  );
};

export default FavoriteCard;
