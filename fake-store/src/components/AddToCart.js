import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { addToCart } from "../actions/actions";

function AddToCartButton(props) {
  let id = props.id;

  return (
    <div>
      {/* <Link to="/cart"> */}
      <button
        className="cart-button"
        onClick={() => {
          props.addToCart(id);
          props.setShowCart(true);

          setTimeout(() => {
            props.setShowCart(false);
          }, 3000);
        }}
      >
        Add To Cart
      </button>
      {/* </Link> */}
    </div>
  );
}
const mapStateToProps = (state) => {
  return {
    products: state.products,
  };
};
export default connect(mapStateToProps, { addToCart })(AddToCartButton);
