import React from "react";
import { Link } from "react-router-dom";

import ProductCard from "./ProductCard";

function Store({ productResults }) {
  return (
    <div className="product-list">
      {productResults.map((product) => {
        return (
          <Link key={product.id} to={`/product/${product.id}`}>
            <ProductCard product={product} />
          </Link>
        );
      })}
    </div>
  );
}

export default Store;
