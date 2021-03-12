import React, { useState } from "react";

import SearchBar from "./SearchBar";

function Header({ setCategory, query, onSearch }) {
  return (
    <div className="header">
      <h1> Faux Boutique</h1>
      {/* <button onClick={() => setCategory("electronics")}>Electronics</button> */}

      <SearchBar query={query} placeholder="Search" onSearch={onSearch} />
    </div>
  );
}

export default Header;
