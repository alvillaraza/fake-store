import { Link } from "react-router-dom";
import { connect } from "react-redux";

function Cart(props) {
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
              <div>Qty: {product.qty}</div>
              <div>Price: ${product.price}</div>
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

export default connect(mapStateToProps)(Cart);
