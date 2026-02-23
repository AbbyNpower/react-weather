// src/components/SearchBar.jsx

import { useState } from "react";

function SearchBar({ onSearch }) {
  const [input, setInput] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!input.trim()) return;

    onSearch(input);
    setInput("");
  };

  return (
    <form onSubmit={handleSubmit} className="search-form">
      <input
        type="text"
        placeholder="Enter city or state"
        value={input}
        onChange={(event) => setInput(event.target.value)}
      />
      <button type="submit">Search</button>
    </form>
  );
}

export default SearchBar;