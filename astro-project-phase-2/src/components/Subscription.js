import React, { useState } from 'react';

const Subscription = ({ sign }) => {
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = () => {
    // Handle subscription logic
    setSubscribed(true);
  };

  const handleOnClick = () => {
    // Add your onClick logic here
    alert('You clicked on the Subscription button.');
  };

  return (
    <div>
      <h2 onClick={handleOnClick}>Subscribe to {sign} Comments</h2>
      {subscribed ? (
        <p>You are subscribed to {sign} comments.</p>
      ) : (
        <button onClick={handleSubscribe}>Subscribe</button>
      )}
    </div>
  );
}

export default Subscription;
