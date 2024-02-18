import React from "react";
import { Routes, Route } from "react-router-dom";
import { AppProvider } from "./components/Products/AppContext";
import Home from "./Pages/Home";
import Abayapage from "./Pages/Abayapage";
import Hijabpage from "./Pages/Hijabpage";
import Accessoriespage from "./Pages/Accessoriespage";
import Aboutpage from "./Pages/Aboutpage";
import Contactpage from "./Pages/Contactpage";
import Loginpage from "./Pages/Loginpage";
import Cartpage from "./Pages/Cartpage";
import SignUpPage from "./Pages/SignUPage";
import Checkout from "./Pages/Checkout";

const App = () => {
  return (
    <AppProvider>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/abayapage" element={<Abayapage />} />
          <Route path="/hijabs" element={<Hijabpage />} />
          <Route path="/accessories" element={<Accessoriespage />} />
          <Route path="/contactus" element={<Contactpage />} />
          <Route path="/aboutus" element={<Aboutpage />} />
          <Route path="/login" element={<Loginpage />} />
          <Route path="/signup" element={<SignUpPage />} />
          <Route path="/cart" element={<Cartpage />} />
          <Route path="/checkout" element={<Checkout />} />
        </Routes>
        <br />
      </div>
    </AppProvider>
  );
};

export default App;

