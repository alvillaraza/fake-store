import React, {useEffect} from "react";
import { Route } from "react-router-dom";
import { connect } from 'react-redux';

import Header from "./Ccomponents/Header";
import Store from "./pages/Store";
import Product from "./pages/Product";
import Cart from "./pages/Cart";

import { fetchAllProducts } from "./actions/actions";

import "./App.css";
import "./Normalize.css";

function App(props) {
   useEffect(() => {
     props.fetchAllProducts();
   }, []);

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
const mapStateToProps = (state) => {
  return { products: state.products};
};

export default connect(mapStateToProps, {fetchAllProducts}) (App);
