import "./style.css";
import React, { useContext, useState } from "react";
import { AppContext } from "./AppContext";
import Cart from "./Cart";

  const Hijabs = () => {
    // The useContext hook
    const [cartItems, setCartItems ] = useState([]);

    const {hijabsdata}=useContext(AppContext);
    const handleAddToCart = (product) => {
      setCartItems([...cartItems, { ...product, quantity: 1 }]);
    };
  
    const increaseQuantity = (item) => {
      const updatedCartItems = cartItems.map((cartItem) =>
        cartItem.id === item.id
          ? { ...cartItem, quantity: cartItem.quantity + 1 }
          : cartItem
      );
      setCartItems(updatedCartItems);
    };
  
    const decreaseQuantity = (item) => {
      const updatedCartItems = cartItems.map((cartItem) => {
        if (cartItem.id === item.id && cartItem.quantity > 1) {
          return { ...cartItem, quantity: cartItem.quantity - 1 };
        }
        return cartItem;
      });
      setCartItems(updatedCartItems);
    };
  
    const removeItem = (item) => {
      const updateCart = cartItems.filter((cartItem) => cartItem.id !== item.id);
      setCartItems(updateCart);
    };
  
    return (
      <div>
        <div className="women-shoes-section">
          <h2>HIJABS</h2>
          <div className="shoes-container">

            {/* mapping */}
            {hijabsdata.map((shoe) => (
              <div
                className="shoe-card"
                key={shoe.id}   
              >
                <img src={shoe.image} alt={shoe.name} />
                <h3>{shoe.name}</h3>
                <p>Price: {shoe.price}</p>
                <button onClick={() => handleAddToCart(shoe)}>Add to Cart</button>
              </div>
            ))}
          </div>
        </div>

  {/* parent comp sending props to cart  */}
        <Cart
          cartItems={cartItems}
          increaseQuantity={increaseQuantity}
          decreaseQuantity={decreaseQuantity}
          removeItem={removeItem}
        />
      </div>
    );
  };
  
export default Hijabs;
