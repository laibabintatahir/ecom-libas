import React from "react";
import "./Style.css";
import Head from "./Head";
import { Link } from "react-router-dom";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const Header = () => {
  const logoStyle = {
    fontFamily: "'Cookie', cursive",
    fontWeight: "bold",
    fontSize: "30px",
    color: "#333",
    textDecoration: 'none',
  };

  const accentStyle = {
    fontFamily: "'Cookie', cursive",
    fontWeight: "bold",
    fontSize: "30px",
    color: "#912e2e",
  };

  return (
    <>
      <Head />
      <header>
        <div className="container">
          <div>
            <a href="/" style={logoStyle}>
              libas<span style={accentStyle}>lé</span>grace
            </a>
          </div>
          <nav>
            <ul>
              <li>
                <Link to="/">HOME</Link>
              </li>
              <li>
                <Link to="/abayapage">ABAYAS</Link>
              </li>
              <li>
                <Link to="/hijabs">HIJABS</Link>
              </li>
              <li>
                <Link to="/accessories">ACCESSORIES</Link>
              </li>
              <li>
                <Link to="/aboutus">ABOUT</Link>
              </li>
              <li>
                <Link to="/contactus">CONTACT</Link>
              </li>
              <li>
                <Link to="/checkout">CHECKOUT</Link>
              </li>
              {/* <li className="cart-icon">
                <Link to="/cart"> <i className="fa fa-shopping-cart"></i> </Link>
              </li> */}
              <li className="user-icon">
                <Link to="/login">
                  <i className="fa fa-user"></i>LOGIN
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Header;
