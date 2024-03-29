import React, { useState } from "react";
import { ReactComponent as Books } from "../../assets/books.svg";
const Book = ({ book }) => {
  return (
    <div
      key={book.id}
      className=" w-42 relative  transition-all hover:scale-110 flex items-center justify-center"
    >
      {book.volumeInfo?.imageLinks?.thumbnail ? (
        <img src={book.volumeInfo?.imageLinks?.thumbnail} className=""></img>
      ) : (
        <Books className="h-[128px] w-[150px] fill-[#0f4c5c]" />
      )}

      <div className="absolute flex justify-center items-center top-0 left-0 w-full h-full transition-all opacity-0 hover:opacity-100">
        <div className="bg-black opacity-0 hover:opacity-50 absolute top-0 left-0 w-full h-full z-10"></div>
        <p className="text-white text-xl z-20 pointer-events-none">
          {book.volumeInfo?.title}
        </p>
      </div>
    </div>
  );
};

export default Book;
