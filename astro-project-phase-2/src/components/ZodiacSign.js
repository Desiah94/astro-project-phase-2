import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const ZodiacSign = () => {
  const { sign } = useParams();
  const [zodiacData, setZodiacData] = useState(null);

  useEffect(() => {
    // Fetch data for the specific zodiac sign
    fetch(`http://localhost:3000/zodiacSigns/${sign}`)
      .then(response => response.json())
      .then(data => setZodiacData(data))
      .catch(error => console.error('Error fetching zodiac data:', error));
  }, [sign]);

  if (!zodiacData) {
    return <div>Loading...</div>;
  }

  const { traits, rulingPlanet, element, symbol, compatibility } = zodiacData;

  return (
    <div>
      <h2>{sign}</h2>
      <p><strong>Traits:</strong> {traits}</p>
      <p><strong>Ruling Planet:</strong> {rulingPlanet}</p>
      <p><strong>Element:</strong> {element}</p>
      <p><strong>Symbol:</strong> {symbol}</p>
      <p><strong>Compatibility:</strong> {compatibility}</p>
    </div>
  );
}

export default ZodiacSign;
