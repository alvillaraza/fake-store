import React, { useEffect, useState } from "react";
import axios from "axios";
import { useRouteMatch } from "react-router-dom";

import ProductCard from "./ProductCard";

function Product({ productsList }) {
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
        <ProductCard product={product} />
      </p>
    </div>
  );
}

export default Product;
