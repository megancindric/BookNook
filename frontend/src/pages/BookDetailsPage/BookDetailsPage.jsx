import React, { useState } from "react";
import { useLocation, useParams } from "react-router-dom";

const BookDetailsPage = () => {
  const { bookId } = useParams();
  console.log(bookId);
  return <div className="container">Book Details page</div>;
};

export default BookDetailsPage;
