import React, { useEffect } from "react";
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
  useEffect(() => {
    props.fetchAllProducts();
  }, []);

  return (
    <>
      <SideBar />
      <main>
        <Header />
        <div className="app-container">
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
      </main>
    </>
  );
}
const mapStateToProps = (state) => {
  return { products: state.products, sidebarOpen: state.sidebarOpen };
};

export default connect(mapStateToProps, { fetchAllProducts })(App);
