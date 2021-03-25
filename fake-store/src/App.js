import React, { useState, useEffect } from "react";
import { Route } from "react-router-dom";
import { connect } from 'react-redux';
import axios from "axios";
import Fuse from "fuse.js";

import Header from "./components/Header";
import Store from "./pages/Store";
import Product from "./pages/Product";
import Cart from "./pages/Cart";

import { fetchAllProducts } from './actions/actions';

import "./App.css";
import "./Normalize.css";

function App(props) {
  // const [productsList, setProductsList] = useState([]);
  // const [category, setCategory] = useState("");
  // const [query, updateQuery] = useState("");
  // const [cart, setCart] = useState([]);

  // const getProducstList = () => {
  //   axios
  //     .get("https://fakestoreapi.herokuapp.com/products")
  //     .then((response) => {
  //      response.data.map((data) => {
  //         data.image = data.image.replace(
  //           "https://fakestoreapi.com/",
  //           "https://fakestoreapi.herokuapp.com/"
  //         );          
  //         return data;
  //       });
  //       setProductsList(response.data);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // };



  // Start of Search Functionality
  // Start of Search Functionality
  // Allows users to search by title, description, and category
  // const fuse = new Fuse(productsList, {
  //   keys: ["title", "description", "category"],
  //   includeScore: true,
  // });

  // Updates the search bar
  // function onSearch({ currentTarget }) {
  //   updateQuery(currentTarget.value);
  // }
  // const result = fuse.search(query);

  // displays the results - if there is a query in search, display what was searched : otherwise display all products
  // const productResults = query
  //   ? result.map((productResult) => productResult.item)
  //   : productsList;
  // End of Search Functionality
  // End of Search Functionality

  useEffect(() => {
  props.fetchAllProducts()
}, [])
  return (
    <div className="app-container">
      <Header />
      {  console.log('props', props)}
      <button onClick={() => this.props.fetchAllProducts(this.state.products)}>Show Products</button>
     

      {/* {productsList.length !== 0 ? (
        <Route exact path="/">

          <Store
            productResults={productResults}
            query={query}
            onSearch={onSearch}
            category={category}
            setCategory={setCategory}
          />
        </Route>
      ) : (
        "It's unfolding..."
      )} */}

      {/* <Route path="/product/:id">
        <Product cart={cart} setCart={setCart} />
      </Route>

      <Route path="/cart">
        <Cart cart={cart} setCart={setCart} />
      </Route> */}
     
    </div>
  );
}

const mapStateToProps = state => {
  console.log('state', state);
  return {products: state.products}
}

export default connect(mapStateToProps, {fetchAllProducts})(App);
