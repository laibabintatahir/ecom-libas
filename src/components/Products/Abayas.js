import React, { useState } from "react";
import ProductDetails from "./ProductDetails";
import "./style.css";
import Cart from "./Cart";

const Acessories = () => {
  const abayasdata = [
    { id: 1, name: "MW Amblish", price: 1050, image: "images/s1.jpg" },
    { id: 2, name: "MW Clestial", price: 1500, image: "images/s2.jpg" },
    { id: 3, name: "Graceful Eleganc", price: 2000, image: "images/s3.jpg" },
    {
      id: 4,
      name: "M Charming Floral Sundress",
      price: 2050,
      image: "images/s4.jpg",
    },
    { id: 5, name: "Dreamy Chiffon", price: 2330, image: "images/s5.jpg" },
    {
      id: 6,
      name: "Dreamy Chiffon Wrap Dress",
      price: 2535,
      image: "images/s13.jpg",
    },
    {
      id: 7,
      name: "Sophisticated Satin Abaya",
      price: 4440,
      image: "images/s7.jpg",
    },
    {
      id: 8,
      name: "Bohemian Ruffled Maxi Dress",
      price: 5645,
      image: "images/s8.jpg",
    },
    { id: 9, name: "Clestial", price: 2350, image: "images/s9.jpg" },
    { id: 10, name: "Amblish 10", price: 2455, image: "images/s10.jpg" },
    {
      id: 11,
      name: "Dreamy Chiffon Wrap Dress",
      price: 6560,
      image: "images/s11.jpg",
    },
    { id: 12, name: "Graceful Eleganc", price: 2365, image: "images/s12.jpg" },
  ];
  
  //usestate hook
  const [cartItems, setCartItems] = useState([]);

  const handleAddToCart = (product) => {
    setCartItems([...cartItems, { ...product, quantity: 1 }]);
  };

  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleProductClick = (product) => {
    setSelectedProduct(product);
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
        <h2>ABAYAS</h2>
        <div className="shoes-container">
          {abayasdata.map((shoe) => (
            <div
              className="shoe-card"
              key={shoe.id}
              onClick={() => handleProductClick(shoe)}
            >
              <img src={shoe.image} alt={shoe.name} />
              <h3>{shoe.name}</h3>
              <p>Price: {shoe.price}</p>
              <button onClick={() => handleAddToCart(shoe)}>Add to Cart</button>
            </div>
          ))}
        </div>
      </div>

      {selectedProduct && (
        <ProductDetails product={selectedProduct} addToCart={handleAddToCart} />
      )}

      <Cart
        cartItems={cartItems}
        increaseQuantity={increaseQuantity}
        decreaseQuantity={decreaseQuantity}
        removeItem={removeItem}
      />
    </div>
  );
};

export default Acessories;

// import React, { useState, useContext } from "react";
// import { useNavigate } from "react-router-dom";
// import ProductDetails from "./ProductDetails";
// import "./style.css";
// import Cart from "./Cart";

// const Abaya = () => {
// const [abayasdata, setAbayasdata] = useState([
//   { id: 1, name: "MW Amblish", price: 1050, image: "images/s1.jpg" },
//   { id: 2, name: "MW Clestial", price: 1500, image: "images/s2.jpg" },
//   { id: 3, name: "Graceful Eleganc", price: 2000, image: "images/s3.jpg" },
//   {
//     id: 4,
//     name: "M Charming Floral Sundress",
//     price: 2050,
//     image: "images/s4.jpg",
//   },
//   { id: 5, name: "Dreamy Chiffon", price: 2330, image: "images/s5.jpg" },
//   {
//     id: 6,
//     name: "Dreamy Chiffon Wrap Dress",
//     price: 2535,
//     image: "images/s13.jpg",
//   },
//   {
//     id: 7,
//     name: "Sophisticated Satin Abaya",
//     price: 4440,
//     image: "images/s7.jpg",
//   },
//   {
//     id: 8,
//     name: "Bohemian Ruffled Maxi Dress",
//     price: 5645,
//     image: "images/s8.jpg",
//   },
//   { id: 9, name: "Clestial", price: 2350, image: "images/s9.jpg" },
//   { id: 10, name: "Amblish 10", price: 2455, image: "images/s10.jpg" },
//   {
//     id: 11,
//     name: "Dreamy Chiffon Wrap Dress",
//     price: 6560,
//     image: "images/s11.jpg",
//   },
//   { id: 12, name: "Graceful Eleganc", price: 2365, image: "images/s12.jpg" },
// ]);

//   const [cartItems, setCartItems] = useState([]);

//   const [selectedProduct, setSelectedProduct] = useState(null);
//   const navigate = useNavigate();

//   const handleAddToCart = (product) => {
//     setCartItems([...cartItems, { ...product, quantity: 1 }]);
//   };

//   const handleProductClick = (product) => {
//     navigate('/productdetails');
//   };

//   const increaseQuantity = (item) => {
//     const updatedCartItems = cartItems.map((cartItem) =>
//       cartItem.id === item.id
//         ? { ...cartItem, quantity: cartItem.quantity + 1 }
//         : cartItem
//     );
//     setCartItems(updatedCartItems);
//   };

//   const decreaseQuantity = (item) => {
//     const updatedCartItems = cartItems.map((cartItem) =>
//       cartItem.id === item.id && cartItem.quantity > 1
//         ? { ...cartItem, quantity: cartItem.quantity - 1 }
//         : cartItem
//     );
//     setCartItems(updatedCartItems);
//   };

//   const removeItem = (item) => {
//     const updatedCart = cartItems.filter((cartItem) => cartItem.id !== item.id);
//     setCartItems(updatedCart);
//   };

//   return (
//     <div>
//       <div className="women-shoes-section">
//         <h2>ABAYAS</h2>
//         <div className="shoes-container">
//           {abayasdata.map((shoe) => (
//             <div
//               className="shoe-card"
//               key={shoe.id}
//               onClick={() => handleProductClick(shoe)}
//             >
//               <img src={shoe.image} alt={shoe.name} />
//               <h3>{shoe.name}</h3>
//               <p>Price: {shoe.price}</p>
//               <button onClick={() => handleAddToCart(shoe)}>Add to Cart</button>
//             </div>
//           ))}
//         </div>
//       </div>

//       {selectedProduct && (
//         <ProductDetails
//           product={selectedProduct}
//           addToCart={handleAddToCart}
//           increaseQuantity={increaseQuantity}
//           decreaseQuantity={decreaseQuantity}
//           removeItem={removeItem}
//         />
//       )}

//       <Cart
//         cartItems={cartItems}
//         increaseQuantity={increaseQuantity}
//         decreaseQuantity={decreaseQuantity}
//         removeItem={removeItem}
//       />
//     </div>
//   );
// };

// export default Abaya;
