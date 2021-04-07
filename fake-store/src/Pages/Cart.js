import { Link } from "react-router-dom";
import { connect } from "react-redux";

// import { removeFromCart } from "../actions/actions";

function Cart(props) {




  return (

    <div>
      {props.products.map(product => {
        if (product.inCart === true) {
          return (
            <div>{product.title}</div>
          )
          console.log(product)
        }
      })}

    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    products: state.products
  };
};

export default connect(mapStateToProps)(Cart);


