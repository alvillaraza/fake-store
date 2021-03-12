import React from "react";

function ProductCard({ product }) {
  return (
    <div>
      <h1>{product.title}</h1>
      <img src={product.image} />
    </div>
  );
}

export default ProductCard;
