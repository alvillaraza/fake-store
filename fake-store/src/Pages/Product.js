import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchAllProducts } from "../actions/actions";

import { useRouteMatch } from "react-router-dom";

import AddToCart from "../components/AddToCart";

function Product(props) {
  const match = useRouteMatch();

  useEffect(() => {
    fetchAllProducts(match.params.id);
    console.log("match.params.id", match.params.id);
  }, [match.params.id]);

  if (!props.products) {
    return "loading product information...";
  }

  return (
    <div className="product-info">
      {props.products.map((product) => {
        // Added this to make sure that product descriptions must start with capital letter
        const productDescription = product.description;
        if (parseInt(match.params.id) === product.id) {
          return (
            <>
              <div className="img-container">
                <img src={product.image} alt="product thumbnail" />
              </div>
              <div className="product-desc">
                <h2>{product.title}</h2>
                <p>
                  PRICE:
                  <span className="price-value">{product.price}</span>
                </p>
                <p className="desc">
                  {productDescription.charAt(0).toUpperCase() +
                    productDescription.slice(1)}
                </p>
              </div>
              <AddToCart product={product} />
            </>
          );
        }
      })}
    </div>
  );
}
const mapStateToProps = (state) => {
  return {
    products: state.products,
  };
};

export default connect(mapStateToProps, { fetchAllProducts })(Product);
