import React, { createContext, useState } from "react";

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  // const [cartItems, setCartItems] = useState([]);
  const [hijabsdata] = useState([
    { id: 1, name: "CHIFFON HIJAB AMBLISH", price: 700, image: "images/h1.jpg" },
    { id: 2, name: "CHIFFON HIJABCLESTIL", price: 500, image: "images/h2.jpg" },
    { id: 3, name: "Graceful CHIFFON HIJAB", price: 600, image: "images/h3.jpg" },
    { id: 4, name: "Floral CHIFFON HIJAB SUNDRESS", price: 780, image: "images/h4.jpg" },
    { id: 5, name: "Dreamy Chiffon HIJAB", price: 630, image: "images/h5.jpg" },
    { id: 10, name: "ACHIFFON HIJAB", price: 455, image: "images/h10.jpg" },
    { id: 11, name: "DREAMY CHIFON ", price: 560, image: "images/h11.jpg" },
    { id: 12, name: "CHIFFON HIJAB MA", price: 650, image: "images/h12.jpg" },
    { id: 6, name: "CHIFFON HIJAB WRAP s", price: 535, image: "images/h3.jpg" },
  ]);


  return (
    <AppContext.Provider value={{ hijabsdata }}>
      {children}
    </AppContext.Provider>
  );
};