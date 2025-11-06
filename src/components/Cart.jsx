function Cart({ cart }) {
  return (
    <div>
      <h2>Your Cart</h2>
      {cart.length === 0 ? (
        <p>Cart is empty</p>
      ) : (
        cart.map((item, index) => (
          <div key={index}>{item.name} - ${item.price}</div>
        ))
      )}
    </div>
  );
}

export default Cart;
