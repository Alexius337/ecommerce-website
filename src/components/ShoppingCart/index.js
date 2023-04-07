import React, { useState } from 'react';
import './ShoppingCart.css';

const ShoppingCart = () => {
  const [cartItems, setCartItems] = useState([]);

  const getTotal = () => {
    return cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
  };

  return (
    <div className="shopping-cart">
      <h2>Shopping Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          <ul>
            {cartItems.map(item => (
              <li key={item.id}>
                <div>{item.name}</div>
                <div>Price: ${item.price}</div>
                <div>Quantity: {item.quantity}</div>
              </li>
            ))}
          </ul>
          <div className="total">
            <strong>Total: ${getTotal().toFixed(2)}</strong>
          </div>
          <button className="checkout-button">Proceed to Checkout</button>
        </>
      )}
    </div>
  );
}

export default ShoppingCart;
