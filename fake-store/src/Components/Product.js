import React from "react";

function Product({ product }) {
  console.log("prod alon", product.title);
  //   console.log("this is p", product.title);

  return (
    <div>
      <h1>{product.title}</h1>
    </div>
  );
}

export default Product;
