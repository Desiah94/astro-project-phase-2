import React, { useState } from 'react';

const Subscription = () => {
  const [email, setEmail] = useState('');

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleSubscribe = () => {
    // You can perform any validation here before subscribing
    if (email.trim() === '') {
      alert('Please enter your email!');
      return;
    }

    // Assuming subscription is successful, show an alert
    alert(`Thank you for subscribing with ${email}!`);
    // You can also send the email to the server or perform other actions
  };

  return (
    <div>
      <h2>Subscribe to Zodiac Updates</h2>
      <input
        type="email"
        value={email}
        onChange={handleEmailChange}
        placeholder="Enter your email"
      />
      <button onClick={handleSubscribe}>Subscribe</button>
    </div>
  );
};

export default Subscription;
