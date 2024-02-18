import React, { useState } from 'react';
import "./style.css"; 

const CheckoutPage = () => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [paymentMethod, setPaymentMethod] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (

    // The  onSubmit onHandle Form
    <div className="checkout-page">
      <h1>Checkout</h1>
      <form className="checkout-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="fullName">Full Name:</label>
          <input
            type="text"
            id="fullName"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="address">Address:</label>
          <textarea
            id="address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="paymentMethod">Payment Method:</label>
          <select
            id="paymentMethod"
            value={paymentMethod}
            onChange={(e) => setPaymentMethod(e.target.value)}
          >
            <option value="">Select Payment Method</option>
            <option value="creditCard">Credit Card</option>
            <option value="paypal">PayPal</option>
            <option value="bitcoin">Bitcoin</option>
          </select>
        </div>
        <button type="submit">Place Order</button>
      </form>
      <br/> <br/>
    </div>
  );
};

export default CheckoutPage;
