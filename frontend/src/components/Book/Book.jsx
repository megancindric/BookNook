import React, { useState } from "react";
import { ReactComponent as BookPicture } from "../../assets/books.svg";
const Book = ({ book }) => {
  return (
    <div key={book.id} className="flex flex-col w-32">
      <img src={book.volumeInfo?.imageLinks?.thumbnail ?? "/book.svg"}></img>
      <p>{book.volumeInfo.title}</p>
      <p>{book.volumeInfo.authors}</p>

      <p>{book.volumeInfo.publisher}</p>
      <p>{book.volumeInfo.publishedDate}</p>
    </div>
  );
};

export default Book;
