import React from "react";
import LoadingSpinner from "../LoadingSpinner/LoadingSpinner";

const BookDetails = ({ googleBookDetails }) => {
  console.log(googleBookDetails);
  return (
    <div>
      {googleBookDetails ? (
        <div
          key={googleBookDetails.id}
          className="flex flex-row w-96 p-4 gap-10"
        >
          <img
            src={
              googleBookDetails.volumeInfo?.imageLinks?.thumbnail ??
              "/books.svg"
            }
            className=""
          ></img>
          <div>
            <p className="">{googleBookDetails.volumeInfo.title}</p>
            <p>{googleBookDetails.volumeInfo.authors}</p>

            <p>
              {googleBookDetails.volumeInfo.description
                .replace(/<\/?p>/g, "")
                .slice(0, 150) + "..."}
            </p>
          </div>
        </div>
      ) : (
        <LoadingSpinner />
      )}
    </div>
  );
};

export default BookDetails;
