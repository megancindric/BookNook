import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const ResultsList = ({ searchResults }) => {
  const navigate = useNavigate();

  console.log(searchResults);
  return (
    <table>
      <thead>
        <tr>
          <th>Title</th>
          <th>Authors</th>
          <th>Publisher</th>
          <th>Publish Date</th>
        </tr>
      </thead>
      <tbody>
        {searchResults.map((book) => (
          <tr
            key={book.id}
            onClick={() => navigate("/bookdetails", { state: { id: book.id } })}
          >
            <td>{book.volumeInfo.title}</td>
            <td>{book.volumeInfo.authors}</td>

            <td>{book.volumeInfo.publisher}</td>
            <td>{book.volumeInfo.publishedDate}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default ResultsList;
