import React, { useState } from "react";

function SearchBar( { sortByTicker, sortByPrice, filterStocks } ) {
  const [alphaSort, setAlphaSort] = useState(true)
  const [priceSort, setPriceSort] = useState(false)

  function onSort(e) {
    if (e.target.value === "Price") {
      setAlphaSort(!alphaSort)
      setPriceSort(!priceSort)
      sortByPrice()
    } else {
      setPriceSort(!priceSort)
      setAlphaSort(!alphaSort)
      sortByTicker()
    }
  }

  function onFilter(e) {
    filterStocks(e.target.value)
  }

  return (
    <div>
      <strong>Sort by:</strong>
      <label>
        <input
          type="radio"
          value="Alphabetically"
          name="sort"
          checked={alphaSort}
          onChange={(e) => onSort(e)}
        />
        Alphabetically
      </label>
      <label>
        <input
          type="radio"
          value="Price"
          name="sort"
          checked={priceSort}
          onChange={(e) => onSort(e)}
        />
        Price
      </label>
      <br />
      <label>
        <strong>Filter:</strong>
        <select onChange={onFilter}>
          <option value="None">None</option>
          <option value="Tech">Tech</option>
          <option value="Sportswear">Sportswear</option>
          <option value="Finance">Finance</option>
        </select>
      </label>
    </div>
  );
}

export default SearchBar;
