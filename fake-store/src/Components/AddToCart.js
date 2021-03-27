import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { addToCart } from "../actions/actions";

function AddToCart(props) {
  const addCartItem = props.product;
  
  function addItem(addCartItem) {
    props.addToCart(addCartItem);
  }

  return (
    <div>
      <Link to="/cart">
        <button className="cart-button" onClick={() => addItem(addCartItem)}>Add To Cart</button>
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
