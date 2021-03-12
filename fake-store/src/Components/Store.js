import React from "react";
import { Link } from "react-router-dom";

import ProductCard from "./ProductCard";

function Store({ productsList }) {
  console.log(productsList);

  return (
    <div className="store">
      {productsList.map((product) => (
        <Link key={product.id} to={`/product/${product.id}`}>
          <ProductCard product={product} />
        </Link>
      ))}
    </div>
  );
}

export default Store;
