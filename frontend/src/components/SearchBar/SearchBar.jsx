import React, { useEffect, useState } from "react";

const SearchBar = ({ fetchBooks }) => {
  const [searchTerm, setSearchTerm] = useState("Cloud Atlas");

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
      <div className="flex flex-row gap-10 m-auto">
        <input
          className=" p-2 text-lg border-2 rounded-lg drop-shadow-lg"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button className=" text-2xl">Search</button>
      </div>
    </form>
  );
};

export default SearchBar;
