import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const CommentSection = () => {
  const { sign } = useParams();
  const [comment, setComment] = useState('');
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

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle submitting comment to the database
    console.log('Comment submitted:', comment);
    setComment('');
  };

  const handleOnClick = () => {
    // Add your onClick logic here
    alert('You clicked on the Comment Section.');
  };

  return (
    <div onClick={handleOnClick}>
      {zodiacData ? (
        <div>
          <h2>Comments for {sign}</h2>
          <p><strong>Traits:</strong> {zodiacData.traits}</p>
          <p><strong>Ruling Planet:</strong> {zodiacData.rulingPlanet}</p>
          <p><strong>Element:</strong> {zodiacData.element}</p>
          <p><strong>Symbol:</strong> {zodiacData.symbol}</p>
          <p><strong>Compatibility:</strong> {zodiacData.compatibility}</p>
          <form onSubmit={handleSubmit}>
            <textarea value={comment} onChange={(e) => setComment(e.target.value)} />
            <button type="submit">Submit</button>
          </form>
          {/* Display comments from the database */}
        </div>
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
}

export default CommentSection;
