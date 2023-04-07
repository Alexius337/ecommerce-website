import React, { useState } from 'react';
import './Checkout.css';

const Checkout = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    address: '',
    city: '',
    zipCode: '',
    country: '',
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Process the form data and submit it to your backend.
    alert('Order placed!');
  };

  return (
    <div className="checkout">
      <h2>Checkout</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="firstName">First Name:</label>
        <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} required />

        <label htmlFor="lastName">Last Name:</label>
        <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} required />

        <label htmlFor="email">Email:</label>
        <input type="email" name="email" value={formData.email} onChange={handleChange} required />

        <label htmlFor="address">Address:</label>
        <input type="text" name="address" value={formData.address} onChange={handleChange} required />

        <label htmlFor="city">City:</label>
        <input type="text" name="city" value={formData.city} onChange={handleChange} required />

        <label htmlFor="zipCode">Zip Code:</label>
        <input type="text" name="zipCode" value={formData.zipCode} onChange={handleChange} required />

        <label htmlFor="country">Country:</label>
        <input type="text" name="country" value={formData.country} onChange={handleChange} required />

        <button type="submit">Place Order</button>
      </form>
    </div>
  );
}

export default Checkout;
