import React, { useState } from "react";
import { Link } from "react-router-dom";

import ProductCard from "./ProductCard";

function Store({ productsList, category }) {
  return (
    <div className="store">
      {productsList.map((product) => {
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
  );
}

export default Store;
