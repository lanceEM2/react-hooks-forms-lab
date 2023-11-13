import React, { useState } from "react";

// onCategoryChange callback function that will be called when the user changes the category in the <select> element
// onSearchChange callback function that will be called when the user changes the text in the search input field
function Filter({ onCategoryChange, onSearchChange }) {
  const [searchText, setSearchText] = useState("");

  function handleSearchChange(event) {
    const newSearchText = event.target.value;
    setSearchText(newSearchText);
    onSearchChange(newSearchText); 
  }

  return (
    <div className="Filter">
      <input
        type="text"
        name="search"
        placeholder="Search..."
        value={searchText}
        onChange={handleSearchChange}
      />
      <select name="filter" onChange={onCategoryChange}>
        <option value="All">Filter by category</option>
        <option value="Produce">Produce</option>
        <option value="Dairy">Dairy</option>
        <option value="Dessert">Dessert</option>
      </select>
    </div>
  );
}

export default Filter;
