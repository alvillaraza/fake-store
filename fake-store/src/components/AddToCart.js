import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { addToCart } from "../actions/actions";

function AddToCartButton(props) {
  console.log(props);

  return (
    <div>
      <Link to="/cart">
      {console.log(props)}
      <button
        className="cart-button"
        onClick={() => {
          props.addToCart(props.id);
          

          // setTimeout(() => {
          //   props.setShowCart(false);
          // }, 2500);
        }}
      >
        Add To Cart
      </button>
      </Link>
    </div>
  );
}
const mapStateToProps = (state) => {
  return {
    products: state.products,
  };
};
export default connect(mapStateToProps, { addToCart })(AddToCartButton);
