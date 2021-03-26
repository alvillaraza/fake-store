import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { fetchAllProducts } from "../actions/actions";

import { useRouteMatch } from "react-router-dom";

import AddToCart from "../components/AddToCart";

function Product(props) {
  // const [product, setProduct] = useState(null);
  const match = useRouteMatch();

  // const fetchProduct = (id) => {
  //   axios
  //     .get(`https://fakestoreapi.herokuapp.com/products/${id}`)
  //     .then((response) => {
  //       response.data.image = response.data.image.replace(
  //         "https://fakestoreapi.com/",
  //         "https://fakestoreapi.herokuapp.com/"
  //       );

  //       setProduct(response.data);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // };

  useEffect(() => {
    fetchAllProducts(match.params.id);
  }, [match.params.id]);
  
  // if (!product) {
    //   return "loading product information...";
    // }
    
    // Added this to make sure that product descriptions must start with capital letter
    // const productDescription = product.description;
    
    
    
    return (
      <div className="product-info">
        {/* {console.log('product', props.products)} */}
       { props.products.map(product => {
          console.log(product.id);
        })}
      {/* <div className="img-container">
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
      <AddToCart product={product} setCart={setCart} cart={cart} /> */}
    </div>
  );
}
const mapStateToProps = (state) => {
  return { products: state.products };
};

export default connect(mapStateToProps, { fetchAllProducts })(Product);
