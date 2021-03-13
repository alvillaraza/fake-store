import React from "react";
import { Link } from "react-router-dom";

import ProductCard from "./ProductCard";
import SearchBar from "./SearchBar";


function Store({ productResults, query, onSearch, category, setCategory }) {
  function handleChange(e) {
    setCategory(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
  }

  return (
    <div className="store-container">
      <div className="store-nav">
        <form onSubmit={handleSubmit}>
          <select onChange={handleChange} value={category}>
            <option value="">See all Products</option>
            <option value="electronics">Electronics</option>
            <option value="jewelery">Jewelry</option>
            <option value="men clothing">Men's Clothing</option>
            <option value="women clothing">Women's Clothing</option>
          </select>
        </form>

        <SearchBar query={query} placeholder="Search" onSearch={onSearch} />
        </div>
        <div className="product-container">
          {productResults.map((product) => {
            if (!category) {
              return (
                <Link key={product.id} to={`/product/${product.id}`}>
                  <ProductCard product={product} />
                </Link>
              );
            } else if (product.category === category) {
              return (
                <Link key={product.id} to={`/product/${product.id}`}>
                  <ProductCard product={product} />
                </Link>
              );
            }
          })}
        </div>
      </div>
  );
}

export default Store;
