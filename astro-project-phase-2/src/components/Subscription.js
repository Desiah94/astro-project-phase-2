import React, { useState, useEffect } from 'react';

const Subscription = ({ zodiacSign }) => {
const [subscribed, setSubscribed] = useState(false);
const [subscribersCount, setSubscribersCount] = useState(0);
const [email, setEmail] = useState('');
const [error, setError] = useState(null);

useEffect(() => {
  fetch(`http://localhost:3000/subscriptions?zodiacSign=${zodiacSign}`)
    .then(response => response.json())
    .then(data => {
      setSubscribed(data.subscribed);
      setSubscribersCount(data.subscribersCount);
    })
    .catch(error => {
      setError(error);
    });
}, [zodiacSign]); 

const handleSubscribe = () => {
  fetch(`http://localhost:3000/subscriptions?zodiacSign=${zodiacSign}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ subscribed: !subscribed, email })
  })
    .then(response => response.json())
    .then(data => {
      setSubscribed(data.subscribed);
      setSubscribersCount(data.subscribersCount);

      const action = subscribed ? 'Unsubscribed' : 'Subscribed';
      window.alert(`${action} to ${zodiacSign}`);
    })
    .catch(error => {
      setError(error);
    });
};

const handleSubmit = (e) => {
  e.preventDefault(); 
  handleSubscribe();
};

return (
  <div>
    <h3>{zodiacSign} - Subscriptions</h3>
    {error && <p>Error fetching subscriptions: {error.message}</p>}
    <p>Subscribers: {subscribersCount}</p>
    <form onSubmit={handleSubmit}>
      <div>
        <label>Email:</label>
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <button type="submit">
        {subscribed ? 'Unsubscribe' : 'Subscribe'}
      </button>
    </form>
  </div>
);
}

export default Subscription;
