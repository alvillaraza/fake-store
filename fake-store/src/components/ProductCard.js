import React from "react";
import AddToCartButton from "./AddToCart";

function ProductCard({ product }) {

  return (
    <div className="product-card">
      <img src={product.image} alt="product thumbnail" />
      <p>{product.title}</p>
      <h4>${(product.price).toFixed(2)}</h4>
      <AddToCartButton id={product.id} />
    </div>
  );
}

export default ProductCard;
