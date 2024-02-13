import React from 'react';

const ZodiacSign = ({ zodiacSigns }) => {
  return (
    <div>
      {zodiacSigns.map(zodiac => (
        <div key={zodiac.id}>
          <h2>{zodiac.name}</h2>
          <img src={zodiac.imageURL} alt={zodiac.name} />
          <p>{zodiac.description}</p>
        </div>
      ))}
    </div>
  );
}

export default ZodiacSign;
