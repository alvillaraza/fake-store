import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { addToCart } from "../actions/actions";

function AddToCart(props) {
  const newCartItem = props.product
  
  function addItem(newCartItem) {
    props.addToCart(newCartItem);
  }

  return (
    <div>
      <Link to="/cart">
        <button className="cart-button" onClick={() => addItem(newCartItem)}>Add To Cart</button>
      </Link>

    </div>
  );
}
const mapStateToProps = (state) => {
  return {
    cart: state.cart,
  };
};
export default connect(mapStateToProps, { addToCart })(AddToCart);
