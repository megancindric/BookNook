import React, { useState } from "react";

const ResultsList = ({ searchResults }) => {
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
          <tr key={book.id}>
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
