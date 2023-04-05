import React, { useEffect, useState } from "react";

const SearchBar = ({ fetchBooks }) => {
  const [searchTerm, setSearchTerm] = useState("Harry Potter");

  useEffect(() => {
    fetchBooks(searchTerm);
  }, []);

  return (
    <form
      className="flex flex-col gap-6"
      onSubmit={(e) => {
        e.preventDefault();
        fetchBooks(searchTerm);
      }}
    >
      <label className=" text-5xl text-amber-950">Search Books</label>
      <div className="flex flex-row justify-around">
        <input
          className=" p-2 text-lg border-2 rounded-lg drop-shadow-lg"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button>Search</button>
      </div>
    </form>
  );
};

export default SearchBar;
