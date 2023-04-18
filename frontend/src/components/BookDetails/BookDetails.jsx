import React from "react";
import LoadingSpinner from "../LoadingSpinner/LoadingSpinner";
import DOMPurify from "dompurify";

const BookDetails = ({ googleBookDetails }) => {
  const bookDescription = googleBookDetails?.volumeInfo?.description
    ? DOMPurify.sanitize(googleBookDetails.volumeInfo.description)
    : "No book description found.";
  //.slice(0, 150) + "..."
  return (
    <div>
      {googleBookDetails ? (
        <div
          key={googleBookDetails.id}
          className="flex flex-col gap-4 items-center"
        >
          <p className=" text-2xl">{googleBookDetails.volumeInfo.title}</p>
          <p className=" text-lg">{googleBookDetails.volumeInfo.authors}</p>
          <img
            src={
              googleBookDetails.volumeInfo?.imageLinks?.thumbnail ??
              "/books.svg"
            }
            className=" w-48 h-auto mb-6"
          ></img>

          <div
            className="p-2"
            dangerouslySetInnerHTML={{
              __html: bookDescription,
            }}
          />
        </div>
      ) : (
        <LoadingSpinner />
      )}
    </div>
  );
};

export default BookDetails;
