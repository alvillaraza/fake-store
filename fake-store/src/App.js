import React from "react";
import { Route } from "react-router-dom";


import Header from "./components/Header";
import Store from "./pages/Store";
import Product from "./pages/Product";
import Cart from "./pages/Cart";

import "./App.css";
import "./Normalize.css";

function App() {
 

  return (
    <div className="app-container">
      <Header />

      <Route exact path="/">
        <Store />
      </Route>
     

      <Route path="/product/:id">
        <Product />
      </Route>
      
      <Route path="/cart">
        <Cart />
      </Route>
    </div>
  );
}

export default App;
