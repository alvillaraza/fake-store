import React from "react";
import { Link } from "react-router-dom";

import Product from "./Product";

function Store({ productsList }) {
  return (
    <div className="store">
      {productsList.map((product) => (
        <Link key={product.id} to={`/products/${product.id}`}>
          <Product product={product} />
        </Link>
      ))}
    </div>
  );
}

export default Store;
