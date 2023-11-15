import { useState } from "react";

function SearchBar({ children }) {
  const [query, setQuery] = useState("");

  return (
    <div className="search-container">
      <input
        className="search"
        type="text"
        placeholder="Search anime..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      {children}
    </div>
  );
}

export default SearchBar;
