import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import header from "../assets/header2.png";

function Header(props) {
  const cartAmount = () => {
    return props.products.reduce((acc, value) => {
      return acc + value.qty;
    }, 0);
  };

  return (
    <div className="header">
      <div className="header-container">
        <Link to="/">
          <img className="header" src={header} alt="faux boutique" />
        </Link>

        <Link className="shopping-bag" to="/cart">
          <i className="fas fa-shopping-bag fa-3x"></i>
          <div className="cart-amount">
            {cartAmount() === 0 ? "" : cartAmount()}
          </div>
        </Link>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    products: state.products,
  };
};

export default connect(mapStateToProps)(Header);
