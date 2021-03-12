import React, { useState } from "react";
import { Link } from "react-router-dom";

import SearchBar from "./SearchBar";

function Header({ query, onSearch }) {
  return (
    <div className="header">
      <Link to="/">
        <h1> Faux Boutique</h1>
      </Link>
      {/* <button onClick={() => setCategory("electronics")}>Electronics</button> */}

      <SearchBar query={query} placeholder="Search" onSearch={onSearch} />
    </div>
  );
}

export default Header;
