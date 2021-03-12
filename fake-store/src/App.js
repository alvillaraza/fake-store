import React, { useState, useEffect } from "react";
import { Route } from "react-router-dom";
import axios from "axios";
import Fuse from "fuse.js";

import Header from "./Components/Header";
import Store from "./Components/Store";
import Product from "./Components/Product";

// import "./App.css";

function App() {
  const [productsList, setProductsList] = useState([]);
  const [category, setCategory] = useState();
  const [query, updateQuery] = useState("");

  const getProducstList = () => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((response) => {
        setProductsList(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getProducstList();
  }, []);

  // Start of Search Functionality
  // Updates the search bar
  // Start of Search Functionality

  // Allows users to search by title, description, and category
  const fuse = new Fuse(productsList, {
    keys: ["title", "description", "category"],
    includeScore: true,
  });

  function onSearch({ currentTarget }) {
    updateQuery(currentTarget.value);
  }
  const result = fuse.search(query);

  const productResults = query
    ? result.map((productResult) => productResult.item)
    : productsList;
  // displays the results...if there is a query in search, display what was searched : otherwise display all products
  // End of Search Functionality
  // End of Search Functionality

  return (
    <div className="app-container">
      <Header
        setCategory={setCategory}
        productsList={productsList}
        query={query}
        onSearch={onSearch}
      />

      <Route exact path="/">
        {/* make sure products load first */}
        {productsList ? (
          <Store
            productsList={productsList}
            category={category}
            productResults={productResults}
          />
        ) : (
          "still loading......."
        )}
      </Route>

      <Route path="/product/:id">
        <Product productsList={productsList} />
      </Route>
    </div>
  );
}

export default App;
