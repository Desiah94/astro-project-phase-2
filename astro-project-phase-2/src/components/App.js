// App.js
import React, { useState, useEffect } from 'react';
import NavigationBar from './NavigationBar';
import ZodiacSign from './ZodiacSign';
import Subscription from './Subscription';
import SearchBar from './SearchBar';
import CommentSection from './CommentSection';

const App = () => {
  // State for storing the fetched zodiac data
  const [zodiacData, setZodiacData] = useState([]);
  // State for storing the current search term
  const [searchTerm, setSearchTerm] = useState('');

  // Fetch zodiac data from a local JSON file on component mount
  useEffect(() => {
    fetch('/db.json')
      .then(response => response.json())
      .then(data => setZodiacData(data.zodiacSigns)); // Assuming the data structure is { zodiacSigns: [...] }
  }, []);

  // Filter the zodiacData based on the current searchTerm
  // If searchTerm is empty, it defaults to showing all data
  const filteredZodiacData = searchTerm
    ? zodiacData.filter(zodiac =>
        zodiac.name.toLowerCase().includes(searchTerm.toLowerCase())
      )
    : zodiacData;

  return (
    <div>
      <NavigationBar />
      {/* SearchBar component to update the searchTerm state */}
      <SearchBar onSearch={setSearchTerm} searchTerm={searchTerm} />
      {/* ZodiacSign component to display either all zodiac signs or filtered ones */}
      <ZodiacSign zodiacSigns={filteredZodiacData} />
      <Subscription />
      <CommentSection />
    </div>
  );
};

export default App;
