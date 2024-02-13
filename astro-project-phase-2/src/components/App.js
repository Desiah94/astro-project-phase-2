import React, { useState, useEffect } from 'react';
import NavigationBar from './NavigationBar';
import ZodiacSign from './ZodiacSign';
import Subscription from './Subscription';
import SearchBar from './SearchBar';

const App = () => {
  const [zodiacData, setZodiacData] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    fetch('/db.json')
      .then(response => response.json())
      .then(data => setZodiacData(data.zodiacSigns));
  }, []);

  return (
    <div>
      <NavigationBar />
      <SearchBar onSearch={setSearchTerm} />
      <ZodiacSign zodiacSigns={zodiacData} searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <Subscription />
    </div>
  );
}

export default App;
