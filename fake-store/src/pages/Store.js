import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import Fuse from "fuse.js";

import ProductCard from "../components/ProductCard";
import SearchBar from "../components/SearchBar";
import AddToCartButton from "../components/AddToCart";

import { updateCategory } from "../actions/actions";

function Store(props) {
  function handleChange(e) {
    props.updateCategory(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
  }

  // Start of Search Functionality
  // Start of Search Functionality

  const fuse = new Fuse(props.products, {
    keys: ["title", "description", "category"],
  });

  const query = props.currentQuery;
  const result = fuse.search(query);

  // displays the results - if there is a query in search, display what was searched : otherwise display all products
  const productResults = query
    ? result.map((productResult) => productResult.item)
    : props.products;

  // End of Search Functionality
  // End of Search Functionality

  if (props.products.length === 0) {
    return "Products are unfolding...";
  }

  return (
    <div className="store-container">
      <div className="store-nav">
        <form onSubmit={handleSubmit}>
          <select
            className="dropdown"
            onChange={handleChange}
            value={props.currentCategory}
            aria-label="dropdown"
          >
            <option value="" placeholder="see all products">
              See all Products
            </option>
            <option value="electronics">Electronics</option>
            <option value="jewelery">Jewelry</option>
            <option value="men's clothing">Men's Clothing</option>
            <option value="women's clothing">Women's Clothing</option>
          </select>
        </form>
        <div>
          <SearchBar placeholder="Search" />
        </div>
      </div>
      <div className="product-container">
        {productResults.map((product) => {
          if (!props.currentCategory) {
            return (
              <div className="product-block" key={product.id}>
                <Link to={`/product/${product.id}`}>
                  <ProductCard product={product} />
                </Link>
                <AddToCartButton id={product.id} />
              </div>
            );
          }

          if (product.category === props.currentCategory) {
            return (
              <div className="product-block" key={product.id}>
                <Link to={`/product/${product.id}`}>
                  <ProductCard product={product} />
                </Link>
                <AddToCartButton id={product.id} />
              </div>
            );
          }

          return "";
        })}
      </div>
    </div>
  );
}
const mapStateToProps = (state) => {
  return {
    products: state.products,
    currentCategory: state.currentCategory,
    currentQuery: state.currentQuery,
  };
};

export default connect(mapStateToProps, { updateCategory })(Store);
