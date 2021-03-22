import React, { useState } from "react";
import Cart from '../Pages/Cart';

function AddToCart({ product }) {
    const [cart, setCart] = useState([]);
    

    function addItem() {
        setCart([product])
   }
    
    // console.log('cart', cart);
    
  return (
    <div>
          <button onClick={addItem}>Add To Cart</button>
          <Cart cart={cart} />
      </div>
  );
}

export default AddToCart;
