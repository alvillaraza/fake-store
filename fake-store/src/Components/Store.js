import React, { useState } from "react";
import { Link } from "react-router-dom";

import ProductCard from "./ProductCard";

function Store({ productsList, category, productResults }) {
  return (
    <div className="store">
      {productResults.map((p) => {
        console.log("p", p.title);
        return <p>{p.title}</p>;
      })}

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
