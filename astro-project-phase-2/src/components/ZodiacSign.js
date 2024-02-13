// ZodiacSign.js

import React from 'react';
import CommentSection from './CommentSection';
import '../App.css'; // Import the CSS file

const ZodiacSign = ({ zodiacSigns }) => {
  return (
    <div className="zodiac-signs-container">
      {zodiacSigns.map((zodiac) => (
        <div className="zodiac-card" key={zodiac.id}>
          <h2>{zodiac.name}</h2>
          <img src={zodiac.imageURL} alt={zodiac.name} />
          <p>{zodiac.description}</p>
          <CommentSection zodiacSign={zodiac.name} /> {/* Pass the zodiac sign name to CommentSection */}
        </div>
      ))}
    </div>
  );
};

export default ZodiacSign;
