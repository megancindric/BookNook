import React from "react";

const BookDetails = ({ googleBookDetails }) => {
  console.log(googleBookDetails);
  return (
    <div>
      {googleBookDetails ? (
        <div key={googleBookDetails.id} className="flex flex-col w-56 p-4">
          <img
            src={
              googleBookDetails.volumeInfo?.imageLinks?.thumbnail ??
              "/books.svg"
            }
            className=""
          ></img>
          <p className="">{googleBookDetails.volumeInfo.title}</p>
          <p>{googleBookDetails.volumeInfo.authors}</p>

          <p>
            {googleBookDetails.volumeInfo.description
              .replace(/<\/?p>/g, "")
              .slice(0, 150) + "..."}
          </p>
        </div>
      ) : (
        <div>LOADING</div>
      )}
    </div>
  );
};

export default BookDetails;
