// import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { addToCart, sidebarOpen } from "../actions/actions";

function AddToCartButton(props) {

  return (
    <div>
      {/* <Link to="/cart"> */}
      <button
        className="cart-button"
        onClick={() => {
          props.addToCart(props.id);
          props.sidebarOpen(true);

          setTimeout(() => {
            props.sidebarOpen(false)
          }, 2500);
        }
        }
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
    sidebarOpen: state.sidebarOpen,
  };
};
export default connect(mapStateToProps, { addToCart, sidebarOpen })(AddToCartButton);
