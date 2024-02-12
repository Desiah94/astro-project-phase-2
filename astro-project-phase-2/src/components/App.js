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
          {/* Dynamic route for individual zodiac signs */}
          <Route path="/zodiac/:sign" element={<ZodiacSign />} />

          {/* Other static routes */}
          <Route path="/comments" element={<CommentSection />} />
          <Route path="/subscription" element={<Subscription />} />
          <Route path="/account" element={<UserAccount />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
