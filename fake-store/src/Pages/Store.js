import React, { useEffect } from "react";
import { connect } from "react-redux";

import { Link } from "react-router-dom";

import ProductCard from "../components/ProductCard";
import SearchBar from "../components/SearchBar";
import { fetchAllProducts } from "../actions/actions";

function Store(
  props
  // { productResults, query, onSearch, category, setCategory }
) {
  useEffect(() => {
    props.fetchAllProducts();
  }, []);

  // function handleChange(e) {
  //   setCategory(e.target.value);
  // }

  // function handleSubmit(e) {
  //   e.preventDefault();
  // }

  return (
    <div className="store-container">
      <div className="store-nav">
        <div className="product-container">
        {props.products.map((product) => {
          return (
            <Link key={product.id} to={`/product/${product.id}`}>
              <ProductCard product={product} />
            </Link>
          );
        })}
        {/* <form onSubmit={handleSubmit}>
          <select onChange={handleChange} value={category}>
            <option value="">See all Products</option>
            <option value="electronics">Electronics</option>
            <option value="jewelery">Jewelry</option>
            <option value="men clothing">Men's Clothing</option>
            <option value="women clothing">Women's Clothing</option>
          </select>
        </form>

        <SearchBar query={query} placeholder="Search" onSearch={onSearch} />
        {productResults.map((product) => {
          if (!category) {
            return (
              <Link key={product.id} to={`/product/${product.id}`}>
              <ProductCard product={product} />
              </Link>
              );
            }
            
            if (product.category === category) {
              return (
                <Link key={product.id} to={`/product/${product.id}`}>
                <ProductCard product={product} />
                </Link>
                );
              }
              
              return "";
            })} */}
            </div>
      </div>
    </div>
  );
}
const mapStateToProps = (state) => {
  return { products: state.products };
};

export default connect(mapStateToProps, { fetchAllProducts })(Store);
