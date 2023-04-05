import React, { useState } from "react";
import { useLocation } from "react-router-dom";

const BookDetailsPage = () => {
  const { state } = useLocation();
  console.log(state);
  return <div className="container">Book Details page</div>;
};

export default BookDetailsPage;
