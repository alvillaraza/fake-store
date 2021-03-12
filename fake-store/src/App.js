import React, { useState, useEffect } from "react";
import { Route } from "react-router-dom";
import axios from "axios";
import Fuse from "fuse.js";

import Header from "./Components/Header";
import Store from "./Components/Store";
import Product from "./Components/Product";

import "./App.css";
import "./Normalize.css";

function App() {
  const [productsList, setProductsList] = useState([]);
  // const [category, setCategory] = useState();
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
  // Start of Search Functionality

  // Allows users to search by title, description, and category
  const fuse = new Fuse(productsList, {
    keys: ["title", "description", "category"],
    includeScore: true,
  });

  // Updates the search bar
  function onSearch({ currentTarget }) {
    updateQuery(currentTarget.value);
  }
  const result = fuse.search(query);

  // displays the results...if there is a query in search, display what was searched : otherwise display all products
  const productResults = query
    ? result.map((productResult) => productResult.item)
    : productsList;
  // End of Search Functionality
  // End of Search Functionality

  return (
    <div className="app-container">
      <Header query={query} onSearch={onSearch} />

      <Route exact path="/">
        {/* make sure products load first */}
        {productsList ? (
          <Store productResults={productResults} />
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
