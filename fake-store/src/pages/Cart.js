import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { addQty, subtractQty, removeFromCart } from "../actions/actions";

function Cart(props) {
  function getTotal() {
    let total = 0;

    props.products.map((product) => {
      if (product.inCart === true) {
        total = total + product.price * product.qty;
      }
      return "";
    });
    return total;
  }

    if (props.products.length === 0) {
      return "Products are unfolding...";
    }

  return (
    <div className="cart-container">
      {props.products.map((product) => {
        if (product.inCart === true) {
          return (
            <div className="cart" key={product.id}>
              <Link className="cart-link" to={`/product/${product.id}`}>
                <div className="img-container">
                  <img src={product.image} alt="product" />
                </div>
                <p> {product.title}</p>
              </Link>
              <div className="cart-nav">
                Qty:
                {product.qty === 1 ? (
                  <button
                    onClick={() => {
                      props.removeFromCart(product.id);
                    }}
                  >
                    x
                  </button>
                ) : (
                  <button onClick={() => props.subtractQty(product.id)}>
                    -
                  </button>
                )}
                {product.qty}
                <button onClick={() => props.addQty(product.id)}>+</button>
              </div>
              <div>Price: ${(product.qty * product.price).toFixed(2)}</div>
            </div>
          );
        }
        return "";
      })}
      <div className="cart-total">{getTotal() === 0 ? <span className="start-shopping">Start Shopping!</span> : `Total: $${getTotal().toFixed(2)}`}</div>
    </div>
  );
}
// Total: ${getTotal().toFixed(2)}

const mapStateToProps = (state) => {
  return {
    products: state.products,
  };
};

export default connect(mapStateToProps, {
  addQty,
  subtractQty,
  removeFromCart,
})(Cart);
