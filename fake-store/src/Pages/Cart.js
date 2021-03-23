import { Link } from "react-router-dom";

function Cart({ cart }) {
  console.log("cart items", cart);

  function removeItem() {}

  function cartTotal() {
    return cart
      .reduce((acc, value) => {
        return acc + value.price;
      }, 0)
      .toFixed(2);
  }

  return (
    <div className="cart-container">
      {cart.map((cartItem) => {
        return (
          <Link to={`/product/${cartItem.id}`}>
            <div className="cart" key={cartItem.id}>
              <div className="img-container">
                <img src={cartItem.image} alt="product thumbnail" />
              </div>
              <div>{cartItem.title}</div>
              <p>
                PRICE:
                <span className="price-value">
                  ${cartItem.price.toFixed(2)}
                </span>
              </p>
              <div>
                <button className="cart-button">Remove</button>
              </div>
            </div>
          </Link>
        );
      })}
      
        <p>Total: ${cartTotal()}</p>
      
    </div>
  );
}

export default Cart;
