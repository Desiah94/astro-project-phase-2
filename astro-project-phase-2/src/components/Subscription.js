// Subscription.js
import React, { useState } from 'react';

const Subscription = () => {
  const [email, setEmail] = useState('');

  const handleInputChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your subscription logic here
    alert(`You have subscribed with email: ${email}`);
    setEmail('');
  };

  return (
    <div>
      <h2>Subscription</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Email:
          <input
            type="email"
            value={email}
            onChange={handleInputChange}
            required
          />
        </label>
        <button type="submit">Subscribe</button>
      </form>
    </div>
  );
};

export default Subscription;
