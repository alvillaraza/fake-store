import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

function Header(props) {
  const cartAmount = () => {
    return props.products.reduce((acc, value) => {
      return acc + value.qty;
    }, 0);
  };

  return (
    <div className="header">
      <Link to="/">
        <h1>Faux Boutique</h1>
      </Link>

      <Link to="/cart">
        <i className="fas fa-shopping-bag fa-2x"></i>
        <div className="cart-amount">
          {cartAmount() === 0 ? "" : cartAmount()}
        </div>
      </Link>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    products: state.products,
  };
};

export default connect(mapStateToProps)(Header);
