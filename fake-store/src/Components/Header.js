import React, { useState } from "react";
import Fuse from "fuse.js";

import SearchBar from "./SearchBar";

function Header({ setCategory, productsList }) {
  const [query, updateQuery] = useState("");
  // const [data, setData] = useState(productsList);
  // console.log("products:", productsList);
  // console.log("data", data);

  const fuse = new Fuse(productsList, {
    keys: ["title", "description"],
    includeScore: true,
  });

  // const searchData = (pattern) => {
  //   if (!pattern) {
  //     setData(productsList);
  //     return;
  //   }
  // };
  function onSearch({ currentTarget }) {
    updateQuery(currentTarget.value);
  }

  const result = fuse.search(query);
  console.log("result", result);

  const productResults = result.map((productResult) => productResult.item);
  console.log("productResult", productResults);

  // const matches = [];
  // if (!result.length) {
  //   setData([]);
  // } else {
  //   result.forEach(({ item }) => {
  //     matches.push(item);
  //   });
  //   setData(matches);
  // }

  // if (!result.length) {
  //   setData([]);
  // } else {
  //   result.forEach(({ item }) => {
  //     matches.push(item);
  //   });
  //   setData(matches);
  // }

  return (
    <div className="header">
      <h1> Faux Boutique</h1>
      <button onClick={() => setCategory("electronics")}>Electronics</button>

      {/* <div className="product-results">
        {productResults.map((p) => {
          const { title, description } = p;
        })}
      </div> */}

      <SearchBar query={query} placeholder="Search" onSearch={onSearch} />
    </div>
  );
}

export default Header;
