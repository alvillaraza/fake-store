import React, { useState, useEffect } from "react";
import { Route } from "react-router-dom";
import axios from "axios";

import Header from "./Components/Header";
import Store from "./Components/Store";
import Product from "./Components/Product";

// import "./App.css";

function App() {
  const [productsList, setProductsList] = useState([]);

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

  return (
    <div className="app-container">
      <Header />

      <Route exact path="/">
        {/* make sure products load first */}
        {productsList ? (
          <Store productsList={productsList} />
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
