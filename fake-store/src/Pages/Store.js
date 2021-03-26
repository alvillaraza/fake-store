import React, { useEffect } from "react";
import { connect } from "react-redux";

import { Link } from "react-router-dom";

import ProductCard from "../components/ProductCard";
import Product from '../pages/Product';
// import SearchBar from "../components/SearchBar";
import { fetchAllProducts, updateCategory } from "../actions/actions";

function Store(
  props
  // { productResults, query, onSearch, category, setCategory }
) {
  useEffect(() => {
    props.fetchAllProducts();
  }, []);

  function handleChange(e) {
    props.updateCategory(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
  }

  return (
    <div className="store-container">
      <div className="store-nav">
        <form onSubmit={handleSubmit}>
          <select onChange={handleChange} value={props.currentCategory}>
            <option value="">See all Products</option>
            <option value="electronics">Electronics</option>
            <option value="jewelery">Jewelry</option>
            <option value="men clothing">Men's Clothing</option>
            <option value="women clothing">Women's Clothing</option>
          </select>
        </form>
      </div>
      <div className="product-container">
        {props.products.map((product) => {
          if (!props.currentCategory) {
            return (
              <Link key={product.id} to={`/product/${product.id}`}>
                <ProductCard product={product} />
              </Link>
            );
          }
          if (product.category === props.currentCategory) {
            return (
              <Link key={product.id} to={`/product/${product.id}`}>
                <ProductCard product={product} />
              </Link>
            );
          }
          return "";
        })}

        {/*   <SearchBar query={query} placeholder="Search" onSearch={onSearch} />
        {productResults.map((product) => {
          if (!category) {
            return (
              <Link key={product.id} to={`/product/${product.id}`}>
              <ProductCard product={product} />
              </Link>
              );
            }
            
              return (
                <Link key={product.id} to={`/product/${product.id}`}>
                <ProductCard product={product} />
                </Link>
                );
              }
              
            })} */}
      </div>
    </div>
  );
}
const mapStateToProps = (state) => {
  return { products: state.products, currentCategory: state.currentCategory };
};

export default connect(mapStateToProps, { fetchAllProducts, updateCategory })(
  Store
);
