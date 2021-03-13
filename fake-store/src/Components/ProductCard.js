import React from "react";

function ProductCard({ product }) {
  return (
    <div className="product-card">
      <h2>{product.title}</h2>
      <img src={product.image} alt="product thumbnail" />
    </div>
  );
}

export default ProductCard;
