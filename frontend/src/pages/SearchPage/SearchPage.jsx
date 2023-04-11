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
    <div className=" m-auto text-center max-w-[1000px] flex flex-col gap-8">
      <h1 className=" text-5xl text-[#0f4c5c] font-bold drop-shadow-lg">
        Search Books
      </h1>
      <hr className=" h-0.5 bg-[#0f4c5c] border-0 mb-4 w-1/2 m-auto" />
      <SearchBar fetchBooks={fetchBooks} />
      <ResultsList searchResults={searchResults} />
    </div>
  );
};

export default SearchPage;
