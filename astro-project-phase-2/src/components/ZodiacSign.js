import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const ZodiacSign = () => {
  const { sign } = useParams();
  const [zodiacData, setZodiacData] = useState(null);

  useEffect(() => {
    // Fetch data for the specific zodiac sign
    fetch(`http://localhost:3001/zodiacSigns?name=${sign}`)
      .then(response => response.json())
      .then(data => {
        // Assuming there's only one zodiac sign with the given name
        // If there are multiple, you may need to handle this differently
        if (data.length > 0) {
          setZodiacData(data[0]);
        } else {
          console.error(`Zodiac sign ${sign} not found.`);
        }
      })
      .catch(error => console.error('Error fetching zodiac data:', error));
  }, [sign]);

  // Dynamic JSX rendering based on the zodiacData state
  return (
    <div>
      {!zodiacData ? (
        <div>Loading...</div>
      ) : (
        <div>
          <h2>{sign}</h2>
          <p><strong>Traits:</strong> {zodiacData.traits}</p>
          <p><strong>Ruling Planet:</strong> {zodiacData.rulingPlanet}</p>
          <p><strong>Element:</strong> {zodiacData.element}</p>
          <p><strong>Symbol:</strong> {zodiacData.symbol}</p>
          <p><strong>Compatibility:</strong> {zodiacData.compatibility}</p>
        </div>
      )}
    </div>
  );
}

export default ZodiacSign;
