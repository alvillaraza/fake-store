import React, { useState } from "react";
import Cart from "../Pages/Cart";

function AddToCart({ product, cart, setCart }) {
  

   function addItem() {
     setCart([...cart, product]);
   }
console.log(cart);
  return (
    <div>
      <button onClick={addItem}>Add To Cart</button>

      {/* <Cart cart={cart} /> */}
    </div>
  );
}

export default AddToCart;
