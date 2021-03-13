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

  // Added this to make sure that product descriptions must start with capital letter
  const productDescription = product.description;

  //Added to make sure price is formatted correctly
  var formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  });

  return (
    <div className="product-info">
      <div className="img-container">
        <img src={product.image} alt="product thumbnail" />
      </div>

      <div className="product-desc">
        <h2>{product.title}</h2>
        <p>
          PRICE:{" "}
          <span className="price-value">{formatter.format(product.price)}</span>
        </p>
        <p className="desc">
          {productDescription.charAt(0).toUpperCase() +
            productDescription.slice(1)}
        </p>
      </div>
    </div>
  );
}

export default Product;
