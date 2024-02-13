import React, { useState, useEffect } from 'react';
import CommentSection from './CommentSection';

const ZodiacSign = () => {
  const [zodiacSigns, setZodiacSigns] = useState([]);
  const [comments, setComments] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/zodiacSigns')
      .then(response => response.json())
      .then(data => setZodiacSigns(data))
      .catch(error => console.error('Error fetching zodiac signs:', error));

    fetch('http://localhost:3000/comments')
      .then(response => response.json())
      .then(data => setComments(data))
      .catch(error => console.error('Error fetching comments:', error));
  }, []);

  return (
    <div>
      {zodiacSigns.map(sign => (
        <div key={sign.id}>
          <h2>{sign.name}</h2>
          <img src={sign.imageURL} alt={sign.name} />
          <p>{sign.description}</p>
          <CommentSection
            comments={comments.filter(comment => comment.zodiacSignId === sign.id)}
          />
        </div>
      ))}
    </div>
  );
};

export default ZodiacSign;
