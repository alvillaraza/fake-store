import React from "react";
import { Link } from "react-router-dom";


function Header() {
 

  return (
    <div className="header">
      <Link to="/">
        <h1> Faux Boutique</h1>
      </Link>
     
    </div>
  );
}

export default Header;
