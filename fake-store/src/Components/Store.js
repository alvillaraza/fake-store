import React, { useState } from "react";
import { Link } from "react-router-dom";

import ProductCard from "./ProductCard";

function Store({ productsList, category, productResults }) {
  return (
    <div className="store">
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
