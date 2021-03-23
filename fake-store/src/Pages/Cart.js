function Cart({cart}) {
  console.log("cart items", cart);

  const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  });

  return (
    <div>
      {cart.map((cartItem) => {
        return (
            <div className="cart" key={cartItem.id}>
                This is the cart
            <img src={cartItem.image} alt="product thumbnail" />
            <h2 >{cartItem.title}</h2>

            <p>
              PRICE:
              <span className="price-value">
                {formatter.format(cartItem.price)}
              </span>
            </p>
          </div>
        );
      })}
    </div>
  );
}

export default Cart;
