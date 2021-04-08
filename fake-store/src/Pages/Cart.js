import { Link } from "react-router-dom";
import { connect } from "react-redux";

// import { removeFromCart } from "../actions/actions";

function Cart(props) {

console.log(props);


  return (

    <div className='cart-container'>
      {props.products.map(product => {
        if (product.inCart === true) {
          return (
            <div className='cart' key={product.id}>
              <div className='img-container'><img src={product.image} alt='product' /></div>
             <div> {product.title}</div>
              <div>qty: {product.qty}</div>
            </div>
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


