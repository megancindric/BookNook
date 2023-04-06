import React from "react";

const BookDetails = ({ googleBookDetails }) => {
  return (
    <div>
      {googleBookDetails ? (
        <div key={googleBookDetails.id} className="flex flex-col w-32">
          <img
            src={
              googleBookDetails.volumeInfo?.imageLinks?.thumbnail ??
              "/books.svg"
            }
            className=""
          ></img>
          <p>{googleBookDetails.volumeInfo.title}</p>
          <p>{googleBookDetails.volumeInfo.authors}</p>

          <p>{googleBookDetails.volumeInfo.publisher}</p>
          <p>{googleBookDetails.volumeInfo.publishedDate}</p>
        </div>
      ) : (
        <div>LOADING</div>
      )}
    </div>
  );
};

export default BookDetails;
