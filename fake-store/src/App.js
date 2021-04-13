import React, { useState, useEffect} from "react";
import { Route } from "react-router-dom";
import { connect } from "react-redux";

import Header from "./components/Header";
import Store from "./pages/Store";
import Product from "./pages/Product";
import Cart from "./pages/Cart";

import { fetchAllProducts } from "./actions/actions";

import "./App.css";
import "./Normalize.css";

function App(props) {
  // create a setOpen state here, then pass it down to product and store (wherever there's a "addToCart" or go to cart button)
  // for all addCart buttons, do an onClick, setOpen to true

  // in Cart, add className={`cart-container ${open ? "" : "hide"}`}
  // put Cart.js on top of app-container, then add styling
  //add timer for when the cart shows up
  useEffect(() => {
    props.fetchAllProducts();
  }, []);

  return (
    <main>
      <Header />
    <div className="app-container">
      

      <Route exact path="/">
          <Store />
      </Route>

      <Route path="/product/:id">
        <Product />
      </Route>
</div>
     
      <Cart />
      
    </main>
  );
}
const mapStateToProps = (state) => {
  return { products: state.products };
};

export default connect(mapStateToProps, { fetchAllProducts })(App);
