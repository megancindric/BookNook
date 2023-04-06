import React, { useState } from "react";
import { Link } from "react-router-dom";
import Book from "../Book/Book";

const ResultsList = ({ searchResults }) => {
  console.log(searchResults);
  return (
    <div className="flex flex-row flex-wrap gap-10 ">
      {searchResults.map((book, index) => (
        <Link to={`/bookdetails/${book.id}`} key={index}>
          <Book book={book} />
        </Link>
      ))}
    </div>
  );
};

export default ResultsList;
