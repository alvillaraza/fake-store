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
  const [showCart, setShowCart] = useState(false);
  const [itemAdded, setItemAdded] = useState("");

  useEffect(() => {
    props.fetchAllProducts();
  }, []);

  return (
    <main>
      <Header />
      <div className="app-container">
        <Route exact path="/">
          <Store
            showCart={showCart}
            setShowCart={setShowCart}
            setItemAdded={setItemAdded}
          />
        </Route>

        <Route path="/product/:id">
          <Product setShowCart={setShowCart} />
        </Route>
        <Route path="/cart">
          <Cart setShowCart={setShowCart} />
        </Route>
      </div>
      <SideBar itemAdded={itemAdded} showCart={showCart} />
    </main>
  );
}
const mapStateToProps = (state) => {
  return { products: state.products };
};

export default connect(mapStateToProps, { fetchAllProducts })(App);
