import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { addQty } from "../actions/actions";

function Cart(props) {

  function plusQty(id) {
    props.addQty(id)
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
              <div>Qty: <button>-</button> {product.qty}<button onClick={() => plusQty(product.id)}>+</button></div>
              <div>Price: ${product.qty * product.price}</div>
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

export default connect(mapStateToProps, {addQty})(Cart);
