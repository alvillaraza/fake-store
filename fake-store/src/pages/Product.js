import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchAllProducts } from "../actions/actions";

import { useRouteMatch } from "react-router-dom";

import AddToCartButton from "../components/AddToCart";

function Product(props) {
  const match = useRouteMatch();

  useEffect(() => {
    fetchAllProducts(match.params.id);
  }, [match.params.id]);

  return (
    <div className="product-info">
      {props.products.map((product, index) => {
        // Added this to make sure that product descriptions must start with capital letter
        const productDescription = product.description;
        if (parseInt(match.params.id) === product.id) {
          return (
            <React.Fragment key={product.id + index}>
              <div className="img-container">
                <img src={product.image} alt="product thumbnail" />
              </div>
              <div className="product-desc">
                <h2>{product.title}</h2>
                <p className="desc">
                  {productDescription.charAt(0).toUpperCase() +
                    productDescription.slice(1)}
                </p>
                <p>
                  <span className="price-value">
                    {product.price.toFixed(2)}
                  </span>
                </p>
                <AddToCartButton id={product.id} />
              </div>
            </React.Fragment>
          );
        } else {
          return "";
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
