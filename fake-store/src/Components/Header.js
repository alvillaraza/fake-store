import React from "react";
import { Link } from "react-router-dom";

import SearchBar from "./SearchBar";

function Header({ query, onSearch, setCategory }) {
  return (
    <div className="header">
      <Link to="/">
        <h1> Faux Boutique</h1>
      </Link>
      <label for="category">Category:</label>

      <select name="category" id="items">
        <option value="all">See all Products</option>
        <option value="electronics" onClick={() => setCategory("electronics")}>
          Electronics
        </option>
        <option value="jewelery">Jewelry</option>
        <option value="men clothing">Men's Clothing</option>
        <option value="women clothing">Women's Clothing</option>
      </select>

      <button onClick={() => setCategory("electronics")}>Electronics</button>

      <SearchBar query={query} placeholder="Search" onSearch={onSearch} />
    </div>
  );
}

export default Header;
