import React, { useEffect, useState } from "react";

const SearchBar = ({ fetchBooks }) => {
  const [searchTerm, setSearchTerm] = useState("Cloud Atlas");

  useEffect(() => {
    fetchBooks(searchTerm);
  }, []);

  return (
    <form
      className="flex flex-col gap-6 mb-10"
      onSubmit={(e) => {
        e.preventDefault();
        fetchBooks(searchTerm);
      }}
    >
      {" "}
      <div className="flex flex-row gap-8 m-auto">
        <input
          className=" p-2 text-lg border-2 rounded-lg drop-shadow-lg"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button className=" text-xl drop-shadow-lg">Search </button>
      </div>
    </form>
  );
};

export default SearchBar;
