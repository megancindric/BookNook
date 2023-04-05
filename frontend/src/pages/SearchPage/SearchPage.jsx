import React, { useState, useEffect } from "react";
import SearchBar from "../../components/SearchBar/SearchBar";
import ResultsList from "../../components/ResultsList/ResultsList";
import axios from "axios";
const SearchPage = () => {
  const [searchResults, setSearchResults] = useState([]);

  const fetchBooks = async (searchTerm) => {
    try {
      let response = await axios.get(
        `https://www.googleapis.com/books/v1/volumes?q=${searchTerm}`
      );
      setSearchResults(response.data.items);
    } catch (error) {
      console.log("Error in fetchBooks", error);
    }
  };

  return (
    <div className="container">
      <SearchBar fetchBooks={fetchBooks} />
      <ResultsList searchResults={searchResults} />
    </div>
  );
};

export default SearchPage;
