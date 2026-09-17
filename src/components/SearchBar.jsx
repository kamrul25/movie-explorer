import React from "react";

const SearchBar = ({ searchTerm, setSearchTerm }) => {
  return (
    <div className="form-control w-full max-w-xl mx-auto my-6">
      <input
        type="text"
        placeholder="🔍 Search for a movie..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="input input-bordered input-primary w-full text-lg shadow-sm focus:outline-none"
      />
    </div>
  );
};

export default SearchBar;
