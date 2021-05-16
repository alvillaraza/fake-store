import { connect } from "react-redux";
import { addToCart, sidebarOpen } from "../actions/actions";

function AddToCartButton(props) {

  return (
    <div>
      <button
        className="cart-button"
        onClick={() => {
          props.addToCart(props.id);
          props.sidebarOpen(true);

          setTimeout(() => {
            props.sidebarOpen(false)
          }, 2000);
        }
        }
      >
        Add To Cart
      </button>
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
