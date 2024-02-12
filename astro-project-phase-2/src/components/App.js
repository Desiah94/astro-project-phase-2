import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavigationBar from './NavigationBar';
import ZodiacSign from './ZodiacSign';
import CommentSection from './CommentSection';
import Subscription from './Subscription';
import UserAccount from './UserAccount';

function App() {
  return (
    <Router>
      <div>
        <NavigationBar />
        <Routes>
          {/* Routes for individual zodiac signs */}
          <Route path="/zodiac/aries" element={<ZodiacSign sign="Aries" />} />
          <Route path="/zodiac/taurus" element={<ZodiacSign sign="Taurus" />} />
          <Route path="/zodiac/gemini" element={<ZodiacSign sign="Gemini" />} />
          <Route path="/zodiac/cancer" element={<ZodiacSign sign="Cancer" />} />
          <Route path="/zodiac/leo" element={<ZodiacSign sign="Leo" />} />
          <Route path="/zodiac/virgo" element={<ZodiacSign sign="Virgo" />} />
          <Route path="/zodiac/libra" element={<ZodiacSign sign="Libra" />} />
          <Route path="/zodiac/scorpio" element={<ZodiacSign sign="Scorpio" />} />
          <Route path="/zodiac/sagittarius" element={<ZodiacSign sign="Sagittarius" />} />
          <Route path="/zodiac/capricorn" element={<ZodiacSign sign="Capricorn" />} />
          <Route path="/zodiac/aquarius" element={<ZodiacSign sign="Aquarius" />} />
          <Route path="/zodiac/pisces" element={<ZodiacSign sign="Pisces" />} />
          {/* Route for comments section */}
          <Route path="/comments" element={<CommentSection />} />
          {/* Route for subscription page */}
          <Route path="/subscription" element={<Subscription />} />
          {/* Route for user account page */}
          <Route path="/account" element={<UserAccount />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
