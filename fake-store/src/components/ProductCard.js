import React from "react";

function ProductCard({ product }) {

  return (
    <div className="product-card">
      <img src={product.image} alt="product thumbnail" />
      <h4>{(product.price).toFixed(2)}</h4>
      <p>{product.title}</p>
    </div>
  );
}

export default ProductCard;
