import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { addQty, subtractQty, removeFromCart } from "../actions/actions";

function Cart(props) {
  function removeItem(id) {
    props.removeFromCart(id);
  }

  function minusQty(id) {
    props.subtractQty(id);
    //TODO: make sure subtract doesn't go to negative numbers
  }

  function plusQty(id) {
    props.addQty(id);
  }

  function getTotal() {
    let total = 0;

    props.products.map((product) => {
      if (product.inCart === true) {
        total = total + product.price * product.qty;
      }
    });
    return total;
  }

  return (
    <div className="cart-container">
      {props.products.map((product) => {
        if (product.inCart === true) {
          return (
            <div className="cart" key={product.id}>
              <div className="img-container">
                <img src={product.image} alt="product" />
              </div>
              <div> {product.title}</div>
              <div>
                Qty: {product.qty === 1 ? <button onClick={() => removeItem(product.id)}>x</button> : <button onClick={() => minusQty(product.id)}>-</button>
                }
                
                {product.qty}
                <button onClick={() => plusQty(product.id)}>+</button>
              </div>
              <div>Price: ${(product.qty * product.price).toFixed(2)}</div>
            </div>
          );
        }
      })}
      <div>Total: ${getTotal().toFixed(2)}</div>
    </div>
  );
}

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
