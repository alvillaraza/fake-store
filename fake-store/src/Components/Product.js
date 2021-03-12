import React, { useEffect, useState } from "react";
import axios from "axios";
import { useRouteMatch } from "react-router-dom";

function Product() {
  const [product, setProduct] = useState(null);
  const match = useRouteMatch();

  const fetchProduct = (id) => {
    axios.get(`https://fakestoreapi.com/products/${id}`).then((response) => {
      console.log("res", response.data);
      setProduct(response.data);
    });
  };

  useEffect(() => {
    fetchProduct(match.params.id);
  }, [match.params.id]);

  if (!product) {
    return "loading product information...";
  }

  return (
    <div>
      <p>
        <h1>{product.title}</h1>
        <img src={product.image} />
        <p>{product.description}</p>
      </p>
    </div>
  );
}

export default Product;
