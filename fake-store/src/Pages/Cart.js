import { Link } from "react-router-dom";
import { connect } from "react-redux";



function Cart(props) {

  // function removeItem(cartItem) {
  //   const index = props.cart.indexOf(cartItem);
  //   if (index > -1) {
  //     props.cart.splice(index, 1);
  //   }
  //  return setCart(cart)
  // }

  // function cartTotal() {
  //   return props.cart
  //     .reduce((acc, value) => {
  //       return acc + value.price;
  //     }, 0)
  //     .toFixed(2);
  // }

  return (
    <div className="cart-container">
      {console.log('props in cart', props.cart)}
  
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

export default connect(mapStateToProps)(Cart);
