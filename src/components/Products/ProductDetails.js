import React from "react";
import "./style.css";

//props
const ProductDetails = ({ product, addToCart }) => {
  const handleAddToCart = () => {
    addToCart(product);
  };

  return (
    <>
      <br /> <br /> <br />
      <div className="product-details-container">
        <div className="product-details">
          <div className="product-image">
            <img src={product.image} alt={product.name} />
          </div>
          <div className="product-info">
            <div className="product-description">
            <br/> <br/>
              <h1 className="breadcrumb">
                <span style={{ color: "Black" }}>Product Details</span> /{" "}
                {product.name}
              </h1>
              <h5 className="price">Regular price: Rs. {product.price}</h5>
              <p className="tax-shipping">
                Tax included. Shipping calculated at checkout.
              </p>
            </div>
            <div className="product-options">
              <div className="size-options">
                <h4>SIZE</h4>
                <p>S</p>
                <p>M</p>
                <p>L</p>
                <p>XL</p>
              </div>
            </div>
            <div className="product-options">
              <div className="fabric">
                <h4>FABRIC</h4>
                <p>Chiffon</p>
              </div>
            </div>

            <div className="product-actions">
              <button className="add-to-cart-btn" onClick={handleAddToCart}>
                Add to Cart
              </button>
              <p>Local/International Shipping Available</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default ProductDetails;