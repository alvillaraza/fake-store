import React, { useState, useEffect } from "react";
import { Route } from "react-router-dom";
import { connect } from "react-redux";

import Header from "./components/Header";
import Store from "./pages/Store";
import Product from "./pages/Product";
import Cart from "./pages/Cart";
import SideBar from "./components/SideBar";

import { fetchAllProducts } from "./actions/actions";

import "./App.css";
import "./Normalize.css";

function App(props) {
  const [showCart, setShowCart] = useState(false)
  console.log(showCart);
  // put Cart.js on top of app-container, then add styling
  //add timer for when the cart shows up
  
  //figure out where cart button should go for when a user just wants to go directly to cart, figure out how to get this to work with Route
  useEffect(() => {
    props.fetchAllProducts();
  }, []);

  return (
    <main>
      <Header />
      <div className="app-container">
        <Route exact path="/">
          <Store setShowCart={setShowCart} />
        </Route>

        <Route path="/product/:id">
          <Product setShowCart={setShowCart} />
        </Route>
        <Route path="/cart">
          <Cart setShowCart={setShowCart} />
        </Route>
      </div>
      <SideBar showCart={showCart} setShowCart={setShowCart} />
    </main>
  );
}
const mapStateToProps = (state) => {
  return { products: state.products };
};

export default connect(mapStateToProps, { fetchAllProducts })(App);
