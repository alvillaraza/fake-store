import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { addToCart, sidebarOpen } from "../actions/actions";

function AddToCartButton(props) {
  console.log(props);

  return (
    <div>
      <Link to="/cart">
      <button
        className="cart-button"
        onClick={() => {
          props.addToCart(props.id);
          props.sidebarOpen(true);

          // TODO: make sure this sidebar closes after awhile
          setTimeout(() => {
            props.sidebarOpen(false)
          }, 2500);
        }
        }
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
    sidebarOpen: state.sidebarOpen,
    sidebarItem: state.sidebarItem,
  };
};
export default connect(mapStateToProps, { addToCart, sidebarOpen })(AddToCartButton);
