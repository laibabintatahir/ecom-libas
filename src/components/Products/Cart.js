import React, { useMemo } from "react";
import "./style.css";

//props recieved
const Cart = ({ cartItems,increaseQuantity,decreaseQuantity,removeItem,}) => {
  
  //The useMemo hook
  const totalPrice = useMemo(() => {
    let calculatedPrice = 0;

    for (const item of cartItems) {
      if (item.price && item.quantity) {
        calculatedPrice += item.price * item.quantity;
      }
    }

    return calculatedPrice;
  }, [cartItems]);

  return (
    <div className="cart-container">
      <h2>Cart</h2>
      {cartItems.length === 0 ? (
        <p>No items in the cart</p>
      ) : (
        <div>
          <ul>
            {cartItems.map((item) => (
              <li key={item.id} className="cart-item">
                <div className="cart-item-details">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="cart-item-image"
                  />
                  <div className="cart-item-info">
                    <h3>{item.name}</h3>
                    <p>Price: {item.price}</p>
                  </div>
                </div>
                <div className="cart-item-controls">
                  <button onClick={() => decreaseQuantity(item)}>−</button>
                  <span>{item.quantity}</span>
                  <button onClick={() => increaseQuantity(item)}>+</button>
                  <button onClick={() => removeItem(item)}>Remove</button>
                </div>
              </li>
            ))}
          </ul>
          <p className="total-price">
            Total Price: {cartItems.length > 0 ? totalPrice : 0}
          </p>
        </div>
      )}
    </div>
  );
};

export default Cart;
