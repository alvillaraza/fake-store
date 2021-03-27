import { Link } from "react-router-dom";
import { connect } from "react-redux";

import { removeFromCart } from "../actions/actions";

function Cart(props) {
  const removeCartItem = props.cart;

  function removeItem(removeCartItem) {
    console.log("running remove Item");
    props.removeFromCart(removeCartItem);
  }

  if (props.cart.length <= 0) {
    return "No items in cart";
  }

  return (
    <div className="cart-container">
      {props.cart.map((cartItem) => {
        return (
          <div className="cart" key={cartItem.id}>
            <Link to={`/product/${cartItem.id}`}>
              <div className="img-container">
                <img src={cartItem.image} alt="product thumbnail" />
              </div>
              <div>{cartItem.title}</div>
            </Link>
            <p>
              PRICE:
              <span className="price-value">${cartItem.price.toFixed(2)}</span>
            </p>
            <div>
              <button
                className="cart-button"
                onClick={() =>
                  removeCartItem.map((item) => {
                    if (item.id === cartItem.id) {
                      return removeItem(item);
                    }
                  })
                }
              >
                Remove
              </button>
            </div>
          </div>
        );
      })}
      <p>Total: ${props.cartTotal}</p>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    cart: state.cart,
    cartTotal: state.cartTotal,
  };
};

export default connect(mapStateToProps, { removeFromCart })(Cart);
