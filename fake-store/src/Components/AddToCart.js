import { Link } from "react-router-dom";


function AddToCart({ product, cart, setCart }) {
  function addItem() {
    setCart([...cart, product]);
  }
  console.log(cart);
  return (
    <div>
      <Link to="/cart">
        <button className="cart-button" onClick={addItem}>Add To Cart</button>
      </Link>

    </div>
  );
}

export default AddToCart;
