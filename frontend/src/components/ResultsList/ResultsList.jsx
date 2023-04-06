import React, { useState } from "react";
import { Link } from "react-router-dom";
import Book from "../Book/Book";

const ResultsList = ({ searchResults }) => {
  console.log(searchResults);
  return (
    <div>
      {searchResults.map((book) => (
        <Link to={`/bookdetails/${book.id}`}>
          <Book book={book} />
        </Link>
      ))}
    </div>
  );
};

export default ResultsList;
