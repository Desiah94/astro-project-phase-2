// this is App : 
import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import NavigationBar from './NavigationBar';
import ZodiacSign from './ZodiacSign';
import Subscription from './Subscription';
import SearchBar from './SearchBar';
import CommentSection from './CommentSection';

const App = () => {
  const [zodiacData, setZodiacData] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    fetch('/db.json')
      .then(response => response.json())
      .then(data => setZodiacData(data.zodiacSigns));
  }, []);

  const filteredZodiacData = searchTerm
    ? zodiacData.filter(zodiac =>
        zodiac.name.toLowerCase().includes(searchTerm.toLowerCase())
      )
    : zodiacData;

  return (
    <BrowserRouter>
      <div>
        <NavigationBar />
        <nav>
          <Link to="/">Home</Link> |{" "}
          <Link to="/subscription">Subscription</Link> |{" "}
          <Link to="/comments">Comments</Link>
        </nav>
        <Routes>
          <Route path="/" element={
            <>
              <SearchBar onSearch={setSearchTerm} searchTerm={searchTerm} />
              <ZodiacSign zodiacSigns={filteredZodiacData} />
            </>
          } />
          <Route path="/subscription" element={<Subscription />} />
          <Route path="/comments" element={<CommentSection />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;