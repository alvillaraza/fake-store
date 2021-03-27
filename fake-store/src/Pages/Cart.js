import { Link } from "react-router-dom";
import { connect } from "react-redux";

import { removeFromCart } from "../actions/actions";

function Cart(props) {
  // console.log('cart props id', props.cart.title);
  const removeCartItem = props.cart;

  function removeItem(removeCartItem) {
    console.log("running remove Item");
    props.removeFromCart(removeCartItem);
    //right now this is removing all cart items, "removeCartItem" is anything that is in props.cart

    //   const index = props.cart.indexOf(cartItem);
    //   if (index > -1) {
    //     props.cart.splice(index, 1);
    //   }
    //  return setCart(cart)
    // }

    // if (props.cart.length <= 0) {
    //   return ('no items in cart')
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
              {/* this needs to have something that chooses the specific item it's on */}
              <button
                className="cart-button"
                onClick={() => removeCartItem.map(item => {if (item.id === cartItem.id) {
                  return removeItem(item)
                }})}
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
    products: state.products,
    cart: state.cart,
    cartTotal: state.cartTotal,
  };
};

export default connect(mapStateToProps, { removeFromCart })(Cart);
