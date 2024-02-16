import React, { useState, useEffect } from 'react';

const Subscription = ({ zodiacSign }) => {
  const [subscribed, setSubscribed] = useState(false);
  const [subscribersCount, setSubscribersCount] = useState(0);
  const [email, setEmail] = useState('');
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch subscription status and count for the specific zodiac sign when the component mounts or when zodiacSign changes
    fetch(`http://localhost:3000/subscriptions?zodiacSign=${zodiacSign}`)
      .then(response => response.json())
      .then(data => {
        // Update state with the fetched subscription data
        setSubscribed(data.subscribed);
        setSubscribersCount(data.subscribersCount);
      })
      .catch(error => {
        // Handle errors
        setError(error);
      });
  }, [zodiacSign]); // Trigger the effect when zodiacSign changes

  const handleSubscribe = () => {
    // Toggle subscription status for the specific zodiac sign
    fetch(`http://localhost:3000/subscriptions?zodiacSign=${zodiacSign}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ subscribed: !subscribed, email })
    })
      .then(response => response.json())
      .then(data => {
        // Update state with the new subscription data
        setSubscribed(data.subscribed);
        setSubscribersCount(data.subscribersCount);

        // Show alert when subscription status changes
        const action = subscribed ? 'Unsubscribed' : 'Subscribed';
        window.alert(`${action} to ${zodiacSign}`);
      })
      .catch(error => {
        // Handle errors
        setError(error);
      });
  };

  return (
    <div>
      <h3>{zodiacSign} - Subscriptions</h3>
      {error && <p>Error fetching subscriptions: {error.message}</p>}
      <p>Subscribers: {subscribersCount}</p>
      <div>
        <label>Email:</label>
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <button onClick={handleSubscribe}>
        {subscribed ? 'Unsubscribe' : 'Subscribe'}
      </button>
    </div>
  );
}

export default Subscription;