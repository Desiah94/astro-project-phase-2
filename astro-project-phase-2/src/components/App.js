import React, { useState, useEffect } from 'react';
import CommentSection from './CommentSection';
import NavigationBar from './NavigationBar';
import ZodiacSign from './ZodiacSign';
import Subscription from './Subscription';

const App = () => {
  const [zodiacData, setZodiacData] = useState([]);

  useEffect(() => {
    fetch('/db.json') // Fetching data from the public folder
      .then(response => response.json())
      .then(data => setZodiacData(data.zodiacSigns)); // Extracting zodiac signs data
  }, []);

  return (
    <div>
      <NavigationBar />
      <ZodiacSign zodiacSigns={zodiacData} /> {/* Passing zodiacSigns as a prop */}
      <Subscription />
      <CommentSection />
    </div>
  );
}

export default App;
