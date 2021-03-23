import { Link } from "react-router-dom";

function Cart({ cart, setCart }) {
  function removeItem(cartItem) {
    setCart(
      cart.filter((item) => {
        return item.id !== cartItem.id;
      })
    );
  }

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
          <div className="cart" key={cartItem.id}>
            <Link to={`/product/${cartItem.id}`}>
              <div className="img-container">
                <img src={cartItem.image} alt="product thumbnail" />
              </div>
              <div>{cartItem.title}</div>
            </Link>
            <p>
              PRICE:
              <span className="price-value">${cartItem.price.toFixed(2)}</span>
            </p>
            <div>
              <button
                className="cart-button"
                onClick={() => removeItem(cartItem)}
              >
                Remove
              </button>
            </div>
          </div>
        );
      })}

      <p>Total: ${cartTotal()}</p>
    </div>
  );
}

export default Cart;
